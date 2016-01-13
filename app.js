var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./server/routes/index');
var create = require('./server/routes/create');
var signup = require('./server/routes/signup');
var viewdictionaries = require('./server/routes/viewdictionaries');
var userRoute = require('./server/routes/userRoute');
var dictionaryRoute = require('./server/routes/dictionaryRoute');
var lemmaRoute = require('./server/routes/lemmaRoute');


var app = express();

// APP SETINGS
// view engine setup
app.set('views', path.join(__dirname, 'server/public/assets/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'server/public')));

// ROUTES
app.use('/', routes);
app.use('/create', create);
app.use('/signup', signup);
app.use('/user', userRoute);
app.use('/viewdictionaries', viewdictionaries);
app.use('/dictionaryRoute', dictionaryRoute);
app.use('/lemmaRoute', lemmaRoute);


//DATABASES
var mongoURI = 'mongodb://localhost:27017/namah';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.once('open', function(err){
  if(err){
    console.log('Error in app.js: ', err)
  }
  console.log('Mongo Connection Open');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
