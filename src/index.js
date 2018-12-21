const express = require('express');
var session = require('express-session');
const path = require('path');
const https = require('https');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var passport = require('passport');
var fs = require('fs');
//var sleep = require('sleep');
var CronJob = require('cron').CronJob;
var {google} = require('googleapis');
var config = require('./utilities/config');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('./models/user');

const BigQuery = require('@google-cloud/bigquery');
const bigquery = new BigQuery();

// Get our API routes
const api = require('./routes/api');

const GOOGLE_CLIENT_ID = config.google_client_id;
const GOOGLE_CLIENT_SECRET = config.google_client_secret;

const app = express();

app.use(express.static('front-end/dist/front-end'));



app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(config.mongo_connection_string);

passport.serializeUser(function(user, done) {
    var userRoleId = { 'id': user.id, 'role': user.role };
    done(null, userRoleId);
});

// used to deserialize the user
passport.deserializeUser(function(userRoleId, done) {
    User.findById(userRoleId.id, function(err, user) {
        done(err, user);
    });
});

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {

       User.findOne({ googleID: profile.emails[0].value.toLowerCase() }, function (err, user) {
         if (err) {
           return done(err);
         }
         if (user) {
            // if a user is found, log them in
            config.access_token = accessToken;
            return done(null, user);
         }
         else {
           return done("User doesn't have access to the application.");
         }
       });
  }
));

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

app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email', 'https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/bigquery', 'https://www.googleapis.com/auth/cloud-platform'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', {
        successRedirect : '/',
        failureRedirect : '/'
  })
);

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

    var permsList = [];

    for (var j = 0; j < curr_rule.organization.length; j++) {
      var findId = 'SELECT organization_id FROM `' + bq_instance + '.' + bq_dataset + '.vendors_2` WHERE organization = "' + curr_rule.organization[j] + '"';

      bigquery.query(findId, function(err, rows) {
          if (err) {
            console.log(err);
            return 1;
          }
          else {
            permsList.push(rows[0].organization_id);

            var updateRow = utils.buildPermissionsQuery(bq_instance, bq_client_dataset, bq_client_data_perms, permsList, curr_rule.identifier, curr_rule.identifierType, curr_rule.condition, curr_rule.token);

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
      })

    }

}

var job = new CronJob({
    cronTime: '00 30 23 * * 0-6',
    onTick: function() {

      var dataset = bigquery.dataset(config.bq_client_dataset);
      const dest_table = dataset.table(config.bq_client_data_perms);
      const orig_table = dataset.table(config.bq_client_data_base);

      dest_table.delete(function(err, apiResponse) {

        if ((err)&&(err.code != 404)) {
          console.log(err.message);
        }
        else {
            orig_table.copy(dest_table, function(err1, apiResponse1) {

               if (err1) {
                 console.log(err1.message);
               }
               else {
                 dest_table.getMetadata().then(function(data) {
                     var metadata = data[0];
                     var new_schema = metadata.schema.fields;

                     new_schema.push({ name: "Permissions", type: "STRING", mode: "REPEATED" });
                     metadata.schema.fields = new_schema;

                     dest_table.setMetadata(metadata, function(err2, metadata, apiResponse2) {

                       if (err2) {
                         console.log(err2.message);
                       }
                       else {

                         Rule.find(function(err, docs) {
                             if (err) {
                               console.log("Rule list retrieved error.");
                             }

                            for (var i = 0; i < docs.length; i++) {
                                sleep.sleep(30);
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
