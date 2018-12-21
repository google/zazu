/* Copyright 2018 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

var { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const async = require('async');
const BigQuery = require('@google-cloud/bigquery');

const bigquery = new BigQuery();

var config = require('./config');
const Permission = require('../models/permission');
const User = require('../models/user');
const Organization = require('../models/organization');
const Report = require('../models/report');
var config = require('../utilities/config');

module.exports = {
  buildPermissionsQuery: function(bq_instance, bq_dataset, bq_client_data_perms, organization_id_list, identifier, identifierType, condition, token) {
    var updateRow = 'UPDATE `' + bq_instance + '.' + bq_dataset + '.' + bq_client_data_perms + '` SET Permissions = [';

    for (var i = 0; i < organization_id_list.length - 1; i++) {
      updateRow += '"' + organization_id_list[i] + '",';
    }

    updateRow += '"' + organization_id_list[organization_id_list.length - 1] + '"] WHERE ' + identifier + ' ';

    if (condition === 'contains') {
      updateRow += 'like "%' + token + '%"';
    } else if (condition === 'equals') {
      if (identifierType === 'STRING') {
        updateRow += '= "' + token + '"';
      } else {
        updateRow += '= ' + token;
      }
    } else if (condition === 'excludes') {
      if (identifierType === 'STRING') {
        updateRow += '<> "' + token + '"';
      } else {
        updateRow += '<> ' + token;
      }
    }

    return updateRow;
  },

  shareReport: function(file_id, permissions, revoke, callback) {
    const oAuth2Client = new OAuth2Client();

    oAuth2Client.credentials = {
      access_token: config.access_token
    };

    const drive = google.drive({ version: 'v3', auth: oAuth2Client });

    if (revoke == 0) {
      console.log('Sharing report...');

      async.eachSeries(
        permissions,
        function(permission, callback) {
          drive.permissions.create(
            {
              resource: permission,
              fileId: file_id,
              fields: 'id',
              sendNotificationEmail: false
            },
            function(err, res) {
              if (err) {
                // Handle error...
                console.log(err);
                callback(1);
              } else {
                console.log(res.status);
                console.log('Saving permissions...');

                var permObj = { fileId: file_id, googleID: permission.emailAddress, drivePermId: res.data.id };
                Permission.create(permObj, function(err3, res3) {
                  if (err3) {
                    console.log(err3);
                    callback(1);
                  }
                });

                if (res.status == 200) {
                  console.log('Sharing report finished...');
                  callback(0);
                } else {
                  callback(1);
                }
              }
            }
          );
        },
        function(err) {
          if (err) {
            // Handle error
            console.error(err);
            callback(1);
          } else {
            // All permissions inserted
          }
        }
      );
    } else {
      console.log('Revoking shared report...');
      async.eachSeries(permissions, function(permission, callback) {
        drive.permissions.delete(
          {
            fileId: permission.fileId,
            permissionId: permission.drivePermId
          },
          function(err, res) {
            if (err) {
              // Handle error...
              console.log(err);
              callback(1);
            } else {
              console.log(res.status);
              console.log('Removing permissions...');

              if (res.status == 204) {
                Permission.deleteOne({ drivePermId: permission.drivePermId }, function(err4, docs1) {
                  if (err4) {
                    callback(1);
                  }
                  callback(0);
                });
              }
            }
          }
        );
      });
    }
  },

  regenerateTables: function(callback) {
    Organization.find(function(err1, docs1) {
      if (err1) {
        callback(1);
      }

      var deleteAllOrgs =
        'DELETE FROM `' +
        config.bq_instance +
        '.' +
        config.bq_dataset +
        '.vendors_2` WHERE organization_id IN (SELECT organization_id FROM `' +
        config.bq_instance +
        '.' +
        config.bq_dataset +
        '.vendors_2`)';
        console.log(' ');
      console.log('******** deleteAllOrgs');
      console.log(deleteAllOrgs);
      console.log(' ');
      bigquery
        .createQueryStream(deleteAllOrgs)
        .on('error', function(err) {
          callback(1);
          console.log('##### ERROR : deleteAllOrgs');
          console.log(err);
        })
        .on('data', function(data) {})
        .on('end', function() {
          var deleteAllUsers =
            'DELETE FROM `' +
            config.bq_instance +
            '.' +
            config.bq_dataset +
            '.users_2` WHERE user_id in (SELECT user_id FROM `' +
            config.bq_instance +
            '.' +
            config.bq_dataset +
            '.users_2`)';
            console.log(' ');
          console.log('******** deleteAllUsers');
          console.log(deleteAllUsers);
          console.log(' ');
          bigquery
            .createQueryStream(deleteAllUsers)
            .on('error', function(err) {
              callback(1);
              console.log('##### ERROR : deleteAllUsers');
              console.log(err);
            })
            .on('data', function(data) {})
            .on('end', function() {
              var deleteAllUserVendorRoles =
                'DELETE FROM `' +
                config.bq_instance +
                '.' +
                config.bq_dataset +
                '.user_vendor_roles_2` WHERE user_id in (SELECT user_id FROM `' +
                config.bq_instance +
                '.' +
                config.bq_dataset +
                '.user_vendor_roles_2`)';
              console.log(' ');
              console.log('******  deleteAllUserVendorRoles ');
              console.log(deleteAllUserVendorRoles);
              console.log(' ');
              bigquery
                .createQueryStream(deleteAllUserVendorRoles)
                .on('error', function(err) {
                  callback(1);
                  console.log('##### ERROR : deleteAllUserVendorRoles');
                  console.log(err);
                })
                .on('data', function(data) {})
                .on('end', function() {
                  var deleteAllCurrentRoles =
                    'DELETE FROM `' +
                    config.bq_instance +
                    '.' +
                    config.bq_dataset +
                    '.user_current_vendor_2` WHERE user_id in (SELECT user_id FROM `' +
                    config.bq_instance +
                    '.' +
                    config.bq_dataset +
                    '.user_current_vendor_2`)';
                    console.log(' ');
                  console.log('******* deleteAllCurrentRoles ');
                  console.log(deleteAllCurrentRoles);
                  console.log(' ');
                  bigquery
                    .createQueryStream(deleteAllCurrentRoles)
                    .on('error', function(err) {
                      callback(1);
                      console.log('##### ERROR : deleteAllCurrentRoles');
                      console.log(err);
                    })
                    .on('data', function(data) {})
                    .on('end', function() {
                        var flag = 0;
                        for (var i = 0; i < docs1.length; i++) {
                          var createOrgRow = 'INSERT INTO `' + config.bq_instance + '.' + config.bq_dataset + '.vendors_2` (organization_id, organization) VALUES ("' + docs1[i]._id + '","' + docs1[i].name + '")';
                          console.log(' ');
                          console.log('*********** createOrgRow ');
                          console.log(createOrgRow);
                          console.log(' ');
                          bigquery
                            .createQueryStream(createOrgRow)
                            .on('error', function(err) {
                              callback(1);
                              console.log('##### ERROR : createOrgRow');
                              console.log(err);
                            })
                            .on('data', function(data) {})
                            .on('end', function() {
                              console.log('!!!! Printing i: ' + i);
                              if (flag == 0) {
                                flag = 1;

                                User.find(function(err2, docs2) {
                                  if (err2) {
                                    callback(1);
                                    console.log('##### ERROR : createOrgRow');
                                    console.log(err);
                                  }

                                  var queryList = [];
                                  for (var j = 0; j < docs2.length; j++) {
                                      var currentUser = docs2[j];
                                      console.log('currentUser: ' + currentUser);
                                      var createUserRow =
                                            'INSERT INTO `' +
                                            config.bq_instance +
                                            '.' +
                                            config.bq_dataset +
                                            '.users_2` (user_id, googleID, role) VALUES ("' +
                                            docs2[j]._id +
                                            '","' +
                                            docs2[j].googleID +
                                            '","' +
                                            docs2[j].role +
                                            '")';
                                            console.log(' ');
                                            console.log('*********** createUserRow ');
                                            console.log(createUserRow);
                                            console.log(' ');

                                      queryList.push(createUserRow);

                                      var user_orgs = currentUser.organizations;
                                      console.log('%%%%% curent user : ' + currentUser);
                                      console.log('user_orgs.length :' + user_orgs.length);
                                      console.log('');
                                       for (var k = 0; k < user_orgs.length; k++) {
                                       
                                         var createUserVendorRow =
                                           'INSERT INTO `' +
                                           config.bq_instance +
                                           '.' +
                                           config.bq_dataset +
                                           '.user_vendor_roles_2` (user_id, organization_id) VALUES ("' +
                                           currentUser._id +
                                           '","' +
                                           currentUser.organizations[k]._id +
                                           '")';
                                           console.log(' ');
                                           console.log('*********** createUserVendorRow ');
                                           console.log(createUserVendorRow);
                                           console.log(' ');
                                          queryList.push(createUserVendorRow);

                                         }
                                    }
                                    console.log(' ');
                                    console.log('*********** queryList ');
                                    console.log(queryList);
                                    console.log(' ');
                                    for (var k = 0; k < queryList.length; k++) {
                                      bigquery
                                        .createQueryStream(queryList[k])
                                        .on('error', function(err) {
                                          callback(1);
                                        })
                                        .on('data', function(data) {})
                                        .on('end', function() {
                                          if (k == queryList.length) {
                                            return(1);
                                          }
                                        });
                                    }
                                  });
                                }
                              });
                            }
                          });
                        });
                      });
                    });
                  });
                }


                
/*
var job1 = new CronJob({
  cronTime: '00 59 15 * * 0-6',
  onTick: function() {
    utils.regenerateTables( function(data) {
      console.log(data);
    });
  },
  start: true,
  timeZone: 'America/New_York'
});
*/
};
