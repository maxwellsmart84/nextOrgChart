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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeForm.js';


var apiUrl = '/api';

var EmployeeForm = function (_React$Component) {
  (0, _inherits3.default)(EmployeeForm, _React$Component);

  function EmployeeForm(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, EmployeeForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EmployeeForm.__proto__ || (0, _getPrototypeOf2.default)(EmployeeForm)).call(this, props));

    _this.handleChange = function (event) {
      event.preventDefault();
      _this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    };

    _this.handleClick = function (event) {
      console.log(event.target.checked);
      _this.setState({ makeSupervisor: event.target.checked });
    };

    _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var _this$state, name, rank, makeSupervisor, payload, _ref2, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank, makeSupervisor = _this$state.makeSupervisor;
                payload = {
                  name: name,
                  rank: makeSupervisor ? rank - 1 : rank,
                  //either make them the supervisor of the employee they clicked the box next to or inherit the existing and make them a worker
                  supervisorId: makeSupervisor ? _this.props.supervisor.supervisorId : _this.props.supervisor.id
                };

                console.log(payload);
                _context.next = 6;
                return _axios2.default.post(apiUrl + '/employee', payload);

              case 6:
                _ref2 = _context.sent;
                data = _ref2.data;

              case 8:
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

    _this.state = {
      name: '',
      rank: _this.props.supervisor.rank + 1,
      title: '',
      supervisor: _this.props.supervisor,
      makeSupervisor: false
    };
    console.log(_this.state);

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EmployeeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var isMakeSupervisor = this.state.makeSupervisor;
      var supervisorHeader = _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Employee will be added under: ', this.state.supervisor.name);
      if (isMakeSupervisor) {
        supervisorHeader = null;
      }
      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-3291298406',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-3291298406',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Add Employee'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-3291298406',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, supervisorHeader, _react2.default.createElement('label', {
        className: 'jsx-3291298406',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-3291298406',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Name: ', this.state.name), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-3291298406',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-3291298406',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-3291298406',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Title: ', this.state.title), _react2.default.createElement('input', { name: 'title', placeholder: 'Title', type: 'text', value: this.state.title, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-3291298406',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3291298406' + ' ' + 'block',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-3291298406',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Make New Supervisor'), _react2.default.createElement('input', { name: 'makeSupervisor', type: 'checkbox', checked: !!this.state.makeSupervisor, onClick: function onClick(event) {
          return _this3.handleClick(event);
        }, className: 'jsx-3291298406',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3291298406',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-3291298406',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'SUBMIT'))), _react2.default.createElement(_style2.default, {
        styleId: '3291298406',
        css: '.block{display:block;width:40%;padding-bottom:40px;padding-top:20px;}.block h3{display:inline;margin-right:10px;}input[type=checkbox]{display:inline-block;}#formContainer{width:100%;padding-bottom:5%;margin-left:20%;margin-right:20%;}input[type=text]{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input[type=text]:focus{border:3px solid #555;}button{background-color:black;border:none;margin-left:10%;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFMkIsQUFHeUIsQUFPZCxBQUlILEFBRWdCLEFBTUQsQUFNWSxBQUl0QixVQVRrQixDQU5BLEdBYlgsQ0FPWixNQUdDLENBZUUsQ0FHYyxDQTNCTSxJQW1CTCxDQU5HLElBUHBCLEVBc0JvQixNQVJNLEdBbkJQLENBYUUsTUFlTCxVQTNCaEIsQ0FhRSxDQU1BLEFBU29CLGtCQUNBLGtCQUNHLHFCQUNBLHFCQUNOLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IGFwaVVybCA9ICcvYXBpJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICByYW5rOiB0aGlzLnByb3BzLnN1cGVydmlzb3IucmFuayArIDEsXHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgc3VwZXJ2aXNvcjogdGhpcy5wcm9wcy5zdXBlcnZpc29yLFxyXG4gICAgICBtYWtlU3VwZXJ2aXNvcjogZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuY2hlY2tlZClcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtYWtlU3VwZXJ2aXNvcjogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7IG5hbWUsIHJhbmssIG1ha2VTdXBlcnZpc29yIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgcmFuazogbWFrZVN1cGVydmlzb3IgPyByYW5rIC0xIDogcmFuayxcclxuICAgICAgLy9laXRoZXIgbWFrZSB0aGVtIHRoZSBzdXBlcnZpc29yIG9mIHRoZSBlbXBsb3llZSB0aGV5IGNsaWNrZWQgdGhlIGJveCBuZXh0IHRvIG9yIGluaGVyaXQgdGhlIGV4aXN0aW5nIGFuZCBtYWtlIHRoZW0gYSB3b3JrZXJcclxuICAgICAgc3VwZXJ2aXNvcklkOiBtYWtlU3VwZXJ2aXNvciA/IHRoaXMucHJvcHMuc3VwZXJ2aXNvci5zdXBlcnZpc29ySWQgOiB0aGlzLnByb3BzLnN1cGVydmlzb3IuaWQsXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhwYXlsb2FkKVxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAke2FwaVVybH0vZW1wbG95ZWVgLCBwYXlsb2FkKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaXNNYWtlU3VwZXJ2aXNvciA9IHRoaXMuc3RhdGUubWFrZVN1cGVydmlzb3I7XHJcbiAgICBsZXQgc3VwZXJ2aXNvckhlYWRlciA9IDxoMz5FbXBsb3llZSB3aWxsIGJlIGFkZGVkIHVuZGVyOiB7dGhpcy5zdGF0ZS5zdXBlcnZpc29yLm5hbWV9PC9oMz5cclxuICAgIGlmIChpc01ha2VTdXBlcnZpc29yKSB7XHJcbiAgICAgIHN1cGVydmlzb3JIZWFkZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cImZvcm1Db250YWluZXJcIj5cclxuICAgICAgICA8aDE+QWRkIEVtcGxveWVlPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAge3N1cGVydmlzb3JIZWFkZXJ9XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5OYW1lOiB7dGhpcy5zdGF0ZS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5UaXRsZToge3RoaXMuc3RhdGUudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgPGgzPk1ha2UgTmV3IFN1cGVydmlzb3I8L2gzPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm1ha2VTdXBlcnZpc29yXCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17ISF0aGlzLnN0YXRlLm1ha2VTdXBlcnZpc29yfSBvbkNsaWNrPXtldmVudCA9PiB0aGlzLmhhbmRsZUNsaWNrKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSl9PlNVQk1JVDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgLmJsb2NrIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6NDAlO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJsb2NrIGgzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZVxyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICNmb3JtQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM1NTU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=components/EmployeeForm.js */'
      }));
    }
  }]);

  return EmployeeForm;
}(_react2.default.Component);

