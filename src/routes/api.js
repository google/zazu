/*Copyright 2018 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.*/

const express = require('express');
const router = express.Router();

const BigQuery = require('@google-cloud/bigquery');

const bigquery = new BigQuery();
const async = require('async');
var {google} = require('googleapis');
const {OAuth2Client} = require('google-auth-library');

var User = require('../models/user');
var Organization = require('../models/organization');
var Report = require('../models/report');
var Rule = require('../models/rule');
var Permission = require('../models/permission');

var utils = require('../utilities/utils');
var config = require('../utilities/config');
var log_severity = require('../utilities/log_config');

const {Logging} = require('@google-cloud/logging');
const logging = new Logging({
  projectId: config.bq_instance
});

const log_resource = {
  type: 'logging_sink',
  name: "Zazu logs",
  description: "Sink for all Zazu logs",
  labels: {
    project_id: config.bq_instance
  }
};

const log = logging.log('zazu');

async function logger(endpoint, log_severity, log_message, user_id) {
  const log_entry = log.entry(
    {resource: log_resource},
    {
      endpoint: endpoint,
      severity: log_severity,
      log_message: log_message,
      user_id: user_id
    });
  await log.write(log_entry);
}

var _ = require('lodash');

router.get('/logout', function(req, res) {
  var user_id = req.session.user.id;
  logger('/logout', log_severity.info, 'User logged out', user_id);
  req.session.destroy();
  res.send({ status: '200', message: 'User logged out' });
});

router.get('/getAllUsers', function(req, res) {
  var user_id = req.session.user.id;
  User.find(function(err, docs) {
    if (err) {
      logger('/getAllUsers', log_severity.error, 'User list retrieved error: ' + err.message, user_id);
      res.send({ status: '500', message: 'User list retrieved error: ' + err.message });
    }
    logger('/getAllUsers', log_severity.info, '', user_id);
    res.send(docs);
  });
});

router.get('/getAllUsers/:id', function(req, res) {
  var user_id = req.session.user.id;
  User.findOne({ _id: req.params.id }, function(err, docs) {
    if (err) {
      logger('/getAllUsers/'+req.params.id, log_severity.error, 'User list retrieved error: ' + err.message, user_id);
      res.send({ status: '500', message: 'User list retrieved error: ' + err.message });
    }
    logger('/getAllUsers/'+req.params.id, log_severity.info, '', user_id);
    res.send(docs);
  });
});

router.get('/getUsersByOrganization/:id', function(req, res) {
  var user_id = req.session.user.id;
  var usersByOrg = [];

  User.find(function(err, docs) {
    if (err) {
      logger('/getUsersByOrganization/'+req.params.id, log_severity.error, 'User list retrieved error: ' + err.message, user_id);
      res.send({ status: '500', message: 'User list retrieved error: ' + err.message });
    } else {
      for (var i = 0; i < docs.length; i++) {
        for (var j = 0; j < docs[i].organizations[j]; j++) {
          if (docs[i].organizations[j].id == req.params.id) {
            usersByOrg.push({
              _id: docs[i]._id,
              firstName: docs[i].firstName,
              lastName: docs[i].lastName,
              organizations: docs[i].organizations,
              role: docs[i].role
            });
          }
        }
      }
      logger('/getUsersByOrganization/'+req.params.id, log_severity.info, '', user_id);
      res.send(usersByOrg);
    }
  });
});

