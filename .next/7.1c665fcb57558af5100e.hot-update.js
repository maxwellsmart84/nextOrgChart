webpackHotUpdate(7,{

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = __webpack_require__(409);

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

var _axios = __webpack_require__(395);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeForm.js';


var apiUrl = 'http://localhost:3000/api';

var EmployeeForm = function (_React$Component) {
  (0, _inherits3.default)(EmployeeForm, _React$Component);

  function EmployeeForm(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, EmployeeForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EmployeeForm.__proto__ || (0, _getPrototypeOf2.default)(EmployeeForm)).call(this, props));

    _this.handleChange = function (event) {
      event.preventDefault();
      console.log(event.target.value);
      _this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    };

    _this.handleClick = function (event) {
      event.preventDefault();
      _this.setState({ makeSupervisor: e.target.checked });
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
                  name: name || undefined,
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
      supervisor: _this.props.supervisor,
      makeSupervisor: false
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EmployeeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Add Employee'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('h2', {
        className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Employee will be added under:'), _react2.default.createElement('h3', {
        className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, this.state.supervisor.name), _react2.default.createElement('label', {
        className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('h2', {
        className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Name:'), _react2.default.createElement('h3', {
        className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, this.state.name), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Make New Supervisor'), _react2.default.createElement('input', { name: 'makeSupervisor', type: 'checkbox', value: this.state.makeSupervisor, onclick: function onclick(event) {
          return _this3.handleClick(event);
        }, className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-1953496573',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'SUBMIT'))), _react2.default.createElement(_style2.default, {
        styleId: '1953496573',
        css: '#formContainer{width:100%;border:black;border-style:solid;padding-bottom:5%;padding-left:30%;}input[type=text]{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input[type=text]:focus{border:3px solid #555;}button{background-color:black;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFMkIsQUFHb0IsQUFPRCxBQU1ZLEFBSXRCLFVBVGtCLENBUEwsV0FhZixDQUdjLENBZk8sSUFPTixPQVNELE1BUlUsRUFQSixJQWdCQSxjQWZELEVBT25CLEVBU29CLGFBZnBCLEtBZ0J1QixxQkFDQSxxQkFDTixlQUNqQiIsImZpbGUiOiJjb21wb25lbnRzL0VtcGxveWVlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbXBsb3llZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgcmFuazogdGhpcy5wcm9wcy5zdXBlcnZpc29yLnJhbmsgKyAxLFxyXG4gICAgICBzdXBlcnZpc29yOiB0aGlzLnByb3BzLnN1cGVydmlzb3IsXHJcbiAgICAgIG1ha2VTdXBlcnZpc29yOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1ha2VTdXBlcnZpc29yOiBlLnRhcmdldC5jaGVja2VkIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgeyBuYW1lLCByYW5rLCBtYWtlU3VwZXJ2aXNvciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIG5hbWU6IG5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgICByYW5rOiBtYWtlU3VwZXJ2aXNvciA/IHJhbmsgLTEgOiByYW5rLFxyXG4gICAgICAvL2VpdGhlciBtYWtlIHRoZW0gdGhlIHN1cGVydmlzb3Igb2YgdGhlIGVtcGxveWVlIHRoZXkgY2xpY2tlZCB0aGUgYm94IG5leHQgdG8gb3IgaW5oZXJpdCB0aGUgZXhpc3RpbmcgYW5kIG1ha2UgdGhlbSBhIHdvcmtlclxyXG4gICAgICBzdXBlcnZpc29ySWQ6IG1ha2VTdXBlcnZpc29yID8gdGhpcy5wcm9wcy5zdXBlcnZpc29yLnN1cGVydmlzb3JJZCA6IHRoaXMucHJvcHMuc3VwZXJ2aXNvci5pZCxcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHBheWxvYWQpXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YXBpVXJsfS9lbXBsb3llZWAsIHBheWxvYWQpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwiZm9ybUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT5BZGQgRW1wbG95ZWU8L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8aDI+RW1wbG95ZWUgd2lsbCBiZSBhZGRlZCB1bmRlcjo8L2gyPlxyXG4gICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLnN1cGVydmlzb3IubmFtZX08L2gzPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8aDI+TmFtZTo8L2gyPlxyXG4gICAgICAgICAgICA8aDM+e3RoaXMuc3RhdGUubmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj0nTmFtZScgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGgzPk1ha2UgTmV3IFN1cGVydmlzb3I8L2gzPlxyXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm1ha2VTdXBlcnZpc29yXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9e3RoaXMuc3RhdGUubWFrZVN1cGVydmlzb3J9IG9uY2xpY2s9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2xpY2soZXZlbnQpfSAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlU3VibWl0KGUpfT5TVUJNSVQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAjZm9ybUNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiBibGFjaztcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzU1NTtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=components/EmployeeForm.js */'
      }));
    }
  }]);

  return EmployeeForm;
}(_react2.default.Component);

