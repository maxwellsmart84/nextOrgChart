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

    // handleSubmit = fields => {

    // }

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
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDNEIsQUFHNkIsZ0JBQ0EsZ0JBQ0osWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvZW1wbG95ZWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1wbG95ZWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wbG95ZWVDYXJkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzT3V0LCBzaGFwZUVtcGxveWVlT3V0IH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuXG5jb25zdCBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSwgcXVlcnkgfSkge1xuICAgIGlmIChyZXEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTRVJWRVIgR0VUIEVNUCBQQUdFJyk7XG4gICAgICBjb25zdCB7IGRiIH0gPSByZXE7XG4gICAgICBjb25zdCBlbXBsb3llZUlkID0gcXVlcnkuaWQ7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZEJ5SWQoZW1wbG95ZWVJZCk7XG4gICAgICBsZXQgc3VwZXJ2aXNvciA9IG51bGw7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIGlmIChkYXRhICYmIGRhdGEuc3VwZXJ2aXNvcklkICE9PSBudWxsKSB7XG4gICAgICAgIHN1cGVydmlzb3IgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kQnlJZChkYXRhLnN1cGVydmlzb3JJZCk7XG4gICAgICB9XG4gICAgICBjb25zdCBlbXBsb3llZSA9IHNoYXBlRW1wbG95ZWVPdXQoZGF0YSk7XG4gICAgICByZXR1cm4geyBlbXBsb3llZSwgc3VwZXJ2aXNvciB9O1xuICAgIH1cbiAgICBsZXQgc3VwZXJ2aXNvciA9IG51bGw7XG4gICAgY29uc3QgZW1wbG95ZWVJZCA9IHF1ZXJ5LmlkO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaVVybH0vZW1wbG95ZWUvJHtlbXBsb3llZUlkfWApO1xuICAgIGlmIChkYXRhICYmIGRhdGEuc3VwZXJ2aXNvcklkICE9PSBudWxsKSB7XG4gICAgICBzdXBlcnZpc29yID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaVVybH0vZW1wbG95ZWUvJHtkYXRhLnN1cGVydmlzb3JJZH1gKTtcbiAgICB9XG4gICAgY29uc3QgZW1wbG95ZWUgPSBkYXRhO1xuICAgIGNvbnNvbGUubG9nKCdDTElFTlQgR1JBQicsIGVtcGxveWVlKTtcbiAgICByZXR1cm4geyBlbXBsb3llZSwgc3VwZXJ2aXNvciB9O1xuICB9XG5cbiAgLy8gaGFuZGxlU3VibWl0ID0gZmllbGRzID0+IHtcblxuICAvLyB9XG5cbnJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgdXJsPXt0aGlzLnByb3BzLnVybH0gdGl0bGU9e3RoaXMucHJvcHMuZW1wbG95ZWUubmFtZX0gLz5cbiAgICAgICAgPEVtcGxveWVlQ2FyZCB1cmw9e3RoaXMucHJvcHMudXJsfSBuYW1lPXt0aGlzLnByb3BzLmVtcGxveWVlLm5hbWV9IHJhbms9e3RoaXMucHJvcHMuZW1wbG95ZWUucmFua30gc3VwZXJ2aXNvcj17dGhpcy5wcm9wcy5zdXBlcnZpc29yIHx8IHVuZGVmaW5lZH0gLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+IHtgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICAgICAgZm9udDogMXJlbSBtZW5sbztcbiAgICAgICAgICAgIGNvbG9yOiAjZnNmZjtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=pages/employee.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            query = _ref.query;

        var db, _employeeId, _data, _supervisor, _employee, supervisor, employeeId, _ref3, data, employee;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 15;
                  break;
                }

                console.log('SERVER GET EMP PAGE');
                db = req.db;
                _employeeId = query.id;
                _context.next = 6;
                return db.model('Employee').findById(_employeeId);

              case 6:
                _data = _context.sent;
                _supervisor = null;

                console.log(_data);

                if (!(_data && _data.supervisorId !== null)) {
                  _context.next = 13;
                  break;
                }

                _context.next = 12;
                return db.model('Employee').findById(_data.supervisorId);

              case 12:
                _supervisor = _context.sent;

              case 13:
                _employee = (0, _employeeShaper.shapeEmployeeOut)(_data);
                return _context.abrupt('return', { employee: _employee, supervisor: _supervisor });

              case 15:
                supervisor = null;
                employeeId = query.id;
                _context.next = 19;
                return _axios2.default.get(apiUrl + '/employee/' + employeeId);

              case 19:
                _ref3 = _context.sent;
                data = _ref3.data;

                if (!(data && data.supervisorId !== null)) {
                  _context.next = 25;
                  break;
                }

                _context.next = 24;
                return _axios2.default.get(apiUrl + '/employee/' + data.supervisorId);

              case 24:
                supervisor = _context.sent;

              case 25:
                employee = data;

                console.log('CLIENT GRAB', employee);
                return _context.abrupt('return', { employee: employee, supervisor: supervisor });

              case 28:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlQ2FyZCIsIkhlYWRlciIsImF4aW9zIiwic2hhcGVFbXBsb3llZXNPdXQiLCJzaGFwZUVtcGxveWVlT3V0IiwiYnVpbGRUcmVlIiwiYXBpVXJsIiwicHJvcHMiLCJ1cmwiLCJlbXBsb3llZSIsIm5hbWUiLCJyYW5rIiwic3VwZXJ2aXNvciIsInVuZGVmaW5lZCIsInJlcSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImRiIiwiZW1wbG95ZWVJZCIsImlkIiwibW9kZWwiLCJmaW5kQnlJZCIsImRhdGEiLCJzdXBlcnZpc29ySWQiLCJnZXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQVMsQUFBbUIsQUFBd0I7O0FBQ3BELEFBQVMsQUFBaUI7Ozs7Ozs7QUFFMUIsSUFBTSxTQUFOLEFBQWU7Ozs7Ozs7Ozs7OztTQTRCYjs7QUFFQTs7Ozs2QkFFTyxBQUNQOzZCQUNJLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUEvQyxBQUF3RDtvQkFBeEQ7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx3Q0FBYSxLQUFLLEtBQUEsQUFBSyxNQUF4QixBQUE4QixLQUFLLE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFwRCxBQUE2RCxNQUFNLE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFwRixBQUE2RixNQUFNLFlBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUExSCxBQUF3STtvQkFBeEk7c0JBRkYsQUFFRTtBQUFBOztpQkFGRjthQURKLEFBQ0ksQUFlSDtBQWZHOzs7Ozs7WSxBQS9CNEIsVyxBQUFBO1ksQUFBSyxhQUFBLEE7Ozs7Ozs7O3FCQUMvQixBOzs7QUFDRjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDSjtBLHFCLEFBQU8sSUFBUCxBLEFBQ0Y7QSw4QkFBYSxNLEFBQU07O3VCQUNOLEdBQUEsQUFBRyxNQUFILEFBQVMsWUFBVCxBQUFxQixTLEFBQXJCLEFBQThCOzttQkFBM0M7QSxpQ0FDRjtBLDhCQUFhLEEsQUFDakI7O3dCQUFBLEFBQVEsSUFBUixBQUFZOztzQkFDUixTQUFRLE1BQUEsQUFBSyxpQixBQUFpQjs7Ozs7O3VCQUNiLEdBQUEsQUFBRyxNQUFILEFBQVMsWUFBVCxBQUFxQixTQUFTLE0sQUFBOUIsQUFBbUM7O21CQUF0RDtBOzttQkFFSTtBLDRCQUFXLHNDQUFpQixBLEFBQWpCO2lEQUNWLEVBQUUsVUFBRixXQUFZLFlBQVosQTs7bUJBRUw7QSw2QkFBYSxBQUNYLEE7QSw2QkFBYSxNQUFNLEE7O3VCQUNGLGdCQUFBLEFBQU0sSUFBTixBQUFhLHdCQUFiLEEsQUFBZ0M7OztpQ0FBL0M7QSw2QixBQUFBOztzQkFDSixRQUFRLEtBQUEsQUFBSyxpQkFBaUIsQTs7Ozs7O3VCQUNiLGdCQUFBLEFBQU0sSUFBTixBQUFhLHdCQUFtQixLQUFLLEEsQUFBckM7O21CQUFuQjtBOzttQkFFSTtBLDJCQUFXLEEsQUFDakI7O3dCQUFBLEFBQVEsSUFBUixBQUFZLGVBQVosQUFBMkI7aURBQ3BCLEVBQUUsVUFBRixVQUFZLFlBQVosQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZCa0IsZ0JBQU0sQSIsImZpbGUiOiJlbXBsb3llZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9