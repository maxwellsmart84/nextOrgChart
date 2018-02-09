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
        className: 'jsx-1432081285',
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
        styleId: '1432081285',
        css: 'body{background:#FFF;font-size:1rem;font-family:menlo,Helvetica;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NyZWF0ZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QjRCLEFBRzZCLGdCQUNELGVBRWYsNEJBQVksWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvY3JlYXRlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtcGxveWVlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0VtcGxveWVlRm9ybSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBzaGFwZUVtcGxveWVlc091dCwgc2hhcGVFbXBsb3llZU91dCB9IGZyb20gJy4uL2FwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyJztcclxuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xyXG5cclxuXHJcbmNvbnN0IGFwaVVybCA9ICcvYXBpJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEsIHF1ZXJ5IH0pIHtcclxuICAgIGlmIChyZXEpIHtcclxuICAgICAgY29uc3QgeyBkYiB9ID0gcmVxO1xyXG4gICAgICBjb25zdCBlbXBsb3llZUlkID0gcXVlcnkuaWQ7XHJcbiAgICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgZGIubW9kZWwoJ0VtcGxveWVlJykuZmluZEJ5SWQoZW1wbG95ZWVJZCk7XHJcbiAgICAgIGNvbnN0IHN1cGVydmlzb3IgPSBzaGFwZUVtcGxveWVlT3V0KGRhdGEpO1xyXG4gICAgICByZXR1cm4geyBlbXBsb3llZSB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgZW1wbG95ZWVJZCA9IHF1ZXJ5LmlkO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpVXJsfS9lbXBsb3llZS8ke2VtcGxveWVlSWR9YCk7XHJcbiAgICBjb25zdCBlbXBsb3llZSA9IGRhdGE7XHJcbiAgICByZXR1cm4geyBlbXBsb3llZSB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkZXIgdXJsPXt0aGlzLnByb3BzLnVybH0gdGl0bGU9e3RoaXMucHJvcHMuZW1wbG95ZWUubmFtZX0gLz5cclxuICAgICAgICA8RW1wbG95ZWVGb3JtIGVtcGxveWVlPXt0aGlzLnByb3BzLmVtcGxveWVlfSAvPlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPiB7YFxyXG4gICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1lbmxvLCBIZWx2ZXRpY2FcclxuICAgICAgICAgICAgY29sb3I6ICNmc2ZmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=pages/create.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NyZWF0ZS5qcyJdLCJuYW1lcyI6WyJFbXBsb3llZUZvcm0iLCJIZWFkZXIiLCJheGlvcyIsInNoYXBlRW1wbG95ZWVzT3V0Iiwic2hhcGVFbXBsb3llZU91dCIsImJ1aWxkVHJlZSIsImFwaVVybCIsInByb3BzIiwidXJsIiwiZW1wbG95ZWUiLCJuYW1lIiwicmVxIiwicXVlcnkiLCJkYiIsImVtcGxveWVlSWQiLCJpZCIsIm1vZGVsIiwiZmluZEJ5SWQiLCJzdXBlcnZpc29yIiwiZGF0YSIsImdldCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFtQixBQUF3Qjs7QUFDcEQsQUFBUyxBQUFpQjs7Ozs7OztBQUcxQixJQUFNLFNBQU4sQUFBZTs7Ozs7Ozs7Ozs7Ozs2QkFnQkosQUFDUDs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsa0NBQU8sS0FBSyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsS0FBSyxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBL0MsQUFBd0Q7b0JBQXhEO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUMsd0NBQWEsVUFBVSxLQUFBLEFBQUssTUFBN0IsQUFBbUM7b0JBQW5DO3NCQUZGLEFBRUU7QUFBQTs7aUJBRkY7YUFERixBQUNFLEFBZ0JIO0FBaEJHOzs7Ozs7WUFmMkIsQSxXLEFBQUE7WSxBQUFLLGEsQUFBQTs7Ozs7Ozs7cUJBQzlCLEE7OztBQUNNOztBLHFCLEFBQU8sSUFDVCxBLEFBREU7QSw4QkFDVyxNLEFBQU07O3VCQUNGLEdBQUEsQUFBRyxNQUFILEFBQVMsWUFBVCxBQUFxQixTLEFBQXJCLEFBQThCOzttQkFBL0M7QSxxQ0FDQTtBLDZCQUFhLHNDQUFBLEEsQUFBaUI7aURBQzdCLEVBQUUsVUFBRixBOzttQkFFSDtBLDZCQUFhLE0sQUFBTTs7dUJBQ0YsZ0JBQUEsQUFBTSxJQUFOLEFBQWEsd0JBQWIsQSxBQUFnQzs7O2lDQUEvQztBLDZCQUFBLEEsQUFDRjtBLDJCQUFXLEE7aURBQ1YsRUFBRSxVQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFaa0IsZ0JBQU0sQSIsImZpbGUiOiJjcmVhdGUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==