router.post('/createNewUser', function(req, res) {
  var user_id = req.session.user.id;
  var newUser = req.body;
  var dataset = bigquery.dataset(config.bq_views_dataset);

  var cloudResourceManager = google.cloudresourcemanager('v1');
  const oAuth2Client = new OAuth2Client();

  oAuth2Client.credentials = {
     access_token: req.session.user.access_token
  };

  var request = {
    resource_: config.bq_instance,
    resource: {},
    auth: oAuth2Client
  };

  cloudResourceManager.projects.getIamPolicy(request, function(err, response) {
      if (err) {
        logger('/createNewUser', log_severity.error, err.message, user_id);
        res.send({ status: '500', message: err.message });
      }
      var roleList = response.data.bindings;

      for (var i = 0; i < roleList.length; i++) {
        if (roleList[i].role == 'roles/bigquery.user') {
          roleList[i].members.push('user:' + newUser.googleID);
        }
      }

      var newPolicy = { "bindings": roleList };

      var newrequest = {
        resource_: config.bq_instance,
        resource: { policy: newPolicy },
        auth: oAuth2Client
      };

      cloudResourceManager.projects.setIamPolicy(newrequest, function(err1, response1) {
        if (err1) {
          logger('/createNewUser', log_severity.error, err1.message, user_id);
          res.send({ status: '500', message: err1.message });
        }

        if (response1.status === 200) {
          dataset.getMetadata().then(function(data) {
              var metadata = data[0];
              var new_accesses = metadata.access;
              var newAccess =     {
                    "role": "READER",
                    "userByEmail": newUser.googleID
                  }
              new_accesses.push(newAccess);
              metadata.access = new_accesses;

              dataset.setMetadata(metadata, function(err1, metadata, apiResponse1) {
                if (err1) {
                  logger('/createNewUser', log_severity.error, err1.message, user_id);
                  res.send({ status: '500', message: err1.message });
                }
                else {

                    User.create(newUser, function(err, results) {
                      var newUserId = results._id;

                      if (err) {
                        logger('/createNewUser', log_severity.error, err.message, user_id);
                        res.send({ status: '500', message: err.message });
                      } else {
                        var addNewUser =
                          'INSERT INTO `' +
                          config.bq_instance +
                          '.' +
                          config.bq_dataset +
                          '.users` (user_id, googleID, role) VALUES ("' +
                          newUserId +
                          '", "' +
                          newUser.googleID +
                          '", "' +
                          newUser.role +
                          '")';

                        bigquery
                          .createQueryStream(addNewUser)
                          .on('error', function(err) {
                            logger('/createNewUser', log_severity.error, err.message, user_id);
                            res.send({ status: '500', message: err.message });
                          })
                          .on('data', function(data) {})
                          .on('end', function() {
                            if (newUser.role === 'admin') {
                              var findAllOrgs =
                                'SELECT organization_id FROM `' +
                                config.bq_instance +
                                '.' +
                                config.bq_dataset +
                                '.vendors`';

                              bigquery
                                .createQueryStream(findAllOrgs)
                                .on('error', function(err) {
                                  logger('/createNewUser', log_severity.error, err.message, user_id);
                                  res.send({ status: '500', message: err.message });
                                })
                                .on('data', function(data) {

                                  Report.find({ organizations : { $elemMatch: { _id: data.organization_id } } }, function(err1, docs1) {
                                      if (err1) {
                                        logger('/createNewUser', log_severity.error, err1.message, user_id);
                                        res.send({ status: '500', message: err1.message });
                                      }
                                      var filesIdList = [];

                                      for (j = 0; j < docs1.length; j++) {
                                        var orgList = docs1[j].organizations;
                                        var file_url = docs1[j].link;
                                        var extract_id = file_url.match(/reporting\/.*\/page/i);
                                        var file_id = extract_id.toString().split('/')[1];

                                        var filesIdList = [file_id];
                                        for (var i = 0; i < docs1[j].datasources.length; i++) {
                                          var datasourcelink = docs1[j].datasources[i].datastudio;
                                          var extract_ds_link = datasourcelink.match(/datasources\/.*/i);
                                          var datasource_id = extract_ds_link.toString().split('/')[1];

                                          filesIdList.push(datasource_id);
                                        }
                                      }

                                      var permsList = [{
                                          'type': 'user',
                                          'role': 'writer',
                                          'emailAddress': newUser.googleID
                                        }];

                                        var createdReport = _.after(filesIdList.length, () => {
                                          res.send({ status: '200', results: results._id });
                                        });

                                        var failed = false;
                                        var failedReport = _.once((scope) => {
                                          if (!scope.failed) {
                                            scope.failed = true;
                                            res.send({status: "500", message: "Sharing report error."});
                                          }
                                        });


                                        for (var j = 0; j < filesIdList.length; j++) {
                                            utils.shareReport(filesIdList[j], permsList, 0, req.session.user.access_token, function(ret) {
                                                  if (ret === 1) {
                                                    failedReport(this);
                                                    logger('/createNewUser', log_severity.error, 'Error sharing report ' + filesIdList[j], user_id);
                                                  }
                                                  else {
                                                    createdReport();
                                                    logger('/createNewUser', log_severity.info, 'Report ' + filesIdList[j] + ' shared successfully', user_id);
                                                  }
                                          });
                                        }

                                      });

                                        var addNewAdminVendor =
                                          'INSERT INTO `' +
                                          config.bq_instance +
                                          '.' +
                                          config.bq_dataset +
                                          '.user_vendor_roles` (user_id, organization_id) VALUES ("' +
                                          newUserId +
                                          '", "' +
                                          data.organization_id +
                                          '")';

                                        bigquery
                                          .createQueryStream(addNewAdminVendor)
                                          .on('error', function(err) {
                                            logger('/createNewUser', log_severity.error, err.message, user_id);
                                            res.send({ status: '500', message: err.message });
                                          })
                                          .on('data', function(data) {})
                                          .on('end', function() {});
                                      })
                                      .on('end', function() {
                                        var orgList = [];

                                        Organization.find(function(err1, docs) {
                                          if (err1) {
                                            logger('/createNewUser', log_severity.error, err1.message, user_id);
                                            res.send({ status: '500', message: err1.message });
                                          } else {
                                            for (var i = 0; i < docs.length; i++) {
                                              orgList.push({ _id: docs[i]._id, name: docs[i].name });
                                            }

                                            User.updateOne(
                                              { _id: newUserId },
                                              { organizations: orgList },
                                              function(err2, res2) {
                                                if (err2) {
                                                  logger('/createNewUser', log_severity.error, err2.message, user_id);
                                                  res.send({ status: '500', message: err2.message });
                                                } else {
                                                  logger('/createNewUser', log_severity.info, '', user_id);
                                                  res.send({ status: '200', userID: newUserId });
                                                }
                                              }
                                            );
                                          }
                                        });
                                      });

                            } else {
                              var findOrgIds =
                                'SELECT organization_id FROM `' +
                                config.bq_instance +
                                '.' +
                                config.bq_dataset +
                                '.vendors` WHERE organization IN (';

                              for (var i = 0; i < newUser.organizations.length - 1; i++) {
                                findOrgIds += '"' + newUser.organizations[i].name + '", ';

                                Organization.updateOne(
                                  { name: newUser.organizations[i].name },
                                  { $inc: { usersCount: 1 } },
                                  function(err1, res1) {
                                    if (err1) {
                                      logger('/createNewUser', log_severity.error, err1.message, user_id);
                                      res.send({ status: '500', message: err1.message });
                                    }
                                  }
                                );
                              }
                              findOrgIds +=
                                '"' +
                                newUser.organizations[newUser.organizations.length - 1].name +
                                '")';
                              Organization.updateOne(
                                {
                                  name:
                                    newUser.organizations[newUser.organizations.length - 1].name
                                },
                                { $inc: { usersCount: 1 } },
                                function(err1, res1) {
                                  if (err1) {
                                    logger('/createNewUser', log_severity.error, err1.message, user_id);
                                    res.send({ status: '500', message: err1.message });
                                  }
                                }
                              );

                              bigquery
                                .createQueryStream(findOrgIds)
                                .on('error', function(err) {
                                  logger('/createNewUser', log_severity.error, err.message, user_id);
                                  res.send({ status: '500', message: err.message });
                                })
                                .on('data', function(data) {
                                  Report.find({ organizations : { $elemMatch: { _id: data.organization_id } } }, function(err1, docs1) {
                                      if (err1) {
                                        logger('/createNewUser', log_severity.error, err1.message, user_id);
                                        res.send({ status: '500', message: err1.message });
                                      }
                                      var filesIdList = [];

                                      for (j = 0; j < docs1.length; j++) {
                                        var orgList = docs1[j].organizations;
                                        var file_url = docs1[j].link;
                                        var extract_id = file_url.match(/reporting\/.*\/page/i);
                                        var file_id = extract_id.toString().split('/')[1];

                                        var filesIdList = [file_id];
                                        for (var i = 0; i < docs1[j].datasources.length; i++) {
                                          var datasourcelink = docs1[j].datasources[i].datastudio;
                                          var extract_ds_link = datasourcelink.match(/datasources\/.*/i);
                                          var datasource_id = extract_ds_link.toString().split('/')[1];

                                          filesIdList.push(datasource_id);
                                        }
                                      }

                                      var permsList = [{
                                          'type': 'user',
                                          'role': 'reader',
                                          'emailAddress': newUser.googleID
                                        }];

                                      var createdReport = _.after(filesIdList.length, () => {
                                          res.send({ status: '200', results: results._id });
                                        });

                                        var failed = false;
                                        var failedReport = _.once((scope) => {
                                          if (!scope.failed) {
                                            scope.failed = true;
                                            res.send({status: "500", message: "Sharing report error."});
                                          }
                                      });


                                      for (var j = 0; j < filesIdList.length; j++) {
                                          utils.shareReport(filesIdList[j], permsList, 0, req.session.user.access_token, function(ret) {
                                                  if (ret === 1) {
                                                    failedReport(this);
                                                    logger('/createNewUser', log_severity.error, 'Error sharing report ' + filesIdList[j], user_id);
                                                  }
                                                  else {
                                                    createdReport();
                                                    logger('/createNewUser', log_severity.info, 'Report ' + filesIdList[j] + ' shared successfully', user_id);
                                                  }
                                          });
                                        }

                                      });
                                        var addNewAdminVendor =
                                          'INSERT INTO `' +
                                          config.bq_instance +
                                          '.' +
                                          config.bq_dataset +
                                          '.user_vendor_roles` (user_id, organization_id) VALUES ("' +
                                          newUserId +
                                          '", "' +
                                          data.organization_id +
                                          '")';

                                        bigquery
                                          .createQueryStream(addNewAdminVendor)
                                          .on('error', function(err) {
                                            logger('/createNewUser', log_severity.error, err.message, user_id);
                                            res.send({ status: '500', message: err.message });
                                          })
                                          .on('data', function(data) {})
                                          .on('end', function() {});
                                      })
                                      .on('end', function() {
                                        logger('/createNewUser', log_severity.info, '', user_id);
                                        res.send({ status: '200', userID: newUserId });
                                      });
                            }
                          });
                      }
                    });
                  }
                });
              });
        }

      });
    });

});

