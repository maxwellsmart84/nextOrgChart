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
                _context.next = 13;
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

                console.log('SUPERVISOR ID', payload.supervisorId);
                _context.next = 10;
                return _axios2.default.post(apiUrl + '/employee', payload);

              case 10:
                _ref2 = _context.sent;
                data = _ref2.data;

                _this.setState({ saveCall: true });

              case 13:
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
      rank: _this.props.employee.rank + 1 || 0,
      title: '',
      employee: _this.props.employee,
      makeSupervisor: false,
      saveCall: false,
      nameInvalid: false,
      isNotOwner: _this.props.employee.supervisorId !== 'None'
    };

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
      var nameError = null;

      if (this.state.nameInvalid) {
        nameError = _react2.default.createElement('span', { className: 'error', __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, 'Name Required');
      }
      if (dataSaved) {
        savedText = _react2.default.createElement('p', { id: 'saved', __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, 'Employee Information Updated');
      }
      var supervisorHeader = _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Employee will be added under: ', this.state.employee.name);
      if (isMakeSupervisor) {
        supervisorHeader = _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, 'Employee will be made supervisor of: ', this.state.employee.name);
      }
      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Add Employee'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, supervisorHeader, _react2.default.createElement('label', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Name: ', this.state.name), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', defaultValue: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, nameError), _react2.default.createElement('label', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Title: ', this.state.title), _react2.default.createElement('input', { name: 'title', placeholder: 'Title', type: 'text', value: this.state.title, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Rank: ', this.state.rank), _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.employee.rank, max: '99', placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), this.state.isNotOwner && _react2.default.createElement('div', { id: 'checkboxBlock', className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Make New Supervisor'), _react2.default.createElement('input', { name: 'makeSupervisor', type: 'checkbox', checked: !!this.state.makeSupervisor, onClick: function onClick(event) {
          return _this3.handleClick(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'SAVE'), savedText)), _react2.default.createElement(_style2.default, {
        styleId: '231620494',
        css: '.error{color:red;font-size:.8em;padding-left:2px;}#saved{color:limegreen;padding-left:20px;}#checkboxBlock{display:block;width:40%;padding-bottom:40px;}#checkboxBloc h3{display:inline;margin-right:10px;}input[type=checkbox]{display:inline-block;}#formContainer{width:100%;padding-bottom:5%;margin-left:20%;margin-right:20%;}input{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}button{background-color:black;cursor:pointer;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}button:hover{background-color:#79589F;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHMkIsQUFHb0IsQUFNVCxBQUdjLEFBTWQsQUFJSCxBQUVjLEFBTUQsQUFNWSxBQUdDLEFBV0UsVUE5Q1gsQUEyQkksQ0FOQSxHQVpULENBTVosQ0FWcUIsS0FhcEIsQ0FlQSxDQUdpQixDQTFCSyxDQVRKLEFBOENsQixHQW5CZSxDQU5HLElBUGxCLENBVEEsSUErQmMsR0FSVSxDQTNCeEIsRUFTQSxDQVltQixLQWVMLFlBZGQsQUFlb0IsQ0FUcEIsaUJBVW9CLGtCQUNHLHFCQUNBLHFCQUNOLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IGFwaVVybCA9ICcvYXBpJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6IHVuZGVmaW5lZCxcclxuICAgICAgcmFuazogdGhpcy5wcm9wcy5lbXBsb3llZS5yYW5rICsgMSB8fCAwLFxyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICAgIGVtcGxveWVlOiB0aGlzLnByb3BzLmVtcGxveWVlLFxyXG4gICAgICBtYWtlU3VwZXJ2aXNvcjogZmFsc2UsXHJcbiAgICAgIHNhdmVDYWxsOiBmYWxzZSxcclxuICAgICAgbmFtZUludmFsaWQ6IGZhbHNlLFxyXG4gICAgICBpc05vdE93bmVyOiB0aGlzLnByb3BzLmVtcGxveWVlLnN1cGVydmlzb3JJZCAhPT0gJ05vbmUnLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1ha2VTdXBlcnZpc29yOiBldmVudC50YXJnZXQuY2hlY2tlZCB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLm5hbWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnN0YXRlLm5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lSW52YWxpZDogdHJ1ZSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIHJhbmssIHRpdGxlLCBtYWtlU3VwZXJ2aXNvciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHJhbms6IG1ha2VTdXBlcnZpc29yID8gdGhpcy5wcm9wcy5lbXBsb3llZS5yYW5rIC0gMSA6IHJhbmssXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgLy9laXRoZXIgbWFrZSB0aGVtIHRoZSBzdXBlcnZpc29yIG9mIHRoZSBlbXBsb3llZSB0aGV5IGNsaWNrZWQgdGhlIGJveCBuZXh0IHRvIG9yIGluaGVyaXQgdGhlIGV4aXN0aW5nIGFuZCBtYWtlIHRoZW0gYSB3b3JrZXJcclxuICAgICAgICBzdXBlcnZpc29ySWQ6IG1ha2VTdXBlcnZpc29yID8gdGhpcy5wcm9wcy5lbXBsb3llZS5zdXBlcnZpc29ySWQgOiB0aGlzLnByb3BzLmVtcGxveWVlLmlkLFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTVVBFUlZJU09SIElEJywgcGF5bG9hZC5zdXBlcnZpc29ySWQpXHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgJHthcGlVcmx9L2VtcGxveWVlYCwgcGF5bG9hZCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQ2FsbDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGlzTWFrZVN1cGVydmlzb3IgPSB0aGlzLnN0YXRlLm1ha2VTdXBlcnZpc29yO1xyXG4gICAgY29uc3QgZGF0YVNhdmVkID0gdGhpcy5zdGF0ZS5zYXZlQ2FsbDtcclxuICAgIGxldCBzYXZlZFRleHQgPSBudWxsO1xyXG4gICAgbGV0IG5hbWVFcnJvciA9IG51bGw7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUubmFtZUludmFsaWQpIHtcclxuICAgICAgbmFtZUVycm9yID0gPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj5OYW1lIFJlcXVpcmVkPC9zcGFuPlxyXG4gICAgfVxyXG4gICAgaWYgKGRhdGFTYXZlZCkge1xyXG4gICAgICBzYXZlZFRleHQgPSA8cCBpZD1cInNhdmVkXCI+RW1wbG95ZWUgSW5mb3JtYXRpb24gVXBkYXRlZDwvcD5cclxuICAgIH1cclxuICAgIGxldCBzdXBlcnZpc29ySGVhZGVyID0gPGgzPkVtcGxveWVlIHdpbGwgYmUgYWRkZWQgdW5kZXI6IHt0aGlzLnN0YXRlLmVtcGxveWVlLm5hbWV9PC9oMz5cclxuICAgIGlmIChpc01ha2VTdXBlcnZpc29yKSB7XHJcbiAgICAgIHN1cGVydmlzb3JIZWFkZXIgPSA8aDM+RW1wbG95ZWUgd2lsbCBiZSBtYWRlIHN1cGVydmlzb3Igb2Y6IHt0aGlzLnN0YXRlLmVtcGxveWVlLm5hbWV9PC9oMz47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwiZm9ybUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT5BZGQgRW1wbG95ZWU8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICB7c3VwZXJ2aXNvckhlYWRlcn1cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGgzPk5hbWU6IHt0aGlzLnN0YXRlLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bmFtZUVycm9yfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5UaXRsZToge3RoaXMuc3RhdGUudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGgzPlJhbms6IHt0aGlzLnN0YXRlLnJhbmt9PC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJyYW5rXCIgdHlwZT1cIm51bWJlclwiIG1pbj17dGhpcy5wcm9wcy5lbXBsb3llZS5yYW5rfSBtYXg9XCI5OVwiIHBsYWNlaG9sZGVyPVwiUmFua1wiIHZhbHVlPXt0aGlzLnN0YXRlLnJhbmt9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuaXNOb3RPd25lciAmJlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2hlY2tib3hCbG9ja1wiPlxyXG4gICAgICAgICAgICAgIDxoMz5NYWtlIE5ldyBTdXBlcnZpc29yPC9oMz5cclxuICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm1ha2VTdXBlcnZpc29yXCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17ISF0aGlzLnN0YXRlLm1ha2VTdXBlcnZpc29yfSBvbkNsaWNrPXtldmVudCA9PiB0aGlzLmhhbmRsZUNsaWNrKGV2ZW50KX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlKX0+U0FWRTwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7c2F2ZWRUZXh0fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTouOGVtO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3NhdmVkIHtcclxuICAgICAgICAgIGNvbG9yOmxpbWVncmVlblxyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjY2hlY2tib3hCbG9jayB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOjQwJTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjY2hlY2tib3hCbG9jIGgzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZVxyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgICAgIH1cclxuICAgICAgICAjZm9ybUNvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNTU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1ODlGO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=components/EmployeeForm.js */'
      }));
    }
  }]);

  return EmployeeForm;
}(_react2.default.Component);