exports.default = EmployeeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiYXBpVXJsIiwiRW1wbG95ZWVGb3JtIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJjaGVja2VkIiwibWFrZVN1cGVydmlzb3IiLCJoYW5kbGVTdWJtaXQiLCJzdGF0ZSIsInJhbmsiLCJwYXlsb2FkIiwic3VwZXJ2aXNvcklkIiwic3VwZXJ2aXNvciIsImlkIiwicG9zdCIsImRhdGEiLCJ0aXRsZSIsImJpbmQiLCJpc01ha2VTdXBlcnZpc29yIiwic3VwZXJ2aXNvckhlYWRlciIsImUiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7Ozs7OztBQUdQLElBQU0sU0FBTixBQUFlOztJQUdNLEE7d0NBQ25COzt3QkFBQSxBQUFZLE9BQU87aUJBQUE7O3dDQUFBOztrSkFBQSxBQUNYOztVQURXLEFBZ0JuQixlQUFlLFVBQUEsQUFBQyxPQUFVLEFBQ3hCO1lBQUEsQUFBTSxBQUNOO1lBQUEsQUFBSywyQ0FDRixNQUFBLEFBQU0sT0FEVCxBQUNnQixNQUFPLE1BQUEsQUFBTSxPQUQ3QixBQUNvQyxBQUVyQztBQXJCa0I7O1VBQUEsQUF1Qm5CLGNBQWMsVUFBQSxBQUFDLE9BQVUsQUFDdkI7Y0FBQSxBQUFRLElBQUksTUFBQSxBQUFNLE9BQWxCLEFBQXlCLEFBQ3pCO1lBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWdCLE1BQUEsQUFBTSxPQUF0QyxBQUFjLEFBQStCLEFBQzlDO0FBMUJrQjs7VUFBQSxBQTRCbkIsMkJBNUJtQjswRkE0QkosaUJBQUEsQUFBTyxPQUFQO3FFQUFBOztzRUFBQTtv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QWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxpRUFBTyxNQUFQLEFBQVksa0JBQWlCLE1BQTdCLEFBQWtDLFlBQVcsU0FBUyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdELEFBQW1FLGdCQUFnQixTQUFTLHdCQUFBO2lCQUFTLE9BQUEsQUFBSyxZQUFkLEFBQVMsQUFBaUI7QUFBdEgsc0JBQUE7O29CQUFBO3NCQVpKLEFBVUUsQUFFRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxZQUFRLFNBQVMsaUJBQUEsQUFBQyxHQUFEO2lCQUFPLE9BQUEsQUFBSyxhQUFaLEFBQU8sQUFBa0I7QUFBMUMsc0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7U0FqQk4sQUFFRSxBQWNFLEFBQ0U7aUJBakJOO2FBREYsQUFDRSxBQWdFSDtBQWhFRzs7Ozs7RUFqRG9DLGdCQUFNLEE7O2tCQUEzQixBIiwiZmlsZSI6IkVtcGxveWVlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9