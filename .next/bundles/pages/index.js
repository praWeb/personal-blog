
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(94);

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = __webpack_require__(575);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(552);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/prasannagaddam/code/project/personal-blog/components/CreateUser.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prasannagaddam/code/project/personal-blog/components/CreateUser.js"); } } })();

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(658);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prasannagaddam/code/project/personal-blog/components/Layout.js';

// Components


var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {

      var layoutStyle = {
        margin: 20,
        padding: 20,
        border: '1px solid #DDD'
      };

      return _react2.default.createElement('div', { className: layoutStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), this.props.children);
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/prasannagaddam/code/project/personal-blog/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prasannagaddam/code/project/personal-blog/components/Layout.js"); } } })();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _withData = __webpack_require__(661);

var _withData2 = _interopRequireDefault(_withData);

var _App = __webpack_require__(657);

var _App2 = _interopRequireDefault(_App);

var _CreateUser = __webpack_require__(584);

var _CreateUser2 = _interopRequireDefault(_CreateUser);

var _users = __webpack_require__(668);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/prasannagaddam/code/project/personal-blog/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prasannagaddam/code/project/personal-blog/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(86)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(606);

var _axios2 = _interopRequireDefault(_axios);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__(583);

var _link2 = _interopRequireDefault(_link);

var _Layout = __webpack_require__(585);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prasannagaddam/code/project/personal-blog/pages/App.js';

// Next Components


// Components


var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, ' NextJS Project '), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, this.props.children)));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/prasannagaddam/code/project/personal-blog/pages/App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prasannagaddam/code/project/personal-blog/pages/App.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(86)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/App")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(583);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prasannagaddam/code/project/personal-blog/components/Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {

      var linkStyle = {
        maginRight: 15,
        fontSize: 20
      };

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('a', { style: linkStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, ' Home ')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('a', { style: linkStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, ' About ')), _react2.default.createElement(_link2.default, { href: '/articles', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('a', { style: linkStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, ' Articles ')));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/prasannagaddam/code/project/personal-blog/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prasannagaddam/code/project/personal-blog/components/Header.js"); } } })();

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prasannagaddam/code/project/personal-blog/components/UsersList.js';


// Components

var UsersList = function (_Component) {
  (0, _inherits3.default)(UsersList, _Component);

  function UsersList() {
    (0, _classCallCheck3.default)(this, UsersList);

    return (0, _possibleConstructorReturn3.default)(this, (UsersList.__proto__ || (0, _getPrototypeOf2.default)(UsersList)).apply(this, arguments));
  }

  (0, _createClass3.default)(UsersList, [{
    key: 'render',
    value: function render() {
      var usersList = this.props.usersList || [];

      return _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, usersList.map(function (user) {
        return _react2.default.createElement('li', { key: user.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, ' ', user.email, ' ');
      }));
    }
  }]);

  return UsersList;
}(_react.Component);

exports.default = UsersList;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/prasannagaddam/code/project/personal-blog/components/UsersList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prasannagaddam/code/project/personal-blog/components/UsersList.js"); } } })();

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _reactApollo = __webpack_require__(552);

var _isomorphicFetch = __webpack_require__(647);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = _isomorphicFetch2.default;
}

function create(initialState) {
  return new _reactApollo.ApolloClient({
    initialState: initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: (0, _reactApollo.createNetworkInterface)({
      uri: 'https://api.graph.cool/simple/v1/cj5lex1plibz10134zfh9yqfs', // Server URL (must be absolute)
      opts: { // Additional fetch() options like `credentials` or `headers`
        credentials: 'same-origin'
      }
    })
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/prasannagaddam/code/project/personal-blog/lib/initApollo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prasannagaddam/code/project/personal-blog/lib/initApollo.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57), __webpack_require__(36)))

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(65);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(85);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(552);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _initApollo = __webpack_require__(660);

var _initApollo2 = _interopRequireDefault(_initApollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prasannagaddam/code/project/personal-blog/lib/withData.js';


// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

exports.default = function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    (0, _inherits3.default)(WithData, _React$Component);

    (0, _createClass3.default)(WithData, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo, url, state;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverState = {};

                  // Evaluate the composed component's getInitialProps()

                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (process.browser) {
                    _context.next = 19;
                    break;
                  }

                  apollo = (0, _initApollo2.default
                  // Provide the `url` prop data in case a GraphQL query uses it
                  )();
                  url = { query: ctx.query, pathname: ctx.pathname };
                  _context.prev = 9;
                  _context.next = 12;
                  return (0, _reactApollo.getDataFromTree)(_react2.default.createElement(_reactApollo.ApolloProvider, { client: apollo, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    }
                  }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({ url: url }, composedInitialProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    }
                  }))));

                case 12:
                  _context.next = 16;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context['catch'](9);

                case 16:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  _head2.default.rewind

                  // Extract query data from the Apollo store
                  ();state = apollo.getInitialState();

                  serverState = {
                    apollo: {
                      // Only include the Apollo data state
                      data: state.data
                    }
                  };

                case 19:
                  return _context.abrupt('return', (0, _extends3.default)({
                    serverState: serverState
                  }, composedInitialProps));

                case 20:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[9, 14]]);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithData(props) {
      (0, _classCallCheck3.default)(this, WithData);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithData.__proto__ || (0, _getPrototypeOf2.default)(WithData)).call(this, props));

      _this.apollo = (0, _initApollo2.default)(_this.props.serverState);
      return _this;
    }

    (0, _createClass3.default)(WithData, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.apollo, __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        })));
      }
    }]);

    return WithData;
  }(_react2.default.Component), _class.displayName = 'WithData(' + getComponentDisplayName(ComposedComponent) + ')', _class.propTypes = {
    serverState: _propTypes2.default.object.isRequired
  }, _temp;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/prasannagaddam/code/project/personal-blog/lib/withData.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prasannagaddam/code/project/personal-blog/lib/withData.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)))

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(590);


