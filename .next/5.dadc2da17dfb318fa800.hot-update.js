webpackHotUpdate(5,{

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(394);

var _link2 = _interopRequireDefault(_link);

var _axios = __webpack_require__(445);

var _axios2 = _interopRequireDefault(_axios);

var _reactTreeGraph = __webpack_require__(464);

var _reactTreeGraph2 = _interopRequireDefault(_reactTreeGraph);

var _Header = __webpack_require__(529);

var _Header2 = _interopRequireDefault(_Header);

var _employeeShaper = __webpack_require__(533);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/index.js?entry';


var data = {
  name: 'Top Level',
  children: [{
    name: 'Level 2: A'
  }, {
    name: 'Level 2: B'
  }]
};

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement(_reactTreeGraph2.default, { data: data, height: 400, width: 400, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;

        var db, _employees, _ref3, employees;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 6;
                  break;
                }

                db = req.db;
                _context.next = 4;
                return db.model('Employee').find({});

              case 4:
                _employees = _context.sent;
                return _context.abrupt('return', (0, _employeeShaper.shapeEmployees)(_employees));

              case 6:
                _context.next = 8;
                return _axios2.default.get('http://localhost/api/employees');

              case 8:
                _ref3 = _context.sent;
                employees = _ref3.employees;

                console.log('client get', employees);
                console.log('hitting API', employees);
                return _context.abrupt('return', { employees: employees });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJheGlvcyIsIlRyZWUiLCJIZWFkZXIiLCJzaGFwZUVtcGxveWVlcyIsImRhdGEiLCJuYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsInVybCIsInJlcSIsImRiIiwibW9kZWwiLCJmaW5kIiwiZW1wbG95ZWVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQXNCOzs7Ozs7O0FBSS9CLElBQU07UUFBTyxBQUNMLEFBQ047O1VBQVUsQUFDUixBQUNRO0FBRFIsQUFDRSxHQUZNO1VBRlosQUFBYSxBQUVELEFBSVIsQUFDUTtBQURSLEFBQ0U7QUFQTyxBQUNYOzs7Ozs7Ozs7Ozs7OzZCQXdCUyxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBcEMsQUFBeUM7b0JBQXpDO3NCQURGLEFBQ0UsQUFDRTtBQURGOzBCQUNFLEFBQUMsMENBQUssTUFBTixBQUFZLE1BQU0sUUFBbEIsQUFBMEIsS0FBSyxPQUEvQixBQUFzQztvQkFBdEM7c0JBSE4sQUFDRSxBQUVJLEFBR1A7QUFITzs7Ozs7OztZLEFBZnVCLFdBQUEsQTs7Ozs7Ozs7cUJBQ3pCLEE7OztBQUNNOztBLHFCLEFBQU8sSSxBQUFQOzt1QkFDZ0IsR0FBQSxBQUFHLE1BQUgsQUFBUyxZQUFULEFBQXFCLEtBQXJCLEFBQTBCLEE7O21CQUE1QztBO2lEQUNDLG9DQUFBLEEsQUFBZTs7Ozt1QkFFSSxnQkFBQSxBQUFNLElBQU4sQUFBVSxBOzs7aUNBQTlCO0Esa0NBQUEsQSxBQUNSOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxjQUFaLEFBQTBCLEFBQzFCO3dCQUFBLEFBQVEsSUFBUixBQUFZLGVBQVosQUFBMkI7aURBQ3BCLEVBQUUsV0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBVmtCLGdCQUFNLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kYWRjMmRhMTdkZmIzMThmYTgwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/OThjNGY2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBUcmVlIGZyb20gJ3JlYWN0LXRyZWUtZ3JhcGgnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyBzaGFwZUVtcGxveWVlcyB9IGZyb20gJy4uL2FwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyJztcblxuXG5cbmNvbnN0IGRhdGEgPSB7XG4gIG5hbWU6ICdUb3AgTGV2ZWwnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdMZXZlbCAyOiBBJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdMZXZlbCAyOiBCJyxcbiAgICB9LFxuICBdLFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSB9KSB7XG4gICAgaWYgKHJlcSkge1xuICAgICAgY29uc3QgeyBkYiB9ID0gcmVxO1xuICAgICAgY29uc3QgZW1wbG95ZWVzID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZCh7fSk7XG4gICAgICByZXR1cm4gc2hhcGVFbXBsb3llZXMoZW1wbG95ZWVzKTtcbiAgICB9XG4gICAgY29uc3QgeyBlbXBsb3llZXMgfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdC9hcGkvZW1wbG95ZWVzJyk7XG4gICAgY29uc29sZS5sb2coJ2NsaWVudCBnZXQnLCBlbXBsb3llZXMpO1xuICAgIGNvbnNvbGUubG9nKCdoaXR0aW5nIEFQSScsIGVtcGxveWVlcyk7XG4gICAgcmV0dXJuIHsgZW1wbG95ZWVzIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIHVybD17dGhpcy5wcm9wcy51cmx9IHRpdGxlPXt0aGlzLnByb3BzfSAvPlxuICAgICAgICAgIDxUcmVlIGRhdGE9e2RhdGF9IGhlaWdodD17NDAwfSB3aWR0aD17NDAwfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBR0E7QUFFQTs7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQU5BO0FBQ0E7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOztBQURBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==