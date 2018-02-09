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
                _context.next = 19;
                break;

              case 5:
                if (!(_this.state.rank < _this.props.rank)) {
                  _context.next = 9;
                  break;
                }

                _this.setState({ rankInvalid: true });
                _context.next = 19;
                break;

              case 9:
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank, title = _this$state.title, makeSupervisor = _this$state.makeSupervisor;
                payload = {
                  name: name,
                  rank: makeSupervisor ? _this.props.rank : rank,
                  title: title,
                  //either make them the supervisor of the employee they clicked the box next to or inherit the existing and make them a worker
                  supervisorId: makeSupervisor ? _this.props.supervisorId : _this.props.id
                };
                _context.next = 13;
                return _axios2.default.post(apiUrl + '/employee', payload);

              case 13:
                _ref2 = _context.sent;
                data = _ref2.data;

                if (!makeSupervisor) {
                  _context.next = 18;
                  break;
                }

                _context.next = 18;
                return _axios2.default.patch(apiUrl + '/employee/' + _this.props.id, { supervisorId: data.id });

              case 18:
                _this.setState({ saveCall: true });

              case 19:
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
      rankInvalid: false,
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
      var rankError = null;

      if (this.state.nameInvalid) {
        nameError = _react2.default.createElement('span', { className: 'error', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, 'Name Required');
      }
      if (this.state.rankInvalid) {
        rankError = _react2.default.createElement('span', { className: 'error', __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, 'Rank out of bounds');
      }
      if (dataSaved) {
        savedText = _react2.default.createElement('p', { id: 'saved', __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, 'Employee Information Updated');
      }
      var supervisorHeader = _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, 'Employee will be added under: ', this.props.name);
      if (isMakeSupervisor) {
        supervisorHeader = _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, 'Employee will be made supervisor of: ', this.props.name);
      }
      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Add Employee'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, supervisorHeader, _react2.default.createElement('label', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'Name: ', this.state.name)), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', defaultValue: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, nameError), _react2.default.createElement('label', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, 'Title: ', this.state.title), _react2.default.createElement('input', { name: 'title', placeholder: 'Title', type: 'text', value: this.state.title, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })), !this.state.makeSupervisor && _react2.default.createElement('label', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, 'Rank: ', this.state.rank), _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.rank, max: '99', placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, rankError), this.state.isNotOwner && _react2.default.createElement('div', { id: 'checkboxBlock', className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, 'Make New Supervisor'), _react2.default.createElement('input', { name: 'makeSupervisor', type: 'checkbox', checked: !!this.state.makeSupervisor, onClick: function onClick(event) {
          return _this3.handleClick(event);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-231620494',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, 'SAVE'), savedText)), _react2.default.createElement(_style2.default, {
        styleId: '231620494',
        css: '.error{color:red;font-size:.8em;padding-left:2px;}#saved{color:limegreen;padding-left:20px;}#checkboxBlock{display:block;width:40%;padding-bottom:40px;}#checkboxBloc h3{display:inline;margin-right:10px;}input[type=checkbox]{display:inline-block;}#formContainer{width:100%;padding-bottom:5%;margin-left:20%;margin-right:20%;}input{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}button{background-color:black;cursor:pointer;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}button:hover{background-color:#79589F;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdJMkIsQUFHb0IsQUFNVCxBQUdjLEFBTWQsQUFJSCxBQUVjLEFBTUQsQUFNWSxBQUdDLEFBV0UsVUE5Q1gsQUEyQkksQ0FOQSxHQVpULENBTVosQ0FWcUIsS0FhcEIsQ0FlQSxDQUdpQixDQTFCSyxDQVRKLEFBOENsQixHQW5CZSxDQU5HLElBUGxCLENBVEEsSUErQmMsR0FSVSxDQTNCeEIsRUFTQSxDQVltQixLQWVMLFlBZGQsQUFlb0IsQ0FUcEIsaUJBVW9CLGtCQUNHLHFCQUNBLHFCQUNOLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IGFwaVVybCA9ICcvYXBpJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICByYW5rOiBwcm9wcy5yYW5rICsgMSxcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBtYWtlU3VwZXJ2aXNvcjogZmFsc2UsXHJcbiAgICAgIHNhdmVDYWxsOiBmYWxzZSxcclxuICAgICAgbmFtZUludmFsaWQ6IGZhbHNlLFxyXG4gICAgICByYW5rSW52YWxpZDogZmFsc2UsXHJcbiAgICAgIGlzTm90T3duZXI6IHByb3BzLnN1cGVydmlzb3JJZCAhPT0gJ05vbmUnLFxyXG4gICAgfVxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zdXBlcnZpc29yICE9PSB1bmRlZmluZWQgfHwgJ05vbmUnKSB7XHJcbiAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNOb3RPd25lcjogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGlmIChuZXh0UHJvcHMubmFtZSAhPT0gdGhpcy5zdGF0ZS5uYW1lKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBuZXh0UHJvcHMubmFtZSB9KVxyXG4gICAgfVxyXG4gICAgaWYgKG5leHRQcm9wcy50aXRsZSAhPT0gdGhpcy5zdGF0ZS50aXRsZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IG5leHRQcm9wcy50aXRsZSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtYWtlU3VwZXJ2aXNvcjogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5uYW1lID09PSB1bmRlZmluZWQgfHwgdGhpcy5zdGF0ZS5uYW1lID09PSAnJykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lSW52YWxpZDogdHJ1ZSB9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUucmFuayA8IHRoaXMucHJvcHMucmFuaykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgKHsgcmFua0ludmFsaWQ6IHRydWUgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeyBuYW1lLCByYW5rLCB0aXRsZSwgbWFrZVN1cGVydmlzb3IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICByYW5rOiBtYWtlU3VwZXJ2aXNvciA/IHRoaXMucHJvcHMucmFuayA6IHJhbmssXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgLy9laXRoZXIgbWFrZSB0aGVtIHRoZSBzdXBlcnZpc29yIG9mIHRoZSBlbXBsb3llZSB0aGV5IGNsaWNrZWQgdGhlIGJveCBuZXh0IHRvIG9yIGluaGVyaXQgdGhlIGV4aXN0aW5nIGFuZCBtYWtlIHRoZW0gYSB3b3JrZXJcclxuICAgICAgICBzdXBlcnZpc29ySWQ6IG1ha2VTdXBlcnZpc29yID8gdGhpcy5wcm9wcy5zdXBlcnZpc29ySWQgOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgJHthcGlVcmx9L2VtcGxveWVlYCwgcGF5bG9hZCk7XHJcbiAgICAgIGlmIChtYWtlU3VwZXJ2aXNvcikge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBhdGNoKGAke2FwaVVybH0vZW1wbG95ZWUvJHt0aGlzLnByb3BzLmlkfWAsIHsgc3VwZXJ2aXNvcklkOiBkYXRhLmlkIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQ2FsbDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGlzTWFrZVN1cGVydmlzb3IgPSB0aGlzLnN0YXRlLm1ha2VTdXBlcnZpc29yO1xyXG4gICAgY29uc3QgZGF0YVNhdmVkID0gdGhpcy5zdGF0ZS5zYXZlQ2FsbDtcclxuICAgIGxldCBzYXZlZFRleHQgPSBudWxsO1xyXG4gICAgbGV0IG5hbWVFcnJvciA9IG51bGw7XHJcbiAgICBsZXQgcmFua0Vycm9yID0gbnVsbDtcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5uYW1lSW52YWxpZCkge1xyXG4gICAgICBuYW1lRXJyb3IgPSA8c3BhbiBjbGFzc05hbWU9XCJlcnJvclwiPk5hbWUgUmVxdWlyZWQ8L3NwYW4+XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5yYW5rSW52YWxpZCkge1xyXG4gICAgICByYW5rRXJyb3IgPSA8c3BhbiBjbGFzc05hbWU9XCJlcnJvclwiPlJhbmsgb3V0IG9mIGJvdW5kczwvc3Bhbj5cclxuICAgIH1cclxuICAgIGlmIChkYXRhU2F2ZWQpIHtcclxuICAgICAgc2F2ZWRUZXh0ID0gPHAgaWQ9XCJzYXZlZFwiPkVtcGxveWVlIEluZm9ybWF0aW9uIFVwZGF0ZWQ8L3A+XHJcbiAgICB9XHJcbiAgICBsZXQgc3VwZXJ2aXNvckhlYWRlciA9IDxoMz5FbXBsb3llZSB3aWxsIGJlIGFkZGVkIHVuZGVyOiB7dGhpcy5wcm9wcy5uYW1lfTwvaDM+XHJcbiAgICBpZiAoaXNNYWtlU3VwZXJ2aXNvcikge1xyXG4gICAgICBzdXBlcnZpc29ySGVhZGVyID0gPGgzPkVtcGxveWVlIHdpbGwgYmUgbWFkZSBzdXBlcnZpc29yIG9mOiB7dGhpcy5wcm9wcy5uYW1lfTwvaDM+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cImZvcm1Db250YWluZXJcIj5cclxuICAgICAgICA8aDE+QWRkIEVtcGxveWVlPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAge3N1cGVydmlzb3JIZWFkZXJ9XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5OYW1lOiB7dGhpcy5zdGF0ZS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtuYW1lRXJyb3J9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGgzPlRpdGxlOiB7dGhpcy5zdGF0ZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgeyF0aGlzLnN0YXRlLm1ha2VTdXBlcnZpc29yICYmXHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5SYW5rOiB7dGhpcy5zdGF0ZS5yYW5rfTwvaDM+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicmFua1wiIHR5cGU9XCJudW1iZXJcIiBtaW49e3RoaXMucHJvcHMucmFua30gbWF4PVwiOTlcIiBwbGFjZWhvbGRlcj1cIlJhbmtcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yYW5rfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtyYW5rRXJyb3J9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTm90T3duZXIgJiZcclxuICAgICAgICAgICAgPGRpdiBpZD1cImNoZWNrYm94QmxvY2tcIj5cclxuICAgICAgICAgICAgICA8aDM+TWFrZSBOZXcgU3VwZXJ2aXNvcjwvaDM+XHJcbiAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJtYWtlU3VwZXJ2aXNvclwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9eyEhdGhpcy5zdGF0ZS5tYWtlU3VwZXJ2aXNvcn0gb25DbGljaz17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDbGljayhldmVudCl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSl9PlNBVkU8L2J1dHRvbj5cclxuICAgICAgICAgICAge3NhdmVkVGV4dH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgICAgICBmb250LXNpemU6LjhlbTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdCAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNzYXZlZCB7XHJcbiAgICAgICAgICBjb2xvcjpsaW1lZ3JlZW5cclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2NoZWNrYm94QmxvY2sge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDo0MCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2NoZWNrYm94QmxvYyBoMyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmVcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgICAgICB9XHJcbiAgICAgICAgI2Zvcm1Db250YWluZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzU1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTg5RjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=components/EmployeeForm.js */'
      }));
    }
  }]);

  return EmployeeForm;
}(_react2.default.Component);

