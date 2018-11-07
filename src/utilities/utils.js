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

var config = require('./config');

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

  shareReport: function(file_id, user_email, revoke, callback) {

    const oAuth2Client = new OAuth2Client();

    oAuth2Client.credentials = {
       access_token: config.access_token
    };

    const drive = google.drive({version: 'v3', auth: oAuth2Client });

    var permission =
      {
        'type': 'user',
        'role': 'reader',
        'emailAddress': user_email
      };
    if (revoke == 0) {

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
            if (res.status == 200) {
              callback(0);
            }
            else {
              callback(1);
            }
          }
        });
    }
    else {
      drive.permissions.delete({
          resource: permission,
          fileId: file_id,
          fields: 'id',
        }, function (err, res) {
          if (err) {
            // Handle error...
            console.log(err);
            callback(1);
          } else {
            if (res.status == 200) {
              callback(0);
            }
            else {
              callback(1);
            }
          }
        });
    }
  }
};
