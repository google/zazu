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
    bq_instance:  process.env.bq_instance,
    bq_dataset: process.env.bq_dataset,
    bq_client_dataset: process.env.bq_client_dataset,
    bq_views_dataset: process.env.bq_views_dataset,
    bq_client_data_base: process.env.bq_client_data_base,
    bq_client_data_perms: process.env.bq_client_data_base + '_perms',

    google_client_id: process.env.google_client_id,
    google_client_secret: process.env.google_client_secret,
    session_secret: process.env.session_secret,
    https_key_filename: process.env.https_key_filename,
    https_cert_filename: process.env.https_cert_filename,
    https_passphrase: process.env.https_passphrase,

    mongo_connection_string: process.env.mongo_connection_string //'mongodb://zazuadmin:vendorcoop@localhost/zazu'
}



