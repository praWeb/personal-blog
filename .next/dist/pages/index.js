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

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var shows = this.props.shows || [];

      var shows_list = _react2.default.createElement('ul', {
        'data-jsx': 2133768109
      }, shows.map(function (show) {
        return _react2.default.createElement('li', { key: show.show.id, 'data-jsx': 2133768109
        }, _react2.default.createElement(_link2.default, { as: '/p/' + show.show.id, href: '/post?id=' + show.show.id }, _react2.default.createElement('a', {
          'data-jsx': 2133768109
        }, ' ', show.show.name, ' ')));
      }), _react2.default.createElement(_style2.default, {
        styleId: 2133768109,
        css: 'li[data-jsx="2133768109"]{list-style:none;margin:5px 0}'
      }));

      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, ' NextJS Project '), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), _react2.default.createElement('div', null, _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('h1', {
        'data-jsx': 1470505771
      }, ' Batman TV Shows '), _react2.default.createElement('article', {
        'data-jsx': 1470505771
      }, _react2.default.createElement('h1', {
        'data-jsx': 1470505771
      }, ' Articles '), this.loading ? " Loading......" : shows_list), _react2.default.createElement(_style2.default, {
        styleId: 1470505771,
        css: 'h1[data-jsx="1470505771"],a[data-jsx="1470505771"]{font-family:"Arial"}ul[data-jsx="1470505771"]{padding:0}a[data-jsx="1470505771"]{-webkit-text-decoration:none;text-decoration:none;color:blue}a[data-jsx="1470505771"]:hover{opacity:0.6}'
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

  return Index;
}(_react.Component);

// Components


// Next Components
exports.default = Index;