exports.default = EmployeeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiYXBpVXJsIiwiRW1wbG95ZWVGb3JtIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDbGljayIsIm1ha2VTdXBlcnZpc29yIiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsInN0YXRlIiwidW5kZWZpbmVkIiwibmFtZUludmFsaWQiLCJyYW5rIiwidGl0bGUiLCJwYXlsb2FkIiwiZW1wbG95ZWUiLCJzdXBlcnZpc29ySWQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiZGF0YSIsInNhdmVDYWxsIiwiaXNOb3RPd25lciIsImJpbmQiLCJpc01ha2VTdXBlcnZpc29yIiwiZGF0YVNhdmVkIiwic2F2ZWRUZXh0IiwibmFtZUVycm9yIiwic3VwZXJ2aXNvckhlYWRlciIsImUiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7Ozs7OztBQUdQLElBQU0sU0FBTixBQUFlOztJLEFBR007d0NBQ25COzt3QkFBQSxBQUFZLE9BQU87aUJBQUE7O3dDQUFBOztrSkFBQSxBQUNYOztVQURXLEFBa0JuQixlQUFlLFVBQUEsQUFBQyxPQUFVLEFBQ3hCO1lBQUEsQUFBTSxBQUNOO1lBQUEsQUFBSywyQ0FDRixNQUFBLEFBQU0sT0FEVCxBQUNnQixNQUFPLE1BQUEsQUFBTSxPQUQ3QixBQUNvQyxBQUVyQztBQXZCa0I7O1VBQUEsQUF5Qm5CLGNBQWMsVUFBQSxBQUFDLE9BQVUsQUFDdkI7WUFBQSxBQUFLLFNBQVMsRUFBRSxnQkFBZ0IsTUFBQSxBQUFNLE9BQXRDLEFBQWMsQUFBK0IsQUFDOUM7QUEzQmtCOztVQUFBLEFBNkJuQiwyQkE3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QUNFLEFBQXNCLEFBQ3RCLGdEQUFPLE1BQVAsQUFBWSxRQUFPLE1BQW5CLEFBQXdCLFVBQVMsS0FBSyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQWpELEFBQTBELE1BQU0sS0FBaEUsQUFBb0UsTUFBSyxhQUF6RSxBQUFxRixRQUFPLE9BQU8sS0FBQSxBQUFLLE1BQXhHLEFBQThHLE1BQU0sVUFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssYUFBZCxBQUFTLEFBQWtCO0FBQXpKLHNCQUFBOztvQkFBQTtzQkFmSixBQWFFLEFBRUUsQUFFRDtBQUZDO2dCQUVELEFBQUssTUFBTCxBQUFXLDhCQUNWLGNBQUEsU0FBSyxJQUFMLEFBQVEsNEJBQVI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxpRUFBTyxNQUFQLEFBQVksa0JBQWlCLE1BQTdCLEFBQWtDLFlBQVcsU0FBUyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdELEFBQW1FLGdCQUFnQixTQUFTLHdCQUFBO2lCQUFTLE9BQUEsQUFBSyxZQUFkLEFBQVMsQUFBaUI7QUFBdEgsc0JBQUE7O29CQUFBO3NCQXBCTixBQWtCSSxBQUVFLEFBR0o7QUFISTsyQkFHSixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFlBQVEsU0FBUyxpQkFBQSxBQUFDLEdBQUQ7aUJBQU8sT0FBQSxBQUFLLGFBQVosQUFBTyxBQUFrQjtBQUExQyxzQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQyxTQTNCUCxBQUVFLEFBdUJFO2lCQXpCSjthQURGLEFBQ0UsQUFxRkg7QUFyRkc7Ozs7O0VBbEVvQyxnQkFBTSxBOztrQkFBM0IsQSIsImZpbGUiOiJFbXBsb3llZUZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==