/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(575);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(552);

var _UsersList = __webpack_require__(659);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/prasannagaddam/code/project/personal-blog/pages/users.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prasannagaddam/code/project/personal-blog/pages/users.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(86)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/users")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

},[667]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3JlYXRlVXNlci5qcz8yOTM0ZTlkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzI5MzRlOWQiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/MjkzNGU5ZCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9BcHAuanM/MjkzNGU5ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz8yOTM0ZTlkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlcnNMaXN0LmpzPzI5MzRlOWQiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXRBcG9sbG8uanM/MjkzNGU5ZCIsIndlYnBhY2s6Ly8vLi9saWIvd2l0aERhdGEuanM/MjkzNGU5ZCIsIndlYnBhY2s6Ly8vLi9wYWdlcy91c2Vycy5qcz8yOTM0ZTlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuZnVuY3Rpb24gU3VibWl0ICh7IGNyZWF0ZVVzZXIgfSkge1xuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBlbWFpbCA9IGUudGFyZ2V0LmVsZW1lbnRzLmVtYWlsLnZhbHVlXG4gICAgbGV0IHBhc3N3b3JkID0gZS50YXJnZXQuZWxlbWVudHMucGFzc3dvcmQudmFsdWVcblxuICAgIGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkKVxuXG4gICAgLy8gcmVzZXQgZm9ybVxuICAgIGUudGFyZ2V0LmVsZW1lbnRzLmVtYWlsLnZhbHVlID0gJydcbiAgICBlLnRhcmdldC5lbGVtZW50cy5wYXNzd29yZC52YWx1ZSA9ICcnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGgxPlN1Ym1pdDwvaDE+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J2VtYWlsJyBuYW1lPSdlbWFpbCcgdHlwZT0gXCJlbWFpbFwiIC8+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3Bhc3N3b3JkJyBuYW1lPSdwYXNzd29yZCcgdHlwZT1cInBhc3N3b3JkXCIvPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBjcmVhdGVVc2VyID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVVc2VyKCRlbWFpbDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gICAgY3JlYXRlVXNlcihhdXRoUHJvdmlkZXI6IHtlbWFpbDoge2VtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmR9fSkge1xuICAgICAgaWRcbiAgICAgIGVtYWlsXG4gICAgICBjcmVhdGVkQXRcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChjcmVhdGVVc2VyLCB7XG4gIHByb3BzOiAoeyBtdXRhdGUgfSkgPT4gKHtcbiAgICBjcmVhdGVVc2VyOiAoZW1haWwsIHBhc3N3b3JkKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IGVtYWlsLCBwYXNzd29yZCB9LFxuICAgICAgdXBkYXRlUXVlcmllczoge1xuICAgICAgICBhbGxVc2VyczogKHByZXZpb3VzUmVzdWx0LCB7IG11dGF0aW9uUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdVc2VyID0gbXV0YXRpb25SZXN1bHQuZGF0YS5jcmVhdGVVc2VyXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyB1c2VyXG4gICAgICAgICAgICBhbGxVc2VyczogW25ld1VzZXIsIC4uLnByZXZpb3VzUmVzdWx0LmFsbFVzZXJzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSkoU3VibWl0KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9DcmVhdGVVc2VyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBsYXlvdXRTdHlsZT0ge1xuICAgICAgbWFyZ2luOiAyMCxcbiAgICAgIHBhZGRpbmc6IDIwLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBsYXlvdXRTdHlsZSB9PlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyIsImltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5pbXBvcnQgQ3JlYXRlVXNlciBmcm9tICcuLi9jb21wb25lbnRzL0NyZWF0ZVVzZXInXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi91c2VycydcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoKHByb3BzKSA9PiAoXG4gIDxBcHA+XG4gICAgPENyZWF0ZVVzZXIvPlxuICAgIC8vIDxVc2Vycy8+XG4gIDwvQXBwPlxuKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4vLyBOZXh0IENvbXBvbmVudHNcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IExheW91dCBmcm9tICcuLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+IE5leHRKUyBQcm9qZWN0IDwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICA8L0hlYWQ+XG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL0FwcC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgbGlua1N0eWxlID0ge1xuICAgICAgbWFnaW5SaWdodDogMTUsXG4gICAgICBmb250U2l6ZTogMjBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIFx0PExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIFx0ICA8YSBzdHlsZT17IGxpbmtTdHlsZSB9PiBIb21lIDwvYT5cbiAgICAgIFx0PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICBcdCAgPGEgc3R5bGU9eyBsaW5rU3R5bGUgfT4gQWJvdXQgPC9hPlxuICAgICAgXHQ8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYXJ0aWNsZXNcIj5cbiAgICAgIFx0ICA8YSBzdHlsZT17IGxpbmtTdHlsZSB9PiBBcnRpY2xlcyA8L2E+XG4gICAgICBcdDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbi8vIENvbXBvbmVudHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHVzZXJzTGlzdCA9IHRoaXMucHJvcHMudXNlcnNMaXN0IHx8IFtdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICB7XG4gICAgICAgICAgdXNlcnNMaXN0Lm1hcCggdXNlciA9PiA8bGkga2V5PXsgdXNlci5pZCB9PiB7IHVzZXIuZW1haWwgfSA8L2xpPilcbiAgICAgICAgfVxuICAgICAgPC91bD5cblxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Vc2Vyc0xpc3QuanMiLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxubGV0IGFwb2xsb0NsaWVudCA9IG51bGxcblxuLy8gUG9seWZpbGwgZmV0Y2goKSBvbiB0aGUgc2VydmVyICh1c2VkIGJ5IGFwb2xsby1jbGllbnQpXG5pZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICBnbG9iYWwuZmV0Y2ggPSBmZXRjaFxufVxuXG5mdW5jdGlvbiBjcmVhdGUgKGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHNzck1vZGU6ICFwcm9jZXNzLmJyb3dzZXIsIC8vIERpc2FibGVzIGZvcmNlRmV0Y2ggb24gdGhlIHNlcnZlciAoc28gcXVlcmllcyBhcmUgb25seSBydW4gb25jZSlcbiAgICBuZXR3b3JrSW50ZXJmYWNlOiBjcmVhdGVOZXR3b3JrSW50ZXJmYWNlKHtcbiAgICAgIHVyaTogJ2h0dHBzOi8vYXBpLmdyYXBoLmNvb2wvc2ltcGxlL3YxL2NqNWxleDFwbGliejEwMTM0emZoOXlxZnMnLCAvLyBTZXJ2ZXIgVVJMIChtdXN0IGJlIGFic29sdXRlKVxuICAgICAgb3B0czogeyAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEFwb2xsbyAoaW5pdGlhbFN0YXRlKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgY2xpZW50IGZvciBldmVyeSBzZXJ2ZXItc2lkZSByZXF1ZXN0IHNvIHRoYXQgZGF0YVxuICAvLyBpc24ndCBzaGFyZWQgYmV0d2VlbiBjb25uZWN0aW9ucyAod2hpY2ggd291bGQgYmUgYmFkKVxuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBjcmVhdGUoaW5pdGlhbFN0YXRlKVxuICB9XG5cbiAgLy8gUmV1c2UgY2xpZW50IG9uIHRoZSBjbGllbnQtc2lkZVxuICBpZiAoIWFwb2xsb0NsaWVudCkge1xuICAgIGFwb2xsb0NsaWVudCA9IGNyZWF0ZShpbml0aWFsU3RhdGUpXG4gIH1cblxuICByZXR1cm4gYXBvbGxvQ2xpZW50XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5pdEFwb2xsby5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgaW5pdEFwb2xsbyBmcm9tICcuL2luaXRBcG9sbG8nXG5cbi8vIEdldHMgdGhlIGRpc3BsYXkgbmFtZSBvZiBhIEpTWCBjb21wb25lbnQgZm9yIGRldiB0b29sc1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50RGlzcGxheU5hbWUgKENvbXBvbmVudCkge1xuICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb3NlZENvbXBvbmVudCA9PiB7XG4gIHJldHVybiBjbGFzcyBXaXRoRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gYFdpdGhEYXRhKCR7Z2V0Q29tcG9uZW50RGlzcGxheU5hbWUoQ29tcG9zZWRDb21wb25lbnQpfSlgXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIHNlcnZlclN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzIChjdHgpIHtcbiAgICAgIGxldCBzZXJ2ZXJTdGF0ZSA9IHt9XG5cbiAgICAgIC8vIEV2YWx1YXRlIHRoZSBjb21wb3NlZCBjb21wb25lbnQncyBnZXRJbml0aWFsUHJvcHMoKVxuICAgICAgbGV0IGNvbXBvc2VkSW5pdGlhbFByb3BzID0ge31cbiAgICAgIGlmIChDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgY29tcG9zZWRJbml0aWFsUHJvcHMgPSBhd2FpdCBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgICAgfVxuXG4gICAgICAvLyBSdW4gYWxsIEdyYXBoUUwgcXVlcmllcyBpbiB0aGUgY29tcG9uZW50IHRyZWVcbiAgICAgIC8vIGFuZCBleHRyYWN0IHRoZSByZXN1bHRpbmcgZGF0YVxuICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgY29uc3QgYXBvbGxvID0gaW5pdEFwb2xsbygpXG4gICAgICAgIC8vIFByb3ZpZGUgdGhlIGB1cmxgIHByb3AgZGF0YSBpbiBjYXNlIGEgR3JhcGhRTCBxdWVyeSB1c2VzIGl0XG4gICAgICAgIGNvbnN0IHVybCA9IHtxdWVyeTogY3R4LnF1ZXJ5LCBwYXRobmFtZTogY3R4LnBhdGhuYW1lfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFJ1biBhbGwgR3JhcGhRTCBxdWVyaWVzXG4gICAgICAgICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKFxuICAgICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cbiAgICAgICAgICAgICAgPENvbXBvc2VkQ29tcG9uZW50IHVybD17dXJsfSB7Li4uY29tcG9zZWRJbml0aWFsUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBQcmV2ZW50IEFwb2xsbyBDbGllbnQgR3JhcGhRTCBlcnJvcnMgZnJvbSBjcmFzaGluZyBTU1IuXG4gICAgICAgICAgLy8gSGFuZGxlIHRoZW0gaW4gY29tcG9uZW50cyB2aWEgdGhlIGRhdGEuZXJyb3IgcHJvcDpcbiAgICAgICAgICAvLyBodHRwOi8vZGV2LmFwb2xsb2RhdGEuY29tL3JlYWN0L2FwaS1xdWVyaWVzLmh0bWwjZ3JhcGhxbC1xdWVyeS1kYXRhLWVycm9yXG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0RGF0YUZyb21UcmVlIGRvZXMgbm90IGNhbGwgY29tcG9uZW50V2lsbFVubW91bnRcbiAgICAgICAgLy8gaGVhZCBzaWRlIGVmZmVjdCB0aGVyZWZvcmUgbmVlZCB0byBiZSBjbGVhcmVkIG1hbnVhbGx5XG4gICAgICAgIEhlYWQucmV3aW5kKClcblxuICAgICAgICAvLyBFeHRyYWN0IHF1ZXJ5IGRhdGEgZnJvbSB0aGUgQXBvbGxvIHN0b3JlXG4gICAgICAgIGNvbnN0IHN0YXRlID0gYXBvbGxvLmdldEluaXRpYWxTdGF0ZSgpXG5cbiAgICAgICAgc2VydmVyU3RhdGUgPSB7XG4gICAgICAgICAgYXBvbGxvOiB7XG4gICAgICAgICAgICAvLyBPbmx5IGluY2x1ZGUgdGhlIEFwb2xsbyBkYXRhIHN0YXRlXG4gICAgICAgICAgICBkYXRhOiBzdGF0ZS5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlcnZlclN0YXRlLFxuICAgICAgICAuLi5jb21wb3NlZEluaXRpYWxQcm9wc1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICB0aGlzLmFwb2xsbyA9IGluaXRBcG9sbG8odGhpcy5wcm9wcy5zZXJ2ZXJTdGF0ZSlcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17dGhpcy5hcG9sbG99PlxuICAgICAgICAgIDxDb21wb3NlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi93aXRoRGF0YS5qcyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgVXNlcnNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnNMaXN0LmpzJ1xuXG5mdW5jdGlvbiBVc2Vycyh7IGRhdGE6IHsgbG9hZGluZywgYWxsVXNlcnMgfSB9KSB7XG4gIGlmKGxvYWRpbmcpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PiAuLi4uIExvYWRpbmcuLi4uLiA8L2Rpdj5cbiAgICApXG4gIH1lbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8aDE+IFJlZ2lzdGVyZWQgVXNlcnMgPC9oMT5cbiAgICAgICAgICA8VXNlcnNMaXN0IHVzZXJzTGlzdCA9IHthbGxVc2Vyc30gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoXG4gIGdxbGBcbiAgICBxdWVyeSBhbGxVc2VycyB7XG4gICAgICBhbGxVc2VycyB7XG4gICAgICAgIGlkXG4gICAgICAgIGVtYWlsXG4gICAgICB9XG4gICAgfVxuICBgXG4pKFVzZXJzKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdXNlcnMuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUpBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7Ozs7QUFaQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7Ozs7O0FBZEE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBREE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7OztBQXZCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7Ozs7QUFiQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBOztBQUdBO0FBQUE7O0FBRUE7QUFFQTtBQUlBO0FBTEE7QUFEQTtBQUhBO0FBV0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFNQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQVhBO0FBQ0E7QUFVQTtBQVhBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFZQTtBQUNBO0FBREE7QUFaQTtBQUNBO0FBREE7QUFpQkE7QUFqQkE7QUFBQTtBQWtCQTtBQUNBO0FBbkJBO0FBb0JBO0FBREE7QUFuQkE7QUFBQTtBQUFBO0FBd0JBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUdBO0FBQ0E7OztBQUlBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUExQ0E7O0FBQUE7QUFpREE7QUFDQTtBQWxEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBc0RBO0FBdERBO0FBQ0E7QUFxREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUF6REE7QUFDQTs7QUFEQTtBQTREQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFHQTtBQUhBO0FBQUE7QUE5REE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFNQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFIQTs7QUFJQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        