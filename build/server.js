'use strict';

var _app = require('./src/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process = process,
    PORT = _process.env.PORT;

var port = PORT || 8080;

_app2.default.listen(port, function () {
  console.log('Started at port ' + port + '...');
});