"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var receiveEvent = exports.receiveEvent = function receiveEvent(GithubEvent, content) {
  return new Promise(function (resolve, reject) {

    try {
      var onDone = function onDone(err) {
        return !err ? resolve && resolve() : reject && reject(err);
      };
      var githubEvent = new GithubEvent({
        content: JSON.stringify(content),
        createdAt: new Date()
      });
      githubEvent.save(onDone);
    } catch (e) {
      return reject && reject(e);
    }
  });
};

var fetchEvents = exports.fetchEvents = function fetchEvents(GithubEventRepository) {
  return GithubEventRepository.all().then(function (events) {
    return events.map(function (_ref) {
      var content = _ref.content;
      return JSON.parse(content);
    });
  });
};