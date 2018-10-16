'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongo = require('./utils/mongo');

var _mongo2 = _interopRequireDefault(_mongo);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _repository = require('./repository');

var _repository2 = _interopRequireDefault(_repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create an app
var app = (0, _express2.default)();
var _process = process,
    MONGODB_URI = _process.env.MONGODB_URI;

// configure body parser

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// configure db
var db = (0, _mongo2.default)(_mongoose2.default, MONGODB_URI);
var models = (0, _model2.default)(db);
var repositories = (0, _repository2.default)(models);
app.use(function (req, res, next) {
  req.models = models;
  req.repositories = repositories;
  next();
});

// configure routes
app.use('/', (0, _routes2.default)(_express2.default.Router()));

// handle server errors
app.use(function (_ref, req, res, next) {
  var message = _ref.message;
  return res.status(500).json({ error: { message: message } });
});

exports.default = app;