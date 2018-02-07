'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

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


var apiUrl = 'http://localhost:3000/api';

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

    // async componentDidMount() {
    //   console.log(data)
    //   const data = await fetch('http://localhost/api/employees');
    //   const employees = shapeEmployees(data);
    //   const treeData = buildTree(employees[0], employees)[0];
    //   return { treeData, employees };
    // }
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-1658254831',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1658254831',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), _react2.default.createElement('div', { id: 'tree', className: 'jsx-1658254831',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement(_Tree2.default, { data: this.props.treeData, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '1658254831',
        css: '#tree{padding-top:20px;}body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtHeUIsQUFJUSxBQUVtQixnQkFDQSxDQUhsQixlQUljLFlBQ0gsU0FDQyxVQUNaIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vIGltcG9ydCBFbXBsb3llZU5vZGUgZnJvbSAnLi4vY29tcG9uZW50cy9FbXBsb3llZU5vZGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG4vLyBpbXBvcnQgVHJlZSBmcm9tICdyZWFjdC10cmVlLWdyYXBoJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgVHJlZSBmcm9tICcuLi9jb21wb25lbnRzL1RyZWUnO1xuaW1wb3J0IE9yZ0NoYXJ0IGZyb20gJ3JlYWN0LW9yZ2NoYXJ0JztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzT3V0IH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IGFwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJ1xuXG5cbmNvbnN0IGluaXRlY2hPcmcgPSB7XG4gIGlkOiAnMScsXG4gIG5hbWU6IFwiQmlsbCBMdW1iZXJnaFwiLFxuICBhY3RvcjogXCJHYXJ5IENvbGVcIixcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBpZDogJzInLFxuICAgICAgbmFtZTogXCJQZXRlciBHaWJib25zXCIsXG4gICAgICBhY3RvcjogXCJSb24gTGl2aW5nc3RvblwiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgbmFtZTogXCJBbmQgTW9yZSEhXCIsXG4gICAgICAgICAgYWN0b3I6IFwiVGhpcyBpcyBqdXN0IHRvIHNob3cgaG93IHRvIGJ1aWxkIGEgY29tcGxleCB0cmVlIHdpdGggbXVsdGlwbGUgbGV2ZWxzIG9mIGNoaWxkcmVuLiBFbmpveSFcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJzUnLFxuICAgICAgbmFtZTogXCJNaWx0b24gV2FkZGFtc1wiLFxuICAgICAgYWN0b3I6IFwiU3RlcGhlbiBSb290XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnNicsXG4gICAgICBuYW1lOiBcIkJvYiBTbHlkZWxsXCIsXG4gICAgICBhY3RvcjogXCJKb2huIEMuIE1jR2kuLi5cIlxuICAgIH0sXG4gIF1cbn07XG5cbi8vIGNvbnN0IEVtcGxveWVlTm9kZSA9ICh7IG5vZGUgfSkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8TGluayBhcz17YGVtcGxveWVlLyR7bm9kZS5uYW1lfWB9IGhyZWY9e2AvZW1wbG95ZWUvJHtub2RlLmlkfWB9PlxuLy8gICAgICAgICA8YT57bm9kZS5uYW1lfTwvYT5cbi8vICAgICAgIDwvTGluaz5cbi8vICAgICAgIDxwPntub2RlLnN1cGVydmlzb3JOYW1lfTwvcD5cbi8vICAgICA8c3R5bGUganN4PntgXG4vLyAgICAgYSB7XG4vLyAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgfVxuLy8gICBgfTwvc3R5bGU+XG4vLyAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICBpZiAocmVxKSB7XG4gICAgICBjb25zb2xlLmxvZygnU0VSVkVSJyk7XG4gICAgICBjb25zdCB7IGRiIH0gPSByZXE7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZCh7fSk7XG4gICAgICBjb25zdCBlbXBsb3llZXMgPSBzaGFwZUVtcGxveWVlc091dChkYXRhKTtcbiAgICAgIC8vVE9ETzogbmVlZCB0byBmaW5kIHRoZSBudWxsIHN1cGVydmlzb3JJZCBub3QgdXNlIGluZGV4IDBcbiAgICAgIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlc1swXSwgZW1wbG95ZWVzKTtcbiAgICAgIHJldHVybiB7IHRyZWVEYXRhLCBlbXBsb3llZXMgfTtcbiAgICB9XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpVXJsfS9lbXBsb3llZWApO1xuICAgIGNvbnN0IGVtcGxveWVlcyA9IFsuLi5kYXRhXVxuICAgIGNvbnN0IHRyZWVUb3AgPSBlbXBsb3llZXMuZmluZCgoZW1wKSA9PiBlbXAuc3VwZXJ2aXNvcklkID09PSBudWxsIHx8IGVtcC5zdXBlcnZpc29ySWQgPT09IHVuZGVmaW5lZCApXG4gICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUodHJlZVRvcCwgZW1wbG95ZWVzKTtcbiAgICAvLyBjb25zb2xlLmxvZygnVFJFRSBDTElFTlQnLCB0cmVlRGF0YSk7XG4gICAgcmV0dXJuIHsgdHJlZURhdGEsIGVtcGxveWVlcyB9O1xuICB9XG5cbiAgLy8gYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIC8vICAgY29uc29sZS5sb2coZGF0YSlcbiAgLy8gICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3QvYXBpL2VtcGxveWVlcycpO1xuICAvLyAgIGNvbnN0IGVtcGxveWVlcyA9IHNoYXBlRW1wbG95ZWVzKGRhdGEpO1xuICAvLyAgIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlc1swXSwgZW1wbG95ZWVzKVswXTtcbiAgLy8gICByZXR1cm4geyB0cmVlRGF0YSwgZW1wbG95ZWVzIH07XG4gIC8vIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkZXIgdXJsPXt0aGlzLnByb3BzLnVybH0gdGl0bGU9e3RoaXMucHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwidHJlZVwiPlxuICAgICAgICAgIDxUcmVlIGRhdGE9e3RoaXMucHJvcHMudHJlZURhdGF9IC8+XG4gICAgICAgICAgey8qIDxUcmVlIGRhdGE9e3RoaXMucHJvcHMudHJlZURhdGF9IGhlaWdodD17ODAwfSB3aWR0aD17ODAwfSBrZXlQcm9wPXt9IGdQcm9wcz17eyBvbkNsaWNrOiBoYW5kbGVDbGljaygpIH19IHN2Z1Byb3BzPXt7dHJhbnNmb3JtOiAncm90YXRlKDkwKSd9fS8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICN0cmVlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweFxuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgZm9udDogMXJlbSBtZW5sbztcbiAgICAgICAgICBjb2xvcjogI2ZzZmY7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;

        var db, _data, _employees, _treeData, _ref3, data, employees, treeTop, treeData;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 9;
                  break;
                }

                console.log('SERVER');
                db = req.db;
                _context.next = 5;
                return db.model('Employee').find({});

              case 5:
                _data = _context.sent;
                _employees = (0, _employeeShaper.shapeEmployeesOut)(_data);
                //TODO: need to find the null supervisorId not use index 0

                _treeData = (0, _utility.buildTree)(_employees[0], _employees);
                return _context.abrupt('return', { treeData: _treeData, employees: _employees });

              case 9:
                _context.next = 11;
                return _axios2.default.get(apiUrl + '/employee');

              case 11:
                _ref3 = _context.sent;
                data = _ref3.data;
                employees = [].concat((0, _toConsumableArray3.default)(data));
                treeTop = employees.find(function (emp) {
                  return emp.supervisorId === null || emp.supervisorId === undefined;
                });
                treeData = (0, _utility.buildTree)(treeTop, employees);
                // console.log('TREE CLIENT', treeData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkZXIiLCJheGlvcyIsIlRyZWUiLCJPcmdDaGFydCIsInNoYXBlRW1wbG95ZWVzT3V0IiwiYnVpbGRUcmVlIiwiUm91dGVyIiwiYXBpVXJsIiwiaW5pdGVjaE9yZyIsImlkIiwibmFtZSIsImFjdG9yIiwiY2hpbGRyZW4iLCJwcm9wcyIsInVybCIsInRyZWVEYXRhIiwicmVxIiwiY29uc29sZSIsImxvZyIsImRiIiwibW9kZWwiLCJmaW5kIiwiZGF0YSIsImVtcGxveWVlcyIsImdldCIsInRyZWVUb3AiLCJlbXAiLCJzdXBlcnZpc29ySWQiLCJ1bmRlZmluZWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFFUCxBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUF5Qjs7QUFDbEMsQUFBUyxBQUFpQjs7QUFDMUIsQUFBTzs7Ozs7OztBQVJQOztBQUVBOzs7QUFRQSxJQUFNLFNBQU4sQUFBZTs7QUFHZixJQUFNO01BQWEsQUFDYixBQUNKO1FBRmlCLEFBRVgsQUFDTjtTQUhpQixBQUdWLEFBQ1A7O1FBQ0UsQUFDTSxBQUNKO1VBRkYsQUFFUSxBQUNOO1dBSEYsQUFHUyxBQUNQOztVQUNFLEFBQ00sQUFDSjtZQUZGLEFBRVEsQUFDTjthQVRFLEFBQ1IsQUFJWSxBQUNSLEFBR1M7QUFIVCxBQUNFLEtBRk07QUFKWixBQUNFLEdBRk07UUFhUixBQUNNLEFBQ0o7VUFGRixBQUVRLEFBQ047V0FoQk0sQUFhUixBQUdTO0FBSFQsQUFDRTtRQUlGLEFBQ00sQUFDSjtVQUZGLEFBRVEsQUFDTjtXQXpCTixBQUFtQixBQUlQLEFBa0JSLEFBR1M7QUFIVCxBQUNFO0FBdkJhLEFBQ2pCOztBQTZCRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7U0F1QkU7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs2QkFDUyxBQUNQOzZCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBcEMsQUFBeUM7b0JBQXpDO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxTQUFLLElBQUwsQUFBUSxtQkFBUjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsZ0NBQUssTUFBTSxLQUFBLEFBQUssTUFBakIsQUFBdUI7b0JBQXZCO3NCQUxKLEFBSUUsQUFDRTtBQUFBOztpQkFMSjthQURGLEFBQ0UsQUFzQkg7QUF0Qkc7Ozs7OztZLEFBM0IyQixXLEFBQUE7Ozs7Ozs7O3FCLEFBQ3pCOzs7QUFDRjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDSjtBLHFCQUFPLEEsSUFBUCxBOzt1QkFDVyxHQUFBLEFBQUcsTUFBSCxBQUFTLFlBQVQsQUFBcUIsSyxBQUFyQixBQUEwQjs7bUJBQXZDO0EsaUNBQ0E7QSw2QkFBWSx1Q0FBQSxBLEFBQWtCLEFBQ3BDO0FBQ007O0EsNEJBQVcsd0JBQVUsV0FBVixBQUFVLEFBQVUsSUFBcEIsQUFBd0IsQTtpREFDbEMsRUFBRSxVQUFGLFdBQVksV0FBWixBOzs7O3VCQUVjLGdCQUFBLEFBQU0sSUFBTixBQUFhLFM7OztpQ0FBNUI7QSw2QkFBQSxBQUNGLEE7QSx1RUFBZ0IsQSxBQUNoQjtBLG9DQUFVLEFBQVUsS0FBSyxVQUFBLEFBQUMsS0FBRDt5QkFBUyxJQUFBLEFBQUksaUJBQUosQUFBcUIsUUFBUSxJQUFBLEFBQUksaUJBQTFDLEFBQTJEO0FBQTFFLEEsQUFDVixpQkFEVTtBLDJCQUNDLHdCQUFBLEFBQVUsU0FBVixBQUFtQixBLEFBQ3BDOzs7aURBQ08sRUFBRSxVQUFGLFVBQVksV0FBWixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEJrQixnQkFBTSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=