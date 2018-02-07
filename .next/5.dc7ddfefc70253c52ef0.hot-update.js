webpackHotUpdate(5,{

/***/ 408:
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

var _EmployeeCard = __webpack_require__(409);

var _EmployeeCard2 = _interopRequireDefault(_EmployeeCard);

var _Header = __webpack_require__(440);

var _Header2 = _interopRequireDefault(_Header);

var _axios = __webpack_require__(401);

var _axios2 = _interopRequireDefault(_axios);

var _employeeShaper = __webpack_require__(442);

var _utility = __webpack_require__(443);

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

    // handleSubmit = fields => {

    // }

    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-3557637588',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props.employee.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement(_EmployeeCard2.default, { name: this.props.employee.name, rank: this.props.employee.rank, supervisor: this.props.supervisor || undefined, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3557637588',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDNEIsQUFHNkIsZ0JBQ0EsZ0JBQ0osWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvZW1wbG95ZWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1wbG95ZWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wbG95ZWVDYXJkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzT3V0LCBzaGFwZUVtcGxveWVlT3V0IH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxLCBxdWVyeSB9KSB7XG4gICAgaWYgKHJlcSkge1xuICAgICAgY29uc29sZS5sb2coJ1NFUlZFUiBHRVQgRU1QIFBBR0UnKTtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcbiAgICAgIGNvbnN0IGVtcGxveWVlSWQgPSBxdWVyeS5pZDtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kQnlJZChlbXBsb3llZUlkKTtcbiAgICAgIGxldCBzdXBlcnZpc29yID0gbnVsbDtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdXBlcnZpc29ySWQgIT09IG51bGwpIHtcbiAgICAgICAgc3VwZXJ2aXNvciA9IGF3YWl0IGRiLm1vZGVsKCdFbXBsb3llZScpLmZpbmRCeUlkKGRhdGEuc3VwZXJ2aXNvcklkKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVtcGxveWVlID0gc2hhcGVFbXBsb3llZU91dChkYXRhKTtcbiAgICAgIC8vVE9ETzogbmVlZCB0byBmaW5kIHRoZSBudWxsIHN1cGVydmlzb3JJZCBub3QgdXNlIGluZGV4IDBcbiAgICAgIC8vIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlLCBlbXBsb3llZXMpO1xuICAgICAgY29uc29sZS5sb2coJ0VNUExPWUVFIFNFUlZFUicsIGVtcGxveWVlKVxuICAgICAgcmV0dXJuIHsgZW1wbG95ZWUsIHN1cGVydmlzb3IgfTtcbiAgICB9XG4gICAgY29uc3QgZW1wbG95ZWVJZCA9IHF1ZXJ5LmlkO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2VtcGxveWVlP2lkPSR7ZW1wbG95ZWVJZH1gKTtcbiAgICBjb25zdCBlbXBsb3llZSA9IGRhdGFbMF07XG4gICAgcmV0dXJuIHsgZW1wbG95ZWUsIHN1cGVydmlzb3IgfTtcbiAgfVxuXG4gIC8vIGhhbmRsZVN1Ym1pdCA9IGZpZWxkcyA9PiB7XG5cbiAgLy8gfVxuXG5yZW5kZXIoKSB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIHVybD17dGhpcy5wcm9wcy51cmx9IHRpdGxlPXt0aGlzLnByb3BzLmVtcGxveWVlLm5hbWV9IC8+XG4gICAgICAgIDxFbXBsb3llZUNhcmQgbmFtZT17dGhpcy5wcm9wcy5lbXBsb3llZS5uYW1lfSByYW5rPXt0aGlzLnByb3BzLmVtcGxveWVlLnJhbmt9IHN1cGVydmlzb3I9e3RoaXMucHJvcHMuc3VwZXJ2aXNvciB8fCB1bmRlZmluZWR9IC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPiB7YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICAgIGZvbnQ6IDFyZW0gbWVubG87XG4gICAgICAgICAgICBjb2xvcjogI2ZzZmY7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/employee.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            query = _ref.query;

        var db, _employeeId, _data, _supervisor, _employee, employeeId, _ref3, data, employee;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 16;
                  break;
                }

                console.log('SERVER GET EMP PAGE');
                db = req.db;
                _employeeId = query.id;
                _context.next = 6;
                return db.model('Employee').findById(_employeeId);

              case 6:
                _data = _context.sent;
                _supervisor = null;

                console.log(_data);

                if (!(_data && _data.supervisorId !== null)) {
                  _context.next = 13;
                  break;
                }

                _context.next = 12;
                return db.model('Employee').findById(_data.supervisorId);

              case 12:
                _supervisor = _context.sent;

              case 13:
                _employee = (0, _employeeShaper.shapeEmployeeOut)(_data);
                //TODO: need to find the null supervisorId not use index 0
                // const treeData = buildTree(employee, employees);

                console.log('EMPLOYEE SERVER', _employee);
                return _context.abrupt('return', { employee: _employee, supervisor: _supervisor });

              case 16:
                employeeId = query.id;
                _context.next = 19;
                return _axios2.default.get('http://localhost:3000/api/employee?id=' + employeeId);

              case 19:
                _ref3 = _context.sent;
                data = _ref3.data;
                employee = data[0];
                return _context.abrupt('return', { employee: employee, supervisor: supervisor });

              case 23:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlQ2FyZCIsIkhlYWRlciIsImF4aW9zIiwic2hhcGVFbXBsb3llZXNPdXQiLCJzaGFwZUVtcGxveWVlT3V0IiwiYnVpbGRUcmVlIiwicHJvcHMiLCJ1cmwiLCJlbXBsb3llZSIsIm5hbWUiLCJyYW5rIiwic3VwZXJ2aXNvciIsInVuZGVmaW5lZCIsInJlcSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImRiIiwiZW1wbG95ZWVJZCIsImlkIiwibW9kZWwiLCJmaW5kQnlJZCIsImRhdGEiLCJzdXBlcnZpc29ySWQiLCJnZXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQVMsQUFBbUIsQUFBd0I7O0FBQ3BELEFBQVMsQUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBMEJ4Qjs7QUFFQTs7Ozs2QkFFTyxBQUNQOzZCQUNJLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUEvQyxBQUF3RDtvQkFBeEQ7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx3Q0FBYSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBL0IsQUFBd0MsTUFBTSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBL0QsQUFBd0UsTUFBTSxZQUFZLEtBQUEsQUFBSyxNQUFMLEFBQVcsY0FBckcsQUFBbUg7b0JBQW5IO3NCQUZGLEFBRUU7QUFBQTs7aUJBRkY7YUFESixBQUNJLEFBZUg7QUFmRzs7Ozs7O1lBN0I0QixBLFdBQUEsQTtZQUFLLEEsYUFBQSxBOzs7Ozs7OztxQkFDL0IsQTs7O0FBQ0Y7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ0o7QSxxQixBQUFPLEksQUFBUCxBQUNGO0EsOEJBQWEsTSxBQUFNOzt1QkFDTixHQUFBLEFBQUcsTUFBSCxBQUFTLFlBQVQsQUFBcUIsU0FBckIsQUFBOEIsQTs7bUJBQTNDO0EsaUNBQ0Y7QSw4QixBQUFhLEFBQ2pCOzt3QkFBQSxBQUFRLElBQVIsQUFBWTs7c0JBQ1IsU0FBUSxNQUFBLEFBQUssaUJBQWlCLEE7Ozs7Ozt1QkFDYixHQUFBLEFBQUcsTUFBSCxBQUFTLFlBQVQsQUFBcUIsU0FBUyxNQUE5QixBQUFtQyxBOzttQkFBdEQ7QTs7bUJBRUk7QSw0QkFBVyxzQ0FBQSxBQUFpQixBLEFBQ2xDO0FBQ0E7QUFDQTs7d0JBQUEsQUFBUSxJQUFSLEFBQVksbUJBQVosQUFBK0I7aURBQ3hCLEVBQUUsVUFBRixXQUFZLFksQUFBWjs7bUJBRUg7QSw2QkFBYSxNLEFBQU07O3VCQUNGLGdCQUFBLEFBQU0sK0NBQU4sQSxBQUFtRDs7O2lDQUFsRTtBLDZCQUFBLEEsQUFDRjtBLDJCQUFXLEtBQUssQSxBQUFMO2lEQUNWLEVBQUUsVUFBRixVQUFZLFlBQVosQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJCa0IsZ0JBQU0sQSIsImZpbGUiOiJlbXBsb3llZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kYzdkZGZlZmM3MDI1M2M1MmVmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZW1wbG95ZWUuanM/ZTNlOWMzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1wbG95ZWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wbG95ZWVDYXJkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzT3V0LCBzaGFwZUVtcGxveWVlT3V0IH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxLCBxdWVyeSB9KSB7XG4gICAgaWYgKHJlcSkge1xuICAgICAgY29uc29sZS5sb2coJ1NFUlZFUiBHRVQgRU1QIFBBR0UnKTtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcbiAgICAgIGNvbnN0IGVtcGxveWVlSWQgPSBxdWVyeS5pZDtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kQnlJZChlbXBsb3llZUlkKTtcbiAgICAgIGxldCBzdXBlcnZpc29yID0gbnVsbDtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdXBlcnZpc29ySWQgIT09IG51bGwpIHtcbiAgICAgICAgc3VwZXJ2aXNvciA9IGF3YWl0IGRiLm1vZGVsKCdFbXBsb3llZScpLmZpbmRCeUlkKGRhdGEuc3VwZXJ2aXNvcklkKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVtcGxveWVlID0gc2hhcGVFbXBsb3llZU91dChkYXRhKTtcbiAgICAgIC8vVE9ETzogbmVlZCB0byBmaW5kIHRoZSBudWxsIHN1cGVydmlzb3JJZCBub3QgdXNlIGluZGV4IDBcbiAgICAgIC8vIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlLCBlbXBsb3llZXMpO1xuICAgICAgY29uc29sZS5sb2coJ0VNUExPWUVFIFNFUlZFUicsIGVtcGxveWVlKVxuICAgICAgcmV0dXJuIHsgZW1wbG95ZWUsIHN1cGVydmlzb3IgfTtcbiAgICB9XG4gICAgY29uc3QgZW1wbG95ZWVJZCA9IHF1ZXJ5LmlkO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2VtcGxveWVlP2lkPSR7ZW1wbG95ZWVJZH1gKTtcbiAgICBjb25zdCBlbXBsb3llZSA9IGRhdGFbMF07XG4gICAgcmV0dXJuIHsgZW1wbG95ZWUsIHN1cGVydmlzb3IgfTtcbiAgfVxuXG4gIC8vIGhhbmRsZVN1Ym1pdCA9IGZpZWxkcyA9PiB7XG5cbiAgLy8gfVxuXG5yZW5kZXIoKSB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIHVybD17dGhpcy5wcm9wcy51cmx9IHRpdGxlPXt0aGlzLnByb3BzLmVtcGxveWVlLm5hbWV9IC8+XG4gICAgICAgIDxFbXBsb3llZUNhcmQgbmFtZT17dGhpcy5wcm9wcy5lbXBsb3llZS5uYW1lfSByYW5rPXt0aGlzLnByb3BzLmVtcGxveWVlLnJhbmt9IHN1cGVydmlzb3I9e3RoaXMucHJvcHMuc3VwZXJ2aXNvciB8fCB1bmRlZmluZWR9IC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPiB7YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICAgIGZvbnQ6IDFyZW0gbWVubG87XG4gICAgICAgICAgICBjb2xvcjogI2ZzZmY7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2VtcGxveWVlLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRkE7QUFlQTtBQWZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEzQkE7QUFDQTtBQURBOztBQUVBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7Ozs7OztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTs7QUFEQTs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXRCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9