'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('./../components/Layout');

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