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
    bq_instance: '<your_Big_Query_instance>',
    bq_dataset: '<your_Big_Query_admin_config_dataset>',
    bq_client_dataset: '<your_Big_Query_client_dataset>',
    bq_views_dataset: '<your_Big_Query_view_dataset>',
    bq_client_data_base: '<your_Big_Query_client_data_table_name>',
    bq_client_data_perms: '<your_Big_Query_client_data_table_name_replica_with_permissions>',

    google_client_id: "<your_Google_oAuth_client_id>",
    google_client_secret: "<your_Google_oAuth_client_secret>",

    mongo_connection_string: '<your_mongodb_connection_string_with_admin_username_password_database_included>'
}
