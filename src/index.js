const express = require('express');
var session = require('express-session');
const path = require('path');
const https = require('https');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var fs = require('fs');
var sleep = require('system-sleep');
var CronJob = require('cron').CronJob;
var {google} = require('googleapis');
var config = require('./utilities/config');

var User = require('./models/user');
var Rule = require('./models/rule');

// ***** TEMP *********
var utils = require('./utilities/utils');


const BigQuery = require('@google-cloud/bigquery');
const bigquery = new BigQuery();

// Get our API routes
const api = require('./routes/api');

const GOOGLE_CLIENT_ID = config.google_client_id;
const GOOGLE_CLIENT_SECRET = config.google_client_secret;

const app = express();

app.use(express.static('front-end/dist/front-end'));

mongoose.connect(config.mongo_connection_string);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: config.session_secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true, maxAge: 3600000 }
}))

// Set our api routes
app.use('/api', api);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */

 var options = {
   key  : fs.readFileSync(path.join(__dirname, 'encryption/' + config.https_key_filename)),
   cert : fs.readFileSync(path.join(__dirname, 'encryption/' + config.https_cert_filename)),
   passphrase: config.https_passphrase
};

const server = https.createServer(options, app);

server.listen(port, () => console.log(`API running on localhost:${port}`));


app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../front-end/dist/front-end/index.html'));
});

function applyRule(curr_rule, bq_instance, bq_dataset, bq_client_dataset, bq_client_data_perms) {

  var permsList = [curr_rule.organization._id];

  var updateRow = utils.buildPermissionsQuery(bq_instance, bq_client_dataset, bq_client_data_perms, permsList, curr_rule.identifier.name, curr_rule.identifier.identifierType, curr_rule.condition, curr_rule.token);

  bigquery.query(updateRow, function(err2, rows2) {
    if (err2) {
      console.log(err2);
      return 1;
    }
    else {
      console.log("Successfully refreshed permissions table.");
      return 0;
    }
  })

}

var job = new CronJob({
    cronTime: '00 30 23 * * 0-6',
    onTick: function() {

      console.log("Start of rules refresh");

      var dataset = bigquery.dataset(config.bq_client_dataset);
      const dest_table = dataset.table(config.bq_client_data_perms);
      const orig_table = dataset.table(config.bq_client_data_base);

      dest_table.delete(function(err, apiResponse) {
        console.log("Delete table");
        if ((err)&&(err.code != 404)) {
          console.log(err.message);
        }
        else {
            orig_table.copy(dest_table, function(err1, apiResponse1) {
              console.log("Copy table");
               if (err1) {
                 console.log(err1.message);
               }
               else {
                 dest_table.getMetadata().then(function(data) {
                     console.log("Fetch metadata");
                     var metadata = data[0];
                     var new_schema = metadata.schema.fields;

                     new_schema.push({ name: "Permissions", type: "STRING", mode: "REPEATED" });
                     metadata.schema.fields = new_schema;

                     dest_table.setMetadata(metadata, function(err2, metadata, apiResponse2) {
                       console.log("Change metadata");
                       if (err2) {
                         console.log(err2.message);
                       }
                       else {

                         Rule.find(function(err, docs) {
                             if (err) {
                               console.log("Rule list retrieved error.");
                             }
                            console.log("Apply rules");
                            for (var i = 0; i < docs.length; i++) {
                                sleep(30000);
                                setTimeout(applyRule, 30000, docs[i], config.bq_instance, config.bq_dataset, config.bq_client_dataset, config.bq_client_data_perms);
                            }
                        });

                       }
                     });
                 });
               }
            });
        }
      });
    },
    start: true,
    timeZone: 'America/New_York'
});



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
