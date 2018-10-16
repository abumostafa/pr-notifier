'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GithubEvent = require('./GithubEvent');

var _GithubEvent2 = _interopRequireDefault(_GithubEvent);

var _SlackEvent = require('./SlackEvent');

var _SlackEvent2 = _interopRequireDefault(_SlackEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var models = function models(mongoose) {
  return {
    GithubEvent: mongoose.model('GithubEvent', (0, _GithubEvent2.default)(mongoose.Schema)),
    SlackEvent: mongoose.model('SlackEvent', (0, _SlackEvent2.default)(mongoose.Schema))
  };
};

exports.default = models;