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
