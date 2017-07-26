'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _UsersList = require('../components/UsersList.js');

var _UsersList2 = _interopRequireDefault(_UsersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prasannagaddam/code/project/personal-blog/pages/users.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    query allUsers {\n      allUsers {\n        id\n        email\n      }\n    }\n  '], ['\n    query allUsers {\n      allUsers {\n        id\n        email\n      }\n    }\n  ']);

// Components


function Users(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      allUsers = _ref$data.allUsers;

  if (loading) {
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, ' .... Loading..... ');
  } else {
    return _react2.default.createElement('section', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, _react2.default.createElement('h1', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, ' Registered Users '), _react2.default.createElement(_UsersList2.default, { usersList: allUsers, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }));
  }
}

exports.default = (0, _reactApollo.graphql)((0, _reactApollo.gql)(_templateObject))(Users);