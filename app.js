var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var hbs = require('./app/common/hbs_lib');

var app = express();

GLOBAL.app = app;
GLOBAL._ = require('underscore');
_.str = require('underscore.string');

// view engine setup
app.set('views', path.join(__dirname, 'app/', 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(function(req, res){
	if (req.body && typeof req.body === 'object' && '_method' in req.body) {
		var method = req.body._method;
		delete req.body._method;
		return method;
	}
}));
app.use(cookieParser());
app.use(session({secret: 'sess_12702523', key: 'a7-' + Math.random().toString(), cookie: { path: '/', httpOnly: true, maxAge: null }}));
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

require('./app/models/models');
require('./app/controllers/controllers');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;