"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listEvents = exports.post = undefined;

var _handler = require("./handler");

var post = exports.post = function post(req, res, next) {
  (0, _handler.receiveEvent)(req.models.SlackEvent, req.body).then(function () {
    return req.body.challenge ? res.send(req.body.challenge) : res.json({ "data": "I'm web hook" });
  }).catch(next);
};

var listEvents = exports.listEvents = function listEvents(req, res, next) {
  (0, _handler.fetchEvents)(req.repositories.SlackEventRepository).then(function (events) {
    return res.json(events);
  }).catch(next);
};