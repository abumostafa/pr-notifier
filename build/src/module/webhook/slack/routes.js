'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controller = require('./controller');

exports.default = function (router) {
  router.post('/webhook/slack', _controller.post);
  router.get('/webhook/slack/events', _controller.listEvents);
  return router;
};