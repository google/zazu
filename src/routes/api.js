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

const passport = require('passport');
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

router.get('/logout', function(req, res) {
  req.session.destroy();
  res.send({ status: '200', message: 'User logged out' });
});

router.get('/getAllUsers', function(req, res) {
  User.find(function(err, docs) {
    if (err) {
      res.send({ status: '500', message: 'User list retrieved error.' });
    }
    res.send(docs);
  });
});

router.get('/getAllUsers/:id', function(req, res) {
  User.findOne({ _id: req.params.id }, function(err, docs) {
    if (err) {
      res.send({ status: '500', message: 'User list retrieved error.' });
    }
    res.send(docs);
  });
});

router.get('/getUsersByOrganization/:id', function(req, res) {
  var usersByOrg = [];

  User.find(function(err, docs) {
    if (err) {
      res.send({ status: '500', message: 'User list retrieved error.' });
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
      res.send(usersByOrg);
    }
  });
});

router.post('/createNewUser', function(req, res) {

  var newUser = req.body;
  var result = 0;
  var dataset = bigquery.dataset(config.bq_views_dataset);

  var cloudResourceManager = google.cloudresourcemanager('v1');
  const oAuth2Client = new OAuth2Client();

  oAuth2Client.credentials = {
     access_token: config.access_token
  };

  var request = {
    resource_: config.bq_instance,
    resource: {},
    auth: oAuth2Client
  };

  cloudResourceManager.projects.getIamPolicy(request, function(err, response) {
      if (err) {
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
          console.log(err1);
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
                  res.send({ status: '500', message: err1.message });
                }
                else {

                    User.create(newUser, function(err, results) {
                      var newUserId = results._id;

                      if (err) {
                        res.send({ status: '500', message: err.message });
                      } else {
                        var addNewUser =
                          'INSERT INTO `' +
                          config.bq_instance +
                          '.' +
                          config.bq_dataset +
                          '.users_2` (user_id, googleID, role) VALUES ("' +
                          newUserId +
                          '", "' +
                          newUser.googleID +
                          '", "' +
                          newUser.role +
                          '")';

                        bigquery
                          .createQueryStream(addNewUser)
                          .on('error', function(err) {
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
                                '.vendors_2`';

                              bigquery
                                .createQueryStream(findAllOrgs)
                                .on('error', function(err) {
                                  res.send({ status: '500', message: err.message });
                                })
                                .on('data', function(data) {

                                  Report.find({ organizations : { $elemMatch: { _id: data.organization_id } } }, function(err1, docs1) {
                                      if (err1) {
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

                                      for (var j = 0; j < filesIdList.length; j++) {
                                          utils.shareReport(filesIdList[j], permsList, 0, function(ret) {
                                                  if (ret === 1) {
                                                    console.log("Report sharing failed.");
                                                    var result = 1;
                                                  }
                                                  else {
                                                    console.log("Report shared successfully.");
                                                  }
                                          });
                                          if (result === 1) {
                                              res.send({status: "500", message: "Sharing report error."});
                                          }
                                        }
                                      });

                                        var addNewAdminVendor =
                                          'INSERT INTO `' +
                                          config.bq_instance +
                                          '.' +
                                          config.bq_dataset +
                                          '.user_vendor_roles_2` (user_id, organization_id) VALUES ("' +
                                          newUserId +
                                          '", "' +
                                          data.organization_id +
                                          '")';

                                        bigquery
                                          .createQueryStream(addNewAdminVendor)
                                          .on('error', function(err) {
                                            res.send({ status: '500', message: err.message });
                                          })
                                          .on('data', function(data) {})
                                          .on('end', function() {});
                                      })
                                      .on('end', function() {
                                        var orgList = [];

                                        Organization.find(function(err1, docs) {
                                          if (err1) {
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
                                                  res.send({ status: '500', message: err2.message });
                                                } else {
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
                                '.vendors_2` WHERE organization IN (';

                              for (var i = 0; i < newUser.organizations.length - 1; i++) {
                                findOrgIds += '"' + newUser.organizations[i].name + '", ';

                                Organization.updateOne(
                                  { name: newUser.organizations[i].name },
                                  { $inc: { usersCount: 1 } },
                                  function(err1, res1) {
                                    if (err1) {
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
                                    res.send({ status: '500', message: err1.message });
                                  }
                                }
                              );

                              bigquery
                                .createQueryStream(findOrgIds)
                                .on('error', function(err) {
                                  res.send({ status: '500', message: err.message });
                                })
                                .on('data', function(data) {
                                  Report.find({ organizations : { $elemMatch: { _id: data.organization_id } } }, function(err1, docs1) {
                                      if (err1) {
                                        res.send({ status: '500', message: err1.message });
                                      }

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

                                      for (var j = 0; j < filesIdList.length; j++) {
                                          utils.shareReport(filesIdList[j], permsList, 0, function(ret) {
                                                  if (ret === 1) {
                                                    console.log("Report sharing failed.");
                                                    var result = 1;
                                                  }
                                                  else {
                                                    console.log("Report shared successfully.");
                                                  }
                                          });
                                          if (result === 1) {
                                              res.send({status: "500", message: "Sharing report error."});
                                          }
                                        }
                                      });
                                        var addNewAdminVendor =
                                          'INSERT INTO `' +
                                          config.bq_instance +
                                          '.' +
                                          config.bq_dataset +
                                          '.user_vendor_roles_2` (user_id, organization_id) VALUES ("' +
                                          newUserId +
                                          '", "' +
                                          data.organization_id +
                                          '")';

                                        bigquery
                                          .createQueryStream(addNewAdminVendor)
                                          .on('error', function(err) {
                                            res.send({ status: '500', message: err.message });
                                          })
                                          .on('data', function(data) {})
                                          .on('end', function() {});
                                      })
                                      .on('end', function() {
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

  var deleteUser = req.body.user;
  var permissions = req.body.permissions;
  var result = 0;

  User.deleteOne({ _id: deleteUser._id }, function(err, results) {
    if (err) {
      res.send({ status: '500', message: err.message });
    } else {
      var deleteUserQuery =
        'DELETE FROM `' +
        config.bq_instance +
        '.' +
        config.bq_dataset +
        '.users_2` WHERE user_id = "' +
        deleteUser._id +
        '"';

      bigquery
        .createQueryStream(deleteUserQuery)
        .on('error', function(err) {
          res.send({ status: '500', message: err.message });
        })
        .on('data', function(data) {})
        .on('end', function() {
          var deleteUserVendor =
            'DELETE FROM `' +
            config.bq_instance +
            '.' +
            config.bq_dataset +
            '.user_vendor_roles_2` WHERE user_id = "' +
            deleteUser._id +
            '"';

          bigquery
            .createQueryStream(deleteUserVendor)
            .on('error', function(err) {
              res.send({ status: '500', message: err.message });
            })
            .on('data', function(data) {})
            .on('end', function() {
              var deleteCurrentVendorView =
                'DELETE FROM `' +
                config.bq_instance +
                '.' +
                config.bq_dataset +
                '.user_current_vendor_2` WHERE user_id = "' +
                deleteUser._id +
                '"';

              bigquery
                .createQueryStream(deleteCurrentVendorView)
                .on('error', function(err) {
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

                  utils.shareReport(filesIdList, permissions, 1, function(ret) {
                    if (ret === 1) {
                      console.log("Report sharing failed.");
                      var result = 1;
                    }
                    else {
                      console.log("Report shared successfully.");
                    }
                  });

                  if (result === 1) {
                    res.send({status: "500", message: "Sharing report error."});
                  }
                  else {
                    res.send({status: "200", deletedUser: deleteUser._id });
                  }
                });
            });
        });
    }
  });
});

router.post('/editUser', function(req, res) {

  var oldUser = req.body.oldUser;
  var editUser = req.body.newUser;

  var updateUser = 'UPDATE `' + config.bq_instance + '.' + config.bq_dataset + '.users_2` SET googleID = "' + editUser.googleID + '" WHERE user_id = "' + editUser._id + '"';

  bigquery
    .createQueryStream(updateUser)
    .on('error', function(err) {
      res.send({ status: '500', message: err.message });
    })
    .on('data', function(data) {})
    .on('end', function() {

      var newOrgs = [];
      var rmOrgs = [];
      var findOrgIdsToRm = "";
      var findOrgIdsToAdd = "";
      for (var i = 0; i < editUser.organizations.length; i++) {
        if (oldUser.organizations.indexOf(editUser.organizations[i]) == -1) {
          newOrgs.push(editUser.organizations[i].name);
        }
      }
      for (var i = 0; i < oldUser.organizations.length; i++) {
        if (editUser.organizations.indexOf(oldUser.organizations[i]) == -1) {
          rmOrgs.push(oldUser.organizations[i].name);
        }
      }

      for (var i = 0; i < rmOrgs.length - 1; i++) {
        findOrgIdsToRm += '"' + rmOrgs[i] + '", ';
      }
      findOrgIdsToRm += '"' + rmOrgs[rmOrgs.length - 1] + '"';

      for (var i = 0; i < newOrgs.length - 1; i++) {
        findOrgIdsToAdd += '"' + newOrgs[i] + '", ';
      }
      findOrgIdsToAdd += '"' + newOrgs[newOrgs.length - 1] + '"';

      var findOrgIds =
        'SELECT organization_id FROM `' +
        config.bq_instance +
        '.' +
        config.bq_dataset +
        '.vendors_2` WHERE organization IN (' + findOrgIdsToRm + ')';

      bigquery
        .createQueryStream(findOrgIds)
        .on('error', function(err) {
            res.send({ status: '500', message: err.message });
        })
        .on('data', function(data) {

          var deleteUserVendor =
            'DELETE FROM `' +
            config.bq_instance +
            '.' +
            config.bq_dataset +
            '.user_vendor_roles_2` WHERE organization_id = "' +
            data._id + '" AND user_id = "' + editUser._id +
            '"';

            bigquery
              .createQueryStream(deleteUserVendor)
              .on('error', function(err) {
                  res.send({ status: '500', message: err.message });
              })
              .on('data', function(data) {
              })
              .on('end', function() {
                 Report.find({ organizations : { $elemMatch: { name: { $in: { rmOrgs } } } } }, function(err1, docs1){
                     if (err1) {
                       res.send({ status: '500', message: err1.message });
                     }

                     Report.find({ organizations : { $elemMatch: { name: { $in: { newOrgs } } } } }, function(err2, docs2){
                       if (err2) {
                         res.send({ status: '500', message: err2.message });
                       }

                       // for (var i = 0; i < docs1.length; i++) {
                       //      if (docs1[i].indexOf(docs2) == -1) {
                       //         var file_url = docs1[i].link;
                       //         var extract_id = file_url.match(/reporting\/.*\/page/i);
                       //         var file_id = extract_id.toString().split('/')[1];
                       //
                       //         var filesIdList = [file_id];
                       //         for (var j = 0; j < docs1[i].datasources.length; j++) {
                       //            var datasourcelink = docs1[i].datasources[j].datastudio;
                       //            var extract_ds_link = datasourcelink.match(/datasources\/.*/i);
                       //            var datasource_id = extract_ds_link.toString().split('/')[1];
                       //
                       //            filesIdList.push(datasource_id);
                       //         }
                       //
                       //         Permission.find( { fileId: { $in: filesIdList }, googleID: editUser.googleID }, function(err3, docs3){
                       //           if (err3) {
                       //             res.send({ status: '500', message: err3.message });
                       //           }
                       //
                       //            utils.shareReport(filesIdList, docs3, 1, function(ret) {
                       //              if (ret === 1) {
                       //                console.log("Report sharing failed.");
                       //                var result = 1;
                       //              }
                       //              else {
                       //                console.log("Report shared successfully.");
                       //              }
                       //            });
                       //
                       //            if (result === 1) {
                       //              res.send({status: "500", message: "Sharing report error."});
                       //            }
                       //      });
                       //   }
                       // }

                       // for (var i = 0; i < docs2.length; i++) {
                       //      if (docs2[i].indexOf(docs1) == -1) {
                       //         var file_url = docs2[i].link;
                       //         var extract_id = file_url.match(/reporting\/.*\/page/i);
                       //         var file_id = extract_id.toString().split('/')[1];
                       //
                       //         var filesIdList = [file_id];
                       //         for (var j = 0; j < docs2[i].datasources.length; j++) {
                       //            var datasourcelink = docs2[i].datasources[j].datastudio;
                       //            var extract_ds_link = datasourcelink.match(/datasources\/.*/i);
                       //            var datasource_id = extract_ds_link.toString().split('/')[1];
                       //
                       //            filesIdList.push(datasource_id);
                       //         }
                       //
                       //         Permission.find( { fileId: { $in: filesIdList }, googleID: editUser.googleID }, function(err3, docs3){
                       //           if (err3) {
                       //             res.send({ status: '500', message: err3.message });
                       //           }
                       //
                       //            utils.shareReport(filesIdList, docs3, 0, function(ret) {
                       //              if (ret === 1) {
                       //                console.log("Report sharing failed.");
                       //                var result = 1;
                       //              }
                       //              else {
                       //                console.log("Report shared successfully.");
                       //              }
                       //            });
                       //
                       //            if (result === 1) {
                       //              res.send({status: "500", message: "Sharing report error."});
                       //            }
                       //      });
                       //   }
                       // }

                     });
                 });

                 var findOrgIds =
                   'SELECT organization_id FROM `' +
                   config.bq_instance +
                   '.' +
                   config.bq_dataset +
                   '.vendors_2` WHERE organization IN (' + findOrgIdsToAdd + ')';

                   bigquery
                     .createQueryStream(findOrgIds)
                     .on('error', function(err) {
                         res.send({ status: '500', message: err.message });
                     })
                     .on('data', function(data) {

                       var insertRow =
                         'INSERT INTO `' +
                         config.bq_instance +
                         '.' +
                         config.bq_dataset +
                         '.user_vendor_roles_2` (user_id, organization_id) VALUES ("' +
                         newUser._id +
                         '","' +
                         data._id +
                         '")';

                       bigquery
                         .createQueryStream(insertRow)
                         .on('error', function(err) {
                             res.send({ status: '500', message: err.message });
                         })
                         .on('data', function(data) {
                         })
                         .on('end', function() {

                         });
                     })
                     .on('end', function(){

                    });
              });
        })
        .on('end', function() {
          User.updateOne({ _id: editUser._id }, editUser, function(err, result) {
            if (err) {
              res.send({
                status: '500',
                message: 'User failed to update.'
              });
            }
            res.send({ status: '200', results: result });
          });
        });

    });

});

router.get('/getAllOrganizations', function(req, res) {
  Organization.find(function(err, docs) {
    if (err) {
      res.send({
        status: '500',
        message: 'Organization list retrieved error.'
      });
    }
    res.send(docs);
  });
});

router.get('/getAllOrganizationsWithNoDetails', function(req, res) {
  var orgsNoDetails = [];

  Organization.find(function(err, docs) {
    if (err) {
      res.send({
        status: '500',
        message: 'Organization list retrieved error.'
      });
    }

    for (var i = 0; i < docs.length; i++) {
      orgsNoDetails.push({ _id: docs[i]._id, name: docs[i].name });
    }
    res.send(orgsNoDetails);
  });
});

router.get('/getOrganizationById/:orgid', function(req, res) {
  Organization.findOne({ _id: req.params.orgid }, function(err, docs) {
    if (err) {
      res.send({
        status: '500',
        message: 'Organization list retrieved error.'
      });
    }
    res.send(docs);
  });
});

router.post('/createOrganization', function(req, res) {
  var newOrg = req.body;
  newOrg.reportsCount = 0;
  newOrg.usersCount = 0;
  newOrg.datarulesCount = 0;

  Organization.create(newOrg, function(err, results) {
    var newOrgId = results._id;

    if (err) {
      res.send({ status: '500', message: err.message });
    } else {
      var insertRow =
        'INSERT INTO `' +
        config.bq_instance +
        '.' +
        config.bq_dataset +
        '.vendors_2` (organization_id, organization) VALUES ("' +
        newOrgId +
        '","' +
        newOrg.name +
        '")';

      bigquery
        .createQueryStream(insertRow)
        .on('error', function(err) {
          res.send({ status: '500', message: err.message });
        })
        .on('data', function(data) {})
        .on('end', function() {
          var retailerIdList = [];
          var getRetailerIds =
            'SELECT user_id FROM `' +
            config.bq_instance +
            '.' +
            config.bq_dataset +
            '.users_2` WHERE role = "admin"';

          bigquery
            .createQueryStream(getRetailerIds)
            .on('error', function(err) {
              res.send({ status: '500', message: err.message });
            })
            .on('data', function(data) {
              var user_id = data.user_id;
              var addRetailerAccesses =
                'INSERT INTO `' +
                config.bq_instance +
                '.' +
                config.bq_dataset +
                '.user_vendor_roles_2` (user_id, organization_id) VALUES ("' +
                user_id +
                '", "' +
                newOrgId +
                '")';

              bigquery
                .createQueryStream(addRetailerAccesses)
                .on('error', function(err) {
                  res.send({ status: '500', message: err.message });
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
                        console.log(err);
                        res.send({ status: '500', message: err.message });
                      }
                    }
                  );
                });
            })
            .on('end', function() {
              res.send({ status: '200', orgID: newOrgId });
            });
        });
    }
  });
});

router.post('/deleteOrganization', function(req, res) {
  var orgDelete = req.body;

  Organization.deleteOne({ _id: orgDelete._id }, function(err, results) {
    if (err) {
      res.send({ status: '500', message: err.message });
    } else {
      var delOrg =
        'DELETE FROM `' +
        config.bq_instance +
        '.' +
        config.bq_dataset +
        '.vendors_2` WHERE organization_id = "' +
        orgDelete._id +
        '"';

      bigquery
        .createQueryStream(delOrg)
        .on('error', function(err) {
          res.send({ status: '500', message: err.message });
        })
        .on('data', function(data) {})
        .on('end', function() {
          var delCurrentVendorView =
            'DELETE FROM `' +
            config.bq_instance +
            '.' +
            config.bq_dataset +
            '.user_current_vendor_2` WHERE organization_id = "' +
            orgDelete._id +
            '"';

          bigquery
            .createQueryStream(delCurrentVendorView)
            .on('error', function(err) {
              res.send({ status: '500', message: err.message });
            })
            .on('data', function(data) {})
            .on('end', function() {
              var delUserVendor =
                'DELETE FROM `' +
                config.bq_instance +
                '.' +
                config.bq_dataset +
                '.user_vendor_roles_2` WHERE organization_id = "' +
                orgDelete._id +
                '"';

              bigquery
                .createQueryStream(delUserVendor)
                .on('error', function(err) {
                  res.send({ status: '500', message: err.message });
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
                        console.log(err);
                        res.send({ status: '500', message: err.message });
                      } else {

                          Rule.find({ organization: { $elemMatch: { _id: orgDelete._id } } }, function(err3, res3) {
                            if (err3) {
                              res.send({ status: '500', message: err3.message });
                            }

                            if (res3.length == 0) {
                              res.send({ status: '200', orgID: orgDelete._id });
                            }

                            for (var i = 0; i < res3.length; i++) {
                              var updateRow = utils.buildPermissionsQuery(
                                config.bq_instance,
                                config.bq_client_dataset,
                                config.bq_client_data_perms,
                                [''],
                                res3[i].identifier,
                                res3[i].identifierType,
                                res3[i].condition,
                                res3[i].token
                              );

                              bigquery
                                .createQueryStream(updateRow)
                                .on('error', function(err) {
                                  res.send({ status: '500', message: err.message });
                                })
                                .on('data', function(data) {})
                                .on('end', function() {
                                  Rule.deleteOne({ _id: res3[i]._id }, function(err, results) {
                                    if (err) {
                                      res.send({ status: '500', message: err.message });
                                    }
                                    if (i === (res3.length - 1)) {
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

  var editOrg = req.body;

  var updateOrg = 'UPDATE `' + config.bq_instance + '.' + config.bq_dataset + '.vendors_2` SET organization = "' + editOrg.name + '" WHERE organization_id = "' + editOrg._id + '"';

  bigquery
    .createQueryStream(updateOrg)
    .on('error', function(err) {
      res.send({ status: '500', message: err.message });
    })
    .on('data', function(data) {})
    .on('end', function() {
      Organization.updateOne({ _id : editOrg._id }, editOrg, function(err, result) {
        if (err) {
          res.send({ status: '500', message: 'Organization failed to update.' });
        } else {
          res.send({ status: '200', result: result });
        }
      });
    });
});

router.get('/getAllReports', function(req, res) {
  Report.find(function(err, docs) {
    if (err) {
      res.send({ status: '500', message: 'Report list retrieved error.' });
    } else {
      res.send(docs);
    }
  });
});

router.get('/getAllReports/:id', function(req, res) {
  Report.findOne({ _id: req.params.id }, function(err, docs) {
    if (err) {
      res.send({ status: '500', message: 'Report list retrieved error.' });
    }
    res.send(docs);
  });
});

router.get('/getReportByOrganization/:id', function(req, res) {
  var reportsByOrg = [];

  Report.find(function(err, docs) {
    if (err) {
      res.send({ status: '500', message: 'Report list retrieved error.' });
    } else {
      for (var i = 0; i < docs.length; i++) {
        for (var j = 0; j < docs[i].organizations.length; j++) {
          if (docs[i].organizations[j]._id === req.params.id) {
            reportsByOrg.push(docs[i]);
          }
        }
      }
      res.send(reportsByOrg);
    }
  });
});

router.get('/getReportByUser/:id', function(req, res) {
  var reportsByUser = [];
  User.find({ _id: req.params.id }, function(err, docs) {
    if (err) {
      res.send({ status: '500', message: 'User retrieved error.' });
    } else {
      var userOrgList = docs[0].organizations;

      Report.find(function(err, reports) {
        if (err) {
          res.send({ status: '500', message: 'Report list retrieved error.' });
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
          res.send(reportsByUser);
        }
      });
    }
  });
});

router.post('/initGhost', function(req, res) {
  console.log('initialize ghost');

  var currentUser = req.session.passport.user.id;
  var orgObj = req.body;
  var viewExists = "-1";

  var findViewRow = 'SELECT organization_id FROM `' + config.bq_instance + '.' + config.bq_dataset + '.user_current_vendor_2` WHERE user_id = "' + currentUser + '"';

  bigquery.createQueryStream(findViewRow)
    .on('error', function(err) {
        res.send({status: "500", message: err.message });
    })
    .on('data', function(row) {

      viewExists = row.organization_id;

    })
    .on('end', function() {

      if (viewExists == "-1") {
        var insertOrUpdateView = 'INSERT INTO `' + config.bq_instance + '.' + config.bq_dataset + '.user_current_vendor_2` (user_id, organization_id) VALUES ("' + currentUser + '", "' + orgObj._id + '")';
      }
      else {
        var insertOrUpdateView = 'UPDATE `' + config.bq_instance + '.' + config.bq_dataset + '.user_current_vendor_2` SET organization_id = "' + orgObj._id + '" WHERE user_id = "' + currentUser + '"';
      }

      bigquery.createQueryStream(insertOrUpdateView)
        .on('error', function(err) {
          res.send({status: "500", message: err.message });
        })
        .on('data', function(data) {

        })
        .on('end', function() {

            res.send({ status: "200", message: "Successfully changed view."});
        });
      });
});

router.post('/createReport', function(req, res) {

  var newReport = req.body;
  newReport.createdBy = req.session.passport.user.id;
  newReport.updatedBy = '';
  var result = 0;

  Report.create(newReport, function(err, results) {
    if (err) {
      res.send({ status: '500', message: 'Report creation error.' });
    } else {
      var orgList = newReport.organizations;
      var file_url = newReport.link;
      var extract_id = file_url.match(/reporting\/.*\/page/i);
      var file_id = extract_id.toString().split('/')[1];

      var filesIdList = [file_id];
      for (var i = 0; i < newReport.datasources.length; i++) {
        var datasourcelink = newReport.datasources[i].datastudio;
        var extract_ds_link = datasourcelink.match(/datasources\/.*/i);
        var datasource_id = extract_ds_link.toString().split('/')[1];

        filesIdList.push(datasource_id);
      }

      User.find(function(err1, docs) {
        if (err1) {
          res.send({ status: '500', message: 'Retrieving users error.' });
        }
        var permsList = [];

        for (var i = 0; i < docs.length; i++) {
            for (var j = 0; j < orgList.length; j++) {
              for (var k = 0; k < docs[i].organizations.length; k++) {
                  if ((orgList[j]._id === docs[i].organizations[k]._id)&&(docs[i]._id.toString() !== req.session.passport.user.id)) {
                    permsList.push({
                        'type': 'user',
                        'role': 'reader',
                        'emailAddress': docs[i].googleID
                      });
                  }
              }
            }
          }

          for (var j = 0; j < filesIdList.length; j++) {
            utils.shareReport(filesIdList[j], permsList, 0, function(ret) {
                    if (ret === 1) {
                      console.log("Report sharing failed.");
                      var result = 1;
                    }
                    else {
                      console.log("Report shared successfully.");
                    }
            });
            if (result === 1) {
                res.send({status: "500", message: "Sharing report error."});
            }
          }

        for (var i = 0; i < newReport.organizations.length; i++) {
            Organization.updateOne({ _id: newReport.organizations[i]._id }, { $inc: { reportsCount: 1 } }, function(err1, res1) {
              if (err1) {
                res.send({ status: '500', message: err1.message });
              }
            });
        }
        res.send({ status: '200', results: results._id });
      });
    }
  });
});

router.post('/getPermissionsToRevokeUser', function(req, res) {

    var user = req.body;

    Permission.find({ googleID: user.googleID }, function(err, docs) {
      if (err) {
        res.send({ status: '500', message: err.message });
      }
      res.send({ status: '200', permissions: docs });
    });
});

router.post('/getPermissionsToRevoke', function(req, res) {

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
    var orgList = [organization._id];
  }
  else {
    var usersToRevoke = [];
    var orgList = report.organizations;
  }

  User.find(function(err1, docs) {
    if (err1) {
      res.send({ status: '500', message: 'Report creation error.' });
    }

    if (usersToRevoke.length === 0) {
      for (var i = 0; i < docs.length; i++) {
          for (var j = 0; j < orgList.length; j++) {
            for (var k = 0; k < docs[i].organizations.length; k++) {

              if ((orgList[j]._id === docs[i].organizations[k]._id)&&(docs[i]._id.toString() !== req.session.passport.user.id)) {
                  usersToRevoke.push(docs[i].googleID);
               }
            }
          }
      }
    }

    Permission.find({ fileId: { $in: filesIdList }, googleID: { $in: usersToRevoke } }, function(err, docs) {

      if (err) {
        res.send({ status: '500', message: 'Report creation error.' });
      }
      for (var l = 0; l < docs.length; l++) {
        permsList.push(docs[l]);
      }

      res.send({ status: '200', permissions: permsList });
    });
  });

});

router.post('/deleteReport', function(req, res) {
  console.log('delete report called');
  var deleteReport = req.body.report;
  var permissions = req.body.permissions;
  var result = 0;
  var filePermsList = [];

  Report.deleteOne(deleteReport, function(err, results) {
    if (err) {
      res.send({ status: '500', message: 'Report deletion error.' });
    } else {
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

        utils.shareReport(filesIdList, permissions, 1, function(ret) {
          if (ret === 1) {
            console.log("Report sharing failed.");
            var result = 1;
          }
          else {
            console.log("Report shared successfully.");
          }
        });

        if (result === 1) {
          res.send({status: "500", message: "Sharing report error."});
        }

        for (var i = 0; i < deleteReport.organizations.length; i++) {
          Organization.updateOne(
            { _id: deleteReport.organizations[i]._id },
            { $inc: { reportsCount: -1 } },
            function(err1, res1) {
              if (err1) {
                res.send({ status: '500', message: err1.message });
              }
            }
          );
        }
        res.send({ status: '200', results: results._id });
      }
    });
});

router.post('/unshareReport', function(req, res) {
  // TODO: Don't unshare if one user is a part of another org that has the report

  var unshareReport = req.body.report;
  var permissions = req.body.permissions;
  var result = 0;
  var filePermsList = [];

  var orgList = unshareReport.organizations;
  var file_url = unshareReport.link;
  var extract_id = file_url.match(/reporting\/.*\/page/i);
  var file_id = extract_id.toString().split('/')[1];

  var filesIdList = [file_id];
  for (var i = 0; i < unshareReport.datasources.length; i++) {
    var datasourcelink = unshareReport.datasources[i].datastudio;
    var extract_ds_link = datasourcelink.match(/datasources\/.*/i);
    var datasource_id = extract_ds_link.toString().split('/')[1];

    filesIdList.push(datasource_id);
  }

    utils.shareReport(filesIdList, permissions, 1, function(ret) {
      if (ret === 1) {
        console.log("Report sharing failed.");
        var result = 1;
      }
      else {
        console.log("Report shared successfully.");
      }
    });

    if (result === 1) {
      res.send({status: "500", message: "Sharing report error."});
    }

    for (var i = 0; i < unshareReport.organizations.length; i++) {
      Organization.updateOne(
        { _id: deleteReport.organizations[i]._id },
        { $inc: { reportsCount: -1 } },
        function(err1, res1) {
          if (err1) {
            res.send({ status: '500', message: err1.message });
          }
        }
      );
    }
    res.send({ status: '200', results: results._id });
});

router.post('/editReport', function(req, res) {

  var oldReport = req.body.oldReport;
  var newReport = req.body.newReport;

  Report.updateOne({ _id: oldReport._id }, newReport, function(err, results) {
    if (err) {

      res.send({status: "500", message: err.message });
    }
    res.send({status: "200", message: "Report edit succeeded." });
  });

});

router.post('/shareReport', function(req, res) {

  var reportToShare = req.body.report;
  var orgToShare = req.body.organization;
  var result = 0;

  var orgList = reportToShare.organizations;
  var file_url = reportToShare.link;
  var extract_id = file_url.match(/reporting\/.*\/page/i);
  var file_id = extract_id.toString().split('/')[1];

  var filesIdList = [file_id];
  for (var i = 0; i < reportToShare.datasources.length; i++) {
    var datasourcelink = reportToShare.datasources[i].datastudio;
    var extract_ds_link = datasourcelink.match(/datasources\/.*/i);
    var datasource_id = extract_ds_link.toString().split('/')[1];

    filesIdList.push(datasource_id);
  }

  User.find(function(err1, docs) {
    if (err1) {
      res.send({ status: '500', message: 'Retrieving users error.' });
    }
    var permsList = [];

    for (var i = 0; i < docs.length; i++) {
      for (var k = 0; k < docs[i].organizations.length; k++) {
              if ((orgToShare._id === docs[i].organizations[k]._id)&&(docs[i]._id.toString() !== req.session.passport.user.id)) {
                permsList.push({
                    'type': 'user',
                    'role': 'reader',
                    'emailAddress': docs[i].googleID
                  });
              }
      }
    }

    for (var j = 0; j < filesIdList.length; j++) {
        utils.shareReport(filesIdList[j], permsList, 0, function(ret) {
                if (ret === 1) {
                  console.log("Report sharing failed.");
                  var result = 1;
                }
                else {
                  console.log("Report shared successfully.");
                }
        });
        if (result === 1) {
            res.send({status: "500", message: "Sharing report error."});
        }
    }

    Organization.updateOne({ _id: orgToShare._id }, { $inc: { reportsCount: 1 } }, function(err1, res1) {
      if (err1) {
        res.send({ status: '500', message: err1.message });
      }

      Report.updateOne({ _id: reportToShare._id }, {   $push: { organizations: { _id: orgToShare._id, name: orgToShare.name } } }, function(err2, res2) {
        if (err2) {
          res.send({ status: '500', message: err2.message });
        }
        res.send({ status: '200', results: "Report shared successfully." });

      });

    });

  });

});

router.get('/getDataRules/:orgid', function(req, res) {
  var rulesByOrg = [];

  Rule.find(function(err, docs) {
    if (err) {
      res.send({ status: '500', message: 'Rule list retrieved error.' });
    } else {
      for (var i = 0; i < docs.length; i++) {
        if (docs[i].organization._id == req.params.orgid) {
          rulesByOrg.push(docs[i]);
        }
      }
      res.send(rulesByOrg);
    }
  });
});

router.post('/createRule', (req, res) => {
  var newRule = req.body;

  var updateRow = utils.buildPermissionsQuery(
    config.bq_instance,
    config.bq_client_dataset,
    config.bq_client_data_perms,
    [newRule.organization._id],
    newRule.identifier,
    newRule.identifierType,
    newRule.condition,
    newRule.token
  );

  bigquery
    .createQueryStream(updateRow)
    .on('error', function(err) {
      res.send({ status: '500', message: err.message });
    })
    .on('data', function(data) {})
    .on('end', function() {
      Rule.create(newRule, function(err, results) {
        if (err) {
          res.send({ status: '500', message: err.message });
        }
        Organization.updateOne(
          { _id: newRule.organization._id },
          { $inc: { datarulesCount: 1 } },
          function(err1, res1) {
            if (err1) {
              res.send({ status: '500', message: err1.message });
            } else {
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
  var delRule = req.body;
  var updateRow = utils.buildPermissionsQuery(
    config.bq_instance,
    config.bq_client_dataset,
    config.bq_client_data_perms,
    [''],
    delRule.identifier,
    delRule.identifierType,
    delRule.condition,
    delRule.token
  );

  bigquery
    .createQueryStream(updateRow)
    .on('error', function(err) {
      res.send({ status: '500', message: err.message });
    })
    .on('data', function(data) {})
    .on('end', function() {
      Rule.deleteOne({ _id: delRule._id }, function(err, results) {
        if (err) {
          res.send({ status: '500', message: err.message });
        }
        Organization.updateOne(
          { _id: delRule.organization._id },
          { $inc: { datarulesCount: -1 } },
          function(err1, res1) {
            if (err1) {
              res.send({ status: '500', message: err1.message });
            } else {
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

  var oldRule = req.body.oldRule;
  var newRule = req.body.newRule;

  var updateRow = utils.buildPermissionsQuery(config.bq_instance, config.bq_client_dataset, config.bq_client_data_perms, [""], oldRule.identifier, oldRule.identifierType, oldRule.condition, oldRule.token);

  bigquery.createQueryStream(updateRow)
     .on('error', function(err) {
        res.send({status: "500", message: err.message });
     })
     .on('data', function(data) {

     })
     .on('end', function() {

        var secondUpdateRow = utils.buildPermissionsQuery(config.bq_instance, config.bq_client_dataset, config.bq_client_data_perms, [newRule.organization._id], newRule.identifier, newRule.identifierType, newRule.condition, newRule.token);

        bigquery.createQueryStream(secondUpdateRow)
          .on('error', function(err) {
            res.send({status: "500", message: err.message });
        })
        .on('data', function(data) {

        })
        .on('end', function() {
          Rule.updateOne({ _id: oldRule._id }, { name: newRule.name, identifier: newRule.identifier, condition: newRule.condition, token: newRule.token, organization: newRule.organization }, function(err, results) {
            if (err) {
              res.send({status: "500", message: err.message });
            }

            res.send({status: "200", message: "Rule edited successfully." });
          })
        });
     });
});

// route middleware to make sure a user is logged in
router.get('/isLoggedIn', (req, res) => {
  // if user is authenticated in the session, carry on
  if (
    req.session.passport &&
    req.session.passport.user.id &&
    req.session.passport.user != ''
  ) {
    res.send({
      status: '200',
      message: 'User logged in.',
      isLoggedIn: true,
      role: req.session.passport.user.role,
      user: req.session.passport.user.id
    });
  } else {
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
  var dsList = [];
  var dataset = bigquery.dataset(config.bq_views_dataset);

  dataset.getTables(function(err, tables) {
    if (err) {
      res.send({ status: '500', message: err.message });
    }

    for (var i = 0; i < tables.length; i++) {
      dsList.push(tables[i].id);
    }
    res.send(dsList);
  });
});

router.get('/listIdentifiers/:name', function(req, res) {
  var table_id = req.params.name;
  var dataset = bigquery.dataset(config.bq_views_dataset);
  var table = dataset.table(table_id);

  table.getMetadata().then(function(data) {
    var identifiers = data[0].schema.fields;

    res.send(identifiers);
  });
});

router.get('/getRole', (req, res) => {
  // if user is authenticated in the session, carry on
  if (
    req.session.passport &&
    req.session.passport.user.role &&
    req.session.passport.user != ''
  ) {
    res.send({
      status: '200',
      message: 'User logged in.',
      role: req.session.passport.user.role
    });
  } else {
    res.send({ status: '403', message: 'User not logged in.', role: 'none' });
  }

  // if they aren't redirect them to the home page
});

//
//
// // router.get('/refreshPermissionsTable', function(req, res) {
// //     var dataset = bigquery.dataset(config.bq_client_dataset);
// //     const dest_table = dataset.table(config.bq_client_data_perms);
// //     const orig_table = dataset.table(config.bq_client_data_base);
// //
// //     dest_table.delete(function(err, apiResponse) {
// //
// //       if ((err)&&(err.code != 404)) {
// //         res.send({status: "500", message: err.message });
// //       }
// //       else {
// //           orig_table.copy(dest_table, function(err1, apiResponse1) {
// //
// //              if (err1) {
// //                res.send({status: "500", message: err1.message });
// //              }
// //              else {
// //                dest_table.getMetadata().then(function(data) {
// //                    var metadata = data[0];
// //                    var new_schema = metadata.schema.fields;
// //
// //                    new_schema.push({ name: "Permissions", type: "STRING", mode: "REPEATED" });
// //                    metadata.schema.fields = new_schema;
// //
// //                    dest_table.setMetadata(metadata, function(err2, metadata, apiResponse2) {
// //
// //                      if (err2) {
// //                        res.send({status: "500", message: err2.message });
// //                      }
// //                      else {
// //
// //                        Rule.find(function(err, docs) {
// //                            if (err) {
// //                              res.send({status: "500", message: "Rule list retrieved error."});
// //                            }
// //
// //                            for (var i = 0; i < docs.length; i++) {
// //
// //                               var curr_rule = docs[i];
// //                               var permsList = [];
// //
// //                               for (var j = 0; j < curr_rule.organization.length; j++) {
// //
// //                                 var findId = 'SELECT organization_id FROM `' + config.bq_instance + '.' + config.bq_dataset + '.vendors` WHERE organization = "' + curr_rule.organization[j] + '"';
// //
// //                                 bigquery.createQueryStream(findId)
// //                                    .on('error', function(err) {
// //                                       res.send({status: "500", message: err.message });
// //                                    })
// //                                    .on('data', function(row) {
// //                                       permsList.push(row.organization_id);
// //
// //                                       if (permsList.length === curr_rule.organization.length) {
// //
// //                                         var updateRow = utils.buildPermissionsQuery(config.bq_instance, config.bq_client_dataset, config.bq_client_data_perms, permsList, curr_rule.identifier, curr_rule.identifierType, curr_rule.condition, curr_rule.token);
// //
// //                                         bigquery.createQueryStream(updateRow)
// //                                             .on('error', function(err) {
// //                                                res.send({status: "500", message: err.message });
// //                                             })
// //                                             .on('data', function(data) {
// //
// //                                             })
// //                                             .on('end', function() {
// //                                                 if (i === docs.length) {
// //                                                   res.send({status: "200", message: "Permissions table created.", "schema": metadata.schema.fields });
// //                                                 }
// //
// //                                             })
// //                                       }
// //                                     })
// //                                    .on('end', function() {
// //
// //                                    });
// //
// //                               }
// //                            }
// //                        });
// //
// //                      }
// //                    });
// //                });
// //              }
// //           });
// //       }
// //     });
// // });
//
//
//
//


module.exports = router;
