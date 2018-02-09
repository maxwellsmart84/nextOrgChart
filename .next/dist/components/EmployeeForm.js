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

                if (!(_this.state.name === undefined || _this.state.name === '')) {
                  _context.next = 5;
                  break;
                }

                _this.setState({ nameInvalid: true });
                _context.next = 16;
                break;

              case 5:
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank, title = _this$state.title, makeSupervisor = _this$state.makeSupervisor;
                payload = {
                  name: name,
                  rank: makeSupervisor ? _this.props.employee.rank - 1 : rank,
                  title: title,
                  //either make them the supervisor of the employee they clicked the box next to or inherit the existing and make them a worker
                  supervisorId: makeSupervisor ? _this.props.employee.supervisorId : _this.props.employee.id
                };
                _context.next = 9;
                return _axios2.default.post(apiUrl + '/employee', payload);

              case 9:
                _ref2 = _context.sent;
                data = _ref2.data;

                if (!makeSupervisor) {
                  _context.next = 15;
                  break;
                }

                console.log(_this.props.employee.id);
                _context.next = 15;
                return _axios2.default.patch(apiUrl + '/employee/' + _this.props.employee.id, { supervisorId: data.id });

              case 15:
                _this.setState({ saveCall: true });

              case 16:
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
      name: undefined,
      rank: props.employee.rank + 1 || 0,
      title: '',
      employee: props.employee,
      makeSupervisor: false,
      saveCall: false,
      nameInvalid: false,
      isNotOwner: _this.props.employee.supervisorId !== 'None'
    };
    console.log('PROPS', props);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EmployeeForm, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.supervisor !== undefined || 'None') {
        this.setState({ isNotOwner: true });
      }
      if (nextProps.name !== this.state.name) {
        this.setState({ name: nextProps.name });
      }
      if (nextProps.title !== this.state.title) {
        this.setState({ title: nextProps.title });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var isMakeSupervisor = this.state.makeSupervisor;
      var dataSaved = this.state.saveCall;
      var savedText = null;
      var nameError = null;

      if (this.state.nameInvalid) {
        nameError = _react2.default.createElement('span', { className: 'error', __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, 'Name Required');
      }
      if (dataSaved) {
        savedText = _react2.default.createElement('p', { id: 'saved', __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, 'Employee Information Updated');
      }
      var supervisorHeader = _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'Employee will be added under: ', this.state.employee.name);
      if (isMakeSupervisor) {
        supervisorHeader = _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, 'Employee will be made supervisor of: ', this.state.employee.name);
      }
      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Add Employee'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, supervisorHeader, _react2.default.createElement('label', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Name: ', this.state.name)), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', defaultValue: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, nameError), _react2.default.createElement('label', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, 'Title: ', this.state.title), _react2.default.createElement('input', { name: 'title', placeholder: 'Title', type: 'text', value: this.state.title, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, 'Rank: ', !this.state.makeSupervisor ? this.props.employee.rank - 2 : this.props.employee.rank), !this.state.makeSupervisor && _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.employee.rank, max: '99', placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })), this.state.isNotOwner && _react2.default.createElement('div', { id: 'checkboxBlock', className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, 'Make New Supervisor'), _react2.default.createElement('input', { name: 'makeSupervisor', type: 'checkbox', checked: !!this.state.makeSupervisor, onClick: function onClick(event) {
          return _this3.handleClick(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, 'SAVE'), savedText)), _react2.default.createElement(_style2.default, {
        styleId: '231620494',
        css: '.error{color:red;font-size:.8em;padding-left:2px;}#saved{color:limegreen;padding-left:20px;}#checkboxBlock{display:block;width:40%;padding-bottom:40px;}#checkboxBloc h3{display:inline;margin-right:10px;}input[type=checkbox]{display:inline-block;}#formContainer{width:100%;padding-bottom:5%;margin-left:20%;margin-right:20%;}input{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}button{background-color:black;cursor:pointer;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}button:hover{background-color:#79589F;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIMkIsQUFHb0IsQUFNVCxBQUdjLEFBTWQsQUFJSCxBQUVjLEFBTUQsQUFNWSxBQUdDLEFBV0UsVUE5Q1gsQUEyQkksQ0FOQSxHQVpULENBTVosQ0FWcUIsS0FhcEIsQ0FlQSxDQUdpQixDQTFCSyxDQVRKLEFBOENsQixHQW5CZSxDQU5HLElBUGxCLENBVEEsSUErQmMsR0FSVSxDQTNCeEIsRUFTQSxDQVltQixLQWVMLFlBZGQsQUFlb0IsQ0FUcEIsaUJBVW9CLGtCQUNHLHFCQUNBLHFCQUNOLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IGFwaVVybCA9ICcvYXBpJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6IHVuZGVmaW5lZCxcclxuICAgICAgcmFuazogcHJvcHMuZW1wbG95ZWUucmFuayArIDEgfHwgMCxcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBlbXBsb3llZTogcHJvcHMuZW1wbG95ZWUsXHJcbiAgICAgIG1ha2VTdXBlcnZpc29yOiBmYWxzZSxcclxuICAgICAgc2F2ZUNhbGw6IGZhbHNlLFxyXG4gICAgICBuYW1lSW52YWxpZDogZmFsc2UsXHJcbiAgICAgIGlzTm90T3duZXI6IHRoaXMucHJvcHMuZW1wbG95ZWUuc3VwZXJ2aXNvcklkICE9PSAnTm9uZScsXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnUFJPUFMnLCBwcm9wcylcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuc3VwZXJ2aXNvciAhPT0gdW5kZWZpbmVkIHx8ICdOb25lJykge1xyXG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTm90T3duZXI6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAobmV4dFByb3BzLm5hbWUgIT09IHRoaXMuc3RhdGUubmFtZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogbmV4dFByb3BzLm5hbWUgfSlcclxuICAgIH1cclxuICAgIGlmIChuZXh0UHJvcHMudGl0bGUgIT09IHRoaXMuc3RhdGUudGl0bGUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBuZXh0UHJvcHMudGl0bGUgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbWFrZVN1cGVydmlzb3I6IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubmFtZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuc3RhdGUubmFtZSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWVJbnZhbGlkOiB0cnVlIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgcmFuaywgdGl0bGUsIG1ha2VTdXBlcnZpc29yIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgcmFuazogbWFrZVN1cGVydmlzb3IgPyB0aGlzLnByb3BzLmVtcGxveWVlLnJhbmsgLSAxIDogcmFuayxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICAvL2VpdGhlciBtYWtlIHRoZW0gdGhlIHN1cGVydmlzb3Igb2YgdGhlIGVtcGxveWVlIHRoZXkgY2xpY2tlZCB0aGUgYm94IG5leHQgdG8gb3IgaW5oZXJpdCB0aGUgZXhpc3RpbmcgYW5kIG1ha2UgdGhlbSBhIHdvcmtlclxyXG4gICAgICAgIHN1cGVydmlzb3JJZDogbWFrZVN1cGVydmlzb3IgPyB0aGlzLnByb3BzLmVtcGxveWVlLnN1cGVydmlzb3JJZCA6IHRoaXMucHJvcHMuZW1wbG95ZWUuaWQsXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAke2FwaVVybH0vZW1wbG95ZWVgLCBwYXlsb2FkKTtcclxuICAgICAgaWYgKG1ha2VTdXBlcnZpc29yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5lbXBsb3llZS5pZClcclxuICAgICAgICBhd2FpdCBheGlvcy5wYXRjaChgJHthcGlVcmx9L2VtcGxveWVlLyR7dGhpcy5wcm9wcy5lbXBsb3llZS5pZH1gLCB7IHN1cGVydmlzb3JJZDogZGF0YS5pZCB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2F2ZUNhbGw6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpc01ha2VTdXBlcnZpc29yID0gdGhpcy5zdGF0ZS5tYWtlU3VwZXJ2aXNvcjtcclxuICAgIGNvbnN0IGRhdGFTYXZlZCA9IHRoaXMuc3RhdGUuc2F2ZUNhbGw7XHJcbiAgICBsZXQgc2F2ZWRUZXh0ID0gbnVsbDtcclxuICAgIGxldCBuYW1lRXJyb3IgPSBudWxsO1xyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLm5hbWVJbnZhbGlkKSB7XHJcbiAgICAgIG5hbWVFcnJvciA9IDxzcGFuIGNsYXNzTmFtZT1cImVycm9yXCI+TmFtZSBSZXF1aXJlZDwvc3Bhbj5cclxuICAgIH1cclxuICAgIGlmIChkYXRhU2F2ZWQpIHtcclxuICAgICAgc2F2ZWRUZXh0ID0gPHAgaWQ9XCJzYXZlZFwiPkVtcGxveWVlIEluZm9ybWF0aW9uIFVwZGF0ZWQ8L3A+XHJcbiAgICB9XHJcbiAgICBsZXQgc3VwZXJ2aXNvckhlYWRlciA9IDxoMz5FbXBsb3llZSB3aWxsIGJlIGFkZGVkIHVuZGVyOiB7dGhpcy5zdGF0ZS5lbXBsb3llZS5uYW1lfTwvaDM+XHJcbiAgICBpZiAoaXNNYWtlU3VwZXJ2aXNvcikge1xyXG4gICAgICBzdXBlcnZpc29ySGVhZGVyID0gPGgzPkVtcGxveWVlIHdpbGwgYmUgbWFkZSBzdXBlcnZpc29yIG9mOiB7dGhpcy5zdGF0ZS5lbXBsb3llZS5uYW1lfTwvaDM+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cImZvcm1Db250YWluZXJcIj5cclxuICAgICAgICA8aDE+QWRkIEVtcGxveWVlPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAge3N1cGVydmlzb3JIZWFkZXJ9XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5OYW1lOiB7dGhpcy5zdGF0ZS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtuYW1lRXJyb3J9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGgzPlRpdGxlOiB7dGhpcy5zdGF0ZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8aDM+UmFuazogeyF0aGlzLnN0YXRlLm1ha2VTdXBlcnZpc29yID8gdGhpcy5wcm9wcy5lbXBsb3llZS5yYW5rIC0gMiA6IHRoaXMucHJvcHMuZW1wbG95ZWUucmFua308L2gzPlxyXG4gICAgICAgICAgICB7IXRoaXMuc3RhdGUubWFrZVN1cGVydmlzb3IgJiZcclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJyYW5rXCIgdHlwZT1cIm51bWJlclwiIG1pbj17dGhpcy5wcm9wcy5lbXBsb3llZS5yYW5rfSBtYXg9XCI5OVwiIHBsYWNlaG9sZGVyPVwiUmFua1wiIHZhbHVlPXt0aGlzLnN0YXRlLnJhbmt9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5pc05vdE93bmVyICYmXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGVja2JveEJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgPGgzPk1ha2UgTmV3IFN1cGVydmlzb3I8L2gzPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibWFrZVN1cGVydmlzb3JcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXshIXRoaXMuc3RhdGUubWFrZVN1cGVydmlzb3J9IG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2xpY2soZXZlbnQpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlU3VibWl0KGUpfT5TQVZFPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtzYXZlZFRleHR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAuZXJyb3Ige1xyXG4gICAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICAgICAgZm9udC1zaXplOi44ZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQgMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjc2F2ZWQge1xyXG4gICAgICAgICAgY29sb3I6bGltZWdyZWVuXHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjaGVja2JveEJsb2NrIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6NDAlO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjaGVja2JveEJsb2MgaDMge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lXHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICAgICAgfVxyXG4gICAgICAgICNmb3JtQ29udGFpbmVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM1NTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTU4OUY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=components/EmployeeForm.js */'
      }));
    }
  }]);

  return EmployeeForm;
}(_react2.default.Component);

