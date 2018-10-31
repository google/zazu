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
    bq_instance: /* process.env.bq_instance, */ 'google.com:zazu-192416',
    bq_dataset: /* process.env.bq_dataset, */ 'Zazu_Config_Data',
    bq_client_dataset: /* process.env.bq_client_dataset, */ 'Report_Data',
    bq_views_dataset: /* process.env.bq_views_dataset, */ 'Accessible_Views',
    bq_client_data_base: /* process.env.bq_client_data_base, */ 'adwords_campaign_performance_data',
    bq_client_data_perms: /* process.env.bq_client_data_base + '_perms', */ 'adwords_campaign_performance_data_perms',
 
    google_client_id: /* process.env.google_client_id,*/  "898955626143-v6cv3u0mpl7bvad4q2ufbqfpgnt6cjhd.apps.googleusercontent.com",
    google_client_secret: /* process.env.google_client_secret, */ "rgH0QpFwEAZ_9zSz5eL1lIad",
    session_secret: /* process.env.session_secret, */ 'JM was here!!!',
    https_key_filename: /* process.env.https_key_filename, */ 'zazu.key',
    https_cert_filename: /* process.env.https_cert_filename, */ 'zazu.crt',
    https_passphrase: /* process.env.https_passphrase,*/ 'zazu',
 
    mongo_connection_string: /* process.env.mongo_connection_string */ /*'mongodb://zazuappusr:zazuvendorcoop@zazu-db.c.zazudemo.internal/zazu'*/ 'mongodb://jmtest:jmtestpwd@35.196.249.30/zazuv2',
    access_token: ''
 }
 
