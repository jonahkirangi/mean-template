var express = require('express');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');

var app = express();

// DB Configuration
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

// Passport Configuration
require('./config/passport')(passport);

// Express Setup
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use(function(req, res, next) {
  if (req.user) {
    res.cookie('user', JSON.stringify(req.user));
  }
  next();
});

// Passport Setup
app.use(session({ resave: true, saveUninitialized: true, secret: 'jonahkirangijonahkirangijonahkirangi' }));
app.use(passport.initialize());
app.use(passport.session());

// Routing Setup
require('./app/routes.js')(app, passport);

// Start Application
app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});
