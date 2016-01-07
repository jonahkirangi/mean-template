var express = require('express');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// Express Setup
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// Error handling #1
app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

// Error handling #2
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.sendStatus(500, { message: err.message });
});

// Start Application
app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});
