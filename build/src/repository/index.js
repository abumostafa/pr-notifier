'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GithubEventRepository = require('./GithubEventRepository');

var _GithubEventRepository2 = _interopRequireDefault(_GithubEventRepository);

var _SlackEventRepository = require('./SlackEventRepository');

var _SlackEventRepository2 = _interopRequireDefault(_SlackEventRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (models) {
  return {
    GithubEventRepository: (0, _GithubEventRepository2.default)(models.GithubEvent),
    SlackEventRepository: (0, _SlackEventRepository2.default)(models.SlackEvent)
  };
};