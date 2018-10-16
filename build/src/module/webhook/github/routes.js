'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controller = require('./controller');

exports.default = function (router) {
  router.post('/webhook/github', _controller.post);
  router.get('/webhook/github/events', _controller.listEvents);
  return router;
};