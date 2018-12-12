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

var {google} = require('googleapis');
const {OAuth2Client} = require('google-auth-library');
const async = require('async');

var config = require('./config');
const Permission = require('../models/permission');

module.exports = {

  buildPermissionsQuery: function(bq_instance, bq_dataset, bq_client_data_perms, organization_id_list, identifier, identifierType, condition, token) {

    var updateRow = 'UPDATE `' + bq_instance + '.' + bq_dataset + '.' + bq_client_data_perms + '` SET Permissions = [';

    for (var i = 0; i < (organization_id_list.length - 1); i++) {
        updateRow += '"' + organization_id_list[i] + '",';
    }

    updateRow += '"' + organization_id_list[organization_id_list.length - 1] + '"] WHERE ' + identifier + ' ';

    if (condition === 'contains') {
       updateRow += 'like "%' + token + '%"';
    }
    else if (condition === 'equals') {

       if (identifierType === "STRING") {
         updateRow += '= "' + token + '"';
       }
       else {
         updateRow += '= ' + token;
       }
    }
    else if (condition === 'excludes') {

      if (identifierType === "STRING") {
        updateRow += '<> "' + token + '"';
      }
      else {
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

    const drive = google.drive({version: 'v3', auth: oAuth2Client });

    if (revoke == 0) {

      console.log("Sharing report...");

      async.eachSeries(permissions, function (permission, callback) {
        drive.permissions.create({
            resource: permission,
            fileId: file_id,
            fields: 'id',
          }, function (err, res) {
            if (err) {
              // Handle error...
              console.log(err);
              callback(1);
            } else {
              console.log(res.status);
              console.log("Saving permissions...");

              var permObj = { "fileId": file_id, "googleID": permission.emailAddress, "drivePermId": res.data.id };
              Permission.create(permObj, function(err3, res3) {
                if (err3) {
                  console.log(err3);
                  callback(1);
                }
              });

              if (res.status == 200) {
                console.log("Sharing report finished...");
                callback(0);
              }
              else {
                callback(1);
              }
            }
          });
        }, function (err) {
              if (err) {
                // Handle error
                console.error(err);
                callback(1);
              } else {
                // All permissions inserted
              }
        });
    }
    else {

      console.log("Revoking shared report...");
      async.eachSeries(permissions, function (permission, callback) {
          drive.permissions.delete({
              fileId: permission.fileId,
              permissionId: permission.drivePermId
            }, function (err, res) {
              if (err) {
                // Handle error...
                console.log(err);
                callback(1);
              } else {
                console.log(res.status);
                console.log("Removing permissions...");

                if (res.status == 204) {

                    Permission.deleteOne({ drivePermId: permission.drivePermId }, function(err4, docs1) {
                      if (err4) {
                        callback(1);
                      }
                      callback(0);
                    });
                }
              }
            });
         });
    }
  }
};
