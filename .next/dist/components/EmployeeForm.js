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
      _this.setState({ makeSupervisor: event.target.checked });
    };

    _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var _this$state, name, rank, title, makeSupervisor, payload, _ref2, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank, title = _this$state.title, makeSupervisor = _this$state.makeSupervisor;
                payload = {
                  name: name,
                  rank: makeSupervisor ? _this.props.employee.rank - 1 : rank,
                  title: title,
                  //either make them the supervisor of the employee they clicked the box next to or inherit the existing and make them a worker
                  supervisorId: makeSupervisor ? _this.props.employee.supervisorId : _this.props.employee.id
                };
                _context.next = 5;
                return _axios2.default.post(apiUrl + '/employee', payload);

              case 5:
                _ref2 = _context.sent;
                data = _ref2.data;

                _this.setState({ saveCall: true });

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
      makeSupervisor: false,
      saveCall: false,
      isNotOwner: _this.props.employee.supervisorId !== 'None'
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
      var dataSaved = this.state.saveCall;
      var savedText = null;

      if (dataSaved) {
        savedText = _react2.default.createElement('span', { id: 'saved', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, 'Employee Information Updated');
      }
      var supervisorHeader = _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Employee will be added under: ', this.state.employee.name);
      if (isMakeSupervisor) {
        supervisorHeader = _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, 'Employee will be made supervisor of: ', this.state.employee.name);
      }
      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Add Employee'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, supervisorHeader, _react2.default.createElement('label', {
        className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Name: ', this.state.name), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Title: ', this.state.title), _react2.default.createElement('input', { name: 'title', placeholder: 'Title', type: 'text', value: this.state.title, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Rank:', this.state.rank), _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.employee.rank, max: '99', placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), this.state.isNotOwner && _react2.default.createElement('div', { id: 'checkboxBlock', className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Make New Supervisor'), _react2.default.createElement('input', { name: 'makeSupervisor', type: 'checkbox', checked: !!this.state.makeSupervisor, onClick: function onClick(event) {
          return _this3.handleClick(event);
        }, className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-3976796364',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, 'SAVE'), savedText)), _react2.default.createElement(_style2.default, {
        styleId: '3976796364',
        css: '#saved{color:limegreen;padding-left:20px;}#checkboxBlock{display:block;width:40%;padding-bottom:40px;padding-top:20px;}#checkboxBloc h3{display:inline;margin-right:10px;}input[type=checkbox]{display:inline-block;}#formContainer{width:100%;padding-bottom:5%;margin-left:20%;margin-right:20%;}input{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}button{background-color:black;cursor:pointer;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}button:hover{background-color:#79589F;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJGMkIsQUFJVyxBQUdjLEFBT2QsQUFJSCxBQUVjLEFBTUQsQUFNWSxBQUdDLEFBV0UsVUFuQlAsQ0FOQSxHQWJULENBT1osQ0FYcUIsS0FjcEIsQ0FlQSxDQUdpQixDQTNCSyxDQXNDdEIsR0FuQmUsQ0FORyxJQVBsQixDQVZBLElBZ0NjLEdBUlUsR0FuQkwsQ0FhQSxLQWVMLFdBM0JkLENBYUEsQUFlb0IsQ0FUcEIsaUJBVW9CLGtCQUNHLHFCQUNBLHFCQUNOLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IGFwaVVybCA9ICcvYXBpJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICByYW5rOiB0aGlzLnByb3BzLmVtcGxveWVlLnJhbmsgKyAxLFxyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICAgIGVtcGxveWVlOiB0aGlzLnByb3BzLmVtcGxveWVlLFxyXG4gICAgICBtYWtlU3VwZXJ2aXNvcjogZmFsc2UsXHJcbiAgICAgIHNhdmVDYWxsOiBmYWxzZSxcclxuICAgICAgaXNOb3RPd25lcjogdGhpcy5wcm9wcy5lbXBsb3llZS5zdXBlcnZpc29ySWQgIT09ICdOb25lJyxcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbWFrZVN1cGVydmlzb3I6IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgeyBuYW1lLCByYW5rLCB0aXRsZSwgbWFrZVN1cGVydmlzb3IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICByYW5rOiBtYWtlU3VwZXJ2aXNvciA/IHRoaXMucHJvcHMuZW1wbG95ZWUucmFuayAtMSA6IHJhbmssXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICAvL2VpdGhlciBtYWtlIHRoZW0gdGhlIHN1cGVydmlzb3Igb2YgdGhlIGVtcGxveWVlIHRoZXkgY2xpY2tlZCB0aGUgYm94IG5leHQgdG8gb3IgaW5oZXJpdCB0aGUgZXhpc3RpbmcgYW5kIG1ha2UgdGhlbSBhIHdvcmtlclxyXG4gICAgICBzdXBlcnZpc29ySWQ6IG1ha2VTdXBlcnZpc29yID8gdGhpcy5wcm9wcy5lbXBsb3llZS5zdXBlcnZpc29ySWQgOiB0aGlzLnByb3BzLmVtcGxveWVlLmlkLFxyXG4gICAgfVxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAke2FwaVVybH0vZW1wbG95ZWVgLCBwYXlsb2FkKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQ2FsbDogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGlzTWFrZVN1cGVydmlzb3IgPSB0aGlzLnN0YXRlLm1ha2VTdXBlcnZpc29yO1xyXG4gICAgY29uc3QgZGF0YVNhdmVkID0gdGhpcy5zdGF0ZS5zYXZlQ2FsbDtcclxuICAgIGxldCBzYXZlZFRleHQgPSBudWxsO1xyXG5cclxuICAgIGlmIChkYXRhU2F2ZWQpIHtcclxuICAgICAgc2F2ZWRUZXh0ID0gPHNwYW4gaWQ9XCJzYXZlZFwiPkVtcGxveWVlIEluZm9ybWF0aW9uIFVwZGF0ZWQ8L3NwYW4+XHJcbiAgICB9XHJcbiAgICBsZXQgc3VwZXJ2aXNvckhlYWRlciA9IDxoMz5FbXBsb3llZSB3aWxsIGJlIGFkZGVkIHVuZGVyOiB7dGhpcy5zdGF0ZS5lbXBsb3llZS5uYW1lfTwvaDM+XHJcbiAgICBpZiAoaXNNYWtlU3VwZXJ2aXNvcikge1xyXG4gICAgICBzdXBlcnZpc29ySGVhZGVyID0gPGgzPkVtcGxveWVlIHdpbGwgYmUgbWFkZSBzdXBlcnZpc29yIG9mOiB7dGhpcy5zdGF0ZS5lbXBsb3llZS5uYW1lfTwvaDM+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cImZvcm1Db250YWluZXJcIj5cclxuICAgICAgICA8aDE+QWRkIEVtcGxveWVlPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAge3N1cGVydmlzb3JIZWFkZXJ9XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5OYW1lOiB7dGhpcy5zdGF0ZS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5UaXRsZToge3RoaXMuc3RhdGUudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGgzPlJhbms6e3RoaXMuc3RhdGUucmFua308L2gzPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInJhbmtcIiB0eXBlPVwibnVtYmVyXCIgbWluPXt0aGlzLnByb3BzLmVtcGxveWVlLnJhbmt9IG1heD1cIjk5XCIgcGxhY2Vob2xkZXI9XCJSYW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFua30gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5pc05vdE93bmVyICYmXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGVja2JveEJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgPGgzPk1ha2UgTmV3IFN1cGVydmlzb3I8L2gzPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibWFrZVN1cGVydmlzb3JcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXshIXRoaXMuc3RhdGUubWFrZVN1cGVydmlzb3J9IG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2xpY2soZXZlbnQpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlU3VibWl0KGUpfT5TQVZFPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtzYXZlZFRleHR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAjc2F2ZWQge1xyXG4gICAgICAgICAgY29sb3I6bGltZWdyZWVuXHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjaGVja2JveEJsb2NrIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6NDAlO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2NoZWNrYm94QmxvYyBoMyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmVcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgICAgICB9XHJcbiAgICAgICAgI2Zvcm1Db250YWluZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzU1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTg5RjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=components/EmployeeForm.js */'
      }));
    }
  }]);

  return EmployeeForm;
}(_react2.default.Component);

