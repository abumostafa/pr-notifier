'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routes = require('./module/webhook/github/routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _routes3 = require('./module/webhook/slack/routes.js');

var _routes4 = _interopRequireDefault(_routes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (router) {
  (0, _routes2.default)(router);
  (0, _routes4.default)(router);
  router.get('/ping', function (req, res) {
    return res.json({ "pong": "ok" });
  });
  router.get('/', function (req, res) {
    return res.json({ "data": "Welcome Home!!" });
  });
  router.get('*', function (req, res) {
    return res.status(404);
  });

  return router;
};