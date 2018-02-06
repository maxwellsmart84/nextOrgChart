webpackHotUpdate(5,{

/***/ 407:
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

var _style = __webpack_require__(392);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _EmployeeCard = __webpack_require__(408);

var _EmployeeCard2 = _interopRequireDefault(_EmployeeCard);

var _Header = __webpack_require__(420);

var _Header2 = _interopRequireDefault(_Header);

var _axios = __webpack_require__(422);

var _axios2 = _interopRequireDefault(_axios);

var _employeeShaper = __webpack_require__(441);

var _utility = __webpack_require__(442);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/employee.js?entry';


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
        className: 'jsx-3557637588',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props.employee.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_EmployeeCard2.default, { name: this.props.employee.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3557637588',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCNEIsQUFHNkIsZ0JBQ0EsZ0JBQ0osWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvZW1wbG95ZWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1wbG95ZWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wbG95ZWVDYXJkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzLCBzaGFwZUVtcGxveWVlIH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxLCBxdWVyeSB9KSB7XG4gICAgaWYgKHJlcSkge1xuICAgICAgY29uc29sZS5sb2coJ1NFUlZFUiBHRVQgRU1QIFBBR0UnKTtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcbiAgICAgIGNvbnN0IGVtcGxveWVlSWQgPSBxdWVyeS5pZDtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kQnlJZChlbXBsb3llZUlkKTtcbiAgICAgIGNvbnN0IGVtcGxveWVlID0gc2hhcGVFbXBsb3llZShkYXRhKTtcbiAgICAgIC8vVE9ETzogbmVlZCB0byBmaW5kIHRoZSBudWxsIHN1cGVydmlzb3JJZCBub3QgdXNlIGluZGV4IDBcbiAgICAgIC8vIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlLCBlbXBsb3llZXMpO1xuICAgICAgY29uc29sZS5sb2coJ0VNUExPWUVFIFNFUlZFUicsIGVtcGxveWVlKVxuICAgICAgcmV0dXJuIHsgZW1wbG95ZWUgfTtcbiAgICB9XG4gICAgY29uc3QgZW1wbG95ZWVJZCA9IHF1ZXJ5LmlkO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2VtcGxveWVlP2lkPSR7ZW1wbG95ZWVJZH1gKTtcbiAgICBjb25zdCBlbXBsb3llZSA9IGRhdGFbMF07XG4gICAgcmV0dXJuIHsgZW1wbG95ZWUgfTtcbiAgfVxucmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSB0aXRsZT17dGhpcy5wcm9wcy5lbXBsb3llZS5uYW1lfSAvPlxuICAgICAgICA8RW1wbG95ZWVDYXJkIG5hbWU9e3RoaXMucHJvcHMuZW1wbG95ZWUubmFtZX0vPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD4ge2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgICBmb250OiAxcmVtIG1lbmxvO1xuICAgICAgICAgICAgY29sb3I6ICNmc2ZmO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/employee.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            query = _ref.query;

        var db, _employeeId, _data, _employee, employeeId, _ref3, data, employee;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 10;
                  break;
                }

                console.log('SERVER GET EMP PAGE');
                db = req.db;
                _employeeId = query.id;
                _context.next = 6;
                return db.model('Employee').findById(_employeeId);

              case 6:
                _data = _context.sent;
                _employee = (0, _employeeShaper.shapeEmployee)(_data);
                //TODO: need to find the null supervisorId not use index 0
                // const treeData = buildTree(employee, employees);

                console.log('EMPLOYEE SERVER', _employee);
                return _context.abrupt('return', { employee: _employee });

              case 10:
                employeeId = query.id;
                _context.next = 13;
                return _axios2.default.get('http://localhost:3000/api/employee?id=' + employeeId);

              case 13:
                _ref3 = _context.sent;
                data = _ref3.data;
                employee = data[0];
                return _context.abrupt('return', { employee: employee });

              case 17:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlQ2FyZCIsIkhlYWRlciIsImF4aW9zIiwic2hhcGVFbXBsb3llZXMiLCJzaGFwZUVtcGxveWVlIiwiYnVpbGRUcmVlIiwicHJvcHMiLCJ1cmwiLCJlbXBsb3llZSIsIm5hbWUiLCJyZXEiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImVtcGxveWVlSWQiLCJpZCIsIm1vZGVsIiwiZmluZEJ5SWQiLCJkYXRhIiwiZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWdCLEFBQXFCOztBQUM5QyxBQUFTLEFBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBb0JqQixBQUNQOzZCQUNJLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUEvQyxBQUF3RDtvQkFBeEQ7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx3Q0FBYSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBL0IsQUFBd0M7b0JBQXhDO3NCQUZGLEFBRUU7QUFBQTs7aUJBRkY7YUFESixBQUNJLEFBZUg7QUFmRzs7Ozs7O1lBbkI0QixBLFcsQUFBQTtZQUFLLEEsYSxBQUFBOzs7Ozs7OztxQixBQUMvQjs7O0FBQ0Y7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ0o7QSxxQixBQUFPLElBQ1QsQSxBQURFO0EsOEJBQ1csTUFBTSxBOzt1QkFDTixHQUFBLEFBQUcsTUFBSCxBQUFTLFlBQVQsQUFBcUIsU0FBckIsQUFBOEIsQTs7bUJBQTNDO0EsaUNBQ0E7QSw0QkFBVyxtQ0FBQSxBQUFjLEEsQUFDL0I7QUFDQTtBQUNBOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxtQkFBWixBQUErQjtpREFDeEIsRUFBRSxVQUFGLEE7O21CQUVIO0EsNkJBQWEsTUFBTSxBOzt1QkFDRixnQkFBQSxBQUFNLCtDQUFOLEEsQUFBbUQ7OztpQ0FBbEU7QSw2QkFBQSxBLEFBQ0Y7QSwyQkFBVyxLLEFBQUEsQUFBSztpREFDZixFQUFFLFVBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhCa0IsZ0JBQU0sQSIsImZpbGUiOiJlbXBsb3llZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/employee.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/employee.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/employee")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45ZGMwMjMxZmE0YjQ2YmExZDUyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZW1wbG95ZWUuanM/YjQzNWZjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1wbG95ZWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wbG95ZWVDYXJkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzLCBzaGFwZUVtcGxveWVlIH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxLCBxdWVyeSB9KSB7XG4gICAgaWYgKHJlcSkge1xuICAgICAgY29uc29sZS5sb2coJ1NFUlZFUiBHRVQgRU1QIFBBR0UnKTtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcbiAgICAgIGNvbnN0IGVtcGxveWVlSWQgPSBxdWVyeS5pZDtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kQnlJZChlbXBsb3llZUlkKTtcbiAgICAgIGNvbnN0IGVtcGxveWVlID0gc2hhcGVFbXBsb3llZShkYXRhKTtcbiAgICAgIC8vVE9ETzogbmVlZCB0byBmaW5kIHRoZSBudWxsIHN1cGVydmlzb3JJZCBub3QgdXNlIGluZGV4IDBcbiAgICAgIC8vIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlLCBlbXBsb3llZXMpO1xuICAgICAgY29uc29sZS5sb2coJ0VNUExPWUVFIFNFUlZFUicsIGVtcGxveWVlKVxuICAgICAgcmV0dXJuIHsgZW1wbG95ZWUgfTtcbiAgICB9XG4gICAgY29uc3QgZW1wbG95ZWVJZCA9IHF1ZXJ5LmlkO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2VtcGxveWVlP2lkPSR7ZW1wbG95ZWVJZH1gKTtcbiAgICBjb25zdCBlbXBsb3llZSA9IGRhdGFbMF07XG4gICAgcmV0dXJuIHsgZW1wbG95ZWUgfTtcbiAgfVxucmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSB0aXRsZT17dGhpcy5wcm9wcy5lbXBsb3llZS5uYW1lfSAvPlxuICAgICAgICA8RW1wbG95ZWVDYXJkIG5hbWU9e3RoaXMucHJvcHMuZW1wbG95ZWUubmFtZX0vPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD4ge2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgICBmb250OiAxcmVtIG1lbmxvO1xuICAgICAgICAgICAgY29sb3I6ICNmc2ZmO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9lbXBsb3llZS5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUZBO0FBZUE7QUFmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakJBO0FBQ0E7QUFEQTs7QUFFQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBOztBQURBOztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=