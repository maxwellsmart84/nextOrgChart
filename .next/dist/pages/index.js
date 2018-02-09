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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _Tree = require('../components/Tree');

var _Tree2 = _interopRequireDefault(_Tree);

var _EmployeeForm = require('../components/EmployeeForm');

var _EmployeeForm2 = _interopRequireDefault(_EmployeeForm);

var _employeeShaper = require('../api/shapers/employeeShaper');

var _utility = require('../api/utility');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/pages/index.js?entry';


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
        className: 'jsx-3978792948',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3978792948',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_Header2.default, { url: this.props.url, title: this.props, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), this.props.treeData && _react2.default.createElement('div', { id: 'tree', className: 'jsx-3978792948',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_Tree2.default, { url: this.props.url, data: this.props.treeData, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })), !this.props.treeData && _react2.default.createElement('div', {
        className: 'jsx-3978792948',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_EmployeeForm2.default, { employee: '', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '3978792948',
        css: '#tree{padding-top:20px;}body{background:#FFF;font-size:1rem;font-family:menlo,Helvetica;color:#fsff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDeUIsQUFJUSxBQUVtQixnQkFDRCxDQUhqQixjQUtFLDRCQUFZLFlBQ0gsU0FDQyxVQUNaIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBUcmVlIGZyb20gJy4uL2NvbXBvbmVudHMvVHJlZSc7XG5pbXBvcnQgRW1wbG95ZWVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvRW1wbG95ZWVGb3JtJztcbmltcG9ydCB7IHNoYXBlRW1wbG95ZWVzT3V0IH0gZnJvbSAnLi4vYXBpL3NoYXBlcnMvZW1wbG95ZWVTaGFwZXInO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi4vYXBpL3V0aWxpdHknO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IGFwaVVybCA9ICcvYXBpJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIGlmIChyZXEpIHtcbiAgICAgIGNvbnN0IHsgZGIgfSA9IHJlcTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5tb2RlbCgnRW1wbG95ZWUnKS5maW5kKHt9KTtcbiAgICAgIGNvbnN0IGVtcGxveWVlcyA9IHNoYXBlRW1wbG95ZWVzT3V0KGRhdGEpO1xuICAgICAgY29uc3QgdHJlZURhdGEgPSBidWlsZFRyZWUoZW1wbG95ZWVzKVswXTtcbiAgICAgIHJldHVybiB7IHRyZWVEYXRhLCBlbXBsb3llZXMgfTtcbiAgICB9XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpVXJsfS9lbXBsb3llZWApO1xuICAgIGNvbnN0IGVtcGxveWVlcyA9IFsuLi5kYXRhXVxuICAgIGNvbnN0IHRyZWVEYXRhID0gYnVpbGRUcmVlKGVtcGxveWVlcylbMF07XG4gICAgcmV0dXJuIHsgdHJlZURhdGEsIGVtcGxveWVlcyB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkZXIgdXJsPXt0aGlzLnByb3BzLnVybH0gdGl0bGU9e3RoaXMucHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy50cmVlRGF0YSAmJlxuICAgICAgICA8ZGl2IGlkPVwidHJlZVwiPlxuICAgICAgICAgIDxUcmVlIHVybD17dGhpcy5wcm9wcy51cmx9IGRhdGE9e3RoaXMucHJvcHMudHJlZURhdGF9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHshdGhpcy5wcm9wcy50cmVlRGF0YSAmJlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxFbXBsb3llZUZvcm0gZW1wbG95ZWU9eycnfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgI3RyZWUge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1lbmxvLCBIZWx2ZXRpY2FcbiAgICAgICAgICBjb2xvcjogI2ZzZmY7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;

        var db, _data, _employees, _treeData, _ref3, data, employees, treeData;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 8;
                  break;
                }

                db = req.db;
                _context.next = 4;
                return db.model('Employee').find({});

              case 4:
                _data = _context.sent;
                _employees = (0, _employeeShaper.shapeEmployeesOut)(_data);
                _treeData = (0, _utility.buildTree)(_employees)[0];
                return _context.abrupt('return', { treeData: _treeData, employees: _employees });

              case 8:
                _context.next = 10;
                return _axios2.default.get(apiUrl + '/employee');

              case 10:
                _ref3 = _context.sent;
                data = _ref3.data;
                employees = [].concat((0, _toConsumableArray3.default)(data));
                treeData = (0, _utility.buildTree)(employees)[0];
                return _context.abrupt('return', { treeData: treeData, employees: employees });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkZXIiLCJheGlvcyIsIlRyZWUiLCJFbXBsb3llZUZvcm0iLCJzaGFwZUVtcGxveWVlc091dCIsImJ1aWxkVHJlZSIsIlJvdXRlciIsImFwaVVybCIsInByb3BzIiwidXJsIiwidHJlZURhdGEiLCJyZXEiLCJkYiIsIm1vZGVsIiwiZmluZCIsImRhdGEiLCJlbXBsb3llZXMiLCJnZXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQVMsQUFBeUI7O0FBQ2xDLEFBQVMsQUFBaUI7O0FBQzFCLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sU0FBTixBQUFlOzs7Ozs7Ozs7Ozs7OzZCQWlCSixBQUNQOzZCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxrQ0FBTyxLQUFLLEtBQUEsQUFBSyxNQUFsQixBQUF3QixLQUFLLE9BQU8sS0FBcEMsQUFBeUM7b0JBQXpDO3NCQUZKLEFBQ0UsQUFDRSxBQUVEO0FBRkM7Z0JBRUQsQUFBSyxNQUFMLEFBQVcsNEJBQ1osY0FBQSxTQUFLLElBQUwsQUFBUSxtQkFBUjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyxnQ0FBSyxLQUFLLEtBQUEsQUFBSyxNQUFoQixBQUFzQixLQUFLLE1BQU0sS0FBQSxBQUFLLE1BQXRDLEFBQTRDO29CQUE1QztzQkFOSixBQUtFLEFBQ0UsQUFHRDtBQUhDO1lBR0EsS0FBQSxBQUFLLE1BQU4sQUFBWSw0QkFDYixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsd0NBQWEsVUFBZCxBQUF3QjtvQkFBeEI7c0JBWEosQUFVRSxBQUNFO0FBQUE7O2lCQVhKO2FBREYsQUFDRSxBQTZCSDtBQTdCRzs7Ozs7O1ksQUFoQjJCLFcsQUFBQTs7Ozs7Ozs7cUJBQ3pCLEE7OztBQUNNOztBLHFCQUFPLEEsSUFBUCxBOzt1QkFDVyxHQUFBLEFBQUcsTUFBSCxBQUFTLFlBQVQsQUFBcUIsSyxBQUFyQixBQUEwQjs7bUJBQXZDO0EsaUNBQ0E7QSw2QkFBWSx1Q0FBQSxBQUFrQixBLEFBQzlCO0EsNEJBQVcsd0JBQUEsQUFBVSxZLEFBQVYsQUFBcUI7aURBQy9CLEVBQUUsVUFBRixXQUFZLFdBQVosQTs7Ozt1QkFFYyxnQkFBQSxBQUFNLElBQU4sQUFBYSxTOzs7aUNBQTVCO0EsNkJBQUEsQSxBQUNGO0EsdUUsQUFBZ0IsQUFDaEI7QSwyQkFBVyx3QkFBQSxBQUFVLFdBQVcsQSxBQUFyQjtpREFDVixFQUFFLFVBQUYsVUFBWSxXQUFaLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFaa0IsZ0JBQU0sQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9