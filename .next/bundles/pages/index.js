
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _withData = __webpack_require__(652);

var _withData2 = _interopRequireDefault(_withData);

var _App = __webpack_require__(648);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prasannagaddam/code/project/personal-blog/pages/index.js?entry';
exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  });
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

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(65);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _style = __webpack_require__(656);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(603);

var _axios2 = _interopRequireDefault(_axios);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__(581);

var _link2 = _interopRequireDefault(_link);

var _Layout = __webpack_require__(650);

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
      var shows = this.props.shows || [];

      var shows_list = _react2.default.createElement('ul', {
        'data-jsx': 2133768109,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, shows.map(function (show) {
        return _react2.default.createElement('li', { key: show.show.id, 'data-jsx': 2133768109,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, _react2.default.createElement(_link2.default, { as: '/p/' + show.show.id, href: '/post?id=' + show.show.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, _react2.default.createElement('a', {
          'data-jsx': 2133768109,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, ' ', show.show.name, ' ')));
      }), _react2.default.createElement(_style2.default, {
        styleId: 2133768109,
        css: 'li[data-jsx="2133768109"]{list-style:none;margin:5px 0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ21CLEFBRzRCLGlCQUF5QixjQUFVIiwiZmlsZSI6InBhZ2VzL0FwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJhc2FubmFnYWRkYW0vY29kZS9wcm9qZWN0L3BlcnNvbmFsLWJsb2ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbi8vIE5leHQgQ29tcG9uZW50c1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgIHJldHVybiB7IHNob3dzOiByZXNwb25zZS5kYXRhIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2hvd3MgPSB0aGlzLnByb3BzLnNob3dzIHx8IFtdXG5cbiAgICBsZXQgc2hvd3NfbGlzdCA9IDx1bD5cbiAgICAgICB7IHNob3dzLm1hcCgoc2hvdykgPT4gKFxuICAgICAgICAgPGxpIGtleT17IHNob3cuc2hvdy5pZCB9PlxuICAgICAgICAgICA8TGluayBhcz17YC9wLyR7IHNob3cuc2hvdy5pZCB9YH0gaHJlZj17YC9wb3N0P2lkPSR7IHNob3cuc2hvdy5pZCB9YH0+XG4gICAgICAgICAgICAgPGE+IHsgc2hvdy5zaG93Lm5hbWUgfSA8L2E+XG4gICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgIDwvbGk+XG4gICAgICAgKSl9XG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgbGkge1xuICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgfVxuICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3VsPlxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPiBOZXh0SlMgUHJvamVjdCA8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGgxPiBCYXRtYW4gVFYgU2hvd3MgPC9oMT5cbiAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICA8aDE+IEFydGljbGVzIDwvaDE+XG4gICAgICAgICAgIFx0ICB7IHRoaXMubG9hZGluZyA/IFwiIExvYWRpbmcuLi4uLi5cIiA6IHNob3dzX2xpc3QgfVxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBoMSwgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgIH1cblxufVxuIl19 */\n/*@ sourceURL=pages/App.js */'
      }));

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, ' NextJS Project '), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('h1', {
        'data-jsx': 1470505771,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, ' Batman TV Shows '), _react2.default.createElement('article', {
        'data-jsx': 1470505771,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('h1', {
        'data-jsx': 1470505771,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, ' Articles '), this.loading ? " Loading......" : shows_list), _react2.default.createElement(_style2.default, {
        styleId: 1470505771,
        css: 'h1[data-jsx="1470505771"],a[data-jsx="1470505771"]{font-family:"Arial"}ul[data-jsx="1470505771"]{padding:0}a[data-jsx="1470505771"]{-webkit-text-decoration:none;text-decoration:none;color:blue}a[data-jsx="1470505771"]:hover{opacity:0.6}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RHdCLEFBR3FDLEFBRVYsQUFFVyxBQUVULFdBSmEsRUFJRSxRQU5RLCtCQUljLFlBQWUiLCJmaWxlIjoicGFnZXMvQXBwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmFzYW5uYWdhZGRhbS9jb2RlL3Byb2plY3QvcGVyc29uYWwtYmxvZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuLy8gTmV4dCBDb21wb25lbnRzXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKVxuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgcmV0dXJuIHsgc2hvd3M6IHJlc3BvbnNlLmRhdGEgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzaG93cyA9IHRoaXMucHJvcHMuc2hvd3MgfHwgW11cblxuICAgIGxldCBzaG93c19saXN0ID0gPHVsPlxuICAgICAgIHsgc2hvd3MubWFwKChzaG93KSA9PiAoXG4gICAgICAgICA8bGkga2V5PXsgc2hvdy5zaG93LmlkIH0+XG4gICAgICAgICAgIDxMaW5rIGFzPXtgL3AvJHsgc2hvdy5zaG93LmlkIH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHsgc2hvdy5zaG93LmlkIH1gfT5cbiAgICAgICAgICAgICA8YT4geyBzaG93LnNob3cubmFtZSB9IDwvYT5cbiAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgPC9saT5cbiAgICAgICApKX1cbiAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICBsaSB7XG4gICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICB9XG4gICAgICAgYH08L3N0eWxlPlxuICAgIDwvdWw+XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+IE5leHRKUyBQcm9qZWN0IDwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICA8L0hlYWQ+XG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDE+IEJhdG1hbiBUViBTaG93cyA8L2gxPlxuICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgIDxoMT4gQXJ0aWNsZXMgPC9oMT5cbiAgICAgICAgICAgXHQgIHsgdGhpcy5sb2FkaW5nID8gXCIgTG9hZGluZy4uLi4uLlwiIDogc2hvd3NfbGlzdCB9XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGgxLCBhIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICAgfVxuXG59XG4iXX0= */\n/*@ sourceURL=pages/App.js */'
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loading = true;
                _context.next = 3;
                return _axios2.default.get('https://api.tvmaze.com/search/shows?q=batman');

              case 3:
                response = _context.sent;

                this.loading = false;
                return _context.abrupt('return', { shows: response.data });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
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

/***/ 649:
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

var _link = __webpack_require__(581);

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

/***/ 650:
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

var _Header = __webpack_require__(649);

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

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _reactApollo = __webpack_require__(582);

var _isomorphicFetch = __webpack_require__(638);

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
      uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
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

/***/ 652:
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

var _reactApollo = __webpack_require__(582);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _initApollo = __webpack_require__(651);

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

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(587);


/***/ })

},[659]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2RhNTI2ZmIiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXBwLmpzP2RhNTI2ZmIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/ZGE1MjZmYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9kYTUyNmZiIiwid2VicGFjazovLy8uL2xpYi9pbml0QXBvbGxvLmpzP2RhNTI2ZmIiLCJ3ZWJwYWNrOi8vLy4vbGliL3dpdGhEYXRhLmpzP2RhNTI2ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSdcblxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YSgocHJvcHMpID0+IChcbiAgPEFwcD5cbiAgICBcbiAgPC9BcHA+XG4pKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbi8vIE5leHQgQ29tcG9uZW50c1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgIHJldHVybiB7IHNob3dzOiByZXNwb25zZS5kYXRhIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2hvd3MgPSB0aGlzLnByb3BzLnNob3dzIHx8IFtdXG5cbiAgICBsZXQgc2hvd3NfbGlzdCA9IDx1bD5cbiAgICAgICB7IHNob3dzLm1hcCgoc2hvdykgPT4gKFxuICAgICAgICAgPGxpIGtleT17IHNob3cuc2hvdy5pZCB9PlxuICAgICAgICAgICA8TGluayBhcz17YC9wLyR7IHNob3cuc2hvdy5pZCB9YH0gaHJlZj17YC9wb3N0P2lkPSR7IHNob3cuc2hvdy5pZCB9YH0+XG4gICAgICAgICAgICAgPGE+IHsgc2hvdy5zaG93Lm5hbWUgfSA8L2E+XG4gICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgIDwvbGk+XG4gICAgICAgKSl9XG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgbGkge1xuICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgfVxuICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3VsPlxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPiBOZXh0SlMgUHJvamVjdCA8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGgxPiBCYXRtYW4gVFYgU2hvd3MgPC9oMT5cbiAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICA8aDE+IEFydGljbGVzIDwvaDE+XG4gICAgICAgICAgIFx0ICB7IHRoaXMubG9hZGluZyA/IFwiIExvYWRpbmcuLi4uLi5cIiA6IHNob3dzX2xpc3QgfVxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBoMSwgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvQXBwLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBsaW5rU3R5bGUgPSB7XG4gICAgICBtYWdpblJpZ2h0OiAxNSxcbiAgICAgIGZvbnRTaXplOiAyMFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgXHQ8TGluayBocmVmPVwiL1wiPlxuICAgICAgXHQgIDxhIHN0eWxlPXsgbGlua1N0eWxlIH0+IEhvbWUgPC9hPlxuICAgICAgXHQ8L0xpbms+XG4gICAgICBcdDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgIFx0ICA8YSBzdHlsZT17IGxpbmtTdHlsZSB9PiBBYm91dCA8L2E+XG4gICAgICBcdDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hcnRpY2xlc1wiPlxuICAgICAgXHQgIDxhIHN0eWxlPXsgbGlua1N0eWxlIH0+IEFydGljbGVzIDwvYT5cbiAgICAgIFx0PC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgbGV0IGxheW91dFN0eWxlPSB7XG4gICAgICBtYXJnaW46IDIwLFxuICAgICAgcGFkZGluZzogMjAsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI0RERCdcbiAgICB9ICBcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGxheW91dFN0eWxlIH0+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gIH1cbn0gXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgY3JlYXRlTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5sZXQgYXBvbGxvQ2xpZW50ID0gbnVsbFxuXG4vLyBQb2x5ZmlsbCBmZXRjaCgpIG9uIHRoZSBzZXJ2ZXIgKHVzZWQgYnkgYXBvbGxvLWNsaWVudClcbmlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gIGdsb2JhbC5mZXRjaCA9IGZldGNoXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZSAoaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgc3NyTW9kZTogIXByb2Nlc3MuYnJvd3NlciwgLy8gRGlzYWJsZXMgZm9yY2VGZXRjaCBvbiB0aGUgc2VydmVyIChzbyBxdWVyaWVzIGFyZSBvbmx5IHJ1biBvbmNlKVxuICAgIG5ldHdvcmtJbnRlcmZhY2U6IGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2Uoe1xuICAgICAgdXJpOiAnaHR0cHM6Ly9hcGkuZ3JhcGguY29vbC9zaW1wbGUvdjEvY2l4bWt0MnVsMDFxMDAxMjJta3NnODJwbicsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gICAgICBvcHRzOiB7IC8vIEFkZGl0aW9uYWwgZmV0Y2goKSBvcHRpb25zIGxpa2UgYGNyZWRlbnRpYWxzYCBvciBgaGVhZGVyc2BcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0QXBvbGxvIChpbml0aWFsU3RhdGUpIHtcbiAgLy8gTWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShpbml0aWFsU3RhdGUpXG4gIH1cblxuICAvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XG4gICAgYXBvbGxvQ2xpZW50ID0gY3JlYXRlKGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIHJldHVybiBhcG9sbG9DbGllbnRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbml0QXBvbGxvLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIsIGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBpbml0QXBvbGxvIGZyb20gJy4vaW5pdEFwb2xsbydcblxuLy8gR2V0cyB0aGUgZGlzcGxheSBuYW1lIG9mIGEgSlNYIGNvbXBvbmVudCBmb3IgZGV2IHRvb2xzXG5mdW5jdGlvbiBnZXRDb21wb25lbnREaXNwbGF5TmFtZSAoQ29tcG9uZW50KSB7XG4gIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvc2VkQ29tcG9uZW50ID0+IHtcbiAgcmV0dXJuIGNsYXNzIFdpdGhEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBgV2l0aERhdGEoJHtnZXRDb21wb25lbnREaXNwbGF5TmFtZShDb21wb3NlZENvbXBvbmVudCl9KWBcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgc2VydmVyU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKGN0eCkge1xuICAgICAgbGV0IHNlcnZlclN0YXRlID0ge31cblxuICAgICAgLy8gRXZhbHVhdGUgdGhlIGNvbXBvc2VkIGNvbXBvbmVudCdzIGdldEluaXRpYWxQcm9wcygpXG4gICAgICBsZXQgY29tcG9zZWRJbml0aWFsUHJvcHMgPSB7fVxuICAgICAgaWYgKENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBjb21wb3NlZEluaXRpYWxQcm9wcyA9IGF3YWl0IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gICAgICB9XG5cbiAgICAgIC8vIFJ1biBhbGwgR3JhcGhRTCBxdWVyaWVzIGluIHRoZSBjb21wb25lbnQgdHJlZVxuICAgICAgLy8gYW5kIGV4dHJhY3QgdGhlIHJlc3VsdGluZyBkYXRhXG4gICAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICBjb25zdCBhcG9sbG8gPSBpbml0QXBvbGxvKClcbiAgICAgICAgLy8gUHJvdmlkZSB0aGUgYHVybGAgcHJvcCBkYXRhIGluIGNhc2UgYSBHcmFwaFFMIHF1ZXJ5IHVzZXMgaXRcbiAgICAgICAgY29uc3QgdXJsID0ge3F1ZXJ5OiBjdHgucXVlcnksIHBhdGhuYW1lOiBjdHgucGF0aG5hbWV9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gUnVuIGFsbCBHcmFwaFFMIHF1ZXJpZXNcbiAgICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoXG4gICAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG99PlxuICAgICAgICAgICAgICA8Q29tcG9zZWRDb21wb25lbnQgdXJsPXt1cmx9IHsuLi5jb21wb3NlZEluaXRpYWxQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIFByZXZlbnQgQXBvbGxvIENsaWVudCBHcmFwaFFMIGVycm9ycyBmcm9tIGNyYXNoaW5nIFNTUi5cbiAgICAgICAgICAvLyBIYW5kbGUgdGhlbSBpbiBjb21wb25lbnRzIHZpYSB0aGUgZGF0YS5lcnJvciBwcm9wOlxuICAgICAgICAgIC8vIGh0dHA6Ly9kZXYuYXBvbGxvZGF0YS5jb20vcmVhY3QvYXBpLXF1ZXJpZXMuaHRtbCNncmFwaHFsLXF1ZXJ5LWRhdGEtZXJyb3JcbiAgICAgICAgfVxuICAgICAgICAvLyBnZXREYXRhRnJvbVRyZWUgZG9lcyBub3QgY2FsbCBjb21wb25lbnRXaWxsVW5tb3VudFxuICAgICAgICAvLyBoZWFkIHNpZGUgZWZmZWN0IHRoZXJlZm9yZSBuZWVkIHRvIGJlIGNsZWFyZWQgbWFudWFsbHlcbiAgICAgICAgSGVhZC5yZXdpbmQoKVxuXG4gICAgICAgIC8vIEV4dHJhY3QgcXVlcnkgZGF0YSBmcm9tIHRoZSBBcG9sbG8gc3RvcmVcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBhcG9sbG8uZ2V0SW5pdGlhbFN0YXRlKClcblxuICAgICAgICBzZXJ2ZXJTdGF0ZSA9IHtcbiAgICAgICAgICBhcG9sbG86IHtcbiAgICAgICAgICAgIC8vIE9ubHkgaW5jbHVkZSB0aGUgQXBvbGxvIGRhdGEgc3RhdGVcbiAgICAgICAgICAgIGRhdGE6IHN0YXRlLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VydmVyU3RhdGUsXG4gICAgICAgIC4uLmNvbXBvc2VkSW5pdGlhbFByb3BzXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMuYXBvbGxvID0gaW5pdEFwb2xsbyh0aGlzLnByb3BzLnNlcnZlclN0YXRlKVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXt0aGlzLmFwb2xsb30+XG4gICAgICAgICAgPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3dpdGhEYXRhLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFJQTtBQUNBOzs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBTkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBVUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFnQkE7QUFoQkE7QUFDQTtBQWdCQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUE0QkE7QUE1QkE7Ozs7Ozs7Ozs7QUFoQ0E7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFYQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFEQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7O0FBdkJBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7Ozs7QUFaQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBOztBQUdBO0FBQUE7O0FBRUE7QUFFQTtBQUlBO0FBTEE7QUFEQTtBQUhBO0FBV0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFNQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQVhBO0FBQ0E7QUFVQTtBQVhBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFZQTtBQUNBO0FBREE7QUFaQTtBQUNBO0FBREE7QUFpQkE7QUFqQkE7QUFBQTtBQWtCQTtBQUNBO0FBbkJBO0FBb0JBO0FBREE7QUFuQkE7QUFBQTtBQUFBO0FBd0JBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUdBO0FBQ0E7OztBQUlBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUExQ0E7O0FBQUE7QUFpREE7QUFDQTtBQWxEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBc0RBO0FBdERBO0FBQ0E7QUFxREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUF6REE7QUFDQTs7QUFEQTtBQTREQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFHQTtBQUhBO0FBQUE7QUE5REE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        