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
                _context.next = 15;
                break;

              case 5:
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank, title = _this$state.title, makeSupervisor = _this$state.makeSupervisor;
                payload = {
                  name: name,
                  rank: makeSupervisor ? _this.props.rank : rank,
                  title: title,
                  //either make them the supervisor of the employee they clicked the box next to or inherit the existing and make them a worker
                  supervisorId: makeSupervisor ? _this.props.supervisorId : _this.props.id
                };
                _context.next = 9;
                return _axios2.default.post(apiUrl + '/employee', payload);

              case 9:
                _ref2 = _context.sent;
                data = _ref2.data;

                if (!makeSupervisor) {
                  _context.next = 14;
                  break;
                }

                _context.next = 14;
                return _axios2.default.patch(apiUrl + '/employee/' + _this.props.id, { supervisorId: data.id });

              case 14:
                _this.setState({ saveCall: true });

              case 15:
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
      rank: props.rank + 1,
      title: '',
      makeSupervisor: false,
      saveCall: false,
      nameInvalid: false,
      isNotOwner: props.supervisorId !== 'None'
    };
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
            lineNumber: 76
          }
        }, 'Name Required');
      }
      if (dataSaved) {
        savedText = _react2.default.createElement('p', { id: 'saved', __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, 'Employee Information Updated');
      }
      var supervisorHeader = _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, 'Employee will be added under: ', this.props.name);
      if (isMakeSupervisor) {
        supervisorHeader = _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, 'Employee will be made supervisor of: ', this.props.name);
      }
      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Add Employee'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, supervisorHeader, _react2.default.createElement('label', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Name: ', this.state.name)), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', defaultValue: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, nameError), _react2.default.createElement('label', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'Title: ', this.state.title), _react2.default.createElement('input', { name: 'title', placeholder: 'Title', type: 'text', value: this.state.title, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      })), !this.state.makeSupervisor && _react2.default.createElement('label', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, 'Rank: ', this.state.rank), _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.rank, max: '99', placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })), this.state.isNotOwner && _react2.default.createElement('div', { id: 'checkboxBlock', className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, 'Make New Supervisor'), _react2.default.createElement('input', { name: 'makeSupervisor', type: 'checkbox', checked: !!this.state.makeSupervisor, onClick: function onClick(event) {
          return _this3.handleClick(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, 'SAVE'), savedText)), _react2.default.createElement(_style2.default, {
        styleId: '231620494',
        css: '.error{color:red;font-size:.8em;padding-left:2px;}#saved{color:limegreen;padding-left:20px;}#checkboxBlock{display:block;width:40%;padding-bottom:40px;}#checkboxBloc h3{display:inline;margin-right:10px;}input[type=checkbox]{display:inline-block;}#formContainer{width:100%;padding-bottom:5%;margin-left:20%;margin-right:20%;}input{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}button{background-color:black;cursor:pointer;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}button:hover{background-color:#79589F;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFIMkIsQUFHb0IsQUFNVCxBQUdjLEFBTWQsQUFJSCxBQUVjLEFBTUQsQUFNWSxBQUdDLEFBV0UsVUE5Q1gsQUEyQkksQ0FOQSxHQVpULENBTVosQ0FWcUIsS0FhcEIsQ0FlQSxDQUdpQixDQTFCSyxDQVRKLEFBOENsQixHQW5CZSxDQU5HLElBUGxCLENBVEEsSUErQmMsR0FSVSxDQTNCeEIsRUFTQSxDQVltQixLQWVMLFlBZGQsQUFlb0IsQ0FUcEIsaUJBVW9CLGtCQUNHLHFCQUNBLHFCQUNOLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IGFwaVVybCA9ICcvYXBpJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICByYW5rOiBwcm9wcy5yYW5rICsgMSxcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBtYWtlU3VwZXJ2aXNvcjogZmFsc2UsXHJcbiAgICAgIHNhdmVDYWxsOiBmYWxzZSxcclxuICAgICAgbmFtZUludmFsaWQ6IGZhbHNlLFxyXG4gICAgICBpc05vdE93bmVyOiBwcm9wcy5zdXBlcnZpc29ySWQgIT09ICdOb25lJyxcclxuICAgIH1cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuc3VwZXJ2aXNvciAhPT0gdW5kZWZpbmVkIHx8ICdOb25lJykge1xyXG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTm90T3duZXI6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAobmV4dFByb3BzLm5hbWUgIT09IHRoaXMuc3RhdGUubmFtZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogbmV4dFByb3BzLm5hbWUgfSlcclxuICAgIH1cclxuICAgIGlmIChuZXh0UHJvcHMudGl0bGUgIT09IHRoaXMuc3RhdGUudGl0bGUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBuZXh0UHJvcHMudGl0bGUgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbWFrZVN1cGVydmlzb3I6IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubmFtZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuc3RhdGUubmFtZSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWVJbnZhbGlkOiB0cnVlIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgcmFuaywgdGl0bGUsIG1ha2VTdXBlcnZpc29yIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgcmFuazogbWFrZVN1cGVydmlzb3IgPyB0aGlzLnByb3BzLnJhbmsgOiByYW5rLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIC8vZWl0aGVyIG1ha2UgdGhlbSB0aGUgc3VwZXJ2aXNvciBvZiB0aGUgZW1wbG95ZWUgdGhleSBjbGlja2VkIHRoZSBib3ggbmV4dCB0byBvciBpbmhlcml0IHRoZSBleGlzdGluZyBhbmQgbWFrZSB0aGVtIGEgd29ya2VyXHJcbiAgICAgICAgc3VwZXJ2aXNvcklkOiBtYWtlU3VwZXJ2aXNvciA/IHRoaXMucHJvcHMuc3VwZXJ2aXNvcklkIDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YXBpVXJsfS9lbXBsb3llZWAsIHBheWxvYWQpO1xyXG4gICAgICBpZiAobWFrZVN1cGVydmlzb3IpIHtcclxuICAgICAgICBhd2FpdCBheGlvcy5wYXRjaChgJHthcGlVcmx9L2VtcGxveWVlLyR7dGhpcy5wcm9wcy5pZH1gLCB7IHN1cGVydmlzb3JJZDogZGF0YS5pZCB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2F2ZUNhbGw6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpc01ha2VTdXBlcnZpc29yID0gdGhpcy5zdGF0ZS5tYWtlU3VwZXJ2aXNvcjtcclxuICAgIGNvbnN0IGRhdGFTYXZlZCA9IHRoaXMuc3RhdGUuc2F2ZUNhbGw7XHJcbiAgICBsZXQgc2F2ZWRUZXh0ID0gbnVsbDtcclxuICAgIGxldCBuYW1lRXJyb3IgPSBudWxsO1xyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLm5hbWVJbnZhbGlkKSB7XHJcbiAgICAgIG5hbWVFcnJvciA9IDxzcGFuIGNsYXNzTmFtZT1cImVycm9yXCI+TmFtZSBSZXF1aXJlZDwvc3Bhbj5cclxuICAgIH1cclxuICAgIGlmIChkYXRhU2F2ZWQpIHtcclxuICAgICAgc2F2ZWRUZXh0ID0gPHAgaWQ9XCJzYXZlZFwiPkVtcGxveWVlIEluZm9ybWF0aW9uIFVwZGF0ZWQ8L3A+XHJcbiAgICB9XHJcbiAgICBsZXQgc3VwZXJ2aXNvckhlYWRlciA9IDxoMz5FbXBsb3llZSB3aWxsIGJlIGFkZGVkIHVuZGVyOiB7dGhpcy5wcm9wcy5uYW1lfTwvaDM+XHJcbiAgICBpZiAoaXNNYWtlU3VwZXJ2aXNvcikge1xyXG4gICAgICBzdXBlcnZpc29ySGVhZGVyID0gPGgzPkVtcGxveWVlIHdpbGwgYmUgbWFkZSBzdXBlcnZpc29yIG9mOiB7dGhpcy5wcm9wcy5uYW1lfTwvaDM+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cImZvcm1Db250YWluZXJcIj5cclxuICAgICAgICA8aDE+QWRkIEVtcGxveWVlPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAge3N1cGVydmlzb3JIZWFkZXJ9XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5OYW1lOiB7dGhpcy5zdGF0ZS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtuYW1lRXJyb3J9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGgzPlRpdGxlOiB7dGhpcy5zdGF0ZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgeyF0aGlzLnN0YXRlLm1ha2VTdXBlcnZpc29yICYmXHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5SYW5rOiB7dGhpcy5zdGF0ZS5yYW5rfTwvaDM+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicmFua1wiIHR5cGU9XCJudW1iZXJcIiBtaW49e3RoaXMucHJvcHMucmFua30gbWF4PVwiOTlcIiBwbGFjZWhvbGRlcj1cIlJhbmtcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yYW5rfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTm90T3duZXIgJiZcclxuICAgICAgICAgICAgPGRpdiBpZD1cImNoZWNrYm94QmxvY2tcIj5cclxuICAgICAgICAgICAgICA8aDM+TWFrZSBOZXcgU3VwZXJ2aXNvcjwvaDM+XHJcbiAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJtYWtlU3VwZXJ2aXNvclwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9eyEhdGhpcy5zdGF0ZS5tYWtlU3VwZXJ2aXNvcn0gb25DbGljaz17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDbGljayhldmVudCl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSl9PlNBVkU8L2J1dHRvbj5cclxuICAgICAgICAgICAge3NhdmVkVGV4dH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgICBmb250LXNpemU6LjhlbTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdCAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNzYXZlZCB7XHJcbiAgICAgICAgICBjb2xvcjpsaW1lZ3JlZW5cclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2NoZWNrYm94QmxvY2sge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDo0MCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2NoZWNrYm94QmxvYyBoMyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmVcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgICAgICB9XHJcbiAgICAgICAgI2Zvcm1Db250YWluZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzU1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTg5RjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=components/EmployeeForm.js */'
      }));
    }
  }]);

  return EmployeeForm;
}(_react2.default.Component);

