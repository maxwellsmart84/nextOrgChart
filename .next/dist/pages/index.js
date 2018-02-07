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
        className: 'jsx-4291488933',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4291488933',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-4291488933',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement(_Tree2.default, { data: this.props.treeData, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '4291488933',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtHeUIsQUFHMkIsZ0JBQ0EsZ0JBQ0osWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gaW1wb3J0IEVtcGxveWVlTm9kZSBmcm9tICcuLi9jb21wb25lbnRzL0VtcGxveWVlTm9kZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbi8vIGltcG9ydCBUcmVlIGZyb20gJ3JlYWN0LXRyZWUtZ3JhcGgnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBUcmVlIGZyb20gJy4uL2NvbXBvbmVudHMvVHJlZSc7XG5pbXBvcnQgT3JnQ2hhcnQgZnJvbSAncmVhY3Qtb3JnY2hhcnQnO1xuaW1wb3J0IHsgc2hhcGVFbXBsb3llZXNPdXQgfSBmcm9tICcuLi9hcGkvc2hhcGVycy9lbXBsb3llZVNoYXBlcic7XG5pbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tICcuLi9hcGkvdXRpbGl0eSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknXG5cblxuY29uc3QgaW5pdGVjaE9yZyA9IHtcbiAgaWQ6ICcxJyxcbiAgbmFtZTogXCJCaWxsIEx1bWJlcmdoXCIsXG4gIGFjdG9yOiBcIkdhcnkgQ29sZVwiLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIGlkOiAnMicsXG4gICAgICBuYW1lOiBcIlBldGVyIEdpYmJvbnNcIixcbiAgICAgIGFjdG9yOiBcIlJvbiBMaXZpbmdzdG9uXCIsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgICBuYW1lOiBcIkFuZCBNb3JlISFcIixcbiAgICAgICAgICBhY3RvcjogXCJUaGlzIGlzIGp1c3QgdG8gc2hvdyBob3cgdG8gYnVpbGQgYSBjb21wbGV4IHRyZWUgd2l0aCBtdWx0aXBsZSBsZXZlbHMgb2YgY2hpbGRyZW4uIEVuam95IVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnNScsXG4gICAgICBuYW1lOiBcIk1pbHRvbiBXYWRkYW1zXCIsXG4gICAgICBhY3RvcjogXCJTdGVwaGVuIFJvb3RcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICc2JyxcbiAgICAgIG5hbWU6IFwiQm9iIFNseWRlbGxcIixcbiAgICAgIGFjdG9yOiBcIkpvaG4gQy4gTWNHaS4uLlwiXG4gICAgfSxcbiAgXVxufTtcblxuLy8gY29uc3QgRW1wbG95ZWVOb2RlID0gKHsgbm9kZSB9KSA9PiB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIDxMaW5rIGFzPXtgZW1wbG95ZWUvJHtub2RlLm5hbWV9YH0gaHJlZj17YC9lbXBsb3llZS8ke25vZGUuaWR9YH0+XG4vLyAgICAgICAgIDxhPntub2RlLm5hbWV9PC9hPlxuLy8gICAgICAgPC9MaW5rPlxuLy8gICAgICAgPHA+e25vZGUuc3VwZXJ2aXNvck5hbWV9PC9wPlxuLy8gICAgIDxzdHlsZSBqc3g+e2Bcbi8vICAgICBhIHtcbi8vICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgICB9XG4vLyAgIGB9PC9zdHlsZT5cbi8vICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIGlmIChyZXEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTRVJWRVInKTtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kKHt9KTtcbiAgICAgIGNvbnN0IGVtcGxveWVlcyA9IHNoYXBlRW1wbG95ZWVzT3V0KGRhdGEpO1xuICAgICAgLy9UT0RPOiBuZWVkIHRvIGZpbmQgdGhlIG51bGwgc3VwZXJ2aXNvcklkIG5vdCB1c2UgaW5kZXggMFxuICAgICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUoZW1wbG95ZWVzWzBdLCBlbXBsb3llZXMpO1xuICAgICAgcmV0dXJuIHsgdHJlZURhdGEsIGVtcGxveWVlcyB9O1xuICAgIH1cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlVcmx9L2VtcGxveWVlYCk7XG4gICAgY29uc3QgZW1wbG95ZWVzID0gWy4uLmRhdGFdXG4gICAgY29uc3QgdHJlZVRvcCA9IGVtcGxveWVlcy5maW5kKChlbXApID0+IGVtcC5zdXBlcnZpc29ySWQgPT09IG51bGwgfHwgZW1wLnN1cGVydmlzb3JJZCA9PT0gdW5kZWZpbmVkIClcbiAgICBjb25zdCB0cmVlRGF0YSA9IGJ1aWxkVHJlZSh0cmVlVG9wLCBlbXBsb3llZXMpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdUUkVFIENMSUVOVCcsIHRyZWVEYXRhKTtcbiAgICByZXR1cm4geyB0cmVlRGF0YSwgZW1wbG95ZWVzIH07XG4gIH1cblxuICAvLyBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhkYXRhKVxuICAvLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC9hcGkvZW1wbG95ZWVzJyk7XG4gIC8vICAgY29uc3QgZW1wbG95ZWVzID0gc2hhcGVFbXBsb3llZXMoZGF0YSk7XG4gIC8vICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUoZW1wbG95ZWVzWzBdLCBlbXBsb3llZXMpWzBdO1xuICAvLyAgIHJldHVybiB7IHRyZWVEYXRhLCBlbXBsb3llZXMgfTtcbiAgLy8gfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSB0aXRsZT17dGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFRyZWUgZGF0YT17dGhpcy5wcm9wcy50cmVlRGF0YX0gLz5cbiAgICAgICAgICB7LyogPFRyZWUgZGF0YT17dGhpcy5wcm9wcy50cmVlRGF0YX0gaGVpZ2h0PXs4MDB9IHdpZHRoPXs4MDB9IGtleVByb3A9e30gZ1Byb3BzPXt7IG9uQ2xpY2s6IGhhbmRsZUNsaWNrKCkgfX0gc3ZnUHJvcHM9e3t0cmFuc2Zvcm06ICdyb3RhdGUoOTApJ319Lz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICBmb250OiAxcmVtIG1lbmxvO1xuICAgICAgICAgIGNvbG9yOiAjZnNmZjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkZXIiLCJheGlvcyIsIlRyZWUiLCJPcmdDaGFydCIsInNoYXBlRW1wbG95ZWVzT3V0IiwiYnVpbGRUcmVlIiwiUm91dGVyIiwiYXBpVXJsIiwiaW5pdGVjaE9yZyIsImlkIiwibmFtZSIsImFjdG9yIiwiY2hpbGRyZW4iLCJwcm9wcyIsInVybCIsInRyZWVEYXRhIiwicmVxIiwiY29uc29sZSIsImxvZyIsImRiIiwibW9kZWwiLCJmaW5kIiwiZGF0YSIsImVtcGxveWVlcyIsImdldCIsInRyZWVUb3AiLCJlbXAiLCJzdXBlcnZpc29ySWQiLCJ1bmRlZmluZWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFFUCxBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUF5Qjs7QUFDbEMsQUFBUyxBQUFpQjs7QUFDMUIsQUFBTzs7Ozs7OztBQVJQOztBQUVBOzs7QUFRQSxJQUFNLFNBQU4sQUFBZTs7QUFHZixJQUFNO01BQWEsQUFDYixBQUNKO1FBRmlCLEFBRVgsQUFDTjtTQUhpQixBQUdWLEFBQ1A7O1FBQ0UsQUFDTSxBQUNKO1VBRkYsQUFFUSxBQUNOO1dBSEYsQUFHUyxBQUNQOztVQUNFLEFBQ00sQUFDSjtZQUZGLEFBRVEsQUFDTjthQVRFLEFBQ1IsQUFJWSxBQUNSLEFBR1M7QUFIVCxBQUNFLEtBRk07QUFKWixBQUNFLEdBRk07UUFhUixBQUNNLEFBQ0o7VUFGRixBQUVRLEFBQ047V0FoQk0sQUFhUixBQUdTO0FBSFQsQUFDRTtRQUlGLEFBQ00sQUFDSjtVQUZGLEFBRVEsQUFDTjtXQXpCTixBQUFtQixBQUlQLEFBa0JSLEFBR1M7QUFIVCxBQUNFO0FBdkJhLEFBQ2pCOztBQTZCRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7U0F1QkU7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs2QkFDUyxBQUNQOzZCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBcEMsQUFBeUM7b0JBQXpDO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxnQ0FBSyxNQUFNLEtBQUEsQUFBSyxNQUFqQixBQUF1QjtvQkFBdkI7c0JBTEosQUFJRSxBQUNFO0FBQUE7O2lCQUxKO2FBREYsQUFDRSxBQW1CSDtBQW5CRzs7Ozs7O1ksQUEzQjJCLFcsQUFBQTs7Ozs7Ozs7cUIsQUFDekI7OztBQUNGOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNKO0EscUJBQU8sQSxJQUFQLEE7O3VCQUNXLEdBQUEsQUFBRyxNQUFILEFBQVMsWUFBVCxBQUFxQixLLEFBQXJCLEFBQTBCOzttQkFBdkM7QSxpQ0FDQTtBLDZCQUFZLHVDQUFBLEEsQUFBa0IsQUFDcEM7QUFDTTs7QSw0QkFBVyx3QkFBVSxXQUFWLEFBQVUsQUFBVSxJQUFwQixBQUF3QixBO2lEQUNsQyxFQUFFLFVBQUYsV0FBWSxXQUFaLEE7Ozs7dUJBRWMsZ0JBQUEsQUFBTSxJQUFOLEFBQWEsUzs7O2lDQUE1QjtBLDZCQUFBLEFBQ0YsQTtBLHVFQUFnQixBLEFBQ2hCO0Esb0NBQVUsQUFBVSxLQUFLLFVBQUEsQUFBQyxLQUFEO3lCQUFTLElBQUEsQUFBSSxpQkFBSixBQUFxQixRQUFRLElBQUEsQUFBSSxpQkFBMUMsQUFBMkQ7QUFBMUUsQSxBQUNWLGlCQURVO0EsMkJBQ0Msd0JBQUEsQUFBVSxTQUFWLEFBQW1CLEEsQUFDcEM7OztpREFDTyxFQUFFLFVBQUYsVUFBWSxXQUFaLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoQmtCLGdCQUFNLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==