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

var _EmployeeForm = require('../components/EmployeeForm');

var _EmployeeForm2 = _interopRequireDefault(_EmployeeForm);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _employeeShaper = require('../api/shapers/employeeShaper');

var _utility = require('../api/utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/create.js?entry';


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
          lineNumber: 26
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props.employee.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(_EmployeeForm2.default, { employee: this.props.employee, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3557637588',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NyZWF0ZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QjRCLEFBRzZCLGdCQUNBLGdCQUNKLFlBQ0gsU0FDQyxVQUNaIiwiZmlsZSI6InBhZ2VzL2NyZWF0ZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbXBsb3llZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9FbXBsb3llZUZvcm0nO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgc2hhcGVFbXBsb3llZXNPdXQsIHNoYXBlRW1wbG95ZWVPdXQgfSBmcm9tICcuLi9hcGkvc2hhcGVycy9lbXBsb3llZVNoYXBlcic7XHJcbmltcG9ydCB7IGJ1aWxkVHJlZSB9IGZyb20gJy4uL2FwaS91dGlsaXR5JztcclxuXHJcblxyXG5jb25zdCBhcGlVcmwgPSAnL2FwaSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCBxdWVyeSB9KSB7XHJcbiAgICBpZiAocmVxKSB7XHJcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcclxuICAgICAgY29uc3QgZW1wbG95ZWVJZCA9IHF1ZXJ5LmlkO1xyXG4gICAgICBjb25zdCBlbXBsb3llZSA9IGF3YWl0IGRiLm1vZGVsKCdFbXBsb3llZScpLmZpbmRCeUlkKGVtcGxveWVlSWQpO1xyXG4gICAgICBjb25zdCBzdXBlcnZpc29yID0gc2hhcGVFbXBsb3llZU91dChkYXRhKTtcclxuICAgICAgcmV0dXJuIHsgZW1wbG95ZWUgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGVtcGxveWVlSWQgPSBxdWVyeS5pZDtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaVVybH0vZW1wbG95ZWUvJHtlbXBsb3llZUlkfWApO1xyXG4gICAgY29uc3QgZW1wbG95ZWUgPSBkYXRhO1xyXG4gICAgcmV0dXJuIHsgZW1wbG95ZWUgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyIHVybD17dGhpcy5wcm9wcy51cmx9IHRpdGxlPXt0aGlzLnByb3BzLmVtcGxveWVlLm5hbWV9IC8+XHJcbiAgICAgICAgPEVtcGxveWVlRm9ybSBlbXBsb3llZT17dGhpcy5wcm9wcy5lbXBsb3llZX0gLz5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD4ge2BcclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICAgICAgICBmb250OiAxcmVtIG1lbmxvO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZzZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=pages/create.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            query = _ref.query;

        var db, _employeeId, _employee, supervisor, employeeId, _ref3, data, employee;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 8;
                  break;
                }

                db = req.db;
                _employeeId = query.id;
                _context.next = 5;
                return db.model('Employee').findById(_employeeId);

              case 5:
                _employee = _context.sent;
                supervisor = (0, _employeeShaper.shapeEmployeeOut)(data);
                return _context.abrupt('return', { employee: _employee });

              case 8:
                employeeId = query.id;
                _context.next = 11;
                return _axios2.default.get(apiUrl + '/employee/' + employeeId);

              case 11:
                _ref3 = _context.sent;
                data = _ref3.data;
                employee = data;
                return _context.abrupt('return', { employee: employee });

              case 15:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NyZWF0ZS5qcyJdLCJuYW1lcyI6WyJFbXBsb3llZUZvcm0iLCJIZWFkZXIiLCJheGlvcyIsInNoYXBlRW1wbG95ZWVzT3V0Iiwic2hhcGVFbXBsb3llZU91dCIsImJ1aWxkVHJlZSIsImFwaVVybCIsInByb3BzIiwidXJsIiwiZW1wbG95ZWUiLCJuYW1lIiwicmVxIiwicXVlcnkiLCJkYiIsImVtcGxveWVlSWQiLCJpZCIsIm1vZGVsIiwiZmluZEJ5SWQiLCJzdXBlcnZpc29yIiwiZGF0YSIsImdldCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFtQixBQUF3Qjs7QUFDcEQsQUFBUyxBQUFpQjs7Ozs7OztBQUcxQixJQUFNLFNBQU4sQUFBZTs7Ozs7Ozs7Ozs7Ozs2QkFnQkosQUFDUDs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsa0NBQU8sS0FBSyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsS0FBSyxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBL0MsQUFBd0Q7b0JBQXhEO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUMsd0NBQWEsVUFBVSxLQUFBLEFBQUssTUFBN0IsQUFBbUM7b0JBQW5DO3NCQUZGLEFBRUU7QUFBQTs7aUJBRkY7YUFERixBQUNFLEFBZUg7QUFmRzs7Ozs7O1lBZjJCLEEsVyxBQUFBO1ksQUFBSyxhLEFBQUE7Ozs7Ozs7O3FCQUM5QixBOzs7QUFDTTs7QSxxQixBQUFPLElBQ1QsQSxBQURFO0EsOEJBQ1csTSxBQUFNOzt1QkFDRixHQUFBLEFBQUcsTUFBSCxBQUFTLFlBQVQsQUFBcUIsUyxBQUFyQixBQUE4Qjs7bUJBQS9DO0EscUNBQ0E7QSw2QkFBYSxzQ0FBQSxBLEFBQWlCO2lEQUM3QixFQUFFLFVBQUYsQTs7bUJBRUg7QSw2QkFBYSxNLEFBQU07O3VCQUNGLGdCQUFBLEFBQU0sSUFBTixBQUFhLHdCQUFiLEEsQUFBZ0M7OztpQ0FBL0M7QSw2QkFBQSxBLEFBQ0Y7QSwyQkFBVyxBO2lEQUNWLEVBQUUsVUFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBWmtCLGdCQUFNLEEiLCJmaWxlIjoiY3JlYXRlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=