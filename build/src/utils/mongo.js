"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (mongoose, mongoURL) {
  mongoose.connect(mongoURL, { useNewUrlParser: true });
  return mongoose;
};