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

// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var orgSchema = new Schema({
  name: { type: String, required: true },
  categories: { type: [String], required: true },
  reportsCount: { type: Number, required: true }, // number of reports in this org
  usersCount: { type: Number, required: true }, // number of users that have access to this org
  datarulesCount: { type: Number, required: true }, // number of datarules in this org
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Organization = mongoose.model('Organization', orgSchema);

// make this available to our users in our Node applications
module.exports = Organization;
