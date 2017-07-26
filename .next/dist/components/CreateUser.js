'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prasannagaddam/code/project/personal-blog/components/CreateUser.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation createUser($email: String!, $password: String!) {\n    createUser(authProvider: {email: {email: $email, password: $password}}) {\n      id\n      email\n      createdAt\n    }\n  }\n'], ['\n  mutation createUser($email: String!, $password: String!) {\n    createUser(authProvider: {email: {email: $email, password: $password}}) {\n      id\n      email\n      createdAt\n    }\n  }\n']);

function Submit(_ref) {
  var createUser = _ref.createUser;

  function handleSubmit(e) {
    e.preventDefault();

    var email = e.target.elements.email.value;
    var password = e.target.elements.password.value;

    createUser(email, password

    // reset form
    );e.target.elements.email.value = '';
    e.target.elements.password.value = '';
  }

  return _react2.default.createElement('form', { onSubmit: handleSubmit, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Submit'), _react2.default.createElement('input', { placeholder: 'email', name: 'email', type: 'email', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement('input', { placeholder: 'password', name: 'password', type: 'password', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('button', { type: 'submit', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'Submit'));
}

var createUser = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(createUser, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createUser: function createUser(email, password) {
        return mutate({
          variables: { email: email, password: password },
          updateQueries: {
            allUsers: function allUsers(previousResult, _ref3) {
              var mutationResult = _ref3.mutationResult;

              var newUser = mutationResult.data.createUser;
              return (0, _assign2.default)({}, previousResult, {
                // Append the new user
                allUsers: [newUser].concat((0, _toConsumableArray3.default)(previousResult.allUsers))
              });
            }
          }
        });
      }
    };
  }
})(Submit);