'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _CreateUser = require('../components/CreateUser');

var _CreateUser2 = _interopRequireDefault(_CreateUser);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prasannagaddam/code/project/personal-blog/pages/index.js?entry';
exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_CreateUser2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), '// ', _react2.default.createElement(_users2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }));
});