exports.default = EmployeeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiYXBpVXJsIiwiRW1wbG95ZWVGb3JtIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDbGljayIsIm1ha2VTdXBlcnZpc29yIiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsInN0YXRlIiwidW5kZWZpbmVkIiwibmFtZUludmFsaWQiLCJyYW5rIiwidGl0bGUiLCJwYXlsb2FkIiwiZW1wbG95ZWUiLCJzdXBlcnZpc29ySWQiLCJpZCIsInBvc3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInBhdGNoIiwic2F2ZUNhbGwiLCJpc05vdE93bmVyIiwiYmluZCIsIm5leHRQcm9wcyIsInN1cGVydmlzb3IiLCJpc01ha2VTdXBlcnZpc29yIiwiZGF0YVNhdmVkIiwic2F2ZWRUZXh0IiwibmFtZUVycm9yIiwic3VwZXJ2aXNvckhlYWRlciIsImUiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7Ozs7OztBQUdQLElBQU0sU0FBTixBQUFlOztJLEFBR007d0NBQ25COzt3QkFBQSxBQUFZLE9BQU87aUJBQUE7O3dDQUFBOztrSkFBQSxBQUNYOztVQURXLEFBOEJuQixlQUFlLFVBQUEsQUFBQyxPQUFVLEFBQ3hCO1lBQUEsQUFBTSxBQUNOO1lBQUEsQUFBSywyQ0FDRixNQUFBLEFBQU0sT0FEVCxBQUNnQixNQUFPLE1BQUEsQUFBTSxPQUQ3QixBQUNvQyxBQUVyQztBQW5Da0I7O1VBQUEsQUFxQ25CLGNBQWMsVUFBQSxBQUFDLE9BQVUsQUFDdkI7WUFBQSxBQUFLLFNBQVMsRUFBRSxnQkFBZ0IsTUFBQSxBQUFNLE9BQXRDLEFBQWMsQUFB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RDtBQUhDO09BQUEsU0FHRCxBQUFLLE1BQUwsQUFBVyw4QkFDVixjQUFBLFNBQUssSUFBTCxBQUFRLDRCQUFSOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsaUVBQU8sTUFBUCxBQUFZLGtCQUFpQixNQUE3QixBQUFrQyxZQUFXLFNBQVMsQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3RCxBQUFtRSxnQkFBZ0IsU0FBUyx3QkFBQTtpQkFBUyxPQUFBLEFBQUssWUFBZCxBQUFTLEFBQWlCO0FBQXRILHNCQUFBOztvQkFBQTtzQkF0Qk4sQUFvQkksQUFFRSxBQUdKO0FBSEk7MkJBR0osY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxZQUFRLFNBQVMsaUJBQUEsQUFBQyxHQUFEO2lCQUFPLE9BQUEsQUFBSyxhQUFaLEFBQU8sQUFBa0I7QUFBMUMsc0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0MsU0E3QlAsQUFFRSxBQXlCRTtpQkEzQko7YUFERixBQUNFLEFBdUZIO0FBdkZHOzs7OztFQWpGb0MsZ0JBQU0sQTs7a0JBQTNCLEEiLCJmaWxlIjoiRW1wbG95ZWVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=