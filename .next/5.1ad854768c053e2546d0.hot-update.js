webpackHotUpdate(5,{

/***/ 408:
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

var _link = __webpack_require__(393);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeCard.js';


var apiUrl = 'http://localhost:3000/api';

var EmployeeCard = function (_React$Component) {
  (0, _inherits3.default)(EmployeeCard, _React$Component);

  function EmployeeCard(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, EmployeeCard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EmployeeCard.__proto__ || (0, _getPrototypeOf2.default)(EmployeeCard)).call(this, props));

    _this.handleChange = function (event) {
      event.preventDefault();
      _this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    };

    _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var _this$state, name, rank, payload;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank;
                payload = {
                  name: name,
                  rank: rank
                };

                console.log('PAYLOAD', payload);
                _context.next = 6;
                return _axios2.default.patch(apiUrl + '/employee/' + _this.props.url.query.id, payload);

              case 6:
                alert('Employee Updated');

              case 7:
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
      name: props.name,
      rank: props.rank
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EmployeeCard, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Edit Employee'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('h2', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Name:'), _react2.default.createElement('h3', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, this.state.name), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Rank: ', this.state.rank)), _react2.default.createElement('label', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.supervisor ? this.props.supervisor.rank : 0, max: '100', placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement('h2', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Supervisor:'), _react2.default.createElement('h3', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.props.supervisor ? this.props.supervisor.name : 'None'), _react2.default.createElement('div', {
        className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-167554734',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'SUBMIT'))), _react2.default.createElement(_style2.default, {
        styleId: '167554734',
        css: 'a{text-decoration:none;color:black;}#formContainer{width:100%;border:black;border-style:solid;padding-bottom:5%;padding-left:30%;}input{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEeUIsQUFHOEIsQUFJVixBQU9ELEFBTVksVUFMSixDQVBMLFVBSGhCLENBZ0JDLEVBWnFCLElBT04sS0FYZixRQVl3QixFQVBKLGtCQUNELEVBT25CLGVBTkEiLCJmaWxlIjoiY29tcG9uZW50cy9FbXBsb3llZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgcmFuazogcHJvcHMucmFuayxcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pXG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IG5hbWUsIHJhbmsgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG5hbWUsXG4gICAgICByYW5rLFxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnUEFZTE9BRCcsIHBheWxvYWQpXG4gICAgYXdhaXQgYXhpb3MucGF0Y2goYCR7YXBpVXJsfS9lbXBsb3llZS8ke3RoaXMucHJvcHMudXJsLnF1ZXJ5LmlkfWAsIHBheWxvYWQpXG4gICAgYWxlcnQoJ0VtcGxveWVlIFVwZGF0ZWQnKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImZvcm1Db250YWluZXJcIj5cbiAgICAgIDxoMT5FZGl0IEVtcGxveWVlPC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aDI+TmFtZTo8L2gyPlxuICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlJhbms6IHt0aGlzLnN0YXRlLnJhbmt9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicmFua1wiIHR5cGU9XCJudW1iZXJcIiBtaW49e3RoaXMucHJvcHMuc3VwZXJ2aXNvciA/IHRoaXMucHJvcHMuc3VwZXJ2aXNvci5yYW5rIDogMH0gbWF4PVwiMTAwXCIgcGxhY2Vob2xkZXI9XCJSYW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFua30gb25DaGFuZ2U9e2V2ZW50PT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aDI+U3VwZXJ2aXNvcjo8L2gyPlxuICAgICAgICAgIDxoMz57IHRoaXMucHJvcHMuc3VwZXJ2aXNvciA/IHRoaXMucHJvcHMuc3VwZXJ2aXNvci5uYW1lIDogJ05vbmUnfTwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSl9PlNVQk1JVDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAgIH1cbiAgICAgICNmb3JtQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogYmxhY2s7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIGlucHV0OmZvY3VzIHtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzU1NTtcbiAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=components/EmployeeCard.js */'
      }));
    }
  }]);

  return EmployeeCard;
}(_react2.default.Component);

