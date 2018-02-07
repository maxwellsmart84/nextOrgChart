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

var _EmployeeLink = require('./EmployeeLink');

var _EmployeeLink2 = _interopRequireDefault(_EmployeeLink);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

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
        var _this$state, name, rank, supervisorId, payload, _ref2, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank, supervisorId = _this$state.supervisorId;
                payload = {
                  name: name || undefined,
                  rank: rank || undefined,
                  supervisorId: supervisorId || undefined
                };
                _context.prev = 3;
                _context.next = 6;
                return _axios2.default.patch(apiUrl + '/employee/' + _this.props.url.query.id, payload);

              case 6:
                _ref2 = _context.sent;
                data = _ref2.data;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](3);

                console.log(_context.t0);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 10]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      name: props.name,
      rank: props.rank,
      supervisor: props.supervisor || null
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EmployeeCard, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('h2', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Name:'), _react2.default.createElement('h3', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.state.name), _react2.default.createElement('input', { name: 'name', placeholder: this.props.name, type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('h2', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Rank:'), _react2.default.createElement('h3', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, this.state.rank), _react2.default.createElement('input', { name: 'rank', type: 'text', placeholder: this.props.rank, value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('h2', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Supervisor:'), _react2.default.createElement('select', { name: 'supervisor', type: 'text', placeholder: this.props.supervisorId || 'None', onChange: this.state.supervisor || 'None', className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'SUBMIT'))), _react2.default.createElement(_style2.default, {
        styleId: '876106242',
        css: '#formContainer{width:100%;border:black;border-style:solid;padding-bottom:5%;padding-left:30%;}input[type=text]{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input[type=text]:focus{border:3px solid #555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEeUIsQUFHb0IsQUFPRCxBQU1ZLFVBTEosQ0FQTCxXQWFmLEVBWnFCLElBT04sYUFDUyxFQVBKLGtCQUNELEVBT25CLGVBTkEiLCJmaWxlIjoiY29tcG9uZW50cy9FbXBsb3llZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRW1wbG95ZWVMaW5rIGZyb20gJy4vRW1wbG95ZWVMaW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGFwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbXBsb3llZUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgIHJhbms6IHByb3BzLnJhbmssXG4gICAgICBzdXBlcnZpc29yOiBwcm9wcy5zdXBlcnZpc29yIHx8IG51bGwsXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KVxuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBuYW1lLCByYW5rLCBzdXBlcnZpc29ySWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG5hbWU6IG5hbWUgfHwgdW5kZWZpbmVkLFxuICAgICAgcmFuazogcmFuayB8fCB1bmRlZmluZWQsXG4gICAgICBzdXBlcnZpc29ySWQ6IHN1cGVydmlzb3JJZCB8fCB1bmRlZmluZWQsXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBhdGNoKGAke2FwaVVybH0vZW1wbG95ZWUvJHt0aGlzLnByb3BzLnVybC5xdWVyeS5pZH1gLCBwYXlsb2FkKVxuICAgIH1jYXRjaChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiZm9ybUNvbnRhaW5lclwiPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxoMj5OYW1lOjwvaDI+XG4gICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLm5hbWV9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxoMj5SYW5rOjwvaDI+XG4gICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLnJhbmt9PC9oMz5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicmFua1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucmFua30gdmFsdWU9e3RoaXMuc3RhdGUucmFua30gb25DaGFuZ2U9e2V2ZW50PT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGgyPlN1cGVydmlzb3I6PC9oMj5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInN1cGVydmlzb3JcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnN1cGVydmlzb3JJZCB8fCAnTm9uZSd9IG9uQ2hhbmdlPXt0aGlzLnN0YXRlLnN1cGVydmlzb3IgfHwgJ05vbmUnfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlU3VibWl0KGUpfT5TVUJNSVQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgI2Zvcm1Db250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBibGFjaztcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgICAgIH1cbiAgICAgIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzU1NTtcbiAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=components/EmployeeCard.js */'
      }));
    }
  }]);

  return EmployeeCard;
}(_react2.default.Component);

exports.default = EmployeeCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkVtcGxveWVlTGluayIsImF4aW9zIiwiYXBpVXJsIiwiRW1wbG95ZWVDYXJkIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJzdGF0ZSIsInJhbmsiLCJzdXBlcnZpc29ySWQiLCJwYXlsb2FkIiwidW5kZWZpbmVkIiwicGF0Y2giLCJ1cmwiLCJxdWVyeSIsImlkIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdXBlcnZpc29yIiwiYmluZCIsImUiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFOLEFBQWU7O0ksQUFFTTt3Q0FDbkI7O3dCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7O2tKQUFBLEFBQ1g7O1VBRFcsQUFXbkIsZUFBZSxVQUFBLEFBQUMsT0FBVSxBQUN4QjtZQUFBLEFBQU0sQUFDTjtZQUFBLEFBQUssMkNBQ0YsTUFBQSxBQUFNLE9BRFQsQUFDZ0IsTUFBTyxNQUFBLEFBQU0sT0FEN0IsQUFDb0MsQUFFckM7QUFoQmtCOztVQUFBLEFBa0JuQiwyQkFsQm1COzBGQWtCSixpQkFBQSxBQUFPLE9BQVA7bUVBQUE7O3NFQUFBO29CQUFBOzZDQUFBO21CQUNiO3NCQURhLEFBQ2IsQUFBTTs4QkFDK0IsTUFGeEIsQUFFNkIsT0FGN0IsQUFFTCxtQkFGSyxBQUVMLE1BRkssQUFFQyxtQkFGRCxBQUVDLE1BRkQsQUFFTywyQkFGUCxBQUVPLEFBQ2Q7QUFITzt3QkFJTCxRQURRLEFBQ0EsQUFDZDt3QkFBTSxRQUZRLEFBRUEsQUFDZDtnQ0FBYyxn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