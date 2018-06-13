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
    bq_instance:  process.env.bq_instance, //'google.com:zazu-192416',
    bq_dataset: process.env.bq_dataset, //'Zazu_Config_Data',
    bq_client_dataset: process.env.bq_client_dataset, //'Report_Data',
    bq_views_dataset: process.env.bq_views_dataset, //'Accessible_Views',
    bq_client_data_base: process.env.bq_client_data_base, //'adwords_campaign_performance_data_base',
    bq_client_data_perms: process.env.bq_client_data_perms, //'adwords_campaign_performance_data',

    google_client_id: process.env.google_client_id, //"58964490273-2vuja9gq2ahe79t34nb90t5nfa559id4.apps.googleusercontent.com",
    google_client_secret: process.env.google_client_secret, //"XBmpfdoFkMrno481lOY50AcG",
    session_secret: process.env.session_secret, //'JM was here!!!'
    https_key_filename: process.env.https_key_filename, //'zazu.key'
    https_cert_filename: process.env.https_cert_filename, //'zazu.crt'
    
    mongo_connection_string: process.env.mongo_connection_string //'mongodb://zazuadmin:vendorcoop@localhost/zazu'
}
