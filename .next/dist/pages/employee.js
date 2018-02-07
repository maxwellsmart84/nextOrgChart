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
      }), _react2.default.createElement(_EmployeeCard2.default, { name: this.props.employee.name, rank: this.props.employee.rank, supervisor: this.props.supervisor || undefined, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3557637588',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDNEIsQUFHNkIsZ0JBQ0EsZ0JBQ0osWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvZW1wbG95ZWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1wbG95ZWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wbG95ZWVDYXJkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzT3V0LCBzaGFwZUVtcGxveWVlT3V0IH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxLCBxdWVyeSB9KSB7XG4gICAgaWYgKHJlcSkge1xuICAgICAgY29uc29sZS5sb2coJ1NFUlZFUiBHRVQgRU1QIFBBR0UnKTtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcbiAgICAgIGNvbnN0IGVtcGxveWVlSWQgPSBxdWVyeS5pZDtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kQnlJZChlbXBsb3llZUlkKTtcbiAgICAgIGxldCBzdXBlcnZpc29yID0gbnVsbDtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdXBlcnZpc29ySWQgIT09IG51bGwpIHtcbiAgICAgICAgc3VwZXJ2aXNvciA9IGF3YWl0IGRiLm1vZGVsKCdFbXBsb3llZScpLmZpbmRCeUlkKGRhdGEuc3VwZXJ2aXNvcklkKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVtcGxveWVlID0gc2hhcGVFbXBsb3llZU91dChkYXRhKTtcbiAgICAgIC8vVE9ETzogbmVlZCB0byBmaW5kIHRoZSBudWxsIHN1cGVydmlzb3JJZCBub3QgdXNlIGluZGV4IDBcbiAgICAgIC8vIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlLCBlbXBsb3llZXMpO1xuICAgICAgY29uc29sZS5sb2coJ0VNUExPWUVFIFNFUlZFUicsIGVtcGxveWVlKVxuICAgICAgcmV0dXJuIHsgZW1wbG95ZWUsIHN1cGVydmlzb3IgfTtcbiAgICB9XG4gICAgbGV0IHN1cGVydmlzb3IgPSBudWxsO1xuICAgIGNvbnN0IGVtcGxveWVlSWQgPSBxdWVyeS5pZDtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9lbXBsb3llZT9pZD0ke2VtcGxveWVlSWR9YCk7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5zdXBlcnZpc29ySWQgIT09IG51bGwpIHtcbiAgICAgIHN1cGVydmlzb3IgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZW1wbG95ZWU/aWQ9JHtkYXRhLnN1cGVydmlzb3JJZH1gKTtcbiAgICB9XG4gICAgY29uc3QgZW1wbG95ZWUgPSBkYXRhO1xuICAgIHJldHVybiB7IGVtcGxveWVlLCBzdXBlcnZpc29yIH07XG4gIH1cblxuICAvLyBoYW5kbGVTdWJtaXQgPSBmaWVsZHMgPT4ge1xuXG4gIC8vIH1cblxucmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSB0aXRsZT17dGhpcy5wcm9wcy5lbXBsb3llZS5uYW1lfSAvPlxuICAgICAgICA8RW1wbG95ZWVDYXJkIG5hbWU9e3RoaXMucHJvcHMuZW1wbG95ZWUubmFtZX0gcmFuaz17dGhpcy5wcm9wcy5lbXBsb3llZS5yYW5rfSBzdXBlcnZpc29yPXt0aGlzLnByb3BzLnN1cGVydmlzb3IgfHwgdW5kZWZpbmVkfSAvPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD4ge2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgICBmb250OiAxcmVtIG1lbmxvO1xuICAgICAgICAgICAgY29sb3I6ICNmc2ZmO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/employee.js?entry */'
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
                  _context.next = 16;
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
                //TODO: need to find the null supervisorId not use index 0
                // const treeData = buildTree(employee, employees);

                console.log('EMPLOYEE SERVER', _employee);
                return _context.abrupt('return', { employee: _employee, supervisor: _supervisor });

              case 16:
                supervisor = null;
                employeeId = query.id;
                _context.next = 20;
                return _axios2.default.get('http://localhost:3000/api/employee?id=' + employeeId);

              case 20:
                _ref3 = _context.sent;
                data = _ref3.data;

                if (!(data && data.supervisorId !== null)) {
                  _context.next = 26;
                  break;
                }

                _context.next = 25;
                return _axios2.default.get('http://localhost:3000/api/employee?id=' + data.supervisorId);

              case 25:
                supervisor = _context.sent;

              case 26:
                employee = data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlQ2FyZCIsIkhlYWRlciIsImF4aW9zIiwic2hhcGVFbXBsb3llZXNPdXQiLCJzaGFwZUVtcGxveWVlT3V0IiwiYnVpbGRUcmVlIiwicHJvcHMiLCJ1cmwiLCJlbXBsb3llZSIsIm5hbWUiLCJyYW5rIiwic3VwZXJ2aXNvciIsInVuZGVmaW5lZCIsInJlcSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImRiIiwiZW1wbG95ZWVJZCIsImlkIiwibW9kZWwiLCJmaW5kQnlJZCIsImRhdGEiLCJzdXBlcnZpc29ySWQiLCJnZXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQVMsQUFBbUIsQUFBd0I7O0FBQ3BELEFBQVMsQUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBOEJ4Qjs7QUFFQTs7Ozs2QkFFTyxBQUNQOzZCQUNJLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUEvQyxBQUF3RDtvQkFBeEQ7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx3Q0FBYSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBL0IsQUFBd0MsTUFBTSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBL0QsQUFBd0UsTUFBTSxZQUFZLEtBQUEsQUFBSyxNQUFMLEFBQVcsY0FBckcsQUFBbUg7b0JBQW5IO3NCQUZGLEFBRUU7QUFBQTs7aUJBRkY7YUFESixBQUNJLEFBZUg7QUFmRzs7Ozs7O1lBakM0QixBLFdBQUEsQTtZLEFBQUssYSxBQUFBOzs7Ozs7OztxQixBQUMvQjs7O0FBQ0Y7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ0o7QSxxQixBQUFPLElBQVAsQUFDRixBO0EsOEJBQWEsTSxBQUFNOzt1QkFDTixHQUFBLEFBQUcsTUFBSCxBQUFTLFlBQVQsQUFBcUIsU0FBUyxBLEFBQTlCOzttQkFBYjtBLGlDQUNGO0EsOEJBQWEsQSxBQUNqQjs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7O3NCQUNSLFNBQVEsTUFBQSxBQUFLLGlCLEFBQWlCOzs7Ozs7dUJBQ2IsR0FBQSxBQUFHLE1BQUgsQUFBUyxZQUFULEFBQXFCLFNBQVMsTUFBOUIsQUFBbUMsQTs7bUJBQXREO0E7O21CQUVJO0EsNEJBQVcsc0NBQWlCLEEsQUFBakIsQUFDakI7QUFDQTtBQUNBOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxtQkFBWixBQUErQjtpREFDeEIsRUFBRSxVQUFGLFdBQVksWUFBWixBOzttQkFFTDtBLDZCQUFhLEEsQUFDWDtBLDZCQUFhLE0sQUFBTTs7dUJBQ0YsZ0JBQUEsQUFBTSwrQyxBQUFOLEFBQW1EOzs7aUNBQWxFO0EsNkJBQUEsQTs7c0JBQ0osUUFBUSxLQUFBLEFBQUssaUIsQUFBaUI7Ozs7Ozt1QkFDYixnQkFBQSxBQUFNLCtDQUE2QyxLQUFuRCxBQUF3RCxBOzttQkFBM0U7QTs7bUJBRUk7QSwyQkFBVyxBO2lEQUNWLEVBQUUsVUFBRixVQUFZLFlBQVosQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpCa0IsZ0JBQU0sQSIsImZpbGUiOiJlbXBsb3llZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9