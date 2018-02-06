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

var _link = __webpack_require__(393);

var _link2 = _interopRequireDefault(_link);

var _axios = __webpack_require__(419);

var _axios2 = _interopRequireDefault(_axios);

var _Header = __webpack_require__(438);

var _Header2 = _interopRequireDefault(_Header);

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


var initechOrg = {
  id: '1',
  name: "Bill Lumbergh",
  actor: "Gary Cole",
  children: [{
    id: '2',
    name: "Peter Gibbons",
    actor: "Ron Livingston",
    children: [{
      id: '4',
      name: "And More!!",
      actor: "This is just to show how to build a complex tree with multiple levels of children. Enjoy!"
    }]
  }, {
    id: '5',
    name: "Milton Waddams",
    actor: "Stephen Root"
  }, {
    id: '6',
    name: "Bob Slydell",
    actor: "John C. McGi..."
  }]
};

// const EmployeeNode = ({ node }) => {
//   return (
//     <div>
//       <Link as={`employee/${node.name}`} href={`/employee/${node.id}`}>
//         <a>{node.name}</a>
//       </Link>
//       <p>{node.supervisorName}</p>
//     <style jsx>{`
//     a {
//       text-decoration: none;
//     }
//   `}</style>
//   </div>
//   );
// }


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      console.log(this.props.employees);
      // const handleClick = (props) => {
      //   Router.push(`/employee?id=${this.props.employee.id}`, `/employee/${id}`);
      // }
      return _react2.default.createElement('div', {
        className: 'jsx-834181992',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-834181992',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-834181992',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_Tree2.default, { data: initechOrg, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '834181992',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGeUIsQUFHMkIsZ0JBQ0EsZ0JBQ0osWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vIGltcG9ydCBFbXBsb3llZU5vZGUgZnJvbSAnLi4vY29tcG9uZW50cy9FbXBsb3llZU5vZGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG4vLyBpbXBvcnQgVHJlZSBmcm9tICdyZWFjdC10cmVlLWdyYXBoJztcbmltcG9ydCBUcmVlIGZyb20gJy4uL2NvbXBvbmVudHMvVHJlZSc7XG5pbXBvcnQgT3JnQ2hhcnQgZnJvbSAncmVhY3Qtb3JnY2hhcnQnO1xuaW1wb3J0IHsgc2hhcGVFbXBsb3llZXMgfSBmcm9tICcuLi9hcGkvc2hhcGVycy9lbXBsb3llZVNoYXBlcic7XG5pbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tICcuLi9hcGkvdXRpbGl0eSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuXG5cbmNvbnN0IGluaXRlY2hPcmcgPSB7XG4gIGlkOiAnMScsXG4gIG5hbWU6IFwiQmlsbCBMdW1iZXJnaFwiLFxuICBhY3RvcjogXCJHYXJ5IENvbGVcIixcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBpZDogJzInLFxuICAgICAgbmFtZTogXCJQZXRlciBHaWJib25zXCIsXG4gICAgICBhY3RvcjogXCJSb24gTGl2aW5nc3RvblwiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgbmFtZTogXCJBbmQgTW9yZSEhXCIsXG4gICAgICAgICAgYWN0b3I6IFwiVGhpcyBpcyBqdXN0IHRvIHNob3cgaG93IHRvIGJ1aWxkIGEgY29tcGxleCB0cmVlIHdpdGggbXVsdGlwbGUgbGV2ZWxzIG9mIGNoaWxkcmVuLiBFbmpveSFcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJzUnLFxuICAgICAgbmFtZTogXCJNaWx0b24gV2FkZGFtc1wiLFxuICAgICAgYWN0b3I6IFwiU3RlcGhlbiBSb290XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnNicsXG4gICAgICBuYW1lOiBcIkJvYiBTbHlkZWxsXCIsXG4gICAgICBhY3RvcjogXCJKb2huIEMuIE1jR2kuLi5cIlxuICAgIH0sXG4gIF1cbn07XG5cbi8vIGNvbnN0IEVtcGxveWVlTm9kZSA9ICh7IG5vZGUgfSkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8TGluayBhcz17YGVtcGxveWVlLyR7bm9kZS5uYW1lfWB9IGhyZWY9e2AvZW1wbG95ZWUvJHtub2RlLmlkfWB9PlxuLy8gICAgICAgICA8YT57bm9kZS5uYW1lfTwvYT5cbi8vICAgICAgIDwvTGluaz5cbi8vICAgICAgIDxwPntub2RlLnN1cGVydmlzb3JOYW1lfTwvcD5cbi8vICAgICA8c3R5bGUganN4PntgXG4vLyAgICAgYSB7XG4vLyAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgfVxuLy8gICBgfTwvc3R5bGU+XG4vLyAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICBpZiAocmVxKSB7XG4gICAgICBjb25zb2xlLmxvZygnU0VSVkVSJyk7XG4gICAgICBjb25zdCB7IGRiIH0gPSByZXE7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZCh7fSk7XG4gICAgICBjb25zdCBlbXBsb3llZXMgPSBzaGFwZUVtcGxveWVlcyhkYXRhKTtcbiAgICAgIC8vVE9ETzogbmVlZCB0byBmaW5kIHRoZSBudWxsIHN1cGVydmlzb3JJZCBub3QgdXNlIGluZGV4IDBcbiAgICAgIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlc1swXSwgZW1wbG95ZWVzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRyZWVEYXRhKTtcbiAgICAgIHJldHVybiB7IHRyZWVEYXRhLCBlbXBsb3llZXMgfTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdC9hcGkvZW1wbG95ZWVzJyk7XG4gICAgY29uc3QgZW1wbG95ZWVzID0gc2hhcGVFbXBsb3llZXMoZGF0YSk7XG4gICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUoZW1wbG95ZWVzWzBdLCBlbXBsb3llZXMpWzBdO1xuICAgIHJldHVybiB7IHRyZWVEYXRhLCBlbXBsb3llZXMgfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5lbXBsb3llZXMpXG4gICAgLy8gY29uc3QgaGFuZGxlQ2xpY2sgPSAocHJvcHMpID0+IHtcbiAgICAvLyAgIFJvdXRlci5wdXNoKGAvZW1wbG95ZWU/aWQ9JHt0aGlzLnByb3BzLmVtcGxveWVlLmlkfWAsIGAvZW1wbG95ZWUvJHtpZH1gKTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSB0aXRsZT17dGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFRyZWUgZGF0YT17aW5pdGVjaE9yZ30gLz5cbiAgICAgICAgICB7LyogPFRyZWUgZGF0YT17dGhpcy5wcm9wcy50cmVlRGF0YX0gaGVpZ2h0PXs4MDB9IHdpZHRoPXs4MDB9IGtleVByb3A9e30gZ1Byb3BzPXt7IG9uQ2xpY2s6IGhhbmRsZUNsaWNrKCkgfX0gc3ZnUHJvcHM9e3t0cmFuc2Zvcm06ICdyb3RhdGUoOTApJ319Lz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICBmb250OiAxcmVtIG1lbmxvO1xuICAgICAgICAgIGNvbG9yOiAjZnNmZjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICAvLyAubm9kZSBjaXJjbGUge1xuICAgICAgICAvLyAgIGZpbGw6IHdoaXRlO1xuICAgICAgICAvLyAgIHN0cm9rZTogYmxhY2s7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZyB0ZXh0e1xuICAgICAgICAvLyAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZylcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBwYXRoLmxpbmsge1xuICAgICAgICAvLyAgIGZpbGw6IG5vbmU7XG4gICAgICAgIC8vICAgc3Ryb2tlOiBibGFjaztcbiAgICAgICAgLy8gfVxuXG4gICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
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
                _context.next = 12;
                return _axios2.default.get('http://localhost/api/employees');

              case 12:
                data = _context.sent;
                employees = (0, _employeeShaper.shapeEmployees)(data);
                treeData = (0, _utility.buildTree)(employees[0], employees)[0];
                return _context.abrupt('return', { treeData: treeData, employees: employees });

              case 16:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJheGlvcyIsIkhlYWRlciIsIlRyZWUiLCJPcmdDaGFydCIsInNoYXBlRW1wbG95ZWVzIiwiYnVpbGRUcmVlIiwiUm91dGVyIiwiaW5pdGVjaE9yZyIsImlkIiwibmFtZSIsImFjdG9yIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJlbXBsb3llZXMiLCJ1cmwiLCJyZXEiLCJkYiIsIm1vZGVsIiwiZmluZCIsImRhdGEiLCJ0cmVlRGF0YSIsImdldCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU8sQUFBWTs7OztBQUVuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7OztBQUNQLEFBQVMsQUFBc0I7O0FBQy9CLEFBQVMsQUFBaUI7O0FBQzFCLEFBQU87Ozs7Ozs7QUFQUDs7QUFFQTs7O0FBU0EsSUFBTTtNQUFhLEFBQ2IsQUFDSjtRQUZpQixBQUVYLEFBQ047U0FIaUIsQUFHVixBQUNQOztRQUNFLEFBQ00sQUFDSjtVQUZGLEFBRVEsQUFDTjtXQUhGLEFBR1MsQUFDUDs7VUFDRSxBQUNNLEFBQ0o7WUFGRixBQUVRLEFBQ047YUFURSxBQUNSLEFBSVksQUFDUixBQUdTO0FBSFQsQUFDRSxLQUZNO0FBSlosQUFDRSxHQUZNO1FBYVIsQUFDTSxBQUNKO1VBRkYsQUFFUSxBQUNOO1dBaEJNLEFBYVIsQUFHUztBQUhULEFBQ0U7UUFJRixBQUNNLEFBQ0o7VUFGRixBQUVRLEFBQ047V0F6Qk4sQUFBbUIsQUFJUCxBQWtCUixBQUdTO0FBSFQsQUFDRTtBQXZCYSxBQUNqQjs7QUE2QkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs2QkFxQlcsQUFDUDtjQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7QUFDQTtBQUNBO0FBQ0E7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGtDQUFPLEtBQUssS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEtBQUssT0FBTyxLQUFwQyxBQUF5QztvQkFBekM7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBWTtvQkFBWjtzQkFMSixBQUlFLEFBQ0U7QUFBQTs7aUJBTEo7YUFERixBQUNFLEFBK0JIO0FBL0JHOzs7Ozs7WUF0QjJCLEEsV0FBQSxBOzs7Ozs7OztxQixBQUN6Qjs7O0FBQ0Y7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ0o7QSxxQkFBTyxBLEksQUFBUDs7dUJBQ1csR0FBQSxBQUFHLE1BQUgsQUFBUyxZQUFULEFBQXFCLEtBQXJCLEFBQTBCLEE7O21CQUF2QztBLGlDQUNBO0EsNkJBQVksb0MsQUFBQSxBQUFlLEFBQ2pDO0FBQ007O0EsNEJBQVcsd0JBQVUsV0FBVixBQUFVLEFBQVUsSUFBcEIsQUFBd0IsQUFDekMsQTs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7aURBQ0wsRUFBRSxVQUFGLFdBQVksV0FBWixBOzs7O3VCQUVVLGdCQUFBLEFBQU0sSUFBTixBQUFVLEE7O21CQUF2QjtBLGdDQUNBO0EsNEJBQVksb0NBQUEsQSxBQUFlLEFBQzNCO0EsMkJBQVcsd0JBQVUsVUFBVixBQUFVLEFBQVUsSUFBcEIsQUFBd0IsV0FBeEIsQUFBbUMsQTtpREFDN0MsRUFBRSxVQUFGLFVBQVksV0FBWixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZmtCLGdCQUFNLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45ZGFhYjM2ZDAzZjU0YmVmMzIxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MTZhOGEwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vIGltcG9ydCBFbXBsb3llZU5vZGUgZnJvbSAnLi4vY29tcG9uZW50cy9FbXBsb3llZU5vZGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG4vLyBpbXBvcnQgVHJlZSBmcm9tICdyZWFjdC10cmVlLWdyYXBoJztcbmltcG9ydCBUcmVlIGZyb20gJy4uL2NvbXBvbmVudHMvVHJlZSc7XG5pbXBvcnQgT3JnQ2hhcnQgZnJvbSAncmVhY3Qtb3JnY2hhcnQnO1xuaW1wb3J0IHsgc2hhcGVFbXBsb3llZXMgfSBmcm9tICcuLi9hcGkvc2hhcGVycy9lbXBsb3llZVNoYXBlcic7XG5pbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tICcuLi9hcGkvdXRpbGl0eSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuXG5cbmNvbnN0IGluaXRlY2hPcmcgPSB7XG4gIGlkOiAnMScsXG4gIG5hbWU6IFwiQmlsbCBMdW1iZXJnaFwiLFxuICBhY3RvcjogXCJHYXJ5IENvbGVcIixcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBpZDogJzInLFxuICAgICAgbmFtZTogXCJQZXRlciBHaWJib25zXCIsXG4gICAgICBhY3RvcjogXCJSb24gTGl2aW5nc3RvblwiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgbmFtZTogXCJBbmQgTW9yZSEhXCIsXG4gICAgICAgICAgYWN0b3I6IFwiVGhpcyBpcyBqdXN0IHRvIHNob3cgaG93IHRvIGJ1aWxkIGEgY29tcGxleCB0cmVlIHdpdGggbXVsdGlwbGUgbGV2ZWxzIG9mIGNoaWxkcmVuLiBFbmpveSFcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJzUnLFxuICAgICAgbmFtZTogXCJNaWx0b24gV2FkZGFtc1wiLFxuICAgICAgYWN0b3I6IFwiU3RlcGhlbiBSb290XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnNicsXG4gICAgICBuYW1lOiBcIkJvYiBTbHlkZWxsXCIsXG4gICAgICBhY3RvcjogXCJKb2huIEMuIE1jR2kuLi5cIlxuICAgIH0sXG4gIF1cbn07XG5cbi8vIGNvbnN0IEVtcGxveWVlTm9kZSA9ICh7IG5vZGUgfSkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8TGluayBhcz17YGVtcGxveWVlLyR7bm9kZS5uYW1lfWB9IGhyZWY9e2AvZW1wbG95ZWUvJHtub2RlLmlkfWB9PlxuLy8gICAgICAgICA8YT57bm9kZS5uYW1lfTwvYT5cbi8vICAgICAgIDwvTGluaz5cbi8vICAgICAgIDxwPntub2RlLnN1cGVydmlzb3JOYW1lfTwvcD5cbi8vICAgICA8c3R5bGUganN4PntgXG4vLyAgICAgYSB7XG4vLyAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgfVxuLy8gICBgfTwvc3R5bGU+XG4vLyAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICBpZiAocmVxKSB7XG4gICAgICBjb25zb2xlLmxvZygnU0VSVkVSJyk7XG4gICAgICBjb25zdCB7IGRiIH0gPSByZXE7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZCh7fSk7XG4gICAgICBjb25zdCBlbXBsb3llZXMgPSBzaGFwZUVtcGxveWVlcyhkYXRhKTtcbiAgICAgIC8vVE9ETzogbmVlZCB0byBmaW5kIHRoZSBudWxsIHN1cGVydmlzb3JJZCBub3QgdXNlIGluZGV4IDBcbiAgICAgIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlc1swXSwgZW1wbG95ZWVzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRyZWVEYXRhKTtcbiAgICAgIHJldHVybiB7IHRyZWVEYXRhLCBlbXBsb3llZXMgfTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdC9hcGkvZW1wbG95ZWVzJyk7XG4gICAgY29uc3QgZW1wbG95ZWVzID0gc2hhcGVFbXBsb3llZXMoZGF0YSk7XG4gICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUoZW1wbG95ZWVzWzBdLCBlbXBsb3llZXMpWzBdO1xuICAgIHJldHVybiB7IHRyZWVEYXRhLCBlbXBsb3llZXMgfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5lbXBsb3llZXMpXG4gICAgLy8gY29uc3QgaGFuZGxlQ2xpY2sgPSAocHJvcHMpID0+IHtcbiAgICAvLyAgIFJvdXRlci5wdXNoKGAvZW1wbG95ZWU/aWQ9JHt0aGlzLnByb3BzLmVtcGxveWVlLmlkfWAsIGAvZW1wbG95ZWUvJHtpZH1gKTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSB0aXRsZT17dGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFRyZWUgZGF0YT17aW5pdGVjaE9yZ30gLz5cbiAgICAgICAgICB7LyogPFRyZWUgZGF0YT17dGhpcy5wcm9wcy50cmVlRGF0YX0gaGVpZ2h0PXs4MDB9IHdpZHRoPXs4MDB9IGtleVByb3A9e30gZ1Byb3BzPXt7IG9uQ2xpY2s6IGhhbmRsZUNsaWNrKCkgfX0gc3ZnUHJvcHM9e3t0cmFuc2Zvcm06ICdyb3RhdGUoOTApJ319Lz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICBmb250OiAxcmVtIG1lbmxvO1xuICAgICAgICAgIGNvbG9yOiAjZnNmZjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICAvLyAubm9kZSBjaXJjbGUge1xuICAgICAgICAvLyAgIGZpbGw6IHdoaXRlO1xuICAgICAgICAvLyAgIHN0cm9rZTogYmxhY2s7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZyB0ZXh0e1xuICAgICAgICAvLyAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZylcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBwYXRoLmxpbmsge1xuICAgICAgICAvLyAgIGZpbGw6IG5vbmU7XG4gICAgICAgIC8vICAgc3Ryb2tlOiBibGFjaztcbiAgICAgICAgLy8gfVxuXG4gICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBRkE7QUFMQTtBQWFBO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUF0QkE7QUFDQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFvQkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBTEE7QUErQkE7QUEvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcEJBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFoQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==