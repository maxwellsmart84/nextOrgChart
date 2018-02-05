webpackHotUpdate(5,{

/***/ 434:
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

var _style = __webpack_require__(398);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(392);

var _link2 = _interopRequireDefault(_link);

var _axios = __webpack_require__(446);

var _axios2 = _interopRequireDefault(_axios);

var _EmployeeNode = __webpack_require__(465);

var _EmployeeNode2 = _interopRequireDefault(_EmployeeNode);

var _Header = __webpack_require__(466);

var _Header2 = _interopRequireDefault(_Header);

var _reactTreeGraph = __webpack_require__(469);

var _reactTreeGraph2 = _interopRequireDefault(_reactTreeGraph);

var _employeeShaper = __webpack_require__(534);

var _utility = __webpack_require__(535);

var _index = __webpack_require__(101);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/index.js?entry';


var initechOrg = {
  name: "Bill Lumbergh",
  gProps: {},
  children: [{
    name: "Peter Gibbons",
    children: [{
      name: "And More!!"
    }]
  }, {
    name: "Milton Waddams"
  }, {
    name: "Bob Slydell"
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
      var _this2 = this;

      console.log(this.props.employees);
      var handleClick = function handleClick(props) {
        _index2.default.push('/employee?id=' + _this2.props.employees.id, '/employee/' + id);
      };
      return _react2.default.createElement('div', {
        className: 'jsx-3016298705',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3016298705',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3016298705',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_reactTreeGraph2.default, { data: this.props.treeData, height: 800, width: 800, gProps: { onClick: handleClick }, svgProps: { transform: 'rotate(90)' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '3016298705',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}.node circle{fill:white;stroke:black;}g text{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}path.link{fill:none;stroke:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FeUIsQUFHMkIsQUFPTCxBQUtkLEFBRWEsVUFDRyxDQVBBLEtBUEcsT0FlbEIsQ0FQQSxRQVBjLFlBQ0gsU0FDQyxVQUNaLHdCQU9BIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgRW1wbG95ZWVOb2RlIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wbG95ZWVOb2RlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFRyZWUgZnJvbSAncmVhY3QtdHJlZS1ncmFwaCc7XG5pbXBvcnQgeyBzaGFwZUVtcGxveWVlcyB9IGZyb20gJy4uL2FwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyJztcbmltcG9ydCB7IGJ1aWxkVHJlZSB9IGZyb20gJy4uL2FwaS91dGlsaXR5JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5cblxuY29uc3QgaW5pdGVjaE9yZyA9IHtcbiAgbmFtZTogXCJCaWxsIEx1bWJlcmdoXCIsXG4gIGdQcm9wczoge1xuXG4gIH0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJQZXRlciBHaWJib25zXCIsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJBbmQgTW9yZSEhXCIsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTWlsdG9uIFdhZGRhbXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQm9iIFNseWRlbGxcIixcbiAgICB9LFxuICBdXG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICBpZiAocmVxKSB7XG4gICAgICBjb25zb2xlLmxvZygnU0VSVkVSJyk7XG4gICAgICBjb25zdCB7IGRiIH0gPSByZXE7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZCh7fSk7XG4gICAgICBjb25zdCBlbXBsb3llZXMgPSBzaGFwZUVtcGxveWVlcyhkYXRhKTtcbiAgICAgIC8vVE9ETzogbmVlZCB0byBmaW5kIHRoZSBudWxsIHN1cGVydmlzb3JJZCBub3QgdXNlIGluZGV4IDBcbiAgICAgIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlc1swXSwgZW1wbG95ZWVzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRyZWVEYXRhKTtcbiAgICAgIHJldHVybiB7IHRyZWVEYXRhLCBlbXBsb3llZXMgfTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ0NMSUVOVCBHRVQnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3QvYXBpL2VtcGxveWVlcycpO1xuICAgIGNvbnN0IGVtcGxveWVlcyA9IHNoYXBlRW1wbG95ZWVzKGRhdGEpO1xuICAgIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlc1swXSwgZW1wbG95ZWVzKVswXTtcbiAgICBjb25zb2xlLmxvZyh0cmVlRGF0YSk7XG4gICAgcmV0dXJuIHsgdHJlZURhdGEsIGVtcGxveWVlcyB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmVtcGxveWVlcylcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChwcm9wcykgPT4ge1xuICAgICAgUm91dGVyLnB1c2goYC9lbXBsb3llZT9pZD0ke3RoaXMucHJvcHMuZW1wbG95ZWVzLmlkfWAsIGAvZW1wbG95ZWUvJHtpZH1gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSB0aXRsZT17dGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFRyZWUgZGF0YT17dGhpcy5wcm9wcy50cmVlRGF0YX0gaGVpZ2h0PXs4MDB9IHdpZHRoPXs4MDB9IGdQcm9wcz17eyBvbkNsaWNrOiBoYW5kbGVDbGljayB9fSBzdmdQcm9wcz17e3RyYW5zZm9ybTogJ3JvdGF0ZSg5MCknfX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgZm9udDogMXJlbSBtZW5sbztcbiAgICAgICAgICBjb2xvcjogI2ZzZmY7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLm5vZGUgY2lyY2xlIHtcbiAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgICBzdHJva2U6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIGcgdGV4dHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpXG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5saW5rIHtcbiAgICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICAgIHN0cm9rZTogYmxhY2s7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;

        var db, _data, _employees, _treeData, data, employees, treeData;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 10;
                  break;
                }

                console.log('SERVER');
                db = req.db;
                _context.next = 5;
                return db.model('Employee').find({});

              case 5:
                _data = _context.sent;
                _employees = (0, _employeeShaper.shapeEmployees)(_data);
                //TODO: need to find the null supervisorId not use index 0

                _treeData = (0, _utility.buildTree)(_employees[0], _employees);

                console.log(_treeData);
                return _context.abrupt('return', { treeData: _treeData, employees: _employees });

              case 10:
                console.log('CLIENT GET');
                _context.next = 13;
                return _axios2.default.get('http://localhost/api/employees');

              case 13:
                data = _context.sent;
                employees = (0, _employeeShaper.shapeEmployees)(data);
                treeData = (0, _utility.buildTree)(employees[0], employees)[0];

                console.log(treeData);
                return _context.abrupt('return', { treeData: treeData, employees: employees });

              case 18:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJheGlvcyIsIkVtcGxveWVlTm9kZSIsIkhlYWRlciIsIlRyZWUiLCJzaGFwZUVtcGxveWVlcyIsImJ1aWxkVHJlZSIsIlJvdXRlciIsImluaXRlY2hPcmciLCJuYW1lIiwiZ1Byb3BzIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJlbXBsb3llZXMiLCJoYW5kbGVDbGljayIsInB1c2giLCJpZCIsInVybCIsInRyZWVEYXRhIiwib25DbGljayIsInRyYW5zZm9ybSIsInJlcSIsImRiIiwibW9kZWwiLCJmaW5kIiwiZGF0YSIsImdldCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBQXNCOztBQUMvQixBQUFTLEFBQWlCOztBQUMxQixBQUFPOzs7Ozs7Ozs7QUFJUCxJQUFNO1FBQWEsQUFDWCxBQUNOO1VBRmlCLEFBRVQsQUFHUjs7VUFDRSxBQUNRLEFBQ047O1lBSE0sQUFDUixBQUVZLEFBQ1IsQUFDUTtBQURSLEFBQ0UsS0FGTTtBQUZaLEFBQ0UsR0FGTTtVQUFBLEFBU1IsQUFDUTtBQURSLEFBQ0U7VUFmTixBQUFtQixBQUtQLEFBWVIsQUFDUTtBQURSLEFBQ0U7QUFsQmEsQUFDakI7Ozs7Ozs7Ozs7Ozs7NkJBMkNTO21CQUNQOztjQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7VUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsT0FBVSxBQUM3Qjt3QkFBQSxBQUFPLHVCQUFxQixPQUFBLEFBQUssTUFBTCxBQUFXLFVBQXZDLEFBQWlELG1CQUFqRCxBQUFvRSxBQUNyRTtBQUZELEFBR0E7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGtDQUFPLEtBQUssS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEtBQUssT0FBTyxLQUFwQyxBQUF5QztvQkFBekM7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDBDQUFLLE1BQU0sS0FBQSxBQUFLLE1BQWpCLEFBQXVCLFVBQVUsUUFBakMsQUFBeUMsS0FBSyxPQUE5QyxBQUFxRCxLQUFLLFFBQVEsRUFBRSxTQUFwRSxBQUFrRSxBQUFXLGVBQWUsVUFBVSxFQUFDLFdBQXZHLEFBQXNHLEFBQVk7b0JBQWxIO3NCQUxKLEFBSUUsQUFDRTtBQUFBOztpQkFMSjthQURGLEFBQ0UsQUE2Qkg7QUE3Qkc7Ozs7OztZLEFBeEIyQixXQUFBLEE7Ozs7Ozs7O3FCQUN6QixBOzs7QUFDRjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDSjtBLHFCQUFPLEEsSSxBQUFQOzt1QkFDVyxHQUFBLEFBQUcsTUFBSCxBQUFTLFlBQVQsQUFBcUIsS0FBckIsQUFBMEIsQTs7bUJBQXZDO0EsaUNBQ0E7QSw2QkFBWSxvQ0FBQSxBQUFlLEFBQ2pDLEE7QUFDTTs7QSw0QkFBVyx3QkFBVSxXQUFWLEFBQVUsQUFBVSxJQUFJLEEsQUFBeEIsQUFDakI7O3dCQUFBLEFBQVEsSUFBUixBQUFZO2lEQUNMLEVBQUUsVUFBRixXQUFZLFdBQVosQTs7bUJBRVQ7d0JBQUEsQUFBUSxJQUFSLEFBQVk7O3VCQUNPLGdCQUFBLEFBQU0sSSxBQUFOLEFBQVU7O21CQUF2QjtBLGdDQUNBO0EsNEJBQVksb0NBQUEsQUFBZSxBLEFBQzNCO0EsMkJBQVcsd0JBQVUsVUFBVixBQUFVLEFBQVUsSUFBcEIsQUFBd0IsV0FBeEIsQSxBQUFtQyxBQUNwRDs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7aURBQ0wsRUFBRSxVQUFGLFVBQVksV0FBWixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakJrQixnQkFBTSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iM2JmMmMzN2RhNWZiZjZhYjNkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MDA3YTBkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBFbXBsb3llZU5vZGUgZnJvbSAnLi4vY29tcG9uZW50cy9FbXBsb3llZU5vZGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgVHJlZSBmcm9tICdyZWFjdC10cmVlLWdyYXBoJztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzIH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuXG5jb25zdCBpbml0ZWNoT3JnID0ge1xuICBuYW1lOiBcIkJpbGwgTHVtYmVyZ2hcIixcbiAgZ1Byb3BzOiB7XG5cbiAgfSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlBldGVyIEdpYmJvbnNcIixcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkFuZCBNb3JlISFcIixcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJNaWx0b24gV2FkZGFtc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJCb2IgU2x5ZGVsbFwiLFxuICAgIH0sXG4gIF1cbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIGlmIChyZXEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTRVJWRVInKTtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kKHt9KTtcbiAgICAgIGNvbnN0IGVtcGxveWVlcyA9IHNoYXBlRW1wbG95ZWVzKGRhdGEpO1xuICAgICAgLy9UT0RPOiBuZWVkIHRvIGZpbmQgdGhlIG51bGwgc3VwZXJ2aXNvcklkIG5vdCB1c2UgaW5kZXggMFxuICAgICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUoZW1wbG95ZWVzWzBdLCBlbXBsb3llZXMpO1xuICAgICAgY29uc29sZS5sb2codHJlZURhdGEpO1xuICAgICAgcmV0dXJuIHsgdHJlZURhdGEsIGVtcGxveWVlcyB9O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnQ0xJRU5UIEdFVCcpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdC9hcGkvZW1wbG95ZWVzJyk7XG4gICAgY29uc3QgZW1wbG95ZWVzID0gc2hhcGVFbXBsb3llZXMoZGF0YSk7XG4gICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUoZW1wbG95ZWVzWzBdLCBlbXBsb3llZXMpWzBdO1xuICAgIGNvbnNvbGUubG9nKHRyZWVEYXRhKTtcbiAgICByZXR1cm4geyB0cmVlRGF0YSwgZW1wbG95ZWVzIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZW1wbG95ZWVzKVxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKHByb3BzKSA9PiB7XG4gICAgICBSb3V0ZXIucHVzaChgL2VtcGxveWVlP2lkPSR7dGhpcy5wcm9wcy5lbXBsb3llZXMuaWR9YCwgYC9lbXBsb3llZS8ke2lkfWApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZGVyIHVybD17dGhpcy5wcm9wcy51cmx9IHRpdGxlPXt0aGlzLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VHJlZSBkYXRhPXt0aGlzLnByb3BzLnRyZWVEYXRhfSBoZWlnaHQ9ezgwMH0gd2lkdGg9ezgwMH0gZ1Byb3BzPXt7IG9uQ2xpY2s6IGhhbmRsZUNsaWNrIH19IHN2Z1Byb3BzPXt7dHJhbnNmb3JtOiAncm90YXRlKDkwKSd9fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICBmb250OiAxcmVtIG1lbmxvO1xuICAgICAgICAgIGNvbG9yOiAjZnNmZjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICAubm9kZSBjaXJjbGUge1xuICAgICAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgICAgIHN0cm9rZTogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgZyB0ZXh0e1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZylcbiAgICAgICAgfVxuICAgICAgICBwYXRoLmxpbmsge1xuICAgICAgICAgIGZpbGw6IG5vbmU7XG4gICAgICAgICAgc3Ryb2tlOiBibGFjaztcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUdBO0FBRUE7QUFHQTs7QUFHQTs7QUFFQTtBQUFBO0FBSEE7QUFRQTtBQUFBO0FBR0E7QUFBQTtBQWpCQTtBQUNBOzs7Ozs7Ozs7Ozs7QUEwQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUxBO0FBNkJBO0FBN0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXRCQTtBQUNBO0FBREE7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWxCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9