router.post('/deleteUser', function(req, res) {
  var user_id = req.session.user.id;
  var deleteUser = req.body.user;
  var permissions = req.body.permissions;

  User.deleteOne({ _id: deleteUser._id }, function(err, results) {
    if (err) {
      logger('/deleteUser', log_severity.error, err.message, user_id);
      res.send({ status: '500', message: err.message });
    } else {
      var deleteUserQuery =
        'DELETE FROM `' +
        config.bq_instance +
        '.' +
        config.bq_dataset +
        '.users` WHERE user_id = "' +
        deleteUser._id +
        '"';

      bigquery
        .createQueryStream(deleteUserQuery)
        .on('error', function(err) {
          logger('/deleteUser', log_severity.error, err.message, user_id);
          res.send({ status: '500', message: err.message });
        })
        .on('data', function(data) {})
        .on('end', function() {
          var deleteUserVendor =
            'DELETE FROM `' +
            config.bq_instance +
            '.' +
            config.bq_dataset +
            '.user_vendor_roles` WHERE user_id = "' +
            deleteUser._id +
            '"';

          bigquery
            .createQueryStream(deleteUserVendor)
            .on('error', function(err) {
              logger('/deleteUser', log_severity.error, err.message, user_id);
              res.send({ status: '500', message: err.message });
            })
            .on('data', function(data) {})
            .on('end', function() {
              var deleteCurrentVendorView =
                'DELETE FROM `' +
                config.bq_instance +
                '.' +
                config.bq_dataset +
                '.user_current_vendor` WHERE user_id = "' +
                deleteUser._id +
                '"';

              bigquery
                .createQueryStream(deleteCurrentVendorView)
                .on('error', function(err) {
                  logger('/deleteUser', log_severity.error, err.message, user_id);
                  res.send({ status: '500', message: err.message });
                })
                .on('data', function(data) {})
                .on('end', function() {
                  if (deleteUser.role === 'viewer') {
                    for (var i = 0; i < deleteUser.organizations.length; i++) {
                      Organization.updateOne(
                        { _id: deleteUser.organizations[i]._id },
                        { $inc: { usersCount: -1 } },
                        function(err1, res1) {
                          if (err1) {
                            logger('/deleteUser', log_severity.error, err1.message, user_id);
                            res.send({ status: '500', message: err1.message });
                          }
                        }
                      );
                    }
                  }

                  filesIdList = []
                  for (var i = 0; i < permissions.length; i++) {
                    filesIdList.push(permissions[i].fileId);
                  }

                  var deletedReport = _.after(1, () => {
                    res.send({ status: '200', deletedUser: deleteUser._id });
                  });

                  var failed = false;
                  var failedReport = _.once((scope) => {
                    if (!scope.failed) {
                      scope.failed = true;
                      res.send({status: "500", message: "Sharing report error."});
                    }
                  });

                  utils.shareReport(filesIdList, permissions, 1, req.session.user.access_token, function(ret) {
                    if (ret === 1) {
                      failedReport(this);
                      logger('/deleteUser', log_severity.error, 'Error sharing report ' + filesIdList, user_id);
                    }
                    else {
                      deletedReport();
                      logger('/deleteUser', log_severity.info, 'Report ' + filesIdList + ' shared successfully', user_id);
                    }
                  });
                  logger('/deleteUser', log_severity.info, 'Deleted user: ' + deleteUser._id, user_id);

                });
            });
        });
    }
  });
});

router.post('/editUserRemoveOrgs', function(req, res) {
  var user_id = req.session.user.id;
  var oldUser = req.body.oldUser;
  var editUser = req.body.newUser;
  var deleteCount = 0;

  var updateUser = 'UPDATE `' + config.bq_instance + '.' + config.bq_dataset + '.users` SET googleID = "' + editUser.googleID + '" WHERE user_id = "' + editUser._id + '"';

  bigquery
    .createQueryStream(updateUser)
    .on('error', function(err) {
      logger('/editUserRemoveOrgs', log_severity.error, err.message, user_id);
      res.send({ status: '500', message: err.message });
    })
    .on('data', function(data) {})
    .on('end', function() {

      var rmOrgs = [];
      var findOrgIdsToRm = "";

      for (var i = 0; i < oldUser.organizations.length; i++) {
        if (editUser.organizations.indexOf(oldUser.organizations[i]) == -1) {
          rmOrgs.push(oldUser.organizations[i]._id);
        }
      }

      for (var i = 0; i < rmOrgs.length - 1; i++) {
        findOrgIdsToRm += '"' + rmOrgs[i] + '", ';
      }
      findOrgIdsToRm += '"' + rmOrgs[rmOrgs.length - 1] + '"';

      var deleteUserVendor =
            'DELETE FROM `' +
            config.bq_instance +
            '.' +
            config.bq_dataset +
            '.user_vendor_roles` WHERE organization_id in (' +
             findOrgIdsToRm + ') AND user_id = "' + editUser._id +
            '"';

      bigquery
        .createQueryStream(deleteUserVendor)
        .on('error', function(err) {
          logger('/editUserRemoveOrgs', log_severity.error, err.message, user_id);
            res.send({ status: '500', message: err.message });
        })
        .on('data', function(data) {
        })
        .on('end', function() {
            logger('/editUserRemoveOrgs', log_severity.info, '', user_id);
            res.send({ status: '200', message: 'Removed organization access successfully.' });
        })
    });
});

router.post('/editUserAddOrgs', function(req, res) {
  var user_id = req.session.user.id;
  var oldUser = req.body.oldUser;
  var editUser = req.body.newUser;

  var newOrgs = [];
  var findOrgIdsToAdd = "";
  for (var i = 0; i < editUser.organizations.length; i++) {
    if (oldUser.organizations.indexOf(editUser.organizations[i]) == -1) {
      newOrgs.push(editUser.organizations[i].name);
    }
  }

  for (var i = 0; i < newOrgs.length - 1; i++) {
    findOrgIdsToAdd += '"' + newOrgs[i] + '", ';
  }
  findOrgIdsToAdd += '"' + newOrgs[newOrgs.length - 1] + '"';

  var findOrgIds =
      'SELECT organization_id FROM `' +
       config.bq_instance +
       '.' +
       config.bq_dataset +
       '.vendors` WHERE organization IN (' + findOrgIdsToAdd + ')';

        bigquery
          .createQueryStream(findOrgIds)
          .on('error', function(err) {
              logger('/editUserAddOrgs', log_severity.error, err.message, user_id);
              res.send({ status: '500', message: err.message });
          })
          .on('data', function(data) {

              var insertRow =
                  'INSERT INTO `' +
                  config.bq_instance +
                  '.' +
                  config.bq_dataset +
                  '.user_vendor_roles` (user_id, organization_id) VALUES ("' +
                  editUser._id +
                  '","' +
                  data.organization_id +
                  '")';

              bigquery
                  .createQueryStream(insertRow)
                  .on('error', function(err) {
                      logger('/editUserAddOrgs', log_severity.error, err.message, user_id);
                      res.send({ status: '500', message: err.message });
                  })
                  .on('data', function(data) {
                  })
                  .on('end', function() {

                  });
          })
          .on('end', function(){
            User.updateOne({ _id: editUser._id }, editUser, function(err, result) {
              if (err) {
                logger('/editUserAddOrgs', log_severity.error, err.message, user_id);
                res.send({
                  status: '500',
                  message: 'User failed to update: ' + err.message
                });
              }
              logger('/editUserAddOrgs', log_severity.info, '', user_id);
              res.send({ status: '200', results: result });
            });
          });
});

router.get('/getAllOrganizations', function(req, res) {
  var user_id = req.session.user.id;
  Organization.find(function(err, docs) {
    if (err) {
      logger('/getAllOrganizations', log_severity.error, err.message, user_id);
      res.send({
        status: '500',
        message: 'Organization list retrieved error: ' + err.message
      });
    }
    logger('/getAllOrganizations', log_severity.info, '', user_id);
    res.send(docs);
  });
});

router.get('/getAllOrganizationsWithNoDetails', function(req, res) {
  var user_id = req.session.user.id;
  var orgsNoDetails = [];

  Organization.find(function(err, docs) {
    if (err) {
      logger('/getAllOrganizationsWithNoDetails', log_severity.error, err.message, user_id);
      res.send({
        status: '500',
        message: 'Organization list retrieved error: ' + err.message
      });
    }

    for (var i = 0; i < docs.length; i++) {
      orgsNoDetails.push({ _id: docs[i]._id, name: docs[i].name });
    }
    logger('/getAllOrganizationsWithNoDetails', log_severity.info, '', user_id);
    res.send(orgsNoDetails);
  });
});

router.get('/getOrganizationById/:orgid', function(req, res) {
  var user_id = req.session.user.id;
  Organization.findOne({ _id: req.params.orgid }, function(err, docs) {
    if (err) {
      logger('/getOrganizationById/'+req.params.orgid, log_severity.error, err.message, user_id);
      res.send({
        status: '500',
        message: 'Organization list retrieved error: ' + err.message
      });
    }
    logger('/getOrganizationById/'+req.params.orgid, log_severity.info, '', user_id);
    res.send(docs);
  });
});

