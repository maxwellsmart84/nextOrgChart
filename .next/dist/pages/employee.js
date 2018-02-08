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

var _EmployeeCard = require('../components/EmployeeCard');

var _EmployeeCard2 = _interopRequireDefault(_EmployeeCard);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _employeeShaper = require('../api/shapers/employeeShaper');

var _utility = require('../api/utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/employee.js?entry';


var apiUrl = 'http://localhost:3000/api';

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
        className: 'jsx-3557637588',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props.employee.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_EmployeeCard2.default, { url: this.props.url, name: this.props.employee.name, rank: this.props.employee.rank, supervisor: this.props.supervisor || undefined, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3557637588',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDNEIsQUFHNkIsZ0JBQ0EsZ0JBQ0osWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvZW1wbG95ZWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1wbG95ZWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wbG95ZWVDYXJkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzT3V0LCBzaGFwZUVtcGxveWVlT3V0IH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuXG5jb25zdCBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSwgcXVlcnkgfSkge1xuICAgIGlmIChyZXEpIHtcbiAgICAgIGxldCBzdXBlcnZpc29yID0gbnVsbDtcbiAgICAgIGNvbnNvbGUubG9nKCdTRVJWRVIgR0VUIEVNUCBQQUdFJyk7XG4gICAgICBjb25zdCB7IGRiIH0gPSByZXE7XG4gICAgICBjb25zdCBlbXBsb3llZUlkID0gcXVlcnkuaWQ7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZEJ5SWQoZW1wbG95ZWVJZCk7XG4gICAgICBjb25zdCBlbXBsb3llZSA9IHNoYXBlRW1wbG95ZWVPdXQoZGF0YSk7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnN1cGVydmlzb3JJZCAhPT0gbnVsbCkge1xuICAgICAgICAvLyB0aGUgZW1wbG95ZWUncyBzdXBlcnZpc29yIGZldGVjaGVkIGZyb20gYWJvdmVcbiAgICAgICAgY29uc3Qgc3VwZXJEYXRhID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZEJ5SWQoZGF0YS5zdXBlcnZpc29ySWQpO1xuICAgICAgICBzdXBlcnZpc29yID0gc2hhcGVFbXBsb3llZU91dChzdXBlckRhdGEpO1xuICAgICAgICByZXR1cm4geyBlbXBsb3llZSwgc3VwZXJ2aXNvciB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZW1wbG95ZWUsIHN1cGVydmlzb3IgfTtcbiAgICB9XG4gICAgbGV0IHN1cGVydmlzb3IgPSBudWxsO1xuICAgIGNvbnN0IGVtcGxveWVlSWQgPSBxdWVyeS5pZDtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlVcmx9L2VtcGxveWVlLyR7ZW1wbG95ZWVJZH1gKTtcbiAgICBjb25zdCBlbXBsb3llZSA9IGRhdGE7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5zdXBlcnZpc29ySWQpIHtcbiAgICAgIGNvbnN0IHN1cGVyRGF0YSA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlVcmx9L2VtcGxveWVlLyR7ZGF0YS5zdXBlcnZpc29ySWR9YCk7XG4gICAgICBzdXBlcnZpc29yID0gc3VwZXJEYXRhLmRhdGE7XG4gICAgICByZXR1cm4geyBlbXBsb3llZSwgc3VwZXJ2aXNvciB9O1xuICAgIH1cbiAgICByZXR1cm4geyBlbXBsb3llZSwgc3VwZXJ2aXNvciB9O1xuICB9XG5cblxucmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSB0aXRsZT17dGhpcy5wcm9wcy5lbXBsb3llZS5uYW1lfSAvPlxuICAgICAgICA8RW1wbG95ZWVDYXJkIHVybD17dGhpcy5wcm9wcy51cmx9IG5hbWU9e3RoaXMucHJvcHMuZW1wbG95ZWUubmFtZX0gcmFuaz17dGhpcy5wcm9wcy5lbXBsb3llZS5yYW5rfSBzdXBlcnZpc29yPXt0aGlzLnByb3BzLnN1cGVydmlzb3IgfHwgdW5kZWZpbmVkfSAvPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD4ge2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgICBmb250OiAxcmVtIG1lbmxvO1xuICAgICAgICAgICAgY29sb3I6ICNmc2ZmO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/employee.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            query = _ref.query;

        var _supervisor, db, _employeeId, _data, _employee, superData, supervisor, employeeId, _ref3, data, employee, _superData;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 16;
                  break;
                }

                _supervisor = null;

                console.log('SERVER GET EMP PAGE');
                db = req.db;
                _employeeId = query.id;
                _context.next = 7;
                return db.model('Employee').findById(_employeeId);

              case 7:
                _data = _context.sent;
                _employee = (0, _employeeShaper.shapeEmployeeOut)(_data);

                if (!(_data && _data.supervisorId !== null)) {
                  _context.next = 15;
                  break;
                }

                _context.next = 12;
                return db.model('Employee').findById(_data.supervisorId);

              case 12:
                superData = _context.sent;

                _supervisor = (0, _employeeShaper.shapeEmployeeOut)(superData);
                return _context.abrupt('return', { employee: _employee, supervisor: _supervisor });

              case 15:
                return _context.abrupt('return', { employee: _employee, supervisor: _supervisor });

              case 16:
                supervisor = null;
                employeeId = query.id;
                _context.next = 20;
                return _axios2.default.get(apiUrl + '/employee/' + employeeId);

              case 20:
                _ref3 = _context.sent;
                data = _ref3.data;
                employee = data;

                if (!(data && data.supervisorId)) {
                  _context.next = 29;
                  break;
                }

                _context.next = 26;
                return _axios2.default.get(apiUrl + '/employee/' + data.supervisorId);

              case 26:
                _superData = _context.sent;

                supervisor = _superData.data;
                return _context.abrupt('return', { employee: employee, supervisor: supervisor });

              case 29:
                return _context.abrupt('return', { employee: employee, supervisor: supervisor });

              case 30:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlQ2FyZCIsIkhlYWRlciIsImF4aW9zIiwic2hhcGVFbXBsb3llZXNPdXQiLCJzaGFwZUVtcGxveWVlT3V0IiwiYnVpbGRUcmVlIiwiYXBpVXJsIiwicHJvcHMiLCJ1cmwiLCJlbXBsb3llZSIsIm5hbWUiLCJyYW5rIiwic3VwZXJ2aXNvciIsInVuZGVmaW5lZCIsInJlcSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImRiIiwiZW1wbG95ZWVJZCIsImlkIiwibW9kZWwiLCJmaW5kQnlJZCIsImRhdGEiLCJzdXBlcnZpc29ySWQiLCJzdXBlckRhdGEiLCJnZXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQVMsQUFBbUIsQUFBd0I7O0FBQ3BELEFBQVMsQUFBaUI7Ozs7Ozs7QUFFMUIsSUFBTSxTQUFOLEFBQWU7Ozs7Ozs7Ozs7Ozs7NkJBZ0NOLEFBQ1A7NkJBQ0ksY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLGtDQUFPLEtBQUssS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEtBQUssT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQS9DLEFBQXdEO29CQUF4RDtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHdDQUFhLEtBQUssS0FBQSxBQUFLLE1BQXhCLEFBQThCLEtBQUssTUFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQXBELEFBQTZELE1BQU0sTUFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQXBGLEFBQTZGLE1BQU0sWUFBWSxLQUFBLEFBQUssTUFBTCxBQUFXLGNBQTFILEFBQXdJO29CQUF4STtzQkFGRixBQUVFO0FBQUE7O2lCQUZGO2FBREosQUFDSSxBQWVIO0FBZkc7Ozs7OztZQS9CNEIsQSxXQUFBLEE7WSxBQUFLLGEsQUFBQTs7Ozs7Ozs7cUIsQUFDL0I7OztBQUNFOztBLDhCLEFBQWEsQUFDakI7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ0o7QSxxQkFBTyxBLElBQVAsQUFDRixBO0EsOEJBQWEsTSxBQUFNOzt1QkFDTixHQUFBLEFBQUcsTUFBSCxBQUFTLFlBQVQsQUFBcUIsUyxBQUFyQixBQUE4Qjs7bUJBQTNDO0EsaUNBQ0E7QSw0QkFBVyxzQ0FBaUIsQSxBQUFqQjs7c0JBQ2IsU0FBUSxNQUFBLEFBQUssaUIsQUFBaUI7Ozs7Ozt1QkFFUixHQUFBLEFBQUcsTUFBSCxBQUFTLFlBQVQsQUFBcUIsU0FBUyxNQUE5QixBLEFBQW1DOzttQkFBckQ7QSxxQ0FDTjs7OEJBQWEsc0NBQWIsQUFBYSxBQUFpQjtpREFDdkIsRUFBRSxVQUFGLFdBQVksWUFBWixBOzs7aURBRUYsRUFBRSxVQUFGLFdBQVksWSxBQUFaOzttQkFFTDtBLDZCQUNFLEEsQUFEVztBLDZCQUNFLE1BQU0sQTs7dUJBQ0YsZ0JBQUEsQUFBTSxJQUFOLEFBQWEsd0JBQWIsQSxBQUFnQzs7O2lDQUEvQztBLDZCLEFBQUEsQUFDRjtBLDJCLEFBQVc7O3NCQUNiLFFBQVEsS0FBSyxBOzs7Ozs7dUJBQ1MsZ0JBQUEsQUFBTSxJQUFOLEFBQWEsd0JBQW1CLEtBQWhDLEFBQXFDLEE7O21CQUF2RDtBLHNDQUNOOzs2QkFBYSxXQUFiLEFBQXVCO2lEQUNoQixFQUFFLFVBQUYsVUFBWSxZQUFaLEE7OztpREFFRixFQUFFLFVBQUYsVUFBWSxZQUFaLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExQmtCLGdCQUFNLEEiLCJmaWxlIjoiZW1wbG95ZWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==