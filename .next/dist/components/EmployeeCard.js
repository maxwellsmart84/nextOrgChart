'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeCard.js';


var apiUrl = 'http://localhost:3000/api';

var EmployeeCard = function (_React$Component) {
  (0, _inherits3.default)(EmployeeCard, _React$Component);

  function EmployeeCard(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, EmployeeCard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EmployeeCard.__proto__ || (0, _getPrototypeOf2.default)(EmployeeCard)).call(this, props));

    _this.handleChange = function (event) {
      event.preventDefault();
      _this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    };

    _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var _this$state, name, rank, payload;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank;
                payload = {
                  name: name || undefined,
                  rank: rank || undefined
                };

                console.log('PAYLOAD', payload);
                _context.next = 6;
                return _axios2.default.patch(apiUrl + '/employee/' + _this.props.url.query.id, payload);

              case 6:
                alert('Employee Updated');

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    if (props.supervisor === undefined || props.supervisor === null) {
      props.supervisor === 'None';
    }
    _this.state = {
      name: props.name,
      rank: props.rank
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EmployeeCard, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Edit Employee'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('h2', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Name:'), _react2.default.createElement('h3', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.state.name), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Rank: ', this.state.rank)), _react2.default.createElement('label', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.supervisor.rank, max: '100', placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })), _react2.default.createElement('h2', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Supervisor:'), _react2.default.createElement('h3', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.props.supervisor ? this.props.supervisor.name : 'None'), _react2.default.createElement('div', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'SUBMIT'))), _react2.default.createElement(_style2.default, {
        styleId: '167554734',
        css: 'a{text-decoration:none;color:black;}#formContainer{width:100%;border:black;border-style:solid;padding-bottom:5%;padding-left:30%;}input{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEeUIsQUFHOEIsQUFJVixBQU9ELEFBTVksVUFMSixDQVBMLFVBSGhCLENBZ0JDLEVBWnFCLElBT04sS0FYZixRQVl3QixFQVBKLGtCQUNELEVBT25CLGVBTkEiLCJmaWxlIjoiY29tcG9uZW50cy9FbXBsb3llZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGlmIChwcm9wcy5zdXBlcnZpc29yID09PSB1bmRlZmluZWQgfHwgcHJvcHMuc3VwZXJ2aXNvciA9PT0gbnVsbCkge1xuICAgICAgcHJvcHMuc3VwZXJ2aXNvciA9PT0gJ05vbmUnO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgIHJhbms6IHByb3BzLnJhbmssXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KVxuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBuYW1lLCByYW5rIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBuYW1lOiBuYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgIHJhbms6IHJhbmsgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnUEFZTE9BRCcsIHBheWxvYWQpXG4gICAgYXdhaXQgYXhpb3MucGF0Y2goYCR7YXBpVXJsfS9lbXBsb3llZS8ke3RoaXMucHJvcHMudXJsLnF1ZXJ5LmlkfWAsIHBheWxvYWQpXG4gICAgYWxlcnQoJ0VtcGxveWVlIFVwZGF0ZWQnKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImZvcm1Db250YWluZXJcIj5cbiAgICAgIDxoMT5FZGl0IEVtcGxveWVlPC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aDI+TmFtZTo8L2gyPlxuICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlJhbms6IHt0aGlzLnN0YXRlLnJhbmt9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicmFua1wiIHR5cGU9XCJudW1iZXJcIiBtaW49e3RoaXMucHJvcHMuc3VwZXJ2aXNvci5yYW5rfSBtYXg9XCIxMDBcIiBwbGFjZWhvbGRlcj1cIlJhbmtcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yYW5rfSBvbkNoYW5nZT17ZXZlbnQ9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxoMj5TdXBlcnZpc29yOjwvaDI+XG4gICAgICAgICAgPGgzPnsgdGhpcy5wcm9wcy5zdXBlcnZpc29yID8gdGhpcy5wcm9wcy5zdXBlcnZpc29yLm5hbWUgOiAnTm9uZSd9PC9oMz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlKX0+U1VCTUlUPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibGFja1xuICAgICAgfVxuICAgICAgI2Zvcm1Db250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBibGFjaztcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgICAgIH1cbiAgICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNTU1O1xuICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=components/EmployeeCard.js */'
      }));
    }
  }]);

  return EmployeeCard;
}(_react2.default.Component);

exports.default = EmployeeCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiTGluayIsImFwaVVybCIsIkVtcGxveWVlQ2FyZCIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic3RhdGUiLCJyYW5rIiwicGF5bG9hZCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJwYXRjaCIsInVybCIsInF1ZXJ5IiwiaWQiLCJhbGVydCIsInN1cGVydmlzb3IiLCJiaW5kIiwiZSIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sU0FBTixBQUFlOztJLEFBRU07d0NBQ25COzt3QkFBQSxBQUFZLE9BQU87aUJBQUE7O3dDQUFBOztrSkFBQSxBQUNYOztVQURXLEFBYW5CLGVBQWUsVUFBQSxBQUFDLE9BQVUsQUFDeEI7WUFBQSxBQUFNLEFBQ047WUFBQSxBQUFLLDJDQUNGLE1BQUEsQUFBTSxPQURULEFBQ2dCLE1BQU8sTUFBQSxBQUFNLE9BRDdCLEFBQ29DLEFBRXJDO0FBbEJrQjs7VUFBQSxBQW9CbkIsMkJBcEJtQjswRkFvQkosaUJBQUEsQUFBTyxPQUFQO3FDQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFDYjtzQkFEYSxBQUNiLEFBQU07OEJBQ2lCLE1BRlYsQUFFZSxPQUZmLEFBRUwsbUJBRkssQUFFTCxNQUZLLEFBRUMsbUJBRkQsQUFFQyxBQUNSO0FBSE87d0JBSUwsUUFEUSxBQUNBLEFBQ2Q7d0JBQU0sUUFMSyxBQUdHLEFBRUEsQUFFaEI7QUFKZ0IsQUFDZDs7d0JBR0YsQUFBUSxJQUFSLEFBQVksV0FQQyxBQU9iLEFBQXVCO2dDQVBW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