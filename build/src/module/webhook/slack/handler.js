"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var receiveEvent = exports.receiveEvent = function receiveEvent(SlackEvent, content) {
  return new Promise(function (resolve, reject) {

    try {
      var onDone = function onDone(err) {
        return !err ? resolve && resolve() : reject && reject(err);
      };
      var slackEvent = new SlackEvent({
        content: JSON.stringify(content),
        createdAt: new Date()
      });
      slackEvent.save(onDone);
    } catch (e) {
      return reject && reject(e);
    }
  });
};

var fetchEvents = exports.fetchEvents = function fetchEvents(slackEventRepository) {
  return slackEventRepository.all().then(function (events) {
    return events.map(function (_ref) {
      var content = _ref.content;
      return JSON.parse(content);
    });
  });
};