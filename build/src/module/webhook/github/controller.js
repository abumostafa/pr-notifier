"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listEvents = exports.post = undefined;

var _handler = require("./handler");

var post = exports.post = function post(req, res, next) {
  (0, _handler.receiveEvent)(req.models.GithubEvent, req.body).then(function () {
    return res.json({ "data": "I'm web hook" });
  }).catch(next);
};

var listEvents = exports.listEvents = function listEvents(req, res, next) {
  (0, _handler.fetchEvents)(req.repositories.GithubEventRepository).then(function (events) {
    return res.json(events);
  }).catch(next);
};