router.post('/createOrganization', function(req, res) {
  var user_id = req.session.user.id;
  var newOrg = req.body;
  newOrg.reportsCount = 0;
  newOrg.usersCount = 0;
  newOrg.datarulesCount = 0;

  Organization.create(newOrg, function(err, results) {
    var newOrgId = results._id;

    if (err) {
      logger('/createOrganization', log_severity.error, err.message, user_id);
      res.send({ status: '500', message: err.message });
    } else {
      var insertRow =
        'INSERT INTO `' +
        config.bq_instance +
        '.' +
        config.bq_dataset +
        '.vendors` (organization_id, organization) VALUES ("' +
        newOrgId +
        '","' +
        newOrg.name +
        '")';

      bigquery
        .createQueryStream(insertRow)
        .on('error', function(err) {
          logger('/createOrganization', log_severity.error, err.message, user_id);
          res.send({ status: '500', message: 'Creating new organization failed: ' + err.message });
        })
        .on('data', function(data) {})
        .on('end', function() {
          var retailerIdList = [];
          var getRetailerIds =
            'SELECT user_id FROM `' +
            config.bq_instance +
            '.' +
            config.bq_dataset +
            '.users` WHERE role = "admin"';

          bigquery
            .createQueryStream(getRetailerIds)
            .on('error', function(err) {
              logger('/createOrganization', log_severity.error, err.message, user_id);
              res.send({ status: '500', message: 'Creating new organization failed: ' + err.message });
            })
            .on('data', function(data) {
              var user_id = data.user_id;
              var addRetailerAccesses =
                'INSERT INTO `' +
                config.bq_instance +
                '.' +
                config.bq_dataset +
                '.user_vendor_roles` (user_id, organization_id) VALUES ("' +
                user_id +
                '", "' +
                newOrgId +
                '")';

              bigquery
                .createQueryStream(addRetailerAccesses)
                .on('error', function(err) {
                  logger('/createOrganization', log_severity.error, err.message, user_id);
                  res.send({ status: '500', message: 'Creating new organization failed: ' + err.message });
                })
                .on('data', function(data) {})
                .on('end', function() {
                  User.updateOne(
                    { _id: user_id },
                    {
                      $push: {
                        organizations: { _id: newOrgId, name: newOrg.name }
                      }
                    },
                    function(err, res1) {
                      if (err) {
                        logger('/createOrganization', log_severity.error, err.message, user_id);
                        res.send({ status: '500', message: 'Creating new organization failed: ' + err.message });
                      }
                    }
                  );
                });
            })
            .on('end', function() {
              logger('/createOrganization', log_severity.info, '', user_id);
              res.send({ status: '200', orgID: newOrgId });
            });
        });
    }
  });
});

router.post('/deleteOrganization', function(req, res) {
  var user_id = req.session.user.id;
  var orgDelete = req.body;

  Organization.deleteOne({ _id: orgDelete._id }, function(err, results) {
    if (err) {
      logger('/createOrganization', log_severity.error, err.message, user_id);
      res.send({ status: '500', message: 'Deleting the organization failed: ' + err.message });
    } else {
      var delOrg =
        'DELETE FROM `' +
        config.bq_instance +
        '.' +
        config.bq_dataset +
        '.vendors` WHERE organization_id = "' +
        orgDelete._id +
        '"';

      bigquery
        .createQueryStream(delOrg)
        .on('error', function(err) {
          logger('/createOrganization', log_severity.error, err.message, user_id);
          res.send({ status: '500', message: 'Deleting the organization failed: ' + err.message });
        })
        .on('data', function(data) {})
        .on('end', function() {
          var delCurrentVendorView =
            'DELETE FROM `' +
            config.bq_instance +
            '.' +
            config.bq_dataset +
            '.user_current_vendor` WHERE organization_id = "' +
            orgDelete._id +
            '"';

          bigquery
            .createQueryStream(delCurrentVendorView)
            .on('error', function(err) {
              logger('/createOrganization', log_severity.error, err.message, user_id);
              res.send({ status: '500', message: 'Deleting the organization failed: ' + err.message });
            })
            .on('data', function(data) {})
            .on('end', function() {
              var delUserVendor =
                'DELETE FROM `' +
                config.bq_instance +
                '.' +
                config.bq_dataset +
                '.user_vendor_roles` WHERE organization_id = "' +
                orgDelete._id +
                '"';

              bigquery
                .createQueryStream(delUserVendor)
                .on('error', function(err) {
                  logger('/createOrganization', log_severity.error, err.message, user_id);
                  res.send({ status: '500', message: 'Deleting the organization failed: ' + err.message });
                })
                .on('data', function(data) {})
                .on('end', function() {

                  User.updateMany(
                    {
                      organizations: {
                        $elemMatch: { _id: orgDelete._id, name: orgDelete.name }
                      }
                    },
                    {
                      $pull: {
                        organizations: {
                          _id: orgDelete._id,
                          name: orgDelete.name
                        }
                      }
                    },
                    function(err, res1) {
                      if (err) {
                        logger('/createOrganization', log_severity.error, err.message, user_id);
                        res.send({ status: '500', message: 'Deleting the organization failed: ' + err.message });
                      } else {

                          Rule.find({ organization: { name: orgDelete.name, _id: orgDelete._id } }, function(err3, res3) {
                            if (err3) {
                              logger('/createOrganization', log_severity.error, err3.message, user_id);
                              res.send({ status: '500', message: 'Deleting the organization failed: ' + err3.message });
                            }

                            if (res3.length == 0) {
                              logger('/createOrganization', log_severity.info, '', user_id);
                              res.send({ status: '200', orgID: orgDelete._id });
                            }

                            for (var i = 0; i < res3.length; i++) {
                              var curr_rule = res3[i];

                              var updateRow = utils.buildPermissionsQuery(
                                config.bq_instance,
                                config.bq_client_dataset,
                                config.bq_client_data_perms,
                                [''],
                                res3[i].identifier.name,
                                res3[i].identifier.identifierType,
                                res3[i].condition,
                                res3[i].token
                              );

                              bigquery
                                .createQueryStream(updateRow)
                                .on('error', function(err) {
                                  logger('/createOrganization', log_severity.error, err.message, user_id);
                                  res.send({ status: '500', message: 'Deleting the organization failed: ' + err.message });
                                })
                                .on('data', function(data) {})
                                .on('end', function() {
                                  Rule.deleteOne({ _id: curr_rule._id }, function(err, results) {
                                    if (err) {
                                      logger('/createOrganization', log_severity.error, err.message, user_id);
                                      res.send({ status: '500', message: 'Deleting the organization failed: ' + err.message });
                                    }
                                    if (i === res3.length) {
                                      logger('/createOrganization', log_severity.info, '', user_id);
                                      res.send({ status: '200', orgID: orgDelete._id });
                                    }
                                  });
                                });
                            }
                          });
                      }
                    }
                  );
                });
            });
        });
    }
  });
});

router.post('/editOrganization', function(req, res) {
  var user_id = req.session.user.id;
  var editOrg = req.body;

  var updateOrg = 'UPDATE `' + config.bq_instance + '.' + config.bq_dataset + '.vendors` SET organization = "' + editOrg.name + '" WHERE organization_id = "' + editOrg._id + '"';

  bigquery
    .createQueryStream(updateOrg)
    .on('error', function(err) {
      logger('/editOrganization', log_severity.error, err.message, user_id);
      res.send({ status: '500', message: 'Editing the organization failed: ' + err.message });
    })
    .on('data', function(data) {})
    .on('end', function() {
      Organization.updateOne({ _id : editOrg._id }, editOrg, function(err, result) {
        if (err) {
          logger('/editOrganization', log_severity.error, err.message, user_id);
          res.send({ status: '500', message: 'Editing the organization failed: ' + err.message });
        } else {
          logger('/editOrganization', log_severity.info, '', user_id);
          res.send({ status: '200', result: result });
        }
      });
    });
});

