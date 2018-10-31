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
  }
};
