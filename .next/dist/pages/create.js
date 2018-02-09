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
          lineNumber: 30
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props.employee, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement(_EmployeeForm2.default, { employee: this.props.employee, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '1432081285',
        css: 'body{background:#FFF;font-size:1rem;font-family:menlo,Helvetica;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NyZWF0ZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQzRCLEFBRzZCLGdCQUNELGVBRWYsNEJBQVksWUFDSCxTQUNDLFVBQ1oiLCJmaWxlIjoicGFnZXMvY3JlYXRlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtcGxveWVlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0VtcGxveWVlRm9ybSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBzaGFwZUVtcGxveWVlc091dCwgc2hhcGVFbXBsb3llZU91dCB9IGZyb20gJy4uL2FwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyJztcclxuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xyXG5cclxuXHJcbmNvbnN0IGFwaVVybCA9ICcvYXBpJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEsIHF1ZXJ5IH0pIHtcclxuICAgIGlmIChyZXEpIHtcclxuICAgICAgY29uc3QgeyBkYiB9ID0gcmVxO1xyXG4gICAgICBjb25zdCBlbXBsb3llZUlkID0gcXVlcnkuaWQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdRVUVSWSBJRCBTU1InLCBlbXBsb3llZUlkKVxyXG4gICAgICBjb25zdCBlbXBsb3llZURhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kQnlJZChlbXBsb3llZUlkKTtcclxuICAgICAgY29uc3QgZW1wbG95ZWUgPSBzaGFwZUVtcGxveWVlT3V0KGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlbXBsb3llZSwgJ0VNUExPWUVFJylcclxuICAgICAgcmV0dXJuIHsgZW1wbG95ZWUgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGVtcGxveWVlSWQgPSBxdWVyeS5pZDtcclxuICAgIGNvbnNvbGUubG9nKHF1ZXJ5LmlkKTtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaVVybH0vZW1wbG95ZWUvJHtlbXBsb3llZUlkfWApO1xyXG4gICAgY29uc29sZS5sb2coJ0RBVEEnLCBkYXRhKTtcclxuICAgIGNvbnN0IGVtcGxveWVlID0gZGF0YTtcclxuICAgIHJldHVybiB7IGVtcGxveWVlIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSB0aXRsZT17dGhpcy5wcm9wcy5lbXBsb3llZX0gLz5cclxuICAgICAgICA8RW1wbG95ZWVGb3JtIGVtcGxveWVlPXt0aGlzLnByb3BzLmVtcGxveWVlfSAvPlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPiB7YFxyXG4gICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1lbmxvLCBIZWx2ZXRpY2FcclxuICAgICAgICAgICAgY29sb3I6ICNmc2ZmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=pages/create.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            query = _ref.query;

        var db, _employeeId, employeeData, _employee, employeeId, _ref3, data, employee;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 10;
                  break;
                }

                db = req.db;
                _employeeId = query.id;

                console.log('QUERY ID SSR', _employeeId);
                _context.next = 6;
                return db.model('Employee').findById(_employeeId);

              case 6:
                employeeData = _context.sent;
                _employee = (0, _employeeShaper.shapeEmployeeOut)(data);

                console.log(_employee, 'EMPLOYEE');
                return _context.abrupt('return', { employee: _employee });

              case 10:
                employeeId = query.id;

                console.log(query.id);
                _context.next = 14;
                return _axios2.default.get(apiUrl + '/employee/' + employeeId);

              case 14:
                _ref3 = _context.sent;
                data = _ref3.data;

                console.log('DATA', data);
                employee = data;
                return _context.abrupt('return', { employee: employee });

              case 19:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NyZWF0ZS5qcyJdLCJuYW1lcyI6WyJFbXBsb3llZUZvcm0iLCJIZWFkZXIiLCJheGlvcyIsInNoYXBlRW1wbG95ZWVzT3V0Iiwic2hhcGVFbXBsb3llZU91dCIsImJ1aWxkVHJlZSIsImFwaVVybCIsInByb3BzIiwidXJsIiwiZW1wbG95ZWUiLCJyZXEiLCJxdWVyeSIsImRiIiwiZW1wbG95ZWVJZCIsImlkIiwiY29uc29sZSIsImxvZyIsIm1vZGVsIiwiZmluZEJ5SWQiLCJlbXBsb3llZURhdGEiLCJkYXRhIiwiZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBQW1CLEFBQXdCOztBQUNwRCxBQUFTLEFBQWlCOzs7Ozs7O0FBRzFCLElBQU0sU0FBTixBQUFlOzs7Ozs7Ozs7Ozs7OzZCQW9CSixBQUNQOzZCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBQSxBQUFLLE1BQXpDLEFBQStDO29CQUEvQztzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHdDQUFhLFVBQVUsS0FBQSxBQUFLLE1BQTdCLEFBQW1DO29CQUFuQztzQkFGRixBQUVFO0FBQUE7O2lCQUZGO2FBREYsQUFDRSxBQWdCSDtBQWhCRzs7Ozs7O1lBbkIyQixBLFcsQUFBQTtZLEFBQUssYUFBQSxBOzs7Ozs7OztxQixBQUM5Qjs7O0FBQ007O0EscUIsQUFBTyxJLEFBQVAsQUFDRjtBLDhCQUFhLE0sQUFBTSxBQUN6Qjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksZ0JBQVosQUFBNEI7O3VCQUNELEdBQUEsQUFBRyxNQUFILEFBQVMsWUFBVCxBQUFxQixTLEFBQXJCLEFBQThCOzttQkFBbkQ7QSx3Q0FDQTtBLDRCQUFXLHNDQUFBLEFBQWlCLEFBQ2xDLEE7O3dCQUFBLEFBQVEsSUFBUixBQUFZLFdBQVosQUFBc0I7aURBQ2YsRUFBRSxVQUFGLEE7O21CQUVIO0EsNkJBQWEsTUFBTSxBLEFBQ3pCOzt3QkFBQSxBQUFRLElBQUksTUFBWixBQUFrQjs7dUJBQ0ssZ0JBQUEsQUFBTSxJQUFOLEFBQWEsd0JBQWIsQUFBZ0MsQTs7O2lDQUEvQztBLDZCLEFBQUEsQUFDUjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksUUFBWixBQUFvQixBQUNkO0EsMkJBQVcsQTtpREFDVixFQUFFLFVBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhCa0IsZ0JBQU0sQSIsImZpbGUiOiJjcmVhdGUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==