webpackHotUpdate(6,{

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = __webpack_require__(448);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(392);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(422);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4yOTEwODhmYTc4NjNhOTRkZTQwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FbXBsb3llZUZvcm0uanM/YmZiYmY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuY29uc3QgYXBpVXJsID0gJy9hcGknXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1wbG95ZWVGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIHJhbms6IHRoaXMucHJvcHMuc3VwZXJ2aXNvci5yYW5rICsgMSxcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBzdXBlcnZpc29yOiB0aGlzLnByb3BzLnN1cGVydmlzb3IsXHJcbiAgICAgIG1ha2VTdXBlcnZpc29yOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5jaGVja2VkKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1ha2VTdXBlcnZpc29yOiBldmVudC50YXJnZXQuY2hlY2tlZCB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHsgbmFtZSwgcmFuaywgbWFrZVN1cGVydmlzb3IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICByYW5rOiBtYWtlU3VwZXJ2aXNvciA/IHJhbmsgLTEgOiByYW5rLFxyXG4gICAgICAvL2VpdGhlciBtYWtlIHRoZW0gdGhlIHN1cGVydmlzb3Igb2YgdGhlIGVtcGxveWVlIHRoZXkgY2xpY2tlZCB0aGUgYm94IG5leHQgdG8gb3IgaW5oZXJpdCB0aGUgZXhpc3RpbmcgYW5kIG1ha2UgdGhlbSBhIHdvcmtlclxyXG4gICAgICBzdXBlcnZpc29ySWQ6IG1ha2VTdXBlcnZpc29yID8gdGhpcy5wcm9wcy5zdXBlcnZpc29yLnN1cGVydmlzb3JJZCA6IHRoaXMucHJvcHMuc3VwZXJ2aXNvci5pZCxcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHBheWxvYWQpXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YXBpVXJsfS9lbXBsb3llZWAsIHBheWxvYWQpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpc01ha2VTdXBlcnZpc29yID0gdGhpcy5zdGF0ZS5tYWtlU3VwZXJ2aXNvcjtcclxuICAgIGxldCBzdXBlcnZpc29ySGVhZGVyID0gPGgzPkVtcGxveWVlIHdpbGwgYmUgYWRkZWQgdW5kZXI6IHt0aGlzLnN0YXRlLnN1cGVydmlzb3IubmFtZX08L2gzPlxyXG4gICAgaWYgKGlzTWFrZVN1cGVydmlzb3IpIHtcclxuICAgICAgc3VwZXJ2aXNvckhlYWRlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwiZm9ybUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT5BZGQgRW1wbG95ZWU8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICB7c3VwZXJ2aXNvckhlYWRlcn1cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGgzPk5hbWU6IHt0aGlzLnN0YXRlLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGgzPlRpdGxlOiB7dGhpcy5zdGF0ZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICA8aDM+TWFrZSBOZXcgU3VwZXJ2aXNvcjwvaDM+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibWFrZVN1cGVydmlzb3JcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXshIXRoaXMuc3RhdGUubWFrZVN1cGVydmlzb3J9IG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2xpY2soZXZlbnQpfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlKX0+U1VCTUlUPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAuYmxvY2sge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDo0MCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmxvY2sgaDMge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lXHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgI2Zvcm1Db250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzU1NTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0VtcGxveWVlRm9ybS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQWNBO0FBRUE7QUFBQTtBQWxCQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQXpCQTtBQUNBO0FBMkJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBRUE7QUFBQTtBQUhBO0FBQ0E7QUFJQTtBQVRBO0FBVUE7QUFDQTtBQVhBO0FBVUE7QUFWQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUE1QkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFOQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUEyQkE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQkE7QUFnRUE7QUFoRUE7Ozs7O0FBakRBO0FBQ0E7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=