exports.default = EmployeeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiYXBpVXJsIiwiRW1wbG95ZWVGb3JtIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDbGljayIsIm1ha2VTdXBlcnZpc29yIiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsInN0YXRlIiwicmFuayIsInRpdGxlIiwicGF5bG9hZCIsImVtcGxveWVlIiwic3VwZXJ2aXNvcklkIiwiaWQiLCJwb3N0IiwiZGF0YSIsInNhdmVDYWxsIiwiaXNOb3RPd25lciIsImNvbnNvbGUiLCJsb2ciLCJiaW5kIiwiaXNNYWtlU3VwZXJ2aXNvciIsImRhdGFTYXZlZCIsInNhdmVkVGV4dCIsInN1cGVydmlzb3JIZWFkZXIiLCJlIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7Ozs7Ozs7QUFHUCxJQUFNLFNBQU4sQUFBZTs7SUFHTSxBO3dDQUNuQjs7d0JBQUEsQUFBWSxPQUFPO2lCQUFBOzt3Q0FBQTs7a0pBQUEsQUFDWDs7VUFEVyxBQWtCbkIsZUFBZSxVQUFBLEFBQUMsT0FBVSxBQUN4QjtZQUFBLEFBQU0sQUFDTjtZQUFBLEFBQUssMkNBQ0YsTUFBQSxBQUFNLE9BRFQsQUFDZ0IsTUFBTyxNQUFBLEFBQU0sT0FEN0IsQUFDb0MsQUFFckM7QUF2QmtCOztVQUFBLEFBeUJuQixjQUFjLFVBQUEsQUFBQyxPQUFVLEFBQ3ZCO1lBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWdCLE1BQUEsQUFBTSxPQUF0QyxBQUFjLEFBQStCLEFBQzlDO0FBM0JrQjs7VUFBQSxBQTZCbkIsMkJBN0JtQjswRkE2QkosaUJBQUEsQUFBTyxPQUFQOzRFQUFBOztzRUFB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QUFDLEtBQUEsQUFBSyxNQUE3RCxBQUFtRSxnQkFBZ0IsU0FBUyx3QkFBQTtpQkFBUyxPQUFBLEFBQUssWUFBZCxBQUFTLEFBQWlCO0FBQXRILHNCQUFBOztvQkFBQTtzQkFqQk4sQUFlSSxBQUVFLEFBR0o7QUFISTsyQkFHSixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFlBQVEsU0FBUyxpQkFBQSxBQUFDLEdBQUQ7aUJBQU8sT0FBQSxBQUFLLGFBQVosQUFBTyxBQUFrQjtBQUExQyxzQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQyxTQXhCUCxBQUVFLEFBb0JFO2lCQXRCSjthQURGLEFBQ0UsQUE4RUg7QUE5RUc7Ozs7O0VBekRvQyxnQkFBTSxBOztrQkFBM0IsQSIsImZpbGUiOiJFbXBsb3llZUZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==