exports.default = EmployeeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiYXBpVXJsIiwiRW1wbG95ZWVGb3JtIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDbGljayIsIm1ha2VTdXBlcnZpc29yIiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsInN0YXRlIiwidW5kZWZpbmVkIiwibmFtZUludmFsaWQiLCJyYW5rIiwidGl0bGUiLCJwYXlsb2FkIiwic3VwZXJ2aXNvcklkIiwiaWQiLCJwb3N0IiwiZGF0YSIsInBhdGNoIiwic2F2ZUNhbGwiLCJpc05vdE93bmVyIiwiYmluZCIsIm5leHRQcm9wcyIsInN1cGVydmlzb3IiLCJpc01ha2VTdXBlcnZpc29yIiwiZGF0YVNhdmVkIiwic2F2ZWRUZXh0IiwibmFtZUVycm9yIiwic3VwZXJ2aXNvckhlYWRlciIsImUiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7Ozs7OztBQUdQLElBQU0sU0FBTixBQUFlOztJQUdNLEE7d0NBQ25COzt3QkFBQSxBQUFZLE9BQU87aUJBQUE7O3dDQUFBOztrSkFBQSxBQUNYOztVQURXLEFBNEJuQixlQUFlLFVBQUEsQUFBQyxPQUFVLEFBQ3hCO1lBQUEsQUFBTSxBQUNOO1lBQUEsQUFBSywyQ0FDRixNQUFBLEFBQU0sT0FEVCxBQUNnQixNQUFPLE1BQUEsQUFBTSxPQUQ3QixBQUNvQyxBQUVyQztBQWpDa0I7O1VBQUEsQUFtQ25CLGNBQWMsVUFBQSxBQUFDLE9BQVUsQUFDdkI7WUFBQSxBQUFLLFNBQVMsRUFBRSxnQkFBZ0IsTUFBQSxBQUFNLE9BQXRDLEFBQWMsQUFBK0IsQUFDOUM7QUFyQ2tCOztVQUFBLEFBdUNu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QixpREFBTyxNQUFQLEFBQVksU0FBUSxhQUFwQixBQUFnQyxTQUFRLE1BQXhDLEFBQTZDLFFBQU8sT0FBTyxLQUFBLEFBQUssTUFBaEUsQUFBc0UsT0FBTyxVQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxhQUFkLEFBQVMsQUFBa0I7QUFBbEgsc0JBQUE7O29CQUFBO3NCQVhKLEFBU0UsQUFFRSxBQUVEO0FBRkM7WUFFQSxLQUFBLEFBQUssTUFBTixBQUFZLGtDQUNiLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVcsZUFBQSxBQUFLLE1BRGxCLEFBQ0UsQUFBc0IsQUFDdEIsZ0RBQU8sTUFBUCxBQUFZLFFBQU8sTUFBbkIsQUFBd0IsVUFBUyxLQUFLLEtBQUEsQUFBSyxNQUEzQyxBQUFpRCxNQUFNLEtBQXZELEFBQTJELE1BQUssYUFBaEUsQUFBNEUsUUFBTyxPQUFPLEtBQUEsQUFBSyxNQUEvRixBQUFxRyxNQUFNLFVBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLGFBQWQsQUFBUyxBQUFrQjtBQUFoSixzQkFBQTs7b0JBQUE7c0JBaEJKLEFBY0UsQUFFRSxBQUdEO0FBSEM7Z0JBR0QsQUFBSyxNQUFMLEFBQVcsOEJBQ1YsY0FBQSxTQUFLLElBQUwsQUFBUSw0QkFBUjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGlFQUFPLE1BQVAsQUFBWSxrQkFBaUIsTUFBN0IsQUFBa0MsWUFBVyxTQUFTLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0QsQUFBbUUsZ0JBQWdCLFNBQVMsd0JBQUE7aUJBQVMsT0FBQSxBQUFLLFlBQWQsQUFBUyxBQUFpQjtBQUF0SCxzQkFBQTs7b0JBQUE7c0JBdEJOLEFBb0JJLEFBRUUsQUFHSjtBQUhJOzJCQUdKLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsWUFBUSxTQUFTLGlCQUFBLEFBQUMsR0FBRDtpQkFBTyxPQUFBLEFBQUssYUFBWixBQUFPLEFBQWtCO0FBQTFDLHNCQUFBOztvQkFBQTtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNDLFNBN0JQLEFBRUUsQUF5QkU7aUJBM0JKO2FBREYsQUFDRSxBQXVGSDtBQXZGRzs7Ozs7RUE5RW9DLGdCQUFNLEE7O2tCQUEzQixBIiwiZmlsZSI6IkVtcGxveWVlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9