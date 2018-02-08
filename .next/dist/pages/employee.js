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
        className: 'jsx-3557637588',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props.employee.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement(_EmployeeCard2.default, { url: this.props.url, name: this.props.employee.name, title: this.props.employee.title, rank: this.props.employee.rank, supervisor: this.props.supervisor || undefined, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3557637588',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDNEIsQUFHNkIsZ0JBQ0EsZ0JBQ0osWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvZW1wbG95ZWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1wbG95ZWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wbG95ZWVDYXJkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzT3V0LCBzaGFwZUVtcGxveWVlT3V0IH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuXG5jb25zdCBhcGlVcmwgPSAnL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSwgcXVlcnkgfSkge1xuICAgIGlmIChyZXEpIHtcbiAgICAgIGxldCBzdXBlcnZpc29yID0gbnVsbDtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcbiAgICAgIGNvbnN0IGVtcGxveWVlSWQgPSBxdWVyeS5pZDtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kQnlJZChlbXBsb3llZUlkKTtcbiAgICAgIGNvbnN0IGVtcGxveWVlID0gc2hhcGVFbXBsb3llZU91dChkYXRhKTtcbiAgICAgIGlmIChkYXRhICYmIGRhdGEuc3VwZXJ2aXNvcklkICE9PSAnTm9uZScpIHtcbiAgICAgICAgLy8gdGhlIGVtcGxveWVlJ3Mgc3VwZXJ2aXNvciBmZXRlY2hlZCBmcm9tIGFib3ZlXG4gICAgICAgIGNvbnN0IHN1cGVyRGF0YSA9IGF3YWl0IGRiLm1vZGVsKCdFbXBsb3llZScpLmZpbmRCeUlkKGRhdGEuc3VwZXJ2aXNvcklkKTtcbiAgICAgICAgc3VwZXJ2aXNvciA9IHNoYXBlRW1wbG95ZWVPdXQoc3VwZXJEYXRhKTtcbiAgICAgICAgcmV0dXJuIHsgZW1wbG95ZWUsIHN1cGVydmlzb3IgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGVtcGxveWVlLCBzdXBlcnZpc29yIH07XG4gICAgfVxuICAgIGxldCBzdXBlcnZpc29yID0gbnVsbDtcbiAgICBjb25zdCBlbXBsb3llZUlkID0gcXVlcnkuaWQ7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpVXJsfS9lbXBsb3llZS8ke2VtcGxveWVlSWR9YCk7XG4gICAgY29uc3QgZW1wbG95ZWUgPSBkYXRhO1xuICAgIGlmIChkYXRhICYmIGRhdGEuc3VwZXJ2aXNvcklkICE9PSAnTm9uZScpIHtcbiAgICAgIGNvbnN0IHN1cGVyRGF0YSA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlVcmx9L2VtcGxveWVlLyR7ZGF0YS5zdXBlcnZpc29ySWR9YCk7XG4gICAgICBzdXBlcnZpc29yID0gc3VwZXJEYXRhLmRhdGE7XG4gICAgICByZXR1cm4geyBlbXBsb3llZSwgc3VwZXJ2aXNvciB9O1xuICAgIH1cbiAgICByZXR1cm4geyBlbXBsb3llZSwgc3VwZXJ2aXNvciB9O1xuICB9XG5cblxucmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSB0aXRsZT17dGhpcy5wcm9wcy5lbXBsb3llZS5uYW1lfSAvPlxuICAgICAgICA8RW1wbG95ZWVDYXJkIHVybD17dGhpcy5wcm9wcy51cmx9IG5hbWU9e3RoaXMucHJvcHMuZW1wbG95ZWUubmFtZX0gdGl0bGU9e3RoaXMucHJvcHMuZW1wbG95ZWUudGl0bGV9IHJhbms9e3RoaXMucHJvcHMuZW1wbG95ZWUucmFua30gc3VwZXJ2aXNvcj17dGhpcy5wcm9wcy5zdXBlcnZpc29yIHx8IHVuZGVmaW5lZH0gLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+IHtgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICAgICAgZm9udDogMXJlbSBtZW5sbztcbiAgICAgICAgICAgIGNvbG9yOiAjZnNmZjtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=pages/employee.js?entry */'
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
                  _context.next = 15;
                  break;
                }

                _supervisor = null;
                db = req.db;
                _employeeId = query.id;
                _context.next = 6;
                return db.model('Employee').findById(_employeeId);

              case 6:
                _data = _context.sent;
                _employee = (0, _employeeShaper.shapeEmployeeOut)(_data);

                if (!(_data && _data.supervisorId !== 'None')) {
                  _context.next = 14;
                  break;
                }

                _context.next = 11;
                return db.model('Employee').findById(_data.supervisorId);

              case 11:
                superData = _context.sent;

                _supervisor = (0, _employeeShaper.shapeEmployeeOut)(superData);
                return _context.abrupt('return', { employee: _employee, supervisor: _supervisor });

              case 14:
                return _context.abrupt('return', { employee: _employee, supervisor: _supervisor });

              case 15:
                supervisor = null;
                employeeId = query.id;
                _context.next = 19;
                return _axios2.default.get(apiUrl + '/employee/' + employeeId);

              case 19:
                _ref3 = _context.sent;
                data = _ref3.data;
                employee = data;

                if (!(data && data.supervisorId !== 'None')) {
                  _context.next = 28;
                  break;
                }

                _context.next = 25;
                return _axios2.default.get(apiUrl + '/employee/' + data.supervisorId);

              case 25:
                _superData = _context.sent;

                supervisor = _superData.data;
                return _context.abrupt('return', { employee: employee, supervisor: supervisor });

              case 28:
                return _context.abrupt('return', { employee: employee, supervisor: supervisor });

              case 29:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlQ2FyZCIsIkhlYWRlciIsImF4aW9zIiwic2hhcGVFbXBsb3llZXNPdXQiLCJzaGFwZUVtcGxveWVlT3V0IiwiYnVpbGRUcmVlIiwiYXBpVXJsIiwicHJvcHMiLCJ1cmwiLCJlbXBsb3llZSIsIm5hbWUiLCJ0aXRsZSIsInJhbmsiLCJzdXBlcnZpc29yIiwidW5kZWZpbmVkIiwicmVxIiwicXVlcnkiLCJkYiIsImVtcGxveWVlSWQiLCJpZCIsIm1vZGVsIiwiZmluZEJ5SWQiLCJkYXRhIiwic3VwZXJ2aXNvcklkIiwic3VwZXJEYXRhIiwiZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBQW1CLEFBQXdCOztBQUNwRCxBQUFTLEFBQWlCOzs7Ozs7O0FBRTFCLElBQU0sU0FBTixBQUFlOzs7Ozs7Ozs7Ozs7OzZCQStCTixBQUNQOzZCQUNJLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUEvQyxBQUF3RDtvQkFBeEQ7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx3Q0FBYSxLQUFLLEtBQUEsQUFBSyxNQUF4QixBQUE4QixLQUFLLE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFwRCxBQUE2RCxNQUFNLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFyRixBQUE4RixPQUFPLE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUF0SCxBQUErSCxNQUFNLFlBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUE1SixBQUEwSztvQkFBMUs7c0JBRkYsQUFFRTtBQUFBOztpQkFGRjthQURKLEFBQ0ksQUFlSDtBQWZHOzs7Ozs7WUE5QjRCLEEsV0FBQSxBO1lBQUssQSxhQUFBLEE7Ozs7Ozs7O3FCLEFBQy9COzs7QUFDRTs7QSw4QixBQUFhLEFBQ1Q7QSxxQixBQUFPLElBQVAsQUFDRixBO0EsOEJBQWEsTSxBQUFNOzt1QkFDTixHQUFBLEFBQUcsTUFBSCxBQUFTLFlBQVQsQUFBcUIsU0FBckIsQSxBQUE4Qjs7bUJBQTNDO0EsaUNBQ0E7QSw0QkFBVyxzQ0FBQSxBQUFpQixBOztzQkFDOUIsU0FBUSxNQUFBLEFBQUssaUIsQUFBaUI7Ozs7Ozt1QkFFUixHQUFBLEFBQUcsTUFBSCxBQUFTLFlBQVQsQUFBcUIsU0FBUyxNQUE5QixBQUFtQyxBOzttQkFBckQ7QSxxQ0FDTjs7OEJBQWEsc0NBQWIsQUFBYSxBQUFpQjtpREFDdkIsRUFBRSxVQUFGLFdBQVksWUFBWixBOzs7aURBRUYsRUFBRSxVQUFGLFdBQVksWSxBQUFaOzttQkFFTDtBLDZCLEFBQWEsQUFDWDtBLDZCQUFhLE1BQU0sQTs7dUJBQ0YsZ0JBQUEsQUFBTSxJQUFOLEFBQWEsd0JBQWIsQUFBZ0MsQTs7O2lDQUEvQztBLDZCLEFBQUEsQUFDRjtBLDJCQUFXLEE7O3NCQUNiLFFBQVEsS0FBQSxBQUFLLGlCQUFpQixBOzs7Ozs7dUJBQ1IsZ0JBQUEsQUFBTSxJQUFOLEFBQWEsd0JBQW1CLEtBQWhDLEFBQXFDLEE7O21CQUF2RDtBLHNDQUNOOzs2QkFBYSxXQUFiLEFBQXVCO2lEQUNoQixFQUFFLFVBQUYsVUFBWSxZQUFaLEE7OztpREFFRixFQUFFLFVBQUYsVUFBWSxZQUFaLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6QmtCLGdCQUFNLEEiLCJmaWxlIjoiZW1wbG95ZWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==