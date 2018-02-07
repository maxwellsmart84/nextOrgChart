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

// const initechOrg = {
//   id: '1',
//   name: "Bill Lumbergh",
//   actor: "Gary Cole",
//   children: [
//     {
//       id: '2',
//       name: "Peter Gibbons",
//       actor: "Ron Livingston",
//       children: [
//         {
//           id: '4',
//           name: "And More!!",
//           actor: "This is just to show how to build a complex tree with multiple levels of children. Enjoy!"
//         }
//       ]
//     },
//     {
//       id: '5',
//       name: "Milton Waddams",
//       actor: "Stephen Root"
//     },
//     {
//       id: '6',
//       name: "Bob Slydell",
//       actor: "John C. McGi..."
//     },
//   ]
// };

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
          lineNumber: 74
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1658254831',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })), _react2.default.createElement('div', { id: 'tree', className: 'jsx-1658254831',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_Tree2.default, { data: this.props.treeData, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '1658254831',
        css: '#tree{padding-top:20px;}body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGeUIsQUFJUSxBQUVtQixnQkFDQSxDQUhsQixlQUljLFlBQ0gsU0FDQyxVQUNaIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vIGltcG9ydCBFbXBsb3llZU5vZGUgZnJvbSAnLi4vY29tcG9uZW50cy9FbXBsb3llZU5vZGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG4vLyBpbXBvcnQgVHJlZSBmcm9tICdyZWFjdC10cmVlLWdyYXBoJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgVHJlZSBmcm9tICcuLi9jb21wb25lbnRzL1RyZWUnO1xuaW1wb3J0IE9yZ0NoYXJ0IGZyb20gJ3JlYWN0LW9yZ2NoYXJ0JztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzT3V0IH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IGFwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJ1xuXG5cbi8vIGNvbnN0IGluaXRlY2hPcmcgPSB7XG4vLyAgIGlkOiAnMScsXG4vLyAgIG5hbWU6IFwiQmlsbCBMdW1iZXJnaFwiLFxuLy8gICBhY3RvcjogXCJHYXJ5IENvbGVcIixcbi8vICAgY2hpbGRyZW46IFtcbi8vICAgICB7XG4vLyAgICAgICBpZDogJzInLFxuLy8gICAgICAgbmFtZTogXCJQZXRlciBHaWJib25zXCIsXG4vLyAgICAgICBhY3RvcjogXCJSb24gTGl2aW5nc3RvblwiLFxuLy8gICAgICAgY2hpbGRyZW46IFtcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIGlkOiAnNCcsXG4vLyAgICAgICAgICAgbmFtZTogXCJBbmQgTW9yZSEhXCIsXG4vLyAgICAgICAgICAgYWN0b3I6IFwiVGhpcyBpcyBqdXN0IHRvIHNob3cgaG93IHRvIGJ1aWxkIGEgY29tcGxleCB0cmVlIHdpdGggbXVsdGlwbGUgbGV2ZWxzIG9mIGNoaWxkcmVuLiBFbmpveSFcIlxuLy8gICAgICAgICB9XG4vLyAgICAgICBdXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICBpZDogJzUnLFxuLy8gICAgICAgbmFtZTogXCJNaWx0b24gV2FkZGFtc1wiLFxuLy8gICAgICAgYWN0b3I6IFwiU3RlcGhlbiBSb290XCJcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIGlkOiAnNicsXG4vLyAgICAgICBuYW1lOiBcIkJvYiBTbHlkZWxsXCIsXG4vLyAgICAgICBhY3RvcjogXCJKb2huIEMuIE1jR2kuLi5cIlxuLy8gICAgIH0sXG4vLyAgIF1cbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSB9KSB7XG4gICAgaWYgKHJlcSkge1xuICAgICAgY29uc3QgeyBkYiB9ID0gcmVxO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLm1vZGVsKCdFbXBsb3llZScpLmZpbmQoe30pO1xuICAgICAgY29uc3QgZW1wbG95ZWVzID0gc2hhcGVFbXBsb3llZXNPdXQoZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZygnU0hBUEVEIEVNUCBTRVJWRVInLCBlbXBsb3llZXMpXG4gICAgICAvL1RPRE86IG5lZWQgdG8gZmluZCB0aGUgbnVsbCBzdXBlcnZpc29ySWQgbm90IHVzZSBpbmRleCAwXG4gICAgICBjb25zdCB0cmVlRGF0YSA9IGJ1aWxkVHJlZShlbXBsb3llZXMpWzBdO1xuICAgICAgY29uc29sZS5sb2coJ3RyZWVEYXRhJywgdHJlZURhdGEpXG4gICAgICByZXR1cm4geyB0cmVlRGF0YSwgZW1wbG95ZWVzIH07XG4gICAgfVxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaVVybH0vZW1wbG95ZWVgKTtcbiAgICBjb25zdCBlbXBsb3llZXMgPSBbLi4uZGF0YV1cbiAgICAvLyBjb25zdCB0cmVlVG9wID0gZW1wbG95ZWVzLmZpbmQoKGVtcCkgPT4gZW1wLnN1cGVydmlzb3JJZCA9PT0gbnVsbCB8fCBlbXAuc3VwZXJ2aXNvcklkID09PSB1bmRlZmluZWQgKVxuICAgIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlcylbMF07XG4gICAgLy8gY29uc29sZS5sb2coJ1RSRUUgQ0xJRU5UJywgdHJlZURhdGEpO1xuICAgIHJldHVybiB7IHRyZWVEYXRhLCBlbXBsb3llZXMgfTtcbiAgfVxuXG4gIC8vIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0L2FwaS9lbXBsb3llZXMnKTtcbiAgLy8gICBjb25zdCBlbXBsb3llZXMgPSBzaGFwZUVtcGxveWVlcyhkYXRhKTtcbiAgLy8gICBjb25zdCB0cmVlRGF0YSA9IGJ1aWxkVHJlZShlbXBsb3llZXNbMF0sIGVtcGxveWVlcylbMF07XG4gIC8vICAgcmV0dXJuIHsgdHJlZURhdGEsIGVtcGxveWVlcyB9O1xuICAvLyB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZGVyIHVybD17dGhpcy5wcm9wcy51cmx9IHRpdGxlPXt0aGlzLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInRyZWVcIj5cbiAgICAgICAgICA8VHJlZSBkYXRhPXt0aGlzLnByb3BzLnRyZWVEYXRhfSAvPlxuICAgICAgICAgIHsvKiA8VHJlZSBkYXRhPXt0aGlzLnByb3BzLnRyZWVEYXRhfSBoZWlnaHQ9ezgwMH0gd2lkdGg9ezgwMH0ga2V5UHJvcD17fSBnUHJvcHM9e3sgb25DbGljazogaGFuZGxlQ2xpY2soKSB9fSBzdmdQcm9wcz17e3RyYW5zZm9ybTogJ3JvdGF0ZSg5MCknfX0vPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjdHJlZSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHhcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICAgIGZvbnQ6IDFyZW0gbWVubG87XG4gICAgICAgICAgY29sb3I6ICNmc2ZmO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
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
                  _context.next = 10;
                  break;
                }

                db = req.db;
                _context.next = 4;
                return db.model('Employee').find({});

              case 4:
                _data = _context.sent;
                _employees = (0, _employeeShaper.shapeEmployeesOut)(_data);

                console.log('SHAPED EMP SERVER', _employees);
                //TODO: need to find the null supervisorId not use index 0
                _treeData = (0, _utility.buildTree)(_employees)[0];

                console.log('treeData', _treeData);
                return _context.abrupt('return', { treeData: _treeData, employees: _employees });

              case 10:
                _context.next = 12;
                return _axios2.default.get(apiUrl + '/employee');

              case 12:
                _ref3 = _context.sent;
                data = _ref3.data;
                employees = [].concat((0, _toConsumableArray3.default)(data));
                // const treeTop = employees.find((emp) => emp.supervisorId === null || emp.supervisorId === undefined )

                treeData = (0, _utility.buildTree)(employees)[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkZXIiLCJheGlvcyIsIlRyZWUiLCJPcmdDaGFydCIsInNoYXBlRW1wbG95ZWVzT3V0IiwiYnVpbGRUcmVlIiwiUm91dGVyIiwiYXBpVXJsIiwicHJvcHMiLCJ1cmwiLCJ0cmVlRGF0YSIsInJlcSIsImRiIiwibW9kZWwiLCJmaW5kIiwiZGF0YSIsImVtcGxveWVlcyIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFFUCxBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUF5Qjs7QUFDbEMsQUFBUyxBQUFpQjs7QUFDMUIsQUFBTzs7Ozs7OztBQVJQOztBQUVBOzs7QUFRQSxJQUFNLFNBQU4sQUFBZTs7QUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7U0FzQkU7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs2QkFDUyxBQUNQOzZCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBcEMsQUFBeUM7b0JBQXpDO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxTQUFLLElBQUwsQUFBUSxtQkFBUjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsZ0NBQUssTUFBTSxLQUFBLEFBQUssTUFBakIsQUFBdUI7b0JBQXZCO3NCQUxKLEFBSUUsQUFDRTtBQUFBOztpQkFMSjthQURGLEFBQ0UsQUFzQkg7QUF0Qkc7Ozs7OztZLEFBNUIyQixXQUFBLEE7Ozs7Ozs7O3FCQUN6QixBOzs7QUFDTTs7QSxxQixBQUFPLElBQVAsQTs7dUJBQ1csR0FBQSxBQUFHLE1BQUgsQUFBUyxZQUFULEFBQXFCLEtBQXJCLEFBQTBCLEE7O21CQUF2QztBLGlDQUNBO0EsNkJBQVksdUNBQUEsQUFBa0IsQUFDcEMsQTs7d0JBQUEsQUFBUSxJQUFSLEFBQVkscUJBQVosQUFBaUMsQUFDakM7QUFDTTtBLDRCQUFXLHdCQUFBLEFBQVUsWUFBVixBQUFxQixBQUN0QyxBOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxZQUFaLEFBQXdCO2lEQUNqQixFQUFFLFVBQUYsV0FBWSxXLEFBQVo7Ozs7dUJBRWMsZ0JBQUEsQUFBTSxJQUFOLEFBQWEsUzs7O2lDQUE1QjtBLDZCQUFBLEEsQUFDRjtBLHVFLEFBQWdCLEFBQ3RCO0FBQ007O0EsMkJBQVcsd0JBQUEsQUFBVSxXQUFXLEEsQUFBckIsQUFDakI7OztpREFDTyxFQUFFLFVBQUYsVUFBWSxXQUFaLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqQmtCLGdCQUFNLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==