exports.default = EmployeeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiYXBpVXJsIiwiRW1wbG95ZWVGb3JtIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJuYW1lIiwiaGFuZGxlQ2xpY2siLCJtYWtlU3VwZXJ2aXNvciIsImUiLCJjaGVja2VkIiwiaGFuZGxlU3VibWl0Iiwic3RhdGUiLCJyYW5rIiwicGF5bG9hZCIsInVuZGVmaW5lZCIsInN1cGVydmlzb3JJZCIsInN1cGVydmlzb3IiLCJpZCIsInBvc3QiLCJkYXRhIiwiYmluZCIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0FBR1AsSUFBTSxTQUFOLEFBQWU7O0ksQUFHTTt3Q0FDbkI7O3dCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7O2tKQUFBLEFBQ1g7O1VBRFcsQUFZbkIsZUFBZSxVQUFBLEFBQUMsT0FBVSxBQUN4QjtZQUFBLEFBQU0sQUFDTjtjQUFBLEFBQVEsSUFBSSxNQUFBLEFBQU0sT0FBbEIsQUFBeUIsQUFDekI7WUFBQSxBQUFLLDJDQUNGLE1BQUEsQUFBTSxPQURULEFBQ2dCLE1BQU8sTUFBQSxBQUFNLE9BRDdCLEFBQ29DLEFBRXJDO0FBbEJrQjs7VUFBQSxBQW9CbkIsY0FBYyxVQUFBLEFBQUMsT0FBVSxBQUN2QjtZQUFBLEFBQU0sQUFDTjtZQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFnQixFQUFBLEFBQUUsT0FBbEMsQUFBYyxBQUEyQixBQUMxQztBQXZCa0I7O1VBQUEsQUF5Qm5CLDJCQXpCbUI7MEZBeUJKLGlCQUFBLEFBQU8sT0FBUDtxRUFBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ2I7c0JBRGEsQUFDYixBQUFNOzhCQUNpQyxNQUYxQixBQUUrQixPQUYvQixBQUVMLG1CQUZLLEFBRUwsTUFGSyxBQUVDLG1CQUZELEFBRUMsTUFGRCxBQUVPLDZCQUZQLEFBRU8sQUFDZDtBQUhPO3dCQUlMLFFBRFEsQUFDQSxBQUNkO3dCQUFNLGlCQUFpQixPQUFqQixBQUF1QixJQUZmLEFBRW1CLEFBQ2pDO0FBQ0E7Z0NBQWMsaUJBQWlCLE1BQUEsQUFBSyxNQUFMLEFBQVcsV0FBNUIsQUFBdUMsZUFBZSxNQUFBLEFBQUssTUFBTCxBQUFXLFdBUHBFLEFBR0csQUFJNEUsQUFFNUY7QUFOZ0IsQUFDZDs7d0JBS0YsQUFBUSxJQVRLLEFBU2IsQUFBWTtnQ0FUQzt1QkFVVSxnQkFBQSxBQUFNLEtBQU4sQUFBYyxzQkFWeEIsQUFVVSxBQUFpQzs7bUJBVjNDO2lDQVVMO0FBVkssNkJBQUEsQUFVTDs7bUJBVks7bUJBQUE7Z0NBQUE7O0FBQUE7b0JBQUE7QUF6Qkk7OzJCQUFBO2dDQUFBO0FBQUE7QUFFakI7O1VBQUEsQUFBSztZQUFRLEFBQ0wsQUFDTjtZQUFNLE1BQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixPQUZqQixBQUV3QixBQUNuQztrQkFBWSxNQUFBLEFBQUssTUFITixBQUdZLEFBQ3ZCO3NCQUpGLEFBQWEsQUFJSyxBQUVsQjtBQU5hLEFBQ1g7VUFLRixBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FBdEMsQUFDQTtVQUFBLEFBQUssZUFBZSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQVRyQixBQVNqQjtXQUNEOzs7Ozs2QkE0QlE7bUJBQ1A7OzZCQUNFLGNBQUEsU0FBSyxJQUFMLEFBQVEsNEJBQVI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxpQ0FBQSxjQUFBLFVBQU0sVUFBVSxLQUFoQixBQUFxQix5QkFBckI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0RBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEsY0FBSyxBQUFLLE1BQUwsQUFBVyxXQUZsQixBQUVFLEFBQTJCLEFBQzNCLHVCQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwwQkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFGWixBQUVFLEFBQWdCLEFBQ2hCLGdEQUFPLE1BQVAsQUFBWSxRQUFPLGFBQW5CLEFBQStCLFFBQU8sTUFBdEMsQUFBMkMsUUFBTyxPQUFPLEtBQUEsQUFBSyxNQUE5RCxBQUFvRSxNQUFNLFVBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLGFBQWQsQUFBUyxBQUFrQjtBQUEvRyxzQkFBQTs7b0JBQUE7c0JBTkosQUFHRSxBQUdFLEFBRUY7QUFGRTsyQkFFRixjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsaUVBQU8sTUFBUCxBQUFZLGtCQUFpQixNQUE3QixBQUFrQyxZQUFXLE9BQU8sS0FBQSxBQUFLLE1BQXpELEFBQStELGdCQUFnQixTQUFTLHdCQUFBO2lCQUFTLE9BQUEsQUFBSyxZQUFkLEFBQVMsQUFBaUI7QUFBbEgsc0JBQUE7O29CQUFBO3NCQVZKLEFBUUUsQUFFRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxZQUFRLFNBQVMsaUJBQUEsQUFBQyxHQUFEO2lCQUFPLE9BQUEsQUFBSyxhQUFaLEFBQU8sQUFBa0I7QUFBMUMsc0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7U0FmTixBQUVFLEFBWUUsQUFDRTtpQkFmTjthQURGLEFBQ0UsQUFpREg7QUFqREc7Ozs7O0VBekNvQyxnQkFBTSxBOztrQkFBM0IsQSIsImZpbGUiOiJFbXBsb3llZUZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4xYzY2NWZjYjU3NTU4YWY1MTAwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FbXBsb3llZUZvcm0uanM/ZWY5NmM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1wbG95ZWVGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIHJhbms6IHRoaXMucHJvcHMuc3VwZXJ2aXNvci5yYW5rICsgMSxcclxuICAgICAgc3VwZXJ2aXNvcjogdGhpcy5wcm9wcy5zdXBlcnZpc29yLFxyXG4gICAgICBtYWtlU3VwZXJ2aXNvcjogZmFsc2VcclxuICAgIH1cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtYWtlU3VwZXJ2aXNvcjogZS50YXJnZXQuY2hlY2tlZCB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHsgbmFtZSwgcmFuaywgbWFrZVN1cGVydmlzb3IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICBuYW1lOiBuYW1lIHx8IHVuZGVmaW5lZCxcclxuICAgICAgcmFuazogbWFrZVN1cGVydmlzb3IgPyByYW5rIC0xIDogcmFuayxcclxuICAgICAgLy9laXRoZXIgbWFrZSB0aGVtIHRoZSBzdXBlcnZpc29yIG9mIHRoZSBlbXBsb3llZSB0aGV5IGNsaWNrZWQgdGhlIGJveCBuZXh0IHRvIG9yIGluaGVyaXQgdGhlIGV4aXN0aW5nIGFuZCBtYWtlIHRoZW0gYSB3b3JrZXJcclxuICAgICAgc3VwZXJ2aXNvcklkOiBtYWtlU3VwZXJ2aXNvciA/IHRoaXMucHJvcHMuc3VwZXJ2aXNvci5zdXBlcnZpc29ySWQgOiB0aGlzLnByb3BzLnN1cGVydmlzb3IuaWQsXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhwYXlsb2FkKVxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAke2FwaVVybH0vZW1wbG95ZWVgLCBwYXlsb2FkKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cImZvcm1Db250YWluZXJcIj5cclxuICAgICAgICA8aDE+QWRkIEVtcGxveWVlPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGgyPkVtcGxveWVlIHdpbGwgYmUgYWRkZWQgdW5kZXI6PC9oMj5cclxuICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5zdXBlcnZpc29yLm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPGgyPk5hbWU6PC9oMj5cclxuICAgICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9J05hbWUnIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5NYWtlIE5ldyBTdXBlcnZpc29yPC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJtYWtlU3VwZXJ2aXNvclwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPXt0aGlzLnN0YXRlLm1ha2VTdXBlcnZpc29yfSBvbmNsaWNrPXtldmVudCA9PiB0aGlzLmhhbmRsZUNsaWNrKGV2ZW50KX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlKX0+U1VCTUlUPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgI2Zvcm1Db250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMCU7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM1NTU7XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRW1wbG95ZWVGb3JtLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBVUE7QUFFQTtBQUFBO0FBQ0E7QUFmQTtBQUNBO0FBbUJBO0FBRUE7QUFBQTtBQXRCQTtBQUNBO0FBd0JBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUhBO0FBQ0E7QUFJQTtBQVRBO0FBVUE7QUFDQTtBQVhBO0FBVUE7QUFWQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUF6QkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBTEE7QUFLQTtBQUNBO0FBQ0E7Ozs7O0FBNEJBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkE7QUFpREE7QUFqREE7Ozs7O0FBekNBO0FBQ0E7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=