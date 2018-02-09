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

var _EmployeeCard = require('../components/EmployeeCard');

var _EmployeeCard2 = _interopRequireDefault(_EmployeeCard);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _employeeShaper = require('../api/shapers/employeeShaper');

var _utility = require('../api/utility');

var _Tree = require('../components/Tree');

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/employee.js?entry';


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
        className: 'jsx-3115915974',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props.employee.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement('div', { id: 'employeeContainer', className: 'jsx-3115915974',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3115915974' + ' ' + 'left',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('div', { id: 'form', className: 'jsx-3115915974',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_EmployeeCard2.default, { url: this.props.url, name: this.props.employee.name, title: this.props.employee.title, rank: this.props.employee.rank, supervisor: this.props.supervisor || undefined, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }))), this.props.treeData && _react2.default.createElement('div', {
        className: 'jsx-3115915974' + ' ' + 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('div', { id: 'tree', className: 'jsx-3115915974',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_Tree2.default, { url: this.props.url, data: this.props.treeData, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })))), _react2.default.createElement(_style2.default, {
        styleId: '3115915974',
        css: 'employeeContainer{display:grid;}#form{width:100%;margin-left:10%;}#tree{width:45%;float:right;margin-top:-40%;margin-right:3%;}body{background:#FFF;font-size:1rem;font-family:menlo,Helvetica;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFNEIsQUFHMEIsQUFHRixBQUlELEFBTU0sVUFMSixDQUpJLEVBSGxCLEdBYWlCLE1BTEMsS0FKbEIsSUFXRSxPQU5lLGdCQUNqQixLQUtjLFlBQ0gsU0FDQyxVQUNaIiwiZmlsZSI6InBhZ2VzL2VtcGxveWVlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtcGxveWVlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0VtcGxveWVlQ2FyZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBzaGFwZUVtcGxveWVlc091dCwgc2hhcGVFbXBsb3llZU91dCB9IGZyb20gJy4uL2FwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyJztcbmltcG9ydCB7IGJ1aWxkVHJlZSB9IGZyb20gJy4uL2FwaS91dGlsaXR5JztcbmltcG9ydCBUcmVlIGZyb20gJy4uL2NvbXBvbmVudHMvVHJlZSdcblxuY29uc3QgYXBpVXJsID0gJy9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyByZXEsIHF1ZXJ5IH0pIHtcbiAgICBpZiAocmVxKSB7XG4gICAgICBsZXQgc3VwZXJ2aXNvciA9bnVsbDtcbiAgICAgIGxldCB0cmVlRGF0YSA9IG51bGw7XG4gICAgICBjb25zdCB7IGRiIH0gPSByZXE7XG5cbiAgICAgIGNvbnN0IGVtcGxveWVlSWQgPSBxdWVyeS5pZDtcbiAgICAgIGNvbnN0IGVtcGxveWVlRGF0YSA9IGF3YWl0IGRiLm1vZGVsKCdFbXBsb3llZScpLmZpbmRCeUlkKGVtcGxveWVlSWQpO1xuICAgICAgY29uc3QgZW1wbG95ZWUgPSBzaGFwZUVtcGxveWVlT3V0KGVtcGxveWVlRGF0YSk7XG5cbiAgICAgIGNvbnN0IHdvcmtlckRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kKHsgc3VwZXJ2aXNvcklkOiBlbXBsb3llZS5pZCB9KTtcbiAgICAgIGNvbnN0IHdvcmtlcnMgPSBzaGFwZUVtcGxveWVlc091dCh3b3JrZXJEYXRhKTtcblxuICAgICAgaWYgKHdvcmtlckRhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IHJhd0RhdGEgPSBbZW1wbG95ZWUsIC4uLndvcmtlcnNdXG4gICAgICAgIHRyZWVEYXRhID0gYnVpbGRUcmVlKHJhd0RhdGEpWzBdXG4gICAgICAgIGNvbnNvbGUubG9nKHRyZWVEYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAoZW1wbG95ZWUgJiYgZW1wbG95ZWUuc3VwZXJ2aXNvcklkICE9PSAnTm9uZScpIHtcbiAgICAgICAgLy8gdGhlIGVtcGxveWVlJ3Mgc3VwZXJ2aXNvciBmZXRlY2hlZCBmcm9tIGFib3ZlXG4gICAgICAgIGNvbnN0IHN1cGVyRGF0YSA9IGF3YWl0IGRiLm1vZGVsKCdFbXBsb3llZScpLmZpbmRCeUlkKGVtcGxveWVlLnN1cGVydmlzb3JJZCk7XG4gICAgICAgIHN1cGVydmlzb3IgPSBzaGFwZUVtcGxveWVlT3V0KHN1cGVyRGF0YSk7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBlbXBsb3llZSwgdHJlZURhdGEsIHN1cGVydmlzb3IgfTtcbiAgICB9XG4gICAgbGV0IHN1cGVydmlzb3IgPSBudWxsO1xuICAgIGxldCB0cmVlRGF0YSA9IG51bGw7XG5cbiAgICBjb25zdCBlbXBsb3llZUlkID0gcXVlcnkuaWQ7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpVXJsfS9lbXBsb3llZS8ke2VtcGxveWVlSWR9YCk7XG4gICAgY29uc3QgZW1wbG95ZWUgPSBkYXRhO1xuXG4gICAgY29uc3Qgd29ya2VyRGF0YSA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlVcmx9L2VtcGxveWVlL3dvcmtlcnMvJHtlbXBsb3llZUlkfWApXG4gICAgY29uc3Qgd29ya2VycyA9IHdvcmtlckRhdGEuZGF0YTtcblxuICAgIGlmICh3b3JrZXJzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgcmF3RGF0YSA9IFtlbXBsb3llZSwgLi4ud29ya2Vyc11cbiAgICAgIHRyZWVEYXRhID0gYnVpbGRUcmVlKHJhd0RhdGEpWzBdXG4gICAgfVxuXG4gICAgaWYgKGVtcGxveWVlICYmIGVtcGxveWVlLnN1cGVydmlzb3JJZCAhPT0gJ05vbmUnKSB7XG4gICAgICBjb25zdCBzdXBlckRhdGEgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpVXJsfS9lbXBsb3llZS8ke2VtcGxveWVlLnN1cGVydmlzb3JJZH1gKTtcbiAgICAgIHN1cGVydmlzb3IgPSBzdXBlckRhdGEuZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZW1wbG95ZWUsIHRyZWVEYXRhLCBzdXBlcnZpc29yIH07XG4gIH1cblxuXG5yZW5kZXIoKSB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIHVybD17dGhpcy5wcm9wcy51cmx9IHRpdGxlPXt0aGlzLnByb3BzLmVtcGxveWVlLm5hbWV9IC8+XG4gICAgICAgIDxkaXYgaWQ9XCJlbXBsb3llZUNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvcm1cIj5cbiAgICAgICAgICAgICAgPEVtcGxveWVlQ2FyZCB1cmw9e3RoaXMucHJvcHMudXJsfSBuYW1lPXt0aGlzLnByb3BzLmVtcGxveWVlLm5hbWV9IHRpdGxlPXt0aGlzLnByb3BzLmVtcGxveWVlLnRpdGxlfSByYW5rPXt0aGlzLnByb3BzLmVtcGxveWVlLnJhbmt9IHN1cGVydmlzb3I9e3RoaXMucHJvcHMuc3VwZXJ2aXNvciB8fCB1bmRlZmluZWR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy50cmVlRGF0YSAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0cmVlXCI+XG4gICAgICAgICAgICAgIDxUcmVlIHVybD17dGhpcy5wcm9wcy51cmx9IGRhdGE9e3RoaXMucHJvcHMudHJlZURhdGF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD4ge2BcbiAgICAgICAgICBlbXBsb3llZUNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjZm9ybSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgICN0cmVlIHtcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNDAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0IDMlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogbWVubG8sIEhlbHZldGljYVxuICAgICAgICAgICAgY29sb3I6ICNmc2ZmO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/employee.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            query = _ref.query;

        var _supervisor, _treeData, db, _employeeId, employeeData, _employee, _workerData, _workers, rawData, superData, supervisor, treeData, employeeId, _ref3, data, employee, workerData, workers, _rawData, _superData;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 20;
                  break;
                }

                _supervisor = null;
                _treeData = null;
                db = req.db;
                _employeeId = query.id;
                _context.next = 7;
                return db.model('Employee').findById(_employeeId);

              case 7:
                employeeData = _context.sent;
                _employee = (0, _employeeShaper.shapeEmployeeOut)(employeeData);
                _context.next = 11;
                return db.model('Employee').find({ supervisorId: _employee.id });

              case 11:
                _workerData = _context.sent;
                _workers = (0, _employeeShaper.shapeEmployeesOut)(_workerData);

                if (_workerData.length !== 0) {
                  rawData = [_employee].concat((0, _toConsumableArray3.default)(_workers));

                  _treeData = (0, _utility.buildTree)(rawData)[0];
                  console.log(_treeData);
                }

                if (!(_employee && _employee.supervisorId !== 'None')) {
                  _context.next = 19;
                  break;
                }

                _context.next = 17;
                return db.model('Employee').findById(_employee.supervisorId);

              case 17:
                superData = _context.sent;

                _supervisor = (0, _employeeShaper.shapeEmployeeOut)(superData);

              case 19:
                return _context.abrupt('return', { employee: _employee, treeData: _treeData, supervisor: _supervisor });

              case 20:
                supervisor = null;
                treeData = null;
                employeeId = query.id;
                _context.next = 25;
                return _axios2.default.get(apiUrl + '/employee/' + employeeId);

              case 25:
                _ref3 = _context.sent;
                data = _ref3.data;
                employee = data;
                _context.next = 30;
                return _axios2.default.get(apiUrl + '/employee/workers/' + employeeId);

              case 30:
                workerData = _context.sent;
                workers = workerData.data;

                if (workers.length !== 0) {
                  _rawData = [employee].concat((0, _toConsumableArray3.default)(workers));

                  treeData = (0, _utility.buildTree)(_rawData)[0];
                }

                if (!(employee && employee.supervisorId !== 'None')) {
                  _context.next = 38;
                  break;
                }

                _context.next = 36;
                return _axios2.default.get(apiUrl + '/employee/' + employee.supervisorId);

              case 36:
                _superData = _context.sent;

                supervisor = _superData.data;

              case 38:
                return _context.abrupt('return', { employee: employee, treeData: treeData, supervisor: supervisor });

              case 39:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlQ2FyZCIsIkhlYWRlciIsImF4aW9zIiwic2hhcGVFbXBsb3llZXNPdXQiLCJzaGFwZUVtcGxveWVlT3V0IiwiYnVpbGRUcmVlIiwiVHJlZSIsImFwaVVybCIsInByb3BzIiwidXJsIiwiZW1wbG95ZWUiLCJuYW1lIiwidGl0bGUiLCJyYW5rIiwic3VwZXJ2aXNvciIsInVuZGVmaW5lZCIsInRyZWVEYXRhIiwicmVxIiwicXVlcnkiLCJkYiIsImVtcGxveWVlSWQiLCJpZCIsIm1vZGVsIiwiZmluZEJ5SWQiLCJlbXBsb3llZURhdGEiLCJmaW5kIiwic3VwZXJ2aXNvcklkIiwid29ya2VyRGF0YSIsIndvcmtlcnMiLCJsZW5ndGgiLCJyYXdEYXRhIiwiY29uc29sZSIsImxvZyIsInN1cGVyRGF0YSIsImdldCIsImRhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBQW1CLEFBQXdCOztBQUNwRCxBQUFTLEFBQWlCOztBQUMxQixBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNLFNBQU4sQUFBZTs7Ozs7Ozs7Ozs7Ozs2QkFvRE4sQUFDUDs2QkFDSSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsa0NBQU8sS0FBSyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsS0FBSyxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBL0MsQUFBd0Q7b0JBQXhEO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsU0FBSyxJQUFMLEFBQVEsZ0NBQVI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFm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