router.get('/getAllReports', function(req, res) {
  var user_id = req.session.user.id;
  Report.find(function(err, docs) {
    if (err) {
      logger('/getAllReports', log_severity.error, err.message, user_id);
      res.send({ status: '500', message: 'Report list retrieval error: ' + err.message });
    } else {
      logger('/getAllReports', log_severity.info, '', user_id);
      res.send(docs);
    }
  });
});

router.get('/getAllReports/:id', function(req, res) {
  var user_id = req.session.user.id;
  Report.findOne({ _id: req.params.id }, function(err, docs) {
    if (err) {
      logger('/getAllReports/'+req.params.id, log_severity.error, err.message, user_id);
      res.send({ status: '500', message: 'Report list retrieval error: ' + err.message });
    }
    logger('/getAllReports/'+req.params.id, log_severity.info, '', user_id);
    res.send(docs);
  });
});

router.get('/getReportByOrganization/:id', function(req, res) {
  var user_id = req.session.user.id;
  var reportsByOrg = [];

  Report.find(function(err, docs) {
    if (err) {
      logger('/getReportByOrganization/'+req.params.id, log_severity.error, err.message, user_id);
      res.send({ status: '500', message: 'Report list retrieval error: ' + err.message });
    } else {
      for (var i = 0; i < docs.length; i++) {
        for (var j = 0; j < docs[i].organizations.length; j++) {
          if (docs[i].organizations[j]._id === req.params.id) {
            reportsByOrg.push(docs[i]);
          }
        }
      }
      logger('/getReportByOrganization/'+req.params.id, log_severity.info, '', user_id);
      res.send(reportsByOrg);
    }
  });
});

router.get('/getReportByUser/:id', function(req, res) {
  var user_id = req.session.user.id;
  var reportsByUser = [];
  User.find({ _id: req.params.id }, function(err, docs) {
    if (err) {
      logger('/getReportByUser/'+req.params.id, log_severity.error, err.message, user_id);
      res.send({ status: '500', message: 'User retrieval error: ' + err.message });
    } else {
      var userOrgList = docs[0].organizations;

      Report.find(function(err, reports) {
        if (err) {
          logger('/getReportByUser/'+req.params.id, log_severity.error, err.message, user_id);
          res.send({ status: '500', message: 'Report list retrieval error: ' + err.message });
        } else {
          for (var i = 0; i < reports.length; i++) {
            for (var k = 0; k < reports[i].organizations.length; k++) {
              for (var j = 0; j < userOrgList.length; j++) {
                if ((userOrgList[j]._id == reports[i].organizations[k]._id)&&(reportsByUser.indexOf(reports[i]) == -1)) {
                  reportsByUser.push(reports[i]);
                }
              }
            }
          }
          logger('/getReportByUser/'+req.params.id, log_severity.info, '', user_id);
          res.send(reportsByUser);
        }
      });
    }
  });
});

router.post('/initGhost', function(req, res) {
  var user_id = req.session.user.id;

  var currentUser = req.session.user.id;
  var orgObj = req.body;
  var viewExists = "-1";

  var findViewRow = 'SELECT organization_id FROM `' + config.bq_instance + '.' + config.bq_dataset + '.user_current_vendor` WHERE user_id = "' + currentUser + '"';

  bigquery.createQueryStream(findViewRow)
    .on('error', function(err) {
        logger('/getReportByUser', log_severity.error, err.message, user_id);
        res.send({status: "500", message: 'Ghost view initialization failed: ' + err.message });
    })
    .on('data', function(row) {

      viewExists = row.organization_id;

    })
    .on('end', function() {

      if (viewExists == "-1") {
        var insertOrUpdateView = 'INSERT INTO `' + config.bq_instance + '.' + config.bq_dataset + '.user_current_vendor` (user_id, organization_id) VALUES ("' + currentUser + '", "' + orgObj._id + '")';
      }
      else {
        var insertOrUpdateView = 'UPDATE `' + config.bq_instance + '.' + config.bq_dataset + '.user_current_vendor` SET organization_id = "' + orgObj._id + '" WHERE user_id = "' + currentUser + '"';
      }

      bigquery.createQueryStream(insertOrUpdateView)
        .on('error', function(err) {
          logger('/getReportByUser', log_severity.error, err.message, user_id);
          res.send({status: "500", message: 'Ghost view initialization failed: ' + err.message });
        })
        .on('data', function(data) {

        })
        .on('end', function() {
            logger('/getReportByUser', log_severity.info, '', user_id);
            res.send({ status: "200", message: "Successfully changed view."});
        });
      });
});

router.post('/createReport', function(req, res) {
  var user_id = req.session.user.id;
  var newReport = req.body;
  newReport.createdBy = req.session.user.id;
  newReport.created_at = new Date();

  var orgList = newReport.organizations;
  var file_url = newReport.link;
  var extract_id = file_url.match(/reporting\/.*\/page/i);

  if (extract_id === null) {
    logger('/createReport', log_severity.error, 'Report creation error', user_id);
    res.send({ status: '500', message: 'Report creation error.' });
    return;
  }
  var file_id = extract_id.toString().split('/')[1];

  Report.find({ link: { $regex: "/*" + file_id + "*/" } }, function(err1, docs1){
    if (err1) {
      res.send({ status: '500', message: 'Report creation error: ' + err1.message });
    }

    if (docs1.length == 0) {

      var filesIdList = [file_id];
      for (var i = 0; i < newReport.datasources.length; i++) {
        var datasourcelink = newReport.datasources[i].datastudio;
        var extract_ds_link = datasourcelink.match(/datasources\/.*/i);

        if (extract_ds_link === null) {
          res.send({ status: '500', message: 'Report creation error.' });
          return;
        }
        var datasource_id = extract_ds_link.toString().split('/')[1];

        filesIdList.push(datasource_id);
      }

      Report.create(newReport, function(err, results) {
        if (err) {
          res.send({ status: '500', message: 'Report creation error: ' + err.message });
        } else {

          User.find(function(err1, docs) {
            if (err1) {
              res.send({ status: '500', message: 'User retrieval error: ' + err1.message });
            }
            var permsList = [];

            for (var i = 0; i < docs.length; i++) {
                for (var j = 0; j < orgList.length; j++) {
                  for (var k = 0; k < docs[i].organizations.length; k++) {
                      if ((orgList[j]._id === docs[i].organizations[k]._id)&&(docs[i]._id.toString() !== req.session.user.id)) {
                        if (docs[i].role === 'admin') {
                          permsList.push({
                              'type': 'user',
                              'role': 'writer',
                              'emailAddress': docs[i].googleID
                            });
                        }
                        else {
                          permsList.push({
                              'type': 'user',
                              'role': 'reader',
                              'emailAddress': docs[i].googleID
                            });
                        }

                      }
                  }
                }
              }

           for (var i = 0; i < newReport.organizations.length; i++) {
                Organization.updateOne({ _id: newReport.organizations[i]._id }, { $inc: { reportsCount: 1 } }, function(err1, res1) {
                  if (err1) {
                    res.send({ status: '500', message: 'Editing organization failed: ' + err1.message });
                  }
                });
            }

           var createdReport = _.after(filesIdList.length, () => {
             res.send({ status: '200', results: results._id });
           });

           var failed = false;
           var failedReport = _.once((scope) => {
             if (!scope.failed) {
               scope.failed = true;
               res.send({status: "500", message: "Sharing report error."});
             }
           });

           for (var j = 0; j < filesIdList.length; j++) {
                utils.shareReport(filesIdList[j], permsList, 0, req.session.user.access_token, function(ret) {
                        if (ret === 1) {
                          failedReport(this);
                          logger('/createNewUser', log_severity.error, 'Error sharing report ' + filesIdList[j], user_id);
                        }
                        else {
                          createdReport();
                          logger('/createNewUser', log_severity.info, 'Report ' + filesIdList[j] + ' shared successfully', user_id);
                        }
                });
              }
          });
        }
      });
    }
    else {
      res.send({ status: '500', message: 'Report creation error: The report already exists in the system. Share instead.' });
    }
  });

});

