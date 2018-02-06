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
      // const handleClick = (props) => {
      //   Router.push(`/employee?id=${this.props.employee.id}`, `/employee/${id}`);
      // }
      return _react2.default.createElement('div', {
        className: 'jsx-834181992',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-834181992',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-834181992',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_Tree2.default, { data: this.props.treeData, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '834181992',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1HeUIsQUFHMkIsZ0JBQ0EsZ0JBQ0osWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gaW1wb3J0IEVtcGxveWVlTm9kZSBmcm9tICcuLi9jb21wb25lbnRzL0VtcGxveWVlTm9kZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbi8vIGltcG9ydCBUcmVlIGZyb20gJ3JlYWN0LXRyZWUtZ3JhcGgnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBUcmVlIGZyb20gJy4uL2NvbXBvbmVudHMvVHJlZSc7XG5pbXBvcnQgT3JnQ2hhcnQgZnJvbSAncmVhY3Qtb3JnY2hhcnQnO1xuaW1wb3J0IHsgc2hhcGVFbXBsb3llZXMgfSBmcm9tICcuLi9hcGkvc2hhcGVycy9lbXBsb3llZVNoYXBlcic7XG5pbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tICcuLi9hcGkvdXRpbGl0eSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuXG5cbmNvbnN0IGluaXRlY2hPcmcgPSB7XG4gIGlkOiAnMScsXG4gIG5hbWU6IFwiQmlsbCBMdW1iZXJnaFwiLFxuICBhY3RvcjogXCJHYXJ5IENvbGVcIixcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBpZDogJzInLFxuICAgICAgbmFtZTogXCJQZXRlciBHaWJib25zXCIsXG4gICAgICBhY3RvcjogXCJSb24gTGl2aW5nc3RvblwiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgbmFtZTogXCJBbmQgTW9yZSEhXCIsXG4gICAgICAgICAgYWN0b3I6IFwiVGhpcyBpcyBqdXN0IHRvIHNob3cgaG93IHRvIGJ1aWxkIGEgY29tcGxleCB0cmVlIHdpdGggbXVsdGlwbGUgbGV2ZWxzIG9mIGNoaWxkcmVuLiBFbmpveSFcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJzUnLFxuICAgICAgbmFtZTogXCJNaWx0b24gV2FkZGFtc1wiLFxuICAgICAgYWN0b3I6IFwiU3RlcGhlbiBSb290XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnNicsXG4gICAgICBuYW1lOiBcIkJvYiBTbHlkZWxsXCIsXG4gICAgICBhY3RvcjogXCJKb2huIEMuIE1jR2kuLi5cIlxuICAgIH0sXG4gIF1cbn07XG5cbi8vIGNvbnN0IEVtcGxveWVlTm9kZSA9ICh7IG5vZGUgfSkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8TGluayBhcz17YGVtcGxveWVlLyR7bm9kZS5uYW1lfWB9IGhyZWY9e2AvZW1wbG95ZWUvJHtub2RlLmlkfWB9PlxuLy8gICAgICAgICA8YT57bm9kZS5uYW1lfTwvYT5cbi8vICAgICAgIDwvTGluaz5cbi8vICAgICAgIDxwPntub2RlLnN1cGVydmlzb3JOYW1lfTwvcD5cbi8vICAgICA8c3R5bGUganN4PntgXG4vLyAgICAgYSB7XG4vLyAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgfVxuLy8gICBgfTwvc3R5bGU+XG4vLyAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICBpZiAocmVxKSB7XG4gICAgICBjb25zb2xlLmxvZygnU0VSVkVSJyk7XG4gICAgICBjb25zdCB7IGRiIH0gPSByZXE7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZCh7fSk7XG4gICAgICBjb25zdCBlbXBsb3llZXMgPSBzaGFwZUVtcGxveWVlcyhkYXRhKTtcbiAgICAgIC8vVE9ETzogbmVlZCB0byBmaW5kIHRoZSBudWxsIHN1cGVydmlzb3JJZCBub3QgdXNlIGluZGV4IDBcbiAgICAgIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlc1swXSwgZW1wbG95ZWVzKTtcbiAgICAgIHJldHVybiB7IHRyZWVEYXRhLCBlbXBsb3llZXMgfTtcbiAgICB9XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZW1wbG95ZWUnKTtcbiAgICBjb25zdCBlbXBsb3llZXMgPSBbLi4uZGF0YV1cbiAgICBjb25zdCB0cmVlRGF0YSA9IGJ1aWxkVHJlZShlbXBsb3llZXNbMF0sIGVtcGxveWVlcyk7XG4gICAgLy8gY29uc29sZS5sb2coJ1RSRUUgQ0xJRU5UJywgdHJlZURhdGEpO1xuICAgIHJldHVybiB7IHRyZWVEYXRhLCBlbXBsb3llZXMgfTtcbiAgfVxuXG4gIC8vIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0L2FwaS9lbXBsb3llZXMnKTtcbiAgLy8gICBjb25zdCBlbXBsb3llZXMgPSBzaGFwZUVtcGxveWVlcyhkYXRhKTtcbiAgLy8gICBjb25zdCB0cmVlRGF0YSA9IGJ1aWxkVHJlZShlbXBsb3llZXNbMF0sIGVtcGxveWVlcylbMF07XG4gIC8vICAgcmV0dXJuIHsgdHJlZURhdGEsIGVtcGxveWVlcyB9O1xuICAvLyB9XG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zdCBoYW5kbGVDbGljayA9IChwcm9wcykgPT4ge1xuICAgIC8vICAgUm91dGVyLnB1c2goYC9lbXBsb3llZT9pZD0ke3RoaXMucHJvcHMuZW1wbG95ZWUuaWR9YCwgYC9lbXBsb3llZS8ke2lkfWApO1xuICAgIC8vIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZGVyIHVybD17dGhpcy5wcm9wcy51cmx9IHRpdGxlPXt0aGlzLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VHJlZSBkYXRhPXt0aGlzLnByb3BzLnRyZWVEYXRhfSAvPlxuICAgICAgICAgIHsvKiA8VHJlZSBkYXRhPXt0aGlzLnByb3BzLnRyZWVEYXRhfSBoZWlnaHQ9ezgwMH0gd2lkdGg9ezgwMH0ga2V5UHJvcD17fSBnUHJvcHM9e3sgb25DbGljazogaGFuZGxlQ2xpY2soKSB9fSBzdmdQcm9wcz17e3RyYW5zZm9ybTogJ3JvdGF0ZSg5MCknfX0vPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICAgIGZvbnQ6IDFyZW0gbWVubG87XG4gICAgICAgICAgY29sb3I6ICNmc2ZmO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIC5ub2RlIGNpcmNsZSB7XG4gICAgICAgIC8vICAgZmlsbDogd2hpdGU7XG4gICAgICAgIC8vICAgc3Ryb2tlOiBibGFjaztcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBnIHRleHR7XG4gICAgICAgIC8vICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHBhdGgubGluayB7XG4gICAgICAgIC8vICAgZmlsbDogbm9uZTtcbiAgICAgICAgLy8gICBzdHJva2U6IGJsYWNrO1xuICAgICAgICAvLyB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
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
                  _context.next = 9;
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
                return _context.abrupt('return', { treeData: _treeData, employees: _employees });

              case 9:
                _context.next = 11;
                return _axios2.default.get('http://localhost:3000/api/employee');

              case 11:
                _ref3 = _context.sent;
                data = _ref3.data;
                employees = [].concat((0, _toConsumableArray3.default)(data));
                treeData = (0, _utility.buildTree)(employees[0], employees);
                // console.log('TREE CLIENT', treeData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkZXIiLCJheGlvcyIsIlRyZWUiLCJPcmdDaGFydCIsInNoYXBlRW1wbG95ZWVzIiwiYnVpbGRUcmVlIiwiUm91dGVyIiwiaW5pdGVjaE9yZyIsImlkIiwibmFtZSIsImFjdG9yIiwiY2hpbGRyZW4iLCJwcm9wcyIsInVybCIsInRyZWVEYXRhIiwicmVxIiwiY29uc29sZSIsImxvZyIsImRiIiwibW9kZWwiLCJmaW5kIiwiZGF0YSIsImVtcGxveWVlcyIsImdldCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU8sQUFBWTs7OztBQUVuQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFTLEFBQXNCOztBQUMvQixBQUFTLEFBQWlCOztBQUMxQixBQUFPOzs7Ozs7O0FBUlA7O0FBRUE7OztBQVVBLElBQU07TUFBYSxBQUNiLEFBQ0o7UUFGaUIsQUFFWCxBQUNOO1NBSGlCLEFBR1YsQUFDUDs7UUFDRSxBQUNNLEFBQ0o7VUFGRixBQUVRLEFBQ047V0FIRixBQUdTLEFBQ1A7O1VBQ0UsQUFDTSxBQUNKO1lBRkYsQUFFUSxBQUNOO2FBVEUsQUFDUixBQUlZLEFBQ1IsQUFHUztBQUhULEFBQ0UsS0FGTTtBQUpaLEFBQ0UsR0FGTTtRQWFSLEFBQ00sQUFDSjtVQUZGLEFBRVEsQUFDTjtXQWhCTSxBQWFSLEFBR1M7QUFIVCxBQUNFO1FBSUYsQUFDTSxBQUNKO1VBRkYsQUFFUSxBQUNOO1dBekJOLEFBQW1CLEFBSVAsQUFrQlIsQUFHUztBQUhULEFBQ0U7QUF2QmEsQUFDakI7O0FBNkJGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztTQXNCRTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzZCQUNTLEFBQ1A7QUFDQTtBQUNBO0FBQ0E7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGtDQUFPLEtBQUssS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEtBQUssT0FBTyxLQUFwQyxBQUF5QztvQkFBekM7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGdDQUFLLE1BQU0sS0FBQSxBQUFLLE1BQWpCLEFBQXVCO29CQUF2QjtzQkFMSixBQUlFLEFBQ0U7QUFBQTs7aUJBTEo7YUFERixBQUNFLEFBK0JIO0FBL0JHOzs7Ozs7WUE3QjJCLEEsVyxBQUFBOzs7Ozs7OztxQixBQUN6Qjs7O0FBQ0Y7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ0o7QSxxQkFBTyxBLElBQVAsQTs7dUJBQ1csR0FBQSxBQUFHLE1BQUgsQUFBUyxZQUFULEFBQXFCLEssQUFBckIsQUFBMEI7O21CQUF2QztBLGlDQUNBO0EsNkJBQVksb0NBQUEsQUFBZSxBLEFBQ2pDO0FBQ007O0EsNEJBQVcsd0JBQVUsV0FBVixBQUFVLEFBQVUsSUFBcEIsQUFBd0IsQTtpREFDbEMsRUFBRSxVQUFGLFdBQVksV0FBWixBOzs7O3VCQUVjLGdCQUFBLEFBQU0sSUFBTixBQUFVLEE7OztpQ0FBekI7QSw2QkFBQSxBQUNGLEE7QSx1RUFBZ0IsQSxBQUNoQjtBLDJCQUFXLHdCQUFVLFVBQVYsQUFBVSxBQUFVLElBQXBCLEFBQXdCLEEsQUFDekM7OztpREFDTyxFQUFFLFVBQUYsVUFBWSxXQUFaLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFma0IsZ0JBQU0sQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9