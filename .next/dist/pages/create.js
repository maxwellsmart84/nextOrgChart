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
          lineNumber: 27
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props.supervisor.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_EmployeeForm2.default, { supervisor: this.props.supervisor, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3557637588',
        css: 'body{background:#FFF;font:1rem menlo;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NyZWF0ZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QjRCLEFBRzZCLGdCQUNBLGdCQUNKLFlBQ0gsU0FDQyxVQUNaIiwiZmlsZSI6InBhZ2VzL2NyZWF0ZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbXBsb3llZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9FbXBsb3llZUZvcm0nO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgc2hhcGVFbXBsb3llZXNPdXQsIHNoYXBlRW1wbG95ZWVPdXQgfSBmcm9tICcuLi9hcGkvc2hhcGVycy9lbXBsb3llZVNoYXBlcic7XHJcbmltcG9ydCB7IGJ1aWxkVHJlZSB9IGZyb20gJy4uL2FwaS91dGlsaXR5JztcclxuXHJcblxyXG5jb25zdCBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCBxdWVyeSB9KSB7XHJcbiAgICBpZiAocmVxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTRVJWRVIgR0VUIEVNUCBQQUdFJyk7XHJcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcclxuICAgICAgY29uc3Qgc3VwZXJ2aXNvcklkID0gcXVlcnkuaWQ7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kQnlJZChzdXBlcnZpc29ySWQpO1xyXG4gICAgICBjb25zdCBzdXBlcnZpc29yID0gc2hhcGVFbXBsb3llZU91dChkYXRhKTtcclxuICAgICAgcmV0dXJuIHsgc3VwZXJ2aXNvciB9O1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3VwZXJ2aXNvcklkID0gcXVlcnkuaWQ7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlVcmx9L2VtcGxveWVlLyR7c3VwZXJ2aXNvcklkfWApO1xyXG4gICAgY29uc3Qgc3VwZXJ2aXNvciA9IGRhdGE7XHJcbiAgICByZXR1cm4geyBzdXBlcnZpc29yIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRlciB1cmw9e3RoaXMucHJvcHMudXJsfSB0aXRsZT17dGhpcy5wcm9wcy5zdXBlcnZpc29yLm5hbWV9IC8+XHJcbiAgICAgICAgPEVtcGxveWVlRm9ybSBzdXBlcnZpc29yPXt0aGlzLnByb3BzLnN1cGVydmlzb3J9IC8+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+IHtgXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgICAgICAgICAgZm9udDogMXJlbSBtZW5sbztcclxuICAgICAgICAgICAgY29sb3I6ICNmc2ZmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=pages/create.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            query = _ref.query;

        var db, _supervisorId, _data, _supervisor, supervisorId, _ref3, data, supervisor;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 9;
                  break;
                }

                console.log('SERVER GET EMP PAGE');
                db = req.db;
                _supervisorId = query.id;
                _context.next = 6;
                return db.model('Employee').findById(_supervisorId);

              case 6:
                _data = _context.sent;
                _supervisor = (0, _employeeShaper.shapeEmployeeOut)(_data);
                return _context.abrupt('return', { supervisor: _supervisor });

              case 9:
                supervisorId = query.id;
                _context.next = 12;
                return _axios2.default.get(apiUrl + '/employee/' + supervisorId);

              case 12:
                _ref3 = _context.sent;
                data = _ref3.data;
                supervisor = data;
                return _context.abrupt('return', { supervisor: supervisor });

              case 16:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NyZWF0ZS5qcyJdLCJuYW1lcyI6WyJFbXBsb3llZUZvcm0iLCJIZWFkZXIiLCJheGlvcyIsInNoYXBlRW1wbG95ZWVzT3V0Iiwic2hhcGVFbXBsb3llZU91dCIsImJ1aWxkVHJlZSIsImFwaVVybCIsInByb3BzIiwidXJsIiwic3VwZXJ2aXNvciIsIm5hbWUiLCJyZXEiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkYiIsInN1cGVydmlzb3JJZCIsImlkIiwibW9kZWwiLCJmaW5kQnlJZCIsImRhdGEiLCJnZXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQVMsQUFBbUIsQUFBd0I7O0FBQ3BELEFBQVMsQUFBaUI7Ozs7Ozs7QUFHMUIsSUFBTSxTQUFOLEFBQWU7Ozs7Ozs7Ozs7Ozs7NkJBaUJKLEFBQ1A7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLGtDQUFPLEtBQUssS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEtBQUssT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQS9DLEFBQTBEO29CQUExRDtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHdDQUFhLFlBQVksS0FBQSxBQUFLLE1BQS9CLEFBQXFDO29CQUFyQztzQkFGRixBQUVFO0FBQUE7O2lCQUZGO2FBREYsQUFDRSxBQWVIO0FBZkc7Ozs7OztZLEFBaEIyQixXLEFBQUE7WSxBQUFLLGFBQUEsQTs7Ozs7Ozs7cUJBQzlCLEE7OztBQUNGOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNKO0EscUJBQU8sQSxJLEFBQVAsQUFDRjtBLGdDQUFlLE1BQU0sQTs7dUJBQ1IsR0FBQSxBQUFHLE1BQUgsQUFBUyxZQUFULEFBQXFCLFNBQXJCLEFBQThCLEE7O21CQUEzQztBLGlDQUNBO0EsOEJBQWEsc0NBQWlCLEEsQUFBakI7aURBQ1osRUFBRSxZQUFGLEE7O21CQUVIO0EsK0JBQWUsTUFBTSxBOzt1QkFDSixnQkFBQSxBQUFNLElBQU4sQUFBYSx3QkFBYixBLEFBQWdDOzs7aUNBQS9DO0EsNkJBQUEsQSxBQUNGO0EsNkJBQWEsQTtpREFDWixFQUFFLFlBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWJrQixnQkFBTSxBIiwiZmlsZSI6ImNyZWF0ZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9