router.post('/getPermissionsToRevokeUser', function(req, res) {
    var user_id = req.session.user.id;
    var user = req.body;

    Permission.find({ googleID: user.googleID }, function(err, docs) {
      if (err) {
        logger('/getPermissionsToRevokeUser', log_severity.error, err.message, user_id);
        res.send({ status: '500', message: 'Retrieving permissions to revoke failed: ' + err.message });
      }
      logger('/getPermissionsToRevokeUser', log_severity.info, '', user_id);
      res.send({ status: '200', permissions: docs });
    });
});

router.post('/getPermissionsToRevoke', function(req, res) {
  var user_id = req.session.user.id;
  var report = req.body.report;

  var permsList = [];
  var filePermsList = [];
  var file_url = report.link;
  var extract_id = file_url.match(/reporting\/.*\/page/i);
  var file_id = extract_id.toString().split('/')[1];

  var filesIdList = [file_id];
  for (var i = 0; i < report.datasources.length; i++) {
    var datasourcelink = report.datasources[i].datastudio;
    var extract_ds_link = datasourcelink.match(/datasources\/.*/i);
    var datasource_id = extract_ds_link.toString().split('/')[1];

    filesIdList.push(datasource_id);
  }

  if (req.body.users) {

    var usersToRevoke = req.body.users;
    var orgList = [];
  }
  else {
    var usersToRevoke = [];
    var orgList = report.organizations;
  }

  User.find(function(err1, docs) {
    if (err1) {
      logger('/getPermissionsToRevoke', log_severity.error, err1.message, user_id);
      res.send({ status: '500', message: 'User list retrieval failed: ' + err1.message });
    }

    if (usersToRevoke.length === 0) {
      for (var i = 0; i < docs.length; i++) {
          for (var j = 0; j < orgList.length; j++) {
            for (var k = 0; k < docs[i].organizations.length; k++) {

              if ((orgList[j]._id === docs[i].organizations[k]._id)&&(docs[i]._id.toString() !== req.session.user.id)) {
                  usersToRevoke.push(docs[i].googleID);
               }
            }
          }
      }
    }

    Permission.find({ fileId: { $in: filesIdList }, googleID: { $in: usersToRevoke } }, function(err, docs) {

      if (err) {
        logger('/getPermissionsToRevoke', log_severity.error, err.message, user_id);
        res.send({ status: '500', message: 'Retrieving permissions to revoke failed: ' + err.message });
      }
      for (var l = 0; l < docs.length; l++) {
        permsList.push(docs[l]);
      }
      logger('/getPermissionsToRevoke', log_severity.info, '', user_id);
      res.send({ status: '200', permissions: permsList });
    });
  });

});

router.post('/getPermissionsToRevokeOrg', function(req, res) {
  var user_id = req.session.user.id;
  var reports = req.body.reports;
  var user = req.body.users;

  var permsList = [];
  var filePermsList = [];

  for (var j = 0; j < reports.length; j++) {
    var file_url = reports[j].link;
    var extract_id = file_url.match(/reporting\/.*\/page/i);
    var file_id = extract_id.toString().split('/')[1];

    var filesIdList = [file_id];
    for (var i = 0; i < reports[j].datasources.length; i++) {
      var datasourcelink = reports[j].datasources[i].datastudio;
      var extract_ds_link = datasourcelink.match(/datasources\/.*/i);
      var datasource_id = extract_ds_link.toString().split('/')[1];

      filesIdList.push(datasource_id);
    }
  }

    Permission.find({ fileId: { $in: filesIdList }, googleID: user.googleID }, function(err, docs) {

      if (err) {
        logger('/getPermissionsToRevokeOrg', log_severity.error, err.message, user_id);
        res.send({ status: '500', message: 'Retrieving permissions to revoke failed: ' + err.message });
      }
      for (var l = 0; l < docs.length; l++) {
        permsList.push(docs[l]);
      }
      logger('/getPermissionsToRevokeOrg', log_severity.info, '', user_id);
      res.send({ status: '200', permissions: permsList });
    });

});

router.post('/deleteReport', function(req, res) {
  var user_id = req.session.user.id;
  var deleteReport = req.body.report;
  var permissions = req.body.permissions;
  var filePermsList = [];

  var orgList = deleteReport.organizations;
      var file_url = deleteReport.link;
      var extract_id = file_url.match(/reporting\/.*\/page/i);
      var file_id = extract_id.toString().split('/')[1];

      var filesIdList = [file_id];
      for (var i = 0; i < deleteReport.datasources.length; i++) {
        var datasourcelink = deleteReport.datasources[i].datastudio;
        var extract_ds_link = datasourcelink.match(/datasources\/.*/i);
        var datasource_id = extract_ds_link.toString().split('/')[1];

        filesIdList.push(datasource_id);
      }

      var deletedReport = _.after(1, (deleteReport) => {
        Report.deleteOne(deleteReport, function(err, results) {
          if (err) {
            res.send({ status: '500', message: 'Deleting the report failed: ' + err.message });
          } else {

            var deleteReportOrgIds = [];
            for (var i = 0; i < deleteReport.organizations.length; i++) {
                deleteReportOrgIds.push(deleteReport.organizations[i]._id);
            }
            Organization.update(
                  { _id: { $in: deleteReportOrgIds } },
                  { $inc: { reportsCount: -1 } },
                  function(err1, res1) {
                    if (err1) {
                      res.send({ status: '500', message: 'Editing the organization failed: ' + err1.message });
                    } else {
                      res.send({ status: '200', results: results._id });
                    }
                  }
                );

          }
        });
      });

      var failed = false;
      var failedReport = _.once((scope) => {
        if (!scope.failed) {
          scope.failed = true;
          res.send({status: "500", message: "Sharing report error."});
        }
      });
      utils.shareReport(filesIdList, permissions, 1, req.session.user.access_token, function(ret) {
          if (ret === 1) {
            failedReport(this);
            logger('/deleteReport', log_severity.error, 'Error sharing report ' + filesIdList, user_id);
          }
          else {
            deletedReport(deleteReport);
            logger('/deleteReport', log_severity.info, 'Report ' + filesIdList + ' shared successfully', user_id);
          }
      });
});

