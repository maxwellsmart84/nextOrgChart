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
        className: 'jsx-1432081285',
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
        styleId: '1432081285',
        css: 'body{background:#FFF;font-size:1rem;font-family:menlo,Helvetica;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDNEIsQUFHNkIsZ0JBQ0QsZUFFZiw0QkFBWSxZQUNILFNBQ0MsVUFDWiIsImZpbGUiOiJwYWdlcy9lbXBsb3llZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbXBsb3llZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9FbXBsb3llZUNhcmQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgc2hhcGVFbXBsb3llZXNPdXQsIHNoYXBlRW1wbG95ZWVPdXQgfSBmcm9tICcuLi9hcGkvc2hhcGVycy9lbXBsb3llZVNoYXBlcic7XG5pbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tICcuLi9hcGkvdXRpbGl0eSc7XG5cbmNvbnN0IGFwaVVybCA9ICcvYXBpJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxLCBxdWVyeSB9KSB7XG4gICAgaWYgKHJlcSkge1xuICAgICAgbGV0IHN1cGVydmlzb3IgPSBudWxsO1xuICAgICAgY29uc3QgeyBkYiB9ID0gcmVxO1xuICAgICAgY29uc3QgZW1wbG95ZWVJZCA9IHF1ZXJ5LmlkO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLm1vZGVsKCdFbXBsb3llZScpLmZpbmRCeUlkKGVtcGxveWVlSWQpO1xuICAgICAgY29uc3QgZW1wbG95ZWUgPSBzaGFwZUVtcGxveWVlT3V0KGRhdGEpO1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdXBlcnZpc29ySWQgIT09ICdOb25lJykge1xuICAgICAgICAvLyB0aGUgZW1wbG95ZWUncyBzdXBlcnZpc29yIGZldGVjaGVkIGZyb20gYWJvdmVcbiAgICAgICAgY29uc3Qgc3VwZXJEYXRhID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZEJ5SWQoZGF0YS5zdXBlcnZpc29ySWQpO1xuICAgICAgICBzdXBlcnZpc29yID0gc2hhcGVFbXBsb3llZU91dChzdXBlckRhdGEpO1xuICAgICAgICByZXR1cm4geyBlbXBsb3llZSwgc3VwZXJ2aXNvciB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZW1wbG95ZWUsIHN1cGVydmlzb3IgfTtcbiAgICB9XG4gICAgbGV0IHN1cGVydmlzb3IgPSBudWxsO1xuICAgIGNvbnN0IGVtcGxveWVlSWQgPSBxdWVyeS5pZDtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlVcmx9L2VtcGxveWVlLyR7ZW1wbG95ZWVJZH1gKTtcbiAgICBjb25zdCBlbXBsb3llZSA9IGRhdGE7XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5zdXBlcnZpc29ySWQgIT09ICdOb25lJykge1xuICAgICAgY29uc3Qgc3VwZXJEYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaVVybH0vZW1wbG95ZWUvJHtkYXRhLnN1cGVydmlzb3JJZH1gKTtcbiAgICAgIHN1cGVydmlzb3IgPSBzdXBlckRhdGEuZGF0YTtcbiAgICAgIHJldHVybiB7IGVtcGxveWVlLCBzdXBlcnZpc29yIH07XG4gICAgfVxuICAgIHJldHVybiB7IGVtcGxveWVlLCBzdXBlcnZpc29yIH07XG4gIH1cblxuXG5yZW5kZXIoKSB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIHVybD17dGhpcy5wcm9wcy51cmx9IHRpdGxlPXt0aGlzLnByb3BzLmVtcGxveWVlLm5hbWV9IC8+XG4gICAgICAgIDxFbXBsb3llZUNhcmQgdXJsPXt0aGlzLnByb3BzLnVybH0gbmFtZT17dGhpcy5wcm9wcy5lbXBsb3llZS5uYW1lfSB0aXRsZT17dGhpcy5wcm9wcy5lbXBsb3llZS50aXRsZX0gcmFuaz17dGhpcy5wcm9wcy5lbXBsb3llZS5yYW5rfSBzdXBlcnZpc29yPXt0aGlzLnByb3BzLnN1cGVydmlzb3IgfHwgdW5kZWZpbmVkfSAvPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD4ge2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogbWVubG8sIEhlbHZldGljYVxuICAgICAgICAgICAgY29sb3I6ICNmc2ZmO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/employee.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VtcGxveWVlLmpzIl0sIm5hbWVzIjpbIkVtcGxveWVlQ2FyZCIsIkhlYWRlciIsImF4aW9zIiwic2hhcGVFbXBsb3llZXNPdXQiLCJzaGFwZUVtcGxveWVlT3V0IiwiYnVpbGRUcmVlIiwiYXBpVXJsIiwicHJvcHMiLCJ1cmwiLCJlbXBsb3llZSIsIm5hbWUiLCJ0aXRsZSIsInJhbmsiLCJzdXBlcnZpc29yIiwidW5kZWZpbmVkIiwicmVxIiwicXVlcnkiLCJkYiIsImVtcGxveWVlSWQiLCJpZCIsIm1vZGVsIiwiZmluZEJ5SWQiLCJkYXRhIiwic3VwZXJ2aXNvcklkIiwic3VwZXJEYXRhIiwiZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBQW1CLEFBQXdCOztBQUNwRCxBQUFTLEFBQWlCOzs7Ozs7O0FBRTFCLElBQU0sU0FBTixBQUFlOzs7Ozs7Ozs7Ozs7OzZCQStCTixBQUNQOzZCQUNJLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUEvQyxBQUF3RDtvQkFBeEQ7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx3Q0FBYSxLQUFLLEtBQUEsQUFBSyxNQUF4QixBQUE4QixLQUFLLE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFwRCxBQUE2RCxNQUFNLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFyRixBQUE4RixPQUFPLE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUF0SCxBQUErSCxNQUFNLFlBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUE1SixBQUEwSztvQkFBMUs7c0JBRkYsQUFFRTtBQUFBOztpQkFGRjthQURKLEFBQ0ksQUFnQkg7QUFoQkc7Ozs7OztZQTlCNEIsQSxXQUFBLEE7WUFBSyxBLGFBQUEsQTs7Ozs7Ozs7cUIsQUFDL0I7OztBQUNFOztBLDhCLEFBQWEsQUFDVDtBLHFCLEFBQU8sSUFBUCxBQUNGLEE7QSw4QkFBYSxNLEFBQU07O3VCQUNOLEdBQUEsQUFBRyxNQUFILEFBQVMsWUFBVCxBQUFxQixTQUFyQixBLEFBQThCOzttQkFBM0M7QSxpQ0FDQTtBLDRCQUFXLHNDQUFBLEFBQWlCLEE7O3NCQUM5QixTQUFRLE1BQUEsQUFBSyxpQixBQUFpQjs7Ozs7O3VCQUVSLEdBQUEsQUFBRyxNQUFILEFBQVMsWUFBVCxBQUFxQixTQUFTLE1BQTlCLEFBQW1DLEE7O21CQUFyRDtBLHFDQUNOOzs4QkFBYSxzQ0FBYixBQUFhLEFBQWlCO2lEQUN2QixFQUFFLFVBQUYsV0FBWSxZQUFaLEE7OztpREFFRixFQUFFLFVBQUYsV0FBWSxZLEFBQVo7O21CQUVMO0EsNkIsQUFBYSxBQUNYO0EsNkJBQWEsTUFBTSxBOzt1QkFDRixnQkFBQSxBQUFNLElBQU4sQUFBYSx3QkFBYixBQUFnQyxBOzs7aUNBQS9DO0EsNkIsQUFBQSxBQUNGO0EsMkJBQVcsQTs7c0JBQ2IsUUFBUSxLQUFBLEFBQUssaUJBQWlCLEE7Ozs7Ozt1QkFDUixnQkFBQSxBQUFNLElBQU4sQUFBYSx3QkFBbUIsS0FBaEMsQUFBcUMsQTs7bUJBQXZEO0Esc0NBQ047OzZCQUFhLFdBQWIsQUFBdUI7aURBQ2hCLEVBQUUsVUFBRixVQUFZLFlBQVosQTs7O2lEQUVGLEVBQUUsVUFBRixVQUFZLFlBQVosQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpCa0IsZ0JBQU0sQSIsImZpbGUiOiJlbXBsb3llZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9