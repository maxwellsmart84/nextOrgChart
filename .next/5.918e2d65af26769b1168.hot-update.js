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

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _link = __webpack_require__(393);

var _link2 = _interopRequireDefault(_link);

var _Header = __webpack_require__(419);

var _Header2 = _interopRequireDefault(_Header);

var _axios = __webpack_require__(422);

var _axios2 = _interopRequireDefault(_axios);

var _Tree = __webpack_require__(441);

var _Tree2 = _interopRequireDefault(_Tree);

var _reactOrgchart = __webpack_require__(405);

var _reactOrgchart2 = _interopRequireDefault(_reactOrgchart);

var _employeeShaper = __webpack_require__(443);

var _utility = __webpack_require__(444);

var _index = __webpack_require__(101);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/index.js?entry';
// import EmployeeNode from '../components/EmployeeNode';

// import Tree from 'react-tree-graph';


var apiUrl = '/api';

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
        className: 'jsx-1658254831',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1658254831',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), _react2.default.createElement('div', { id: 'tree', className: 'jsx-1658254831',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_Tree2.default, { data: this.props.treeData, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '1658254831',
        css: '#tree{padding-top:20px;}body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDeUIsQUFJUSxBQUVtQixnQkFDQSxDQUhsQixlQUljLFlBQ0gsU0FDQyxVQUNaIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vIGltcG9ydCBFbXBsb3llZU5vZGUgZnJvbSAnLi4vY29tcG9uZW50cy9FbXBsb3llZU5vZGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG4vLyBpbXBvcnQgVHJlZSBmcm9tICdyZWFjdC10cmVlLWdyYXBoJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgVHJlZSBmcm9tICcuLi9jb21wb25lbnRzL1RyZWUnO1xuaW1wb3J0IE9yZ0NoYXJ0IGZyb20gJ3JlYWN0LW9yZ2NoYXJ0JztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzT3V0IH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IGFwaVVybCA9ICcvYXBpJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIGlmIChyZXEpIHtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kKHt9KTtcbiAgICAgIGNvbnN0IGVtcGxveWVlcyA9IHNoYXBlRW1wbG95ZWVzT3V0KGRhdGEpO1xuICAgICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUoZW1wbG95ZWVzKVswXTtcbiAgICAgIHJldHVybiB7IHRyZWVEYXRhLCBlbXBsb3llZXMgfTtcbiAgICB9XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpVXJsfS9lbXBsb3llZWApO1xuICAgIGNvbnN0IGVtcGxveWVlcyA9IFsuLi5kYXRhXVxuICAgIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlcylbMF07XG4gICAgcmV0dXJuIHsgdHJlZURhdGEsIGVtcGxveWVlcyB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkZXIgdXJsPXt0aGlzLnByb3BzLnVybH0gdGl0bGU9e3RoaXMucHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwidHJlZVwiPlxuICAgICAgICAgIDxUcmVlIGRhdGE9e3RoaXMucHJvcHMudHJlZURhdGF9IC8+XG4gICAgICAgICAgey8qIDxUcmVlIGRhdGE9e3RoaXMucHJvcHMudHJlZURhdGF9IGhlaWdodD17ODAwfSB3aWR0aD17ODAwfSBrZXlQcm9wPXt9IGdQcm9wcz17eyBvbkNsaWNrOiBoYW5kbGVDbGljaygpIH19IHN2Z1Byb3BzPXt7dHJhbnNmb3JtOiAncm90YXRlKDkwKSd9fS8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICN0cmVlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweFxuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgZm9udDogMXJlbSBtZW5sbztcbiAgICAgICAgICBjb2xvcjogI2ZzZmY7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;

        var db, _data, _employees, _treeData, _ref3, data, employees, treeData;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 8;
                  break;
                }

                db = req.db;
                _context.next = 4;
                return db.model('Employee').find({});

              case 4:
                _data = _context.sent;
                _employees = (0, _employeeShaper.shapeEmployeesOut)(_data);
                _treeData = (0, _utility.buildTree)(_employees)[0];
                return _context.abrupt('return', { treeData: _treeData, employees: _employees });

              case 8:
                _context.next = 10;
                return _axios2.default.get(apiUrl + '/employee');

              case 10:
                _ref3 = _context.sent;
                data = _ref3.data;
                employees = [].concat((0, _toConsumableArray3.default)(data));
                treeData = (0, _utility.buildTree)(employees)[0];
                return _context.abrupt('return', { treeData: treeData, employees: employees });

              case 15:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkZXIiLCJheGlvcyIsIlRyZWUiLCJPcmdDaGFydCIsInNoYXBlRW1wbG95ZWVzT3V0IiwiYnVpbGRUcmVlIiwiUm91dGVyIiwiYXBpVXJsIiwicHJvcHMiLCJ1cmwiLCJ0cmVlRGF0YSIsInJlcSIsImRiIiwibW9kZWwiLCJmaW5kIiwiZGF0YSIsImVtcGxveWVlcyIsImdldCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU8sQUFBWTs7OztBQUVuQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFTLEFBQXlCOztBQUNsQyxBQUFTLEFBQWlCOztBQUMxQixBQUFPOzs7Ozs7O0FBUlA7O0FBRUE7OztBQVFBLElBQU0sU0FBTixBQUFlOzs7Ozs7Ozs7Ozs7OzZCQWlCSixBQUNQOzZCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBcEMsQUFBeUM7b0JBQXpDO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxTQUFLLElBQUwsQUFBUSxtQkFBUjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsZ0NBQUssTUFBTSxLQUFBLEFBQUssTUFBakIsQUFBdUI7b0JBQXZCO3NCQUxKLEFBSUUsQUFDRTtBQUFBOztpQkFMSjthQURGLEFBQ0UsQUFzQkg7QUF0Qkc7Ozs7OztZQWhCMkIsQSxXQUFBLEE7Ozs7Ozs7O3FCQUN6QixBOzs7QUFDTTs7QSxxQixBQUFPLElBQVAsQTs7dUJBQ1csR0FBQSxBQUFHLE1BQUgsQUFBUyxZQUFULEFBQXFCLEssQUFBckIsQUFBMEI7O21CQUF2QztBLGlDQUNBO0EsNkJBQVksdUNBQUEsQUFBa0IsQUFDOUIsQTtBLDRCQUFXLHdCQUFBLEFBQVUsWUFBVixBQUFxQixBO2lEQUMvQixFQUFFLFVBQUYsV0FBWSxXQUFaLEE7Ozs7dUJBRWMsZ0JBQUEsQUFBTSxJQUFOLEFBQWEsUzs7O2lDQUE1QjtBLDZCQUFBLEFBQ0YsQTtBLHVFLEFBQWdCLEFBQ2hCO0EsMkJBQVcsd0JBQUEsQUFBVSxXQUFWLEFBQXFCLEE7aURBQy9CLEVBQUUsVUFBRixVQUFZLFdBQVosQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVprQixnQkFBTSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45MThlMmQ2NWFmMjY3NjliMTE2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YWIxOTVkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gaW1wb3J0IEVtcGxveWVlTm9kZSBmcm9tICcuLi9jb21wb25lbnRzL0VtcGxveWVlTm9kZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbi8vIGltcG9ydCBUcmVlIGZyb20gJ3JlYWN0LXRyZWUtZ3JhcGgnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBUcmVlIGZyb20gJy4uL2NvbXBvbmVudHMvVHJlZSc7XG5pbXBvcnQgT3JnQ2hhcnQgZnJvbSAncmVhY3Qtb3JnY2hhcnQnO1xuaW1wb3J0IHsgc2hhcGVFbXBsb3llZXNPdXQgfSBmcm9tICcuLi9hcGkvc2hhcGVycy9lbXBsb3llZVNoYXBlcic7XG5pbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tICcuLi9hcGkvdXRpbGl0eSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgYXBpVXJsID0gJy9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSB9KSB7XG4gICAgaWYgKHJlcSkge1xuICAgICAgY29uc3QgeyBkYiB9ID0gcmVxO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLm1vZGVsKCdFbXBsb3llZScpLmZpbmQoe30pO1xuICAgICAgY29uc3QgZW1wbG95ZWVzID0gc2hhcGVFbXBsb3llZXNPdXQoZGF0YSk7XG4gICAgICBjb25zdCB0cmVlRGF0YSA9IGJ1aWxkVHJlZShlbXBsb3llZXMpWzBdO1xuICAgICAgcmV0dXJuIHsgdHJlZURhdGEsIGVtcGxveWVlcyB9O1xuICAgIH1cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlVcmx9L2VtcGxveWVlYCk7XG4gICAgY29uc3QgZW1wbG95ZWVzID0gWy4uLmRhdGFdXG4gICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUoZW1wbG95ZWVzKVswXTtcbiAgICByZXR1cm4geyB0cmVlRGF0YSwgZW1wbG95ZWVzIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSB0aXRsZT17dGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJ0cmVlXCI+XG4gICAgICAgICAgPFRyZWUgZGF0YT17dGhpcy5wcm9wcy50cmVlRGF0YX0gLz5cbiAgICAgICAgICB7LyogPFRyZWUgZGF0YT17dGhpcy5wcm9wcy50cmVlRGF0YX0gaGVpZ2h0PXs4MDB9IHdpZHRoPXs4MDB9IGtleVByb3A9e30gZ1Byb3BzPXt7IG9uQ2xpY2s6IGhhbmRsZUNsaWNrKCkgfX0gc3ZnUHJvcHM9e3t0cmFuc2Zvcm06ICdyb3RhdGUoOTApJ319Lz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgI3RyZWUge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICBmb250OiAxcmVtIG1lbmxvO1xuICAgICAgICAgIGNvbG9yOiAjZnNmZjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUxBO0FBc0JBO0FBdEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWRBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBREE7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==