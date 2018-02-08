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
                  rank: makeSupervisor ? _this.props.employee.rank - 1 : rank,
                  title: title,
                  //either make them the supervisor of the employee they clicked the box next to or inherit the existing and make them a worker
                  supervisorId: makeSupervisor ? _this.props.employee.supervisorId : _this.props.employee.id
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
      rank: _this.props.employee.rank + 1,
      title: '',
      employee: _this.props.employee,
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
          lineNumber: 53
        }
      }, 'Employee will be added under: ', this.state.employee.name);
      if (isMakeSupervisor) {
        supervisorHeader = null;
      }
      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Add Employee'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, supervisorHeader, _react2.default.createElement('label', {
        className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Name: ', this.state.name), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Title: ', this.state.title), _react2.default.createElement('input', { name: 'title', placeholder: 'Title', type: 'text', value: this.state.title, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Rank:', this.state.rank), _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.employee.rank, max: '99', placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })), _react2.default.createElement('div', { id: 'checkboxBlock', className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Make New Supervisor'), _react2.default.createElement('input', { name: 'makeSupervisor', type: 'checkbox', checked: !!this.state.makeSupervisor, onClick: function onClick(event) {
          return _this3.handleClick(event);
        }, className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-1788534606',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'SAVE'))), _react2.default.createElement(_style2.default, {
        styleId: '1788534606',
        css: '#checkboxBlock{display:block;width:40%;padding-bottom:40px;padding-top:20px;}#checkboxBloc h3{display:inline;margin-right:10px;}input[type=checkbox]{display:inline-block;}#formContainer{width:100%;padding-bottom:5%;margin-left:20%;margin-right:20%;}input{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}button{background-color:black;margin-left:10%;cursor:pointer;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGMkIsQUFHeUIsQUFPZCxBQUlILEFBRWMsQUFNRCxBQU1ZLEFBSXRCLFVBVGtCLENBTkEsR0FiVCxDQU9aLE1BR0MsQ0FlQSxDQUdrQixDQTNCSSxJQW1CUCxDQU5HLElBUGxCLE1Bc0JpQixFQVJPLEdBbkJMLENBYUEsU0FlTCxPQTNCZCxDQWFBLENBTUEsR0FTYyxZQUNNLGtCQUNBLGtCQUNHLHFCQUNBLHFCQUNOLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IGFwaVVybCA9ICcvYXBpJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICByYW5rOiB0aGlzLnByb3BzLmVtcGxveWVlLnJhbmsgKyAxLFxyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICAgIGVtcGxveWVlOiB0aGlzLnByb3BzLmVtcGxveWVlLFxyXG4gICAgICBtYWtlU3VwZXJ2aXNvcjogZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuY2hlY2tlZClcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtYWtlU3VwZXJ2aXNvcjogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7IG5hbWUsIHJhbmssIG1ha2VTdXBlcnZpc29yIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgcmFuazogbWFrZVN1cGVydmlzb3IgPyB0aGlzLnByb3BzLmVtcGxveWVlLnJhbmsgLTEgOiByYW5rLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgLy9laXRoZXIgbWFrZSB0aGVtIHRoZSBzdXBlcnZpc29yIG9mIHRoZSBlbXBsb3llZSB0aGV5IGNsaWNrZWQgdGhlIGJveCBuZXh0IHRvIG9yIGluaGVyaXQgdGhlIGV4aXN0aW5nIGFuZCBtYWtlIHRoZW0gYSB3b3JrZXJcclxuICAgICAgc3VwZXJ2aXNvcklkOiBtYWtlU3VwZXJ2aXNvciA/IHRoaXMucHJvcHMuZW1wbG95ZWUuc3VwZXJ2aXNvcklkIDogdGhpcy5wcm9wcy5lbXBsb3llZS5pZCxcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHBheWxvYWQpXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YXBpVXJsfS9lbXBsb3llZWAsIHBheWxvYWQpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpc01ha2VTdXBlcnZpc29yID0gdGhpcy5zdGF0ZS5tYWtlU3VwZXJ2aXNvcjtcclxuICAgIGxldCBzdXBlcnZpc29ySGVhZGVyID0gPGgzPkVtcGxveWVlIHdpbGwgYmUgYWRkZWQgdW5kZXI6IHt0aGlzLnN0YXRlLmVtcGxveWVlLm5hbWV9PC9oMz5cclxuICAgIGlmIChpc01ha2VTdXBlcnZpc29yKSB7XHJcbiAgICAgIHN1cGVydmlzb3JIZWFkZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cImZvcm1Db250YWluZXJcIj5cclxuICAgICAgICA8aDE+QWRkIEVtcGxveWVlPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAge3N1cGVydmlzb3JIZWFkZXJ9XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5OYW1lOiB7dGhpcy5zdGF0ZS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5UaXRsZToge3RoaXMuc3RhdGUudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGgzPlJhbms6e3RoaXMuc3RhdGUucmFua308L2gzPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInJhbmtcIiB0eXBlPVwibnVtYmVyXCIgbWluPXt0aGlzLnByb3BzLmVtcGxveWVlLnJhbmt9IG1heD1cIjk5XCIgcGxhY2Vob2xkZXI9XCJSYW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFua30gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY2hlY2tib3hCbG9ja1wiPlxyXG4gICAgICAgICAgICA8aDM+TWFrZSBOZXcgU3VwZXJ2aXNvcjwvaDM+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibWFrZVN1cGVydmlzb3JcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXshIXRoaXMuc3RhdGUubWFrZVN1cGVydmlzb3J9IG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2xpY2soZXZlbnQpfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlKX0+U0FWRTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgI2NoZWNrYm94QmxvY2sge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDo0MCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjY2hlY2tib3hCbG9jIGgzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZVxyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgICAgIH1cclxuICAgICAgICAjZm9ybUNvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNTU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=components/EmployeeForm.js */'
      }));
    }
  }]);

  return EmployeeForm;
}(_react2.default.Component);