router.post('/unshareReport', function(req, res) {
  var user_id = req.session.user.id;
  var unshareReports = req.body.reports;
  var permissions = req.body.permissions;
  var org = req.body.organization;
  var removedOrganizations = req.body.removedOrganizations;
  var filePermsList = [];

  for (var j = 0; j < unshareReports.length; j++) {
    var orgList = unshareReports[j].organizations;
    var file_url = unshareReports[j].link;
    var extract_id = file_url.match(/reporting\/.*\/page/i);
    var file_id = extract_id.toString().split('/')[1];

    var filesIdList = [file_id];
    for (var i = 0; i < unshareReports[j].datasources.length; i++) {
      var datasourcelink = unshareReports[j].datasources[i].datastudio;
      var extract_ds_link = datasourcelink.match(/datasources\/.*/i);
      var datasource_id = extract_ds_link.toString().split('/')[1];

      filesIdList.push(datasource_id);
    }
  }

  var createdReport = _.after(filesIdList.length, () => {
    logger('/unshareReport', log_severity.error, 'Report unsharing succeeded', user_id);
    res.send({ status: '200', results: results._id });
  });

  var failed = false;
  var failedReport = _.once((scope) => {
    if (!scope.failed) {
      scope.failed = true;
      res.send({status: "500", message: "Sharing report error."});
    }
  });

  if (req.body.organization) {
    Organization.updateOne(
          { _id: org._id },
          { $inc: { reportsCount: -1 } },
          function(err1, res1) {
            if (err1) {
              logger('/unshareReport', log_severity.error, err1.message, user_id);
              res.send({ status: '500', message: 'Editing the organization failed: ' + err1.message });
            }

            var unshareReportIds = [];
            for (var j = 0; j < unshareReports.length; j++) {
              unshareReportIds.push(unshareReports[j]._id);
            }

            Report.update({ _id: { $in: unshareReportIds } }, { $pull: { organizations: org  } }, function(err2, res2) {
                if (err2) {
                  logger('/unshareReport', log_severity.error, err2.message, user_id);
                  res.send({ status: '500', message: 'Editing the report failed: ' + err2.message });
                }
              });
            logger('/unshareReport', log_severity.info, 'Report unsharing succeeded', user_id);
            if (permissions.length > 0) {
              utils.shareReport(filesIdList, permissions, 1, req.session.user.access_token, function(ret) {
                if (ret === 1) {
                  failedReport(this);
                  logger('/createNewUser', log_severity.error, 'Error sharing report ' + filesIdList, user_id);
                }
                else {
                  createdReport();
                  logger('/createNewUser', log_severity.info, 'Report ' + filesIdList + ' shared successfully', user_id);
                }
              });

            }
          }
        );
  }
  else if (req.body.removedOrganizations) {

    var removedOrganizationIds = [];
    for (var i = 0; i < removedOrganizations.length; i++) {
      removedOrganizationIds.push(removedOrganizations[i]._id);
    }

    Organization.update(
            { _id: { $in: removedOrganizationIds } },
            { $inc: { usersCount: -1 } },
            function(err1, res1) {
              if (err1) {
                logger('/unshareReport', log_severity.error, err1.message, user_id);
                res.send({ status: '500', message: 'Editing the organization failed: ' + err1.message });
              }
              if (permissions.length > 0) {
                utils.shareReport(filesIdList, permissions, 1, req.session.user.access_token, function(ret) {
                  if (ret === 1) {
                    failedReport(this);
                    logger('/createNewUser', log_severity.error, 'Error sharing report ' + filesIdList, user_id);
                  }
                  else {
                    createdReport();
                    logger('/createNewUser', log_severity.info, 'Report ' + filesIdList + ' shared successfully', user_id);
                  }
                });

              }
            });

  }

});

router.post('/editReport', function(req, res) {
  var user_id = req.session.user.id;
  var oldReport = req.body.oldReport;
  var newReport = req.body.newReport;

  Report.updateOne({ _id: oldReport._id }, newReport, function(err, results) {
    if (err) {
      logger('/editReport', log_severity.error, err.message, user_id);
      res.send({status: "500", message: 'Editing the report failed: ' + err.message });
    }
    logger('/editReport', log_severity.info, 'Report edited successfully', user_id);
    res.send({status: "200", message: "Report edit succeeded." });
  });

});

router.post('/shareReport', function(req, res) {
  var user_id = req.session.user.id;
  var reportsToShare = req.body.reports;
  var orgToShare = req.body.organization;
  var addedOrganizations = req.body.addedOrganizations;

  for (var j = 0; j < reportsToShare.length; j++) {
    var orgList = reportsToShare[j].organizations;
    var file_url = reportsToShare[j].link;
    var extract_id = file_url.match(/reporting\/.*\/page/i);
    var file_id = extract_id.toString().split('/')[1];

    var filesIdList = [file_id];
    for (var i = 0; i < reportsToShare[j].datasources.length; i++) {
      var datasourcelink = reportsToShare[j].datasources[i].datastudio;
      var extract_ds_link = datasourcelink.match(/datasources\/.*/i);
      var datasource_id = extract_ds_link.toString().split('/')[1];

      filesIdList.push(datasource_id);
    }
  }

  if (req.body.organization) {
    User.find(function(err1, docs) {
      if (err1) {
        logger('/shareReport', log_severity.error, err1.message, user_id);
        res.send({ status: '500', message: 'User list retrieval failed: ' + err1.message });
      }
      var permsList = [];

      for (var i = 0; i < docs.length; i++) {
        for (var k = 0; k < docs[i].organizations.length; k++) {
                if ((orgToShare._id === docs[i].organizations[k]._id)&&(docs[i]._id.toString() !== req.session.user.id)) {
                  if (docs[i].role === 'admin') {
                    permsList.push({
                        'type': 'user',
                        'role': 'writer',
                        'emailAddress': docs[i].googleID
                      });
                  }
                  else {
                    permsList.push({
                        'type': 'user',
                        'role': 'reader',
                        'emailAddress': docs[i].googleID
                      });
                  }

                }
        }
      }

      var createdReport = _.after(filesIdList.length, () => {
        Organization.updateOne({ _id: orgToShare._id }, { $inc: { reportsCount: 1 } }, function(err1, res1) {
          if (err1) {
            logger('/shareReport', log_severity.error, err1.message, user_id);
            res.send({ status: '500', message: 'Editing the organization failed: ' + err1.message });
          }

          Report.updateOne({ _id: reportsToShare[0]._id }, {   $push: { organizations: { _id: orgToShare._id, name: orgToShare.name } } }, function(err2, res2) {
            if (err2) {
              logger('/shareReport', log_severity.error, err2.message, user_id);
              res.send({ status: '500', message: 'Editing the report failed: ' + err2.message });
            }
            logger('/shareReport', log_severity.error, 'Report shared successfully', user_id);
            res.send({ status: '200', results: results._id });

          });

        });
      });

      var failed = false;
      var failedReport = _.once((scope) => {
        if (!scope.failed) {
          scope.failed = true;
          res.send({status: "500", message: "Sharing report error."});
        }
      });

      for (var j = 0; j < filesIdList.length; j++) {
          utils.shareReport(filesIdList[j], permsList, 0, req.session.user.access_token, function(ret) {
                  if (ret === 1) {
                    failedReport(this);
                    logger('/createNewUser', log_severity.error, 'Error sharing report ' + filesIdList[j], user_id);
                  }
                  else {
                    createdReport();
                    logger('/createNewUser', log_severity.info, 'Report ' + filesIdList[j] + ' shared successfully', user_id);
                  }
          });
      }

    });
  }
  else if (req.body.user) {

    var user = req.body.user;
    if (user.role === 'admin') {
      var permsList = [{
          'type': 'user',
          'role': 'writer',
          'emailAddress': user.googleID
        }];
    }
    else {
      var permsList = [{
          'type': 'user',
          'role': 'reader',
          'emailAddress': user.googleID
        }];
    }

    var addedOrganizationIds = [];
    for (var i = 0; i < addedOrganizations.length; i++) {
      addedOrganizationIds.push(addedOrganizations[i]._id);
    }

    var createdReport = _.after(filesIdList.length, () => {
      res.send({ status: '200', results: results._id });
    });

    var failed = false;
    var failedReport = _.once((scope) => {
      if (!scope.failed) {
        scope.failed = true;
        res.send({status: "500", message: "Sharing report error."});
      }
    });

    Organization.update(
            { _id: { $in: addedOrganizationIds } },
            { $inc: { usersCount: -1 } },
            function(err1, res1) {
              if (err1) {
                logger('/shareReport', log_severity.error, err1.message, user_id);
                res.send({ status: '500', message: err1.message });
              } else {
                  for (var j = 0; j < filesIdList.length; j++) {
                        utils.shareReport(filesIdList[j], permsList, 0, req.session.user.access_token, function(ret) {
                                if (ret === 1) {
                                  failedReport(this);
                                  logger('/createNewUser', log_severity.error, 'Error sharing report ' + filesIdList[j], user_id);
                                }
                                else {
                                  createdReport();
                                  logger('/createNewUser', log_severity.info, 'Report ' + filesIdList[j] + ' shared successfully', user_id);
                                }
                        });
                  }
              }
    });

  }

});

router.get('/getDataRules/:orgid', function(req, res) {
  var user_id = req.session.user.id;
  var rulesByOrg = [];

  Rule.find(function(err, docs) {
    if (err) {
      logger('/getDataRules/'+req.params.orgid, log_severity.error, err.message, user_id);
      res.send({ status: '500', message: 'Rule list retrieved error.' });
    } else {
      for (var i = 0; i < docs.length; i++) {
        if (docs[i].organization._id == req.params.orgid) {
          rulesByOrg.push(docs[i]);
        }
      }
      logger('/getDataRules/'+req.params.orgid, log_severity.info, '', user_id);
      res.send(rulesByOrg);
    }
  });
});

