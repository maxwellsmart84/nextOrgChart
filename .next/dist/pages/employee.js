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
        className: 'jsx-2020291655',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props.employee.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react2.default.createElement('div', { id: 'employeeContainer', className: 'jsx-2020291655',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2020291655' + ' ' + 'left',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('div', { id: 'form', className: 'jsx-2020291655',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_EmployeeCard2.default, { url: this.props.url, name: this.props.employee.name, title: this.props.employee.title, rank: this.props.employee.rank, workers: this.props.workers, supervisor: this.props.supervisor || undefined, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }))), this.props.treeData && _react2.default.createElement('div', {
        className: 'jsx-2020291655' + ' ' + 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('div', { id: 'tree', className: 'jsx-2020291655',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_Tree2.default, { url: this.props.url, data: this.props.treeData, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })))), _react2.default.createElement(_style2.default, {
        styleId: '2020291655',
        css: '#employeeContainer{width:100%;display:block;}.left{width:50%;float:left;}.right{width:50%;float:right;}#form{width:60%;padding-left:15%;}#tree{padding-top:5%;width:100%;float:right;margin-right:10%;}body{background:#FFF;font-size:1rem;font-family:menlo,Helvetica;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFNEIsQUFHdUIsQUFJQSxBQUlBLEFBSUEsQUFJSyxBQU1DLFVBakJMLEFBSUMsQUFJSyxDQVpILElBZ0JILENBTUksS0FqQmpCLENBSUEsR0FSQSxDQWdCYyxDQUpkLElBV0UsT0FOaUIsaUJBQ25CLElBS2MsWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvZW1wbG95ZWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1wbG95ZWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wbG95ZWVDYXJkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzT3V0LCBzaGFwZUVtcGxveWVlT3V0IH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuaW1wb3J0IFRyZWUgZnJvbSAnLi4vY29tcG9uZW50cy9UcmVlJ1xuXG5jb25zdCBhcGlVcmwgPSAnL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSwgcXVlcnkgfSkge1xuICAgIGlmIChyZXEpIHtcbiAgICAgIGxldCBzdXBlcnZpc29yID1udWxsO1xuICAgICAgbGV0IHRyZWVEYXRhID0gbnVsbDtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcblxuICAgICAgY29uc3QgZW1wbG95ZWVJZCA9IHF1ZXJ5LmlkO1xuICAgICAgY29uc3QgZW1wbG95ZWVEYXRhID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZEJ5SWQoZW1wbG95ZWVJZCk7XG4gICAgICBjb25zdCBlbXBsb3llZSA9IHNoYXBlRW1wbG95ZWVPdXQoZW1wbG95ZWVEYXRhKTtcblxuICAgICAgY29uc3Qgd29ya2VyRGF0YSA9IGF3YWl0IGRiLm1vZGVsKCdFbXBsb3llZScpLmZpbmQoeyBzdXBlcnZpc29ySWQ6IGVtcGxveWVlLmlkIH0pO1xuICAgICAgY29uc3Qgd29ya2VycyA9IHNoYXBlRW1wbG95ZWVzT3V0KHdvcmtlckRhdGEpO1xuXG4gICAgICBpZiAod29ya2VyRGF0YS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgcmF3RGF0YSA9IFtlbXBsb3llZSwgLi4ud29ya2Vyc11cbiAgICAgICAgdHJlZURhdGEgPSBidWlsZFRyZWUocmF3RGF0YSlbMF1cbiAgICAgIH1cblxuICAgICAgaWYgKGVtcGxveWVlICYmIGVtcGxveWVlLnN1cGVydmlzb3JJZCAhPT0gJ05vbmUnKSB7XG4gICAgICAgIC8vIHRoZSBlbXBsb3llZSdzIHN1cGVydmlzb3IgZmV0ZWNoZWQgZnJvbSBhYm92ZVxuICAgICAgICBjb25zdCBzdXBlckRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kQnlJZChlbXBsb3llZS5zdXBlcnZpc29ySWQpO1xuICAgICAgICBzdXBlcnZpc29yID0gc2hhcGVFbXBsb3llZU91dChzdXBlckRhdGEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZW1wbG95ZWUsIHRyZWVEYXRhLCB3b3JrZXJzLCBzdXBlcnZpc29yIH07XG4gICAgfVxuICAgIGxldCBzdXBlcnZpc29yID0gbnVsbDtcbiAgICBsZXQgdHJlZURhdGEgPSBudWxsO1xuXG4gICAgY29uc3QgZW1wbG95ZWVJZCA9IHF1ZXJ5LmlkO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaVVybH0vZW1wbG95ZWUvJHtlbXBsb3llZUlkfWApO1xuICAgIGNvbnN0IGVtcGxveWVlID0gZGF0YTtcblxuICAgIGNvbnN0IHdvcmtlckRhdGEgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpVXJsfS9lbXBsb3llZS93b3JrZXJzLyR7ZW1wbG95ZWVJZH1gKVxuICAgIGNvbnN0IHdvcmtlcnMgPSB3b3JrZXJEYXRhLmRhdGE7XG5cbiAgICBpZiAod29ya2Vycy5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IHJhd0RhdGEgPSBbZW1wbG95ZWUsIC4uLndvcmtlcnNdXG4gICAgICB0cmVlRGF0YSA9IGJ1aWxkVHJlZShyYXdEYXRhKVswXVxuICAgIH1cblxuICAgIGlmIChlbXBsb3llZSAmJiBlbXBsb3llZS5zdXBlcnZpc29ySWQgIT09ICdOb25lJykge1xuICAgICAgY29uc3Qgc3VwZXJEYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaVVybH0vZW1wbG95ZWUvJHtlbXBsb3llZS5zdXBlcnZpc29ySWR9YCk7XG4gICAgICBzdXBlcnZpc29yID0gc3VwZXJEYXRhLmRhdGE7XG4gICAgfVxuICAgIHJldHVybiB7IGVtcGxveWVlLCB0cmVlRGF0YSwgd29ya2Vycywgc3VwZXJ2aXNvciB9O1xuICB9XG5cblxucmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSB0aXRsZT17dGhpcy5wcm9wcy5lbXBsb3llZS5uYW1lfSAvPlxuICAgICAgICA8ZGl2IGlkPVwiZW1wbG95ZWVDb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtXCI+XG4gICAgICAgICAgICAgIDxFbXBsb3llZUNhcmQgdXJsPXt0aGlzLnByb3BzLnVybH0gbmFtZT17dGhpcy5wcm9wcy5lbXBsb3llZS5uYW1lfSB0aXRsZT17dGhpcy5wcm9wcy5lbXBsb3llZS50aXRsZX0gcmFuaz17dGhpcy5wcm9wcy5lbXBsb3llZS5yYW5rfSAgd29ya2Vycz17dGhpcy5wcm9wcy53b3JrZXJzfSBzdXBlcnZpc29yPXt0aGlzLnByb3BzLnN1cGVydmlzb3IgfHwgdW5kZWZpbmVkfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMucHJvcHMudHJlZURhdGEgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidHJlZVwiPlxuICAgICAgICAgICAgICA8VHJlZSB1cmw9e3RoaXMucHJvcHMudXJsfSBkYXRhPXt0aGlzLnByb3BzLnRyZWVEYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+IHtgXG4gICAgICAgICAgI2VtcGxveWVlQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjZm9ybSB7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgICN0cmVlIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtZW5sbywgSGVsdmV0aWNhXG4gICAgICAgICAgICBjb2xvcjogI2ZzZmY7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/employee.js?entry */'
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
                return _context.abrupt('return', { employee: _employee, treeData: _treeData, workers: _workers, supervisor: _supervisor });

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
                return _context.abrupt('return', { employee: employee, treeData: treeData, workers: workers, supervisor: supervisor });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlQ2FyZCIsIkhlYWRlciIsImF4aW9zIiwic2hhcGVFbXBsb3llZXNPdXQiLCJzaGFwZUVtcGxveWVlT3V0IiwiYnVpbGRUcmVlIiwiVHJlZSIsImFwaVVybCIsInByb3BzIiwidXJsIiwiZW1wbG95ZWUiLCJuYW1lIiwidGl0bGUiLCJyYW5rIiwid29ya2VycyIsInN1cGVydmlzb3IiLCJ1bmRlZmluZWQiLCJ0cmVlRGF0YSIsInJlcSIsInF1ZXJ5IiwiZGIiLCJlbXBsb3llZUlkIiwiaWQiLCJtb2RlbCIsImZpbmRCeUlkIiwiZW1wbG95ZWVEYXRhIiwiZmluZCIsInN1cGVydmlzb3JJZCIsIndvcmtlckRhdGEiLCJsZW5ndGgiLCJyYXdEYXRhIiwic3VwZXJEYXRhIiwiZ2V0IiwiZGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQVMsQUFBbUIsQUFBd0I7O0FBQ3BELEFBQVMsQUFBaUI7O0FBQzFCLEFBQU8sQUFBVTs7Ozs7Ozs7O0FBRWpCLElBQU0sU0FBTixBQUFlOzs7Ozs7Ozs7Ozs7OzZCQW1ETixBQUNQOzZCQUNJLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUEvQyxBQUF3RDtvQkFBeEQ7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQSxTQUFLLElBQUwsQUFBUSxnQ0FBUjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURG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