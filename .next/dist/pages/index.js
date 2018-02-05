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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Tree = require('../components/Tree');

var _Tree2 = _interopRequireDefault(_Tree);

var _reactOrgchart = require('react-orgchart');

var _reactOrgchart2 = _interopRequireDefault(_reactOrgchart);

var _employeeShaper = require('../api/shapers/employeeShaper');

var _utility = require('../api/utility');

var _index = require('next/dist/lib/router/index.js');

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
          lineNumber: 86
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-834181992',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-834181992',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_Tree2.default, { data: initechOrg, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '834181992',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGeUIsQUFHMkIsZ0JBQ0EsZ0JBQ0osWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vIGltcG9ydCBFbXBsb3llZU5vZGUgZnJvbSAnLi4vY29tcG9uZW50cy9FbXBsb3llZU5vZGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG4vLyBpbXBvcnQgVHJlZSBmcm9tICdyZWFjdC10cmVlLWdyYXBoJztcbmltcG9ydCBUcmVlIGZyb20gJy4uL2NvbXBvbmVudHMvVHJlZSc7XG5pbXBvcnQgT3JnQ2hhcnQgZnJvbSAncmVhY3Qtb3JnY2hhcnQnO1xuaW1wb3J0IHsgc2hhcGVFbXBsb3llZXMgfSBmcm9tICcuLi9hcGkvc2hhcGVycy9lbXBsb3llZVNoYXBlcic7XG5pbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tICcuLi9hcGkvdXRpbGl0eSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuXG5cbmNvbnN0IGluaXRlY2hPcmcgPSB7XG4gIGlkOiAnMScsXG4gIG5hbWU6IFwiQmlsbCBMdW1iZXJnaFwiLFxuICBhY3RvcjogXCJHYXJ5IENvbGVcIixcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBpZDogJzInLFxuICAgICAgbmFtZTogXCJQZXRlciBHaWJib25zXCIsXG4gICAgICBhY3RvcjogXCJSb24gTGl2aW5nc3RvblwiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgbmFtZTogXCJBbmQgTW9yZSEhXCIsXG4gICAgICAgICAgYWN0b3I6IFwiVGhpcyBpcyBqdXN0IHRvIHNob3cgaG93IHRvIGJ1aWxkIGEgY29tcGxleCB0cmVlIHdpdGggbXVsdGlwbGUgbGV2ZWxzIG9mIGNoaWxkcmVuLiBFbmpveSFcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJzUnLFxuICAgICAgbmFtZTogXCJNaWx0b24gV2FkZGFtc1wiLFxuICAgICAgYWN0b3I6IFwiU3RlcGhlbiBSb290XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnNicsXG4gICAgICBuYW1lOiBcIkJvYiBTbHlkZWxsXCIsXG4gICAgICBhY3RvcjogXCJKb2huIEMuIE1jR2kuLi5cIlxuICAgIH0sXG4gIF1cbn07XG5cbi8vIGNvbnN0IEVtcGxveWVlTm9kZSA9ICh7IG5vZGUgfSkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8TGluayBhcz17YGVtcGxveWVlLyR7bm9kZS5uYW1lfWB9IGhyZWY9e2AvZW1wbG95ZWUvJHtub2RlLmlkfWB9PlxuLy8gICAgICAgICA8YT57bm9kZS5uYW1lfTwvYT5cbi8vICAgICAgIDwvTGluaz5cbi8vICAgICAgIDxwPntub2RlLnN1cGVydmlzb3JOYW1lfTwvcD5cbi8vICAgICA8c3R5bGUganN4PntgXG4vLyAgICAgYSB7XG4vLyAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgfVxuLy8gICBgfTwvc3R5bGU+XG4vLyAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICBpZiAocmVxKSB7XG4gICAgICBjb25zb2xlLmxvZygnU0VSVkVSJyk7XG4gICAgICBjb25zdCB7IGRiIH0gPSByZXE7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZCh7fSk7XG4gICAgICBjb25zdCBlbXBsb3llZXMgPSBzaGFwZUVtcGxveWVlcyhkYXRhKTtcbiAgICAgIC8vVE9ETzogbmVlZCB0byBmaW5kIHRoZSBudWxsIHN1cGVydmlzb3JJZCBub3QgdXNlIGluZGV4IDBcbiAgICAgIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlc1swXSwgZW1wbG95ZWVzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRyZWVEYXRhKTtcbiAgICAgIHJldHVybiB7IHRyZWVEYXRhLCBlbXBsb3llZXMgfTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdC9hcGkvZW1wbG95ZWVzJyk7XG4gICAgY29uc3QgZW1wbG95ZWVzID0gc2hhcGVFbXBsb3llZXMoZGF0YSk7XG4gICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUoZW1wbG95ZWVzWzBdLCBlbXBsb3llZXMpWzBdO1xuICAgIGNvbnNvbGUubG9nKHRyZWVEYXRhKTtcbiAgICByZXR1cm4geyB0cmVlRGF0YSwgZW1wbG95ZWVzIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZW1wbG95ZWVzKVxuICAgIC8vIGNvbnN0IGhhbmRsZUNsaWNrID0gKHByb3BzKSA9PiB7XG4gICAgLy8gICBSb3V0ZXIucHVzaChgL2VtcGxveWVlP2lkPSR7dGhpcy5wcm9wcy5lbXBsb3llZS5pZH1gLCBgL2VtcGxveWVlLyR7aWR9YCk7XG4gICAgLy8gfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkZXIgdXJsPXt0aGlzLnByb3BzLnVybH0gdGl0bGU9e3RoaXMucHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUcmVlIGRhdGE9e2luaXRlY2hPcmd9IC8+XG4gICAgICAgICAgey8qIDxUcmVlIGRhdGE9e3RoaXMucHJvcHMudHJlZURhdGF9IGhlaWdodD17ODAwfSB3aWR0aD17ODAwfSBrZXlQcm9wPXt9IGdQcm9wcz17eyBvbkNsaWNrOiBoYW5kbGVDbGljaygpIH19IHN2Z1Byb3BzPXt7dHJhbnNmb3JtOiAncm90YXRlKDkwKSd9fS8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgZm9udDogMXJlbSBtZW5sbztcbiAgICAgICAgICBjb2xvcjogI2ZzZmY7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLm5vZGUgY2lyY2xlIHtcbiAgICAgICAgLy8gICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgLy8gICBzdHJva2U6IGJsYWNrO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGcgdGV4dHtcbiAgICAgICAgLy8gICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcGF0aC5saW5rIHtcbiAgICAgICAgLy8gICBmaWxsOiBub25lO1xuICAgICAgICAvLyAgIHN0cm9rZTogYmxhY2s7XG4gICAgICAgIC8vIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
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

                console.log(treeData);
                return _context.abrupt('return', { treeData: treeData, employees: employees });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJheGlvcyIsIkhlYWRlciIsIlRyZWUiLCJPcmdDaGFydCIsInNoYXBlRW1wbG95ZWVzIiwiYnVpbGRUcmVlIiwiUm91dGVyIiwiaW5pdGVjaE9yZyIsImlkIiwibmFtZSIsImFjdG9yIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJlbXBsb3llZXMiLCJ1cmwiLCJyZXEiLCJkYiIsIm1vZGVsIiwiZmluZCIsImRhdGEiLCJ0cmVlRGF0YSIsImdldCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU8sQUFBWTs7OztBQUVuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7OztBQUNQLEFBQVMsQUFBc0I7O0FBQy9CLEFBQVMsQUFBaUI7O0FBQzFCLEFBQU87Ozs7Ozs7QUFQUDs7QUFFQTs7O0FBU0EsSUFBTTtNQUFhLEFBQ2IsQUFDSjtRQUZpQixBQUVYLEFBQ047U0FIaUIsQUFHVixBQUNQOztRQUNFLEFBQ00sQUFDSjtVQUZGLEFBRVEsQUFDTjtXQUhGLEFBR1MsQUFDUDs7VUFDRSxBQUNNLEFBQ0o7WUFGRixBQUVRLEFBQ047YUFURSxBQUNSLEFBSVksQUFDUixBQUdTO0FBSFQsQUFDRSxLQUZNO0FBSlosQUFDRSxHQUZNO1FBYVIsQUFDTSxBQUNKO1VBRkYsQUFFUSxBQUNOO1dBaEJNLEFBYVIsQUFHUztBQUhULEFBQ0U7UUFJRixBQUNNLEFBQ0o7VUFGRixBQUVRLEFBQ047V0F6Qk4sQUFBbUIsQUFJUCxBQWtCUixBQUdTO0FBSFQsQUFDRTtBQXZCYSxBQUNqQjs7QUE2QkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs2QkFzQlcsQUFDUDtjQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7QUFDQTtBQUNBO0FBQ0E7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGtDQUFPLEtBQUssS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEtBQUssT0FBTyxLQUFwQyxBQUF5QztvQkFBekM7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBWTtvQkFBWjtzQkFMSixBQUlFLEFBQ0U7QUFBQTs7aUJBTEo7YUFERixBQUNFLEFBK0JIO0FBL0JHOzs7Ozs7WSxBQXZCMkIsV0FBQSxBOzs7Ozs7OztxQkFDekIsQTs7O0FBQ0Y7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ0o7QSxxQkFBTyxBLElBQVAsQTs7dUJBQ1csR0FBQSxBQUFHLE1BQUgsQUFBUyxZQUFULEFBQXFCLEtBQXJCLEEsQUFBMEI7O21CQUF2QztBLGlDQUNBO0EsNkJBQVksb0MsQUFBQSxBQUFlLEFBQ2pDO0FBQ007O0EsNEJBQVcsd0JBQVUsV0FBVixBQUFVLEFBQVUsSUFBcEIsQUFBd0IsQSxBQUN6Qzs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7aURBQ0wsRUFBRSxVQUFGLFdBQVksV0FBWixBOzs7O3VCQUVVLGdCQUFBLEFBQU0sSUFBTixBQUFVLEE7O21CQUF2QjtBLGdDQUNBO0EsNEJBQVksb0NBQUEsQUFBZSxBLEFBQzNCO0EsMkJBQVcsd0JBQVUsVUFBVixBQUFVLEFBQVUsSUFBcEIsQUFBd0IsV0FBeEIsQSxBQUFtQyxBQUNwRDs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7aURBQ0wsRUFBRSxVQUFGLFVBQVksV0FBWixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEJrQixnQkFBTSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=