router.post('/createRule', (req, res) => {
  var user_id = req.session.user.id;
  var newRule = req.body;
  newRule.created_at = new Date();

  var updateRow = utils.buildPermissionsQuery(
    config.bq_instance,
    config.bq_client_dataset,
    config.bq_client_data_perms,
    [newRule.organization._id],
    newRule.identifier.name,
    newRule.identifier.identifierType,
    newRule.condition,
    newRule.token
  );

  bigquery
    .createQueryStream(updateRow)
    .on('error', function(err) {
      logger('/createRule', log_severity.error, err.message, user_id);
      res.send({ status: '500', message: err.message });
    })
    .on('data', function(data) {})
    .on('end', function() {
      Rule.create(newRule, function(err, results) {
        if (err) {
          logger('/createRule', log_severity.error, err.message, user_id);
          res.send({ status: '500', message: err.message });
        }
        Organization.updateOne(
          { _id: newRule.organization._id },
          { $inc: { datarulesCount: 1 } },
          function(err1, res1) {
            if (err1) {
              logger('/createRule', log_severity.error, err1.message, user_id);
              res.send({ status: '500', message: err1.message });
            } else {
              logger('/createRule', log_severity.info, 'Rule creation succeeded', user_id);
              res.send({
                status: '200',
                message: 'Rule creation succeeded.',
                results: results
              });
            }
          }
        );
      });
    });
});

router.post('/deleteRule', (req, res) => {
  var user_id = req.session.user.id;
  var delRule = req.body;
  var updateRow = utils.buildPermissionsQuery(
    config.bq_instance,
    config.bq_client_dataset,
    config.bq_client_data_perms,
    [''],
    delRule.identifier.name,
    delRule.identifier.identifierType,
    delRule.condition,
    delRule.token
  );

  bigquery
    .createQueryStream(updateRow)
    .on('error', function(err) {
      logger('/deleteRule', log_severity.error, err.message, user_id);
      res.send({ status: '500', message: err.message });
    })
    .on('data', function(data) {})
    .on('end', function() {
      Rule.deleteOne({ _id: delRule._id }, function(err, results) {
        if (err) {
          logger('/deleteRule', log_severity.error, err.message, user_id);
          res.send({ status: '500', message: err.message });
        }
        Organization.updateOne(
          { _id: delRule.organization._id },
          { $inc: { datarulesCount: -1 } },
          function(err1, res1) {
            if (err1) {
              logger('/deleteRule', log_severity.error, err1.message, user_id);
              res.send({ status: '500', message: err1.message });
            } else {
              logger('/deleteRule', log_severity.info, 'Rule deletion succeeded', user_id);
              res.send({
                status: '200',
                message: 'Rule deletion succeeded.',
                results: results
              });
            }
          }
        );
      });
    });
});

router.post('/editRule', (req, res) => {
  var user_id = req.session.user.id;
  var oldRule = req.body.oldRule;
  var newRule = req.body.newRule;

  var updateRow = utils.buildPermissionsQuery(config.bq_instance, config.bq_client_dataset, config.bq_client_data_perms, [""], oldRule.identifier.name, oldRule.identifier.identifierType, oldRule.condition, oldRule.token);

  bigquery.createQueryStream(updateRow)
     .on('error', function(err) {
       logger('/editRule', log_severity.error, err.message, user_id);
        res.send({status: "500", message: err.message });
     })
     .on('data', function(data) {

     })
     .on('end', function() {

        var secondUpdateRow = utils.buildPermissionsQuery(config.bq_instance, config.bq_client_dataset, config.bq_client_data_perms, [newRule.organization._id], newRule.identifier.name, newRule.identifier.identifierType, newRule.condition, newRule.token);

        bigquery.createQueryStream(secondUpdateRow)
          .on('error', function(err) {
            logger('/editRule', log_severity.error, err.message, user_id);
            res.send({status: "500", message: err.message });
        })
        .on('data', function(data) {

        })
        .on('end', function() {
          Rule.updateOne({ _id: oldRule._id }, { name: newRule.name, identifier: newRule.identifier, condition: newRule.condition, token: newRule.token, organization: newRule.organization }, function(err, results) {
            if (err) {
              logger('/editRule', log_severity.error, err.message, user_id);
              res.send({status: "500", message: err.message });
            }
            logger('/editRule', log_severity.info, 'Rule edited successfully', user_id);
            res.send({status: "200", message: "Rule edited successfully." });
          })
        });
     });
});

router.post('/login', (req, res) => {

  const client = new OAuth2Client(config.google_client_id);

  async function verify(callback) {
    const ticket = await client.verifyIdToken({
        idToken: req.body.id_token,
        audience: config.google_client_id,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];

    callback(payload.email);
    // If request specified a G Suite domain:
    //const domain = payload['hd'];
  }

  try {
    verify(function(userid){
       User.findOne({ googleID: userid }, function(err, docs) {

         if (err) {
           logger('/login', log_severity.error, err.message, userid);
           res.send({ status: '500', message: 'User failed to log in.' });
         }
         req.session.user = { id : docs._id, role: docs.role, access_token: req.body.access_token };
         res.send({
           status: '200',
           message: 'User logged in.',
           isLoggedIn: true,
           role: req.session.user.role,
           user: req.session.user.id
         });
       });
     });
  }
  catch(error) {
    logger('/login', log_severity.error, err.message, userid);
    res.send({
      status: '403',
      message: 'User not logged in.',
      isLoggedIn: false,
      role: 'None',
      user: 'None'
    });
  }
});

// route middleware to make sure a user is logged in
router.get('/isLoggedIn', (req, res) => {

  // if user is authenticated in the session, carry on
  if (
    req.session.user &&
    req.session.user != '' &&
    req.session.user.id
  ) {
    logger('/isLoggedIn', log_severity.info, 'User is logged in', req.session.user.id);
    res.send({
      status: '200',
      message: 'User logged in.',
      isLoggedIn: true,
      role: req.session.user.role,
      user: req.session.user.id
    });
  } else {
    logger('/isLoggedIn', log_severity.error, 'User not logged in', '');
    res.send({
      status: '403',
      message: 'User not logged in.',
      isLoggedIn: false,
      role: 'None',
      user: 'None'
    });
  }

  // if they aren't redirect them to the home page
});

router.get('/listDatasources', function(req, res) {
  var user_id = req.session.user.id;
  var dsList = [];
  var dataset = bigquery.dataset(config.bq_views_dataset);

  dataset.getTables(function(err, tables) {
    if (err) {
      logger('/listDatasources', log_severity.error, err.message, user_id);
      res.send({ status: '500', message: err.message });
    }

    for (var i = 0; i < tables.length; i++) {
      dsList.push(tables[i].id);
    }
    logger('/listDatasources', log_severity.info, '', user_id);
    res.send(dsList);
  });
});

router.get('/listIdentifiers/:name', function(req, res) {
  var user_id = req.session.user.id;
  var table_id = req.params.name;
  var dataset = bigquery.dataset(config.bq_views_dataset);
  var table = dataset.table(table_id);

  table.getMetadata().then(function(data) {
    var identifiers = data[0].schema.fields;
    identifiers.splice( identifiers.indexOf('perms'), 1 );
    logger('/listIdentifiers/'+req.params.name, log_severity.info, '', user_id);
    res.send(identifiers);
  });
});

router.get('/getRole', (req, res) => {
  // if user is authenticated in the session, carry on
  if (
    req.session.user.role &&
    req.session.user != ''
  ) {
    logger('/getRole', log_severity.info, 'User is logged in', req.session.user.id);
    res.send({
      status: '200',
      message: 'User logged in.',
      role: req.session.user.role
    });
  } else {
    logger('/getRole', log_severity.error, 'User not logged in', '');
    res.send({ status: '403', message: 'User not logged in.', role: 'none' });
  }

});


module.exports = router;