exports.default = EmployeeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiYXBpVXJsIiwiRW1wbG95ZWVGb3JtIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDbGljayIsIm1ha2VTdXBlcnZpc29yIiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsInN0YXRlIiwidW5kZWZpbmVkIiwibmFtZUludmFsaWQiLCJyYW5rIiwicmFua0ludmFsaWQiLCJ0aXRsZSIsInBheWxvYWQiLCJzdXBlcnZpc29ySWQiLCJpZCIsInBvc3QiLCJkYXRhIiwicGF0Y2giLCJzYXZlQ2FsbCIsImlzTm90T3duZXIiLCJiaW5kIiwibmV4dFByb3BzIiwic3VwZXJ2aXNvciIsImlzTWFrZVN1cGVydmlzb3IiLCJkYXRhU2F2ZWQiLCJzYXZlZFRleHQiLCJuYW1lRXJyb3IiLCJyYW5rRXJyb3IiLCJzdXBlcnZpc29ySGVhZGVyIiwiZSIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0FBR1AsSUFBTSxTQUFOLEFBQWU7O0lBR00sQTt3Q0FDbkI7O3dCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7O2tKQUFBLEFBQ1g7O1VBRFcsQUE2Qm5CLGVBQWUsVUFBQSxBQUFDLE9BQVUsQUFDeEI7WUFBQSxBQUFNLEFBQ047WUFBQSxBQUFLLDJDQUNGLE1BQUEsQUFBTSxPQURULEFBQ2dCLE1BQU8sTUFBQSxBQUFNLE9BRDdCLEFBQ29DLEFBRXJDO0FBbENrQjs7VUFBQSxBQW9DbkIsY0FBYyxVQUFBLEFBQUMsT0FBVSxBQUN2QjtZQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFnQixNQUFBLEFBQU0sT0FBdEMsQUFBYyxBQUEr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QUFBLEFBQ0c7QUFESDtBQUFBLFNBbkJGLEFBbUJFLEFBR0MsaUJBQUEsQUFBSyxNQUFMLEFBQVcsOEJBQ1YsY0FBQSxTQUFLLElBQUwsQUFBUSw0QkFBUjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGlFQUFPLE1BQVAsQUFBWSxrQkFBaUIsTUFBN0IsQUFBa0MsWUFBVyxTQUFTLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0QsQUFBbUUsZ0JBQWdCLFNBQVMsd0JBQUE7aUJBQVMsT0FBQSxBQUFLLFlBQWQsQUFBUyxBQUFpQjtBQUF0SCxzQkFBQTs7b0JBQUE7c0JBekJOLEFBdUJJLEFBRUUsQUFHSjtBQUhJOzJCQUdKLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsWUFBUSxTQUFTLGlCQUFBLEFBQUMsR0FBRDtpQkFBTyxPQUFBLEFBQUssYUFBWixBQUFPLEFBQWtCO0FBQTFDLHNCQUFBOztvQkFBQTtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNDLFNBaENQLEFBRUUsQUE0QkU7aUJBOUJKO2FBREYsQUFDRSxBQTBGSDtBQTFGRzs7Ozs7RUF0Rm9DLGdCQUFNLEE7O2tCQUEzQixBIiwiZmlsZSI6IkVtcGxveWVlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9