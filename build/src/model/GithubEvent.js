"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Schema) {
  return new Schema({
    content: String,
    createdAt: Date
  });
};