exports.default = EmployeeCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiTGluayIsImFwaVVybCIsIkVtcGxveWVlQ2FyZCIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic3RhdGUiLCJyYW5rIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJwYXRjaCIsInVybCIsInF1ZXJ5IiwiaWQiLCJhbGVydCIsImJpbmQiLCJzdXBlcnZpc29yIiwiZSIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sU0FBTixBQUFlOztJQUVNLEE7d0NBQ25COzt3QkFBQSxBQUFZLE9BQU87aUJBQUE7O3dDQUFBOztrSkFBQSxBQUNYOztVQURXLEFBVW5CLGVBQWUsVUFBQSxBQUFDLE9BQVUsQUFDeEI7WUFBQSxBQUFNLEFBQ047WUFBQSxBQUFLLDJDQUNGLE1BQUEsQUFBTSxPQURULEFBQ2dCLE1BQU8sTUFBQSxBQUFNLE9BRDdCLEFBQ29DLEFBRXJDO0FBZmtCOztVQUFBLEFBaUJuQiwyQkFqQm1COzBGQWlCSixpQkFBQSxBQUFPLE9BQVA7cUNBQUE7O3NFQUFBO29CQUFBOzZDQUFBO21CQUNiO3NCQURhLEFBQ2IsQUFBTTs4QkFDaUIsTUFGVixBQUVlLE9BRmYsQUFFTCxtQkFGSyxBQUVMLE1BRkssQUFFQyxtQkFGRCxBQUVDLEFBQ1I7QUFITzt3QkFHRyxBQUVkO3dCQUxXLEFBR0csQUFJaEI7QUFKZ0IsQUFDZDs7d0JBR0YsQUFBUSxJQUFSLEFBQVksV0FQQyxBQU9iLEFBQXVCO2dDQVBWO3VCQVFQLGdCQUFBLEFBQU0sTUFBTixBQUFlLHdCQUFtQixNQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUFqRCxBQUF1RCxJQVJoRCxBQVFQLEFBQTZEOzttQkFDbkU7c0JBVGEsQUFTYixBQUFNOzttQkFUTzttQkFBQTtnQ0FBQTs7QUFBQTtvQkFBQTtBQWpCSTs7MkJBQUE7Z0NBQUE7QUFBQTtBQUVqQjs7VUFBQSxBQUFLO1lBQ0csTUFESyxBQUNDLEFBQ1o7WUFBTSxNQUZSLEFBQWEsQUFFQyxBQUVkO0FBSmEsQUFDWDtVQUdGLEFBQUssZUFBZSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQUF0QyxBQUNBO1VBQUEsQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBUHJCLEFBT2pCO1dBQ0Q7Ozs7OzZCQXFCUTttQkFDUDs7NkJBQ0EsY0FBQSxTQUFLLElBQUwsQUFBUSw0QkFBUjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGtDQUFBLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCLHlCQUFyQjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwwQkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFGWixBQUVFLEFBQWdCLEFBQ2QsZ0RBQU8sTUFBUCxBQUFZLFFBQU8sYUFBbkIsQUFBK0IsUUFBTyxNQUF0QyxBQUEyQyxRQUFPLE9BQU8sS0FBQSxBQUFLLE1BQTlELEFBQW9FLE1BQU0sVUFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssYUFBZCxBQUFTLEFBQWtCO0FBQS9HLHNCQUFBOztvQkFBQTtzQkFKTixBQUNFLEFBR0ksQUFFSjtBQUZJOzJCQUVKLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFXLGVBQUEsQUFBSyxNQVBwQixBQU1FLEFBQ0UsQUFBc0IsQUFFeEIsd0JBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDSTtBQURKO0FBQUEsa0RBQ1csTUFBUCxBQUFZLFFBQU8sTUFBbkIsQUFBd0IsVUFBUyxLQUFLLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBYSxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQW5DLEFBQThDLE9BQXBGLEFBQTJGLEdBQUcsS0FBOUYsQUFBa0csT0FBTSxhQUF4RyxBQUFvSCxRQUFPLE9BQU8sS0FBQSxBQUFLLE1BQXZJLEFBQTZJLE1BQU0sVUFBVSx5QkFBQTtpQkFBUSxPQUFBLEFBQUssYUFBYixBQUFRLEFBQWtCO0FBQXZMLHNCQUFBOztvQkFBQTtzQkFWTixBQVNFLEFBQ0ksQUFFSjtBQUZJOzJCQUVKLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVpGLEFBWUUsQUFDRSxnQ0FBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxjQUFNLEFBQUssTUFBTCxBQUFXLGFBQWEsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFuQyxBQUE4QyxPQWJ4RCxBQWFJLEFBQTJELEFBQzdELHlCQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsWUFBUSxTQUFTLGlCQUFBLEFBQUMsR0FBRDtpQkFBTyxPQUFBLEFBQUssYUFBWixBQUFPLEFBQWtCO0FBQTFDLHNCQUFBOztvQkFBQTtzQkFBQTtBQUFBO1NBakJOLEFBRUUsQUFjRSxBQUNFO2lCQWpCTjthQURBLEFBQ0EsQUE2Q0Q7QUE3Q0M7Ozs7O0VBaENzQyxnQkFBTSxBOztrQkFBM0IsQSIsImZpbGUiOiJFbXBsb3llZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeCard.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeCard.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xYWQ4NTQ3NjhjMDUzZTI1NDZkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FbXBsb3llZUNhcmQuanM/NTQ1ZTljZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgcmFuazogcHJvcHMucmFuayxcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pXG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IG5hbWUsIHJhbmsgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG5hbWUsXG4gICAgICByYW5rLFxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnUEFZTE9BRCcsIHBheWxvYWQpXG4gICAgYXdhaXQgYXhpb3MucGF0Y2goYCR7YXBpVXJsfS9lbXBsb3llZS8ke3RoaXMucHJvcHMudXJsLnF1ZXJ5LmlkfWAsIHBheWxvYWQpXG4gICAgYWxlcnQoJ0VtcGxveWVlIFVwZGF0ZWQnKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImZvcm1Db250YWluZXJcIj5cbiAgICAgIDxoMT5FZGl0IEVtcGxveWVlPC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aDI+TmFtZTo8L2gyPlxuICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlJhbms6IHt0aGlzLnN0YXRlLnJhbmt9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicmFua1wiIHR5cGU9XCJudW1iZXJcIiBtaW49e3RoaXMucHJvcHMuc3VwZXJ2aXNvciA/IHRoaXMucHJvcHMuc3VwZXJ2aXNvci5yYW5rIDogMH0gbWF4PVwiMTAwXCIgcGxhY2Vob2xkZXI9XCJSYW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFua30gb25DaGFuZ2U9e2V2ZW50PT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aDI+U3VwZXJ2aXNvcjo8L2gyPlxuICAgICAgICAgIDxoMz57IHRoaXMucHJvcHMuc3VwZXJ2aXNvciA/IHRoaXMucHJvcHMuc3VwZXJ2aXNvci5uYW1lIDogJ05vbmUnfTwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSl9PlNVQk1JVDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAgIH1cbiAgICAgICNmb3JtQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogYmxhY2s7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIGlucHV0OmZvY3VzIHtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzU1NTtcbiAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBUUE7QUFFQTtBQUFBO0FBWkE7QUFDQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUhBO0FBQ0E7QUFFQTtBQVBBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBakJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBcUJBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQkE7QUE2Q0E7QUE3Q0E7Ozs7O0FBaENBO0FBQ0E7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=