exports.default = EmployeeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiYXBpVXJsIiwiRW1wbG95ZWVGb3JtIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJjaGVja2VkIiwibWFrZVN1cGVydmlzb3IiLCJoYW5kbGVTdWJtaXQiLCJzdGF0ZSIsInJhbmsiLCJwYXlsb2FkIiwiZW1wbG95ZWUiLCJ0aXRsZSIsInN1cGVydmlzb3JJZCIsImlkIiwicG9zdCIsImRhdGEiLCJiaW5kIiwiaXNNYWtlU3VwZXJ2aXNvciIsInN1cGVydmlzb3JIZWFkZXIiLCJlIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7Ozs7Ozs7QUFHUCxJQUFNLFNBQU4sQUFBZTs7SSxBQUdNO3dDQUNuQjs7d0JBQUEsQUFBWSxPQUFPO2lCQUFBOzt3Q0FBQTs7a0pBQUEsQUFDWDs7VUFEVyxBQWdCbkIsZUFBZSxVQUFBLEFBQUMsT0FBVSxBQUN4QjtZQUFBLEFBQU0sQUFDTjtZQUFBLEFBQUssMkNBQ0YsTUFBQSxBQUFNLE9BRFQsQUFDZ0IsTUFBTyxNQUFBLEFBQU0sT0FEN0IsQUFDb0MsQUFFckM7QUFyQmtCOztVQUFBLEFBdUJuQixjQUFjLFVBQUEsQUFBQyxPQUFVLEFBQ3ZCO2NBQUEsQUFBUSxJQUFJLE1BQUEsQUFBTSxPQUFsQixBQUF5QixBQUN6QjtZQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFnQixNQUFBLEFBQU0sT0FBdEMsQUFBYyxBQUErQixBQUM5QztBQTFCa0I7O1VBQUEsQUE0Qm5CLDJCQTVCbUI7MEZBNEJKLGlCQUFBLEFBQU8sT0FBUDtxRUFBQTs7c0VBQUE7b0JB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