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
                _context.next = 12;
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

                _this.setState({ saveCall: true });

              case 12:
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
      rank: _this.props.employee.rank + 1,
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

      if (this.state.nameInvalids) {
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
      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Add Employee'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, supervisorHeader, _react2.default.createElement('label', {
        className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Name: ', this.state.name), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', defaultValue: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, nameError), _react2.default.createElement('label', {
        className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Title: ', this.state.title), _react2.default.createElement('input', { name: 'title', placeholder: 'Title', type: 'text', value: this.state.title, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Rank: ', this.state.rank), _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.employee.rank, max: '99', placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), this.state.isNotOwner && _react2.default.createElement('div', { id: 'checkboxBlock', className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Make New Supervisor'), _react2.default.createElement('input', { name: 'makeSupervisor', type: 'checkbox', checked: !!this.state.makeSupervisor, onClick: function onClick(event) {
          return _this3.handleClick(event);
        }, className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-3947330829',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'SAVE'), savedText)), _react2.default.createElement(_style2.default, {
        styleId: '3947330829',
        css: '.error{color:red;font-size:.8em;padding-left:2px;}#saved{color:limegreen;padding-left:20px;}#checkboxBlock{display:block;width:40%;padding-bottom:40px;padding-top:20px;}#checkboxBloc h3{display:inline;margin-right:10px;}input[type=checkbox]{display:inline-block;}#formContainer{width:100%;padding-bottom:5%;margin-left:20%;margin-right:20%;}input{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}button{background-color:black;cursor:pointer;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}button:hover{background-color:#79589F;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHMkIsQUFHb0IsQUFNVCxBQUdjLEFBT2QsQUFJSCxBQUVjLEFBTUQsQUFNWSxBQUdDLEFBV0UsVUEvQ1gsQUE0QkksQ0FOQSxHQWJULENBT1osQ0FYcUIsS0FjcEIsQ0FlQSxDQUdpQixDQTNCSyxDQVRKLEFBK0NsQixHQW5CZSxDQU5HLElBUGxCLENBVkEsSUFnQ2MsR0FSVSxDQTVCeEIsRUFTbUIsQ0FhQSxLQWVMLFdBM0JkLENBYUEsQUFlb0IsQ0FUcEIsaUJBVW9CLGtCQUNHLHFCQUNBLHFCQUNOLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IGFwaVVybCA9ICcvYXBpJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6IHVuZGVmaW5lZCxcclxuICAgICAgcmFuazogdGhpcy5wcm9wcy5lbXBsb3llZS5yYW5rICsgMSxcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBlbXBsb3llZTogdGhpcy5wcm9wcy5lbXBsb3llZSxcclxuICAgICAgbWFrZVN1cGVydmlzb3I6IGZhbHNlLFxyXG4gICAgICBzYXZlQ2FsbDogZmFsc2UsXHJcbiAgICAgIG5hbWVJbnZhbGlkOiBmYWxzZSxcclxuICAgICAgaXNOb3RPd25lcjogdGhpcy5wcm9wcy5lbXBsb3llZS5zdXBlcnZpc29ySWQgIT09ICdOb25lJyxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtYWtlU3VwZXJ2aXNvcjogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5uYW1lID09PSB1bmRlZmluZWQgfHwgdGhpcy5zdGF0ZS5uYW1lID09PSAnJykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZUludmFsaWQ6IHRydWUgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeyBuYW1lLCByYW5rLCB0aXRsZSwgbWFrZVN1cGVydmlzb3IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICByYW5rOiBtYWtlU3VwZXJ2aXNvciA/IHRoaXMucHJvcHMuZW1wbG95ZWUucmFuayAtIDEgOiByYW5rLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIC8vZWl0aGVyIG1ha2UgdGhlbSB0aGUgc3VwZXJ2aXNvciBvZiB0aGUgZW1wbG95ZWUgdGhleSBjbGlja2VkIHRoZSBib3ggbmV4dCB0byBvciBpbmhlcml0IHRoZSBleGlzdGluZyBhbmQgbWFrZSB0aGVtIGEgd29ya2VyXHJcbiAgICAgICAgc3VwZXJ2aXNvcklkOiBtYWtlU3VwZXJ2aXNvciA/IHRoaXMucHJvcHMuZW1wbG95ZWUuc3VwZXJ2aXNvcklkIDogdGhpcy5wcm9wcy5lbXBsb3llZS5pZCxcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAke2FwaVVybH0vZW1wbG95ZWVgLCBwYXlsb2FkKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNhdmVDYWxsOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaXNNYWtlU3VwZXJ2aXNvciA9IHRoaXMuc3RhdGUubWFrZVN1cGVydmlzb3I7XHJcbiAgICBjb25zdCBkYXRhU2F2ZWQgPSB0aGlzLnN0YXRlLnNhdmVDYWxsO1xyXG4gICAgbGV0IHNhdmVkVGV4dCA9IG51bGw7XHJcbiAgICBsZXQgbmFtZUVycm9yID0gbnVsbDtcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5uYW1lSW52YWxpZHMpIHtcclxuICAgICAgbmFtZUVycm9yID0gPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj5OYW1lIFJlcXVpcmVkPC9zcGFuPlxyXG4gICAgfVxyXG4gICAgaWYgKGRhdGFTYXZlZCkge1xyXG4gICAgICBzYXZlZFRleHQgPSA8cCBpZD1cInNhdmVkXCI+RW1wbG95ZWUgSW5mb3JtYXRpb24gVXBkYXRlZDwvcD5cclxuICAgIH1cclxuICAgIGxldCBzdXBlcnZpc29ySGVhZGVyID0gPGgzPkVtcGxveWVlIHdpbGwgYmUgYWRkZWQgdW5kZXI6IHt0aGlzLnN0YXRlLmVtcGxveWVlLm5hbWV9PC9oMz5cclxuICAgIGlmIChpc01ha2VTdXBlcnZpc29yKSB7XHJcbiAgICAgIHN1cGVydmlzb3JIZWFkZXIgPSA8aDM+RW1wbG95ZWUgd2lsbCBiZSBtYWRlIHN1cGVydmlzb3Igb2Y6IHt0aGlzLnN0YXRlLmVtcGxveWVlLm5hbWV9PC9oMz47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwiZm9ybUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT5BZGQgRW1wbG95ZWU8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICB7c3VwZXJ2aXNvckhlYWRlcn1cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGgzPk5hbWU6IHt0aGlzLnN0YXRlLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bmFtZUVycm9yfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5UaXRsZToge3RoaXMuc3RhdGUudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGgzPlJhbms6IHt0aGlzLnN0YXRlLnJhbmt9PC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJyYW5rXCIgdHlwZT1cIm51bWJlclwiIG1pbj17dGhpcy5wcm9wcy5lbXBsb3llZS5yYW5rfSBtYXg9XCI5OVwiIHBsYWNlaG9sZGVyPVwiUmFua1wiIHZhbHVlPXt0aGlzLnN0YXRlLnJhbmt9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuaXNOb3RPd25lciAmJlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2hlY2tib3hCbG9ja1wiPlxyXG4gICAgICAgICAgICAgIDxoMz5NYWtlIE5ldyBTdXBlcnZpc29yPC9oMz5cclxuICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm1ha2VTdXBlcnZpc29yXCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17ISF0aGlzLnN0YXRlLm1ha2VTdXBlcnZpc29yfSBvbkNsaWNrPXtldmVudCA9PiB0aGlzLmhhbmRsZUNsaWNrKGV2ZW50KX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlKX0+U0FWRTwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7c2F2ZWRUZXh0fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTouOGVtO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3NhdmVkIHtcclxuICAgICAgICAgIGNvbG9yOmxpbWVncmVlblxyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjY2hlY2tib3hCbG9jayB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOjQwJTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjaGVja2JveEJsb2MgaDMge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lXHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICAgICAgfVxyXG4gICAgICAgICNmb3JtQ29udGFpbmVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM1NTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTU4OUY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=components/EmployeeForm.js */'
      }));
    }
  }]);

  return EmployeeForm;
}(_react2.default.Component);

exports.default = EmployeeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiYXBpVXJsIiwiRW1wbG95ZWVGb3JtIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDbGljayIsIm1ha2VTdXBlcnZpc29yIiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsInN0YXRlIiwidW5kZWZpbmVkIiwibmFtZUludmFsaWQiLCJyYW5rIiwidGl0bGUiLCJwYXlsb2FkIiwiZW1wbG95ZWUiLCJzdXBlcnZpc29ySWQiLCJpZCIsInBvc3QiLCJkYXRhIiwic2F2ZUNhbGwiLCJpc05vdE93bmVyIiwiYmluZCIsImlzTWFrZVN1cGVydmlzb3IiLCJkYXRhU2F2ZWQiLCJzYXZlZFRleHQiLCJuYW1lRXJyb3IiLCJuYW1lSW52YWxpZHMiLCJzdXBlcnZpc29ySGVhZGVyIiwiZSIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0FBR1AsSUFBTSxTQUFOLEFBQWU7O0ksQUFHTTt3Q0FDbkI7O3dCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7O2tKQUFBLEFBQ1g7O1VBRFcsQUFrQm5CLGVBQWUsVUFBQSxBQUFDLE9BQVUsQUFDeEI7WUFBQSxBQUFNLEFBQ047WUFBQSxBQUFLLDJDQUNGLE1BQUEsQUFBTSxPQURULEFBQ2dCLE1BQU8sTUFBQSxBQUFNLE9BRDdCLEFBQ29DLEFBRXJDO0FBdkJrQjs7VUFBQSxBQXlCbkIsY0FBYyxVQUFBLEFBQUMsT0FBVSxBQUN2QjtZQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFnQixNQUFBLEFBQU0sT0FBdEMsQUFBYyxBQUErQixBQUM5QztBQTNCa0I7O1VBQUEsQUE2Qm5CLDJCQTdC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SyxNQUFMLEFBQVcsU0FBakQsQUFBMEQsTUFBTSxLQUFoRSxBQUFvRSxNQUFLLGFBQXpFLEFBQXFGLFFBQU8sT0FBTyxLQUFBLEFBQUssTUFBeEcsQUFBOEcsTUFBTSxVQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxhQUFkLEFBQVMsQUFBa0I7QUFBekosc0JBQUE7O29CQUFBO3NCQWZKLEFBYUUsQUFFRSxBQUVEO0FBRkM7Z0JBRUQsQUFBSyxNQUFMLEFBQVcsOEJBQ1YsY0FBQSxTQUFLLElBQUwsQUFBUSw0QkFBUjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGlFQUFPLE1BQVAsQUFBWSxrQkFBaUIsTUFBN0IsQUFBa0MsWUFBVyxTQUFTLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0QsQUFBbUUsZ0JBQWdCLFNBQVMsd0JBQUE7aUJBQVMsT0FBQSxBQUFLLFlBQWQsQUFBUyxBQUFpQjtBQUF0SCxzQkFBQTs7b0JBQUE7c0JBcEJOLEFBa0JJLEFBRUUsQUFHSjtBQUhJOzJCQUdKLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsWUFBUSxTQUFTLGlCQUFBLEFBQUMsR0FBRDtpQkFBTyxPQUFBLEFBQUssYUFBWixBQUFPLEFBQWtCO0FBQTFDLHNCQUFBOztvQkFBQTtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNDLFNBM0JQLEFBRUUsQUF1QkU7aUJBekJKO2FBREYsQUFDRSxBQXNGSDtBQXRGRzs7Ozs7RUFsRW9DLGdCQUFNLEE7O2tCQUEzQixBIiwiZmlsZSI6IkVtcGxveWVlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9