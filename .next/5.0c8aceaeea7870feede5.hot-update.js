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

var _style = __webpack_require__(395);

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

var _style3 = __webpack_require__(536);

var _style4 = _interopRequireDefault(_style3);

var _employeeShaper = __webpack_require__(534);

var _utility = __webpack_require__(535);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/index.js?entry';
// import Tree from 'react-tree-graph';


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
      return _react2.default.createElement('div', {
        className: 'jsx-4291488933',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4291488933',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-4291488933',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_reactTreeGraph2.default, { data: initechOrg, height: 1000, width: 1000, animated: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '4291488933',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFeUIsQUFHMkIsZ0JBQ0EsZ0JBQ0osWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vIGltcG9ydCBUcmVlIGZyb20gJ3JlYWN0LXRyZWUtZ3JhcGgnO1xuaW1wb3J0IEVtcGxveWVlTm9kZSBmcm9tICcuLi9jb21wb25lbnRzL0VtcGxveWVlTm9kZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBUcmVlIGZyb20gJ3JlYWN0LXRyZWUtZ3JhcGgnO1xuaW1wb3J0IHRyZWVTdHlsZXMgZnJvbSAncmVhY3QtdHJlZS1ncmFwaC9kaXN0L3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzaGFwZUVtcGxveWVlcyB9IGZyb20gJy4uL2FwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyJztcbmltcG9ydCB7IGJ1aWxkVHJlZSwgYnVpbGRUcmVlMiB9IGZyb20gJy4uL2FwaS91dGlsaXR5JztcblxuXG5cbmNvbnN0IGluaXRlY2hPcmcgPSB7XG4gIG5hbWU6IFwiQmlsbCBMdW1iZXJnaFwiLFxuICBnUHJvcHM6IHtcblxuICB9LFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiUGV0ZXIgR2liYm9uc1wiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiQW5kIE1vcmUhIVwiLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIk1pbHRvbiBXYWRkYW1zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkJvYiBTbHlkZWxsXCIsXG4gICAgfSxcbiAgXVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIGlmIChyZXEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTRVJWRVInKTtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kKHt9KTtcbiAgICAgIGNvbnN0IGVtcGxveWVlcyA9IHNoYXBlRW1wbG95ZWVzKGRhdGEpO1xuICAgICAgLy9UT0RPOiBuZWVkIHRvIGZpbmQgdGhlIG51bGwgc3VwZXJ2aXNvcklkIG5vdCB1c2UgaW5kZXggMFxuICAgICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUyKGVtcGxveWVlc1swXSwgZW1wbG95ZWVzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRyZWVEYXRhKTtcbiAgICAgIHJldHVybiB7IHRyZWVEYXRhIH07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdDTElFTlQgR0VUJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2FwaS9lbXBsb3llZXMnKTtcbiAgICBjb25zdCBlbXBsb3llZXMgPSBzaGFwZUVtcGxveWVlcyhkYXRhKTtcbiAgICBjb25zdCB0cmVlRGF0YSA9IGJ1aWxkVHJlZTIoZW1wbG95ZWVzWzBdLCBlbXBsb3llZXMpWzBdO1xuICAgIGNvbnNvbGUubG9nKHRyZWVEYXRhKTtcbiAgICByZXR1cm4geyB0cmVlRGF0YSB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZGVyIHVybD17dGhpcy5wcm9wcy51cmx9IHRpdGxlPXt0aGlzLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VHJlZSBkYXRhPXtpbml0ZWNoT3JnfSBoZWlnaHQ9ezEwMDB9IHdpZHRoPXsxMDAwfSBhbmltYXRlZD17dHJ1ZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgZm9udDogMXJlbSBtZW5sbztcbiAgICAgICAgICBjb2xvcjogI2ZzZmY7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
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

                _treeData = (0, _utility.buildTree2)(_employees[0], _employees);

                console.log(_treeData);
                return _context.abrupt('return', { treeData: _treeData });

              case 10:
                console.log('CLIENT GET');
                _context.next = 13;
                return _axios2.default.get('http://localhost/api/employees');

              case 13:
                data = _context.sent;
                employees = (0, _employeeShaper.shapeEmployees)(data);
                treeData = (0, _utility.buildTree2)(employees[0], employees)[0];

                console.log(treeData);
                return _context.abrupt('return', { treeData: treeData });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJheGlvcyIsIkVtcGxveWVlTm9kZSIsIkhlYWRlciIsIlRyZWUiLCJ0cmVlU3R5bGVzIiwic2hhcGVFbXBsb3llZXMiLCJidWlsZFRyZWUiLCJidWlsZFRyZWUyIiwiaW5pdGVjaE9yZyIsIm5hbWUiLCJnUHJvcHMiLCJjaGlsZHJlbiIsInByb3BzIiwidXJsIiwicmVxIiwiY29uc29sZSIsImxvZyIsImRiIiwibW9kZWwiLCJmaW5kIiwiZGF0YSIsImVtcGxveWVlcyIsInRyZWVEYXRhIiwiZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQXNCOztBQUMvQixBQUFTLEFBQVcsQUFBa0I7Ozs7O0FBTnRDOzs7QUFVQSxJQUFNO1FBQWEsQUFDWCxBQUNOO1VBRmlCLEFBRVQsQUFHUjs7VUFDRSxBQUNRLEFBQ047O1lBSE0sQUFDUixBQUVZLEFBQ1IsQUFDUTtBQURSLEFBQ0UsS0FGTTtBQUZaLEFBQ0UsR0FGTTtVQUFBLEFBU1IsQUFDUTtBQURSLEFBQ0U7VUFmTixBQUFtQixBQUtQLEFBWVIsQUFDUTtBQURSLEFBQ0U7QUFsQmEsQUFDakI7Ozs7Ozs7Ozs7Ozs7NkJBMENTLEFBQ1A7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGtDQUFPLEtBQUssS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEtBQUssT0FBTyxLQUFwQyxBQUF5QztvQkFBekM7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDBDQUFLLE1BQU4sQUFBWSxZQUFZLFFBQXhCLEFBQWdDLE1BQU0sT0FBdEMsQUFBNkMsTUFBTSxVQUFuRCxBQUE2RDtvQkFBN0Q7c0JBTEosQUFJRSxBQUNFO0FBQUE7O2lCQUxKO2FBREYsQUFDRSxBQWtCSDtBQWxCRzs7Ozs7O1lBcEIyQixBLFdBQUEsQTs7Ozs7Ozs7cUJBQ3pCLEE7OztBQUNGOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNKO0EscUIsQUFBTyxJQUFQLEE7O3VCQUNXLEdBQUEsQUFBRyxNQUFILEFBQVMsWUFBVCxBQUFxQixLQUFyQixBLEFBQTBCOzttQkFBdkM7QSxpQ0FDQTtBLDZCQUFZLG9DQUFBLEFBQWUsQSxBQUNqQztBQUNNOztBLDRCQUFXLHlCQUFXLFdBQVgsQUFBVyxBQUFVLElBQXJCLEFBQXlCLEFBQzFDLEE7O3dCQUFBLEFBQVEsSUFBUixBQUFZO2lEQUNMLEVBQUUsVUFBRixBOzttQkFFVDt3QkFBQSxBQUFRLElBQVIsQUFBWTs7dUJBQ08sZ0JBQUEsQUFBTSxJQUFOLEFBQVUsQTs7bUJBQXZCO0EsZ0NBQ0E7QSw0QkFBWSxvQyxBQUFBLEFBQWUsQUFDM0I7QSwyQkFBVyx5QkFBVyxVQUFYLEFBQVcsQUFBVSxJQUFyQixBQUF5QixXQUF6QixBLEFBQW9DLEFBQ3JEOzt3QkFBQSxBQUFRLElBQVIsQUFBWTtpREFDTCxFQUFFLFVBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpCa0IsZ0JBQU0sQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9

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

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/node_modules/react-tree-graph/dist/style.css Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| .node circle {\r\n| \tfill: white;\r\n| \tstroke: black;\r");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wYzhhY2VhZWVhNzg3MGZlZWRlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YTE4MmIwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vIGltcG9ydCBUcmVlIGZyb20gJ3JlYWN0LXRyZWUtZ3JhcGgnO1xuaW1wb3J0IEVtcGxveWVlTm9kZSBmcm9tICcuLi9jb21wb25lbnRzL0VtcGxveWVlTm9kZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBUcmVlIGZyb20gJ3JlYWN0LXRyZWUtZ3JhcGgnO1xuaW1wb3J0IHRyZWVTdHlsZXMgZnJvbSAncmVhY3QtdHJlZS1ncmFwaC9kaXN0L3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBzaGFwZUVtcGxveWVlcyB9IGZyb20gJy4uL2FwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyJztcbmltcG9ydCB7IGJ1aWxkVHJlZSwgYnVpbGRUcmVlMiB9IGZyb20gJy4uL2FwaS91dGlsaXR5JztcblxuXG5cbmNvbnN0IGluaXRlY2hPcmcgPSB7XG4gIG5hbWU6IFwiQmlsbCBMdW1iZXJnaFwiLFxuICBnUHJvcHM6IHtcblxuICB9LFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiUGV0ZXIgR2liYm9uc1wiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiQW5kIE1vcmUhIVwiLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIk1pbHRvbiBXYWRkYW1zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkJvYiBTbHlkZWxsXCIsXG4gICAgfSxcbiAgXVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIGlmIChyZXEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTRVJWRVInKTtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kKHt9KTtcbiAgICAgIGNvbnN0IGVtcGxveWVlcyA9IHNoYXBlRW1wbG95ZWVzKGRhdGEpO1xuICAgICAgLy9UT0RPOiBuZWVkIHRvIGZpbmQgdGhlIG51bGwgc3VwZXJ2aXNvcklkIG5vdCB1c2UgaW5kZXggMFxuICAgICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUyKGVtcGxveWVlc1swXSwgZW1wbG95ZWVzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRyZWVEYXRhKTtcbiAgICAgIHJldHVybiB7IHRyZWVEYXRhIH07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdDTElFTlQgR0VUJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0L2FwaS9lbXBsb3llZXMnKTtcbiAgICBjb25zdCBlbXBsb3llZXMgPSBzaGFwZUVtcGxveWVlcyhkYXRhKTtcbiAgICBjb25zdCB0cmVlRGF0YSA9IGJ1aWxkVHJlZTIoZW1wbG95ZWVzWzBdLCBlbXBsb3llZXMpWzBdO1xuICAgIGNvbnNvbGUubG9nKHRyZWVEYXRhKTtcbiAgICByZXR1cm4geyB0cmVlRGF0YSB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZGVyIHVybD17dGhpcy5wcm9wcy51cmx9IHRpdGxlPXt0aGlzLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VHJlZSBkYXRhPXtpbml0ZWNoT3JnfSBoZWlnaHQ9ezEwMDB9IHdpZHRoPXsxMDAwfSBhbmltYXRlZD17dHJ1ZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgZm9udDogMXJlbSBtZW5sbztcbiAgICAgICAgICBjb2xvcjogI2ZzZmY7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBUEE7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUdBOztBQUdBOztBQUVBO0FBQUE7QUFIQTtBQVFBO0FBQUE7QUFHQTtBQUFBO0FBakJBO0FBQ0E7Ozs7Ozs7Ozs7OztBQTBDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBTEE7QUFrQkE7QUFsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbEJBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9