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

var _link = __webpack_require__(393);

var _link2 = _interopRequireDefault(_link);

var _index = __webpack_require__(101);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeCard.js';


var apiUrl = '/api';

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
        var _this$state, name, rank, title, payload;

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
                _context.next = 10;
                break;

              case 5:
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank, title = _this$state.title;
                payload = {
                  name: name,
                  rank: rank,
                  title: title
                };
                _context.next = 9;
                return _axios2.default.patch(apiUrl + '/employee/' + _this.props.url.query.id, payload);

              case 9:
                _this.setState({ saveCall: true });

              case 10:
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

    _this.handleDelete = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _context2.next = 3;
                return _axios2.default.delete(apiUrl + '/employee/' + _this.props.url.query.id);

              case 3:
                _index2.default.push('/');

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.state = {
      name: '',
      rank: props.rank,
      title: '',
      saveCall: false,
      nameInvalid: false
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleDelete = _this.handleDelete.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EmployeeCard, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var dataSaved = this.state.saveCall;
      var savedText = null;
      var nameError = null;

      if (this.state.nameInvalid) {
        nameError = _react2.default.createElement('span', { className: 'error', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, 'Name Required');
      }
      if (dataSaved) {
        savedText = _react2.default.createElement('span', { id: 'savedText', __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, 'Employee Information Updated');
      }
      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Edit Employee'), _react2.default.createElement('h3', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Supervisor: ', _react2.default.createElement(_link2.default, { href: '/employee?id=' + (this.props.supervisorId ? this.props.supervisorId : this.props.url.query.id), __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.props.supervisor ? this.props.supervisor.name : 'None'))), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Name: ', this.props.name), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, nameError), _react2.default.createElement('label', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'Title: ', this.props.title), _react2.default.createElement('input', { name: 'title', placeholder: 'Title', type: 'text', value: this.state.title, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Rank: ', this.state.rank), _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.supervisor ? this.props.supervisor.rank : 0, max: '99', placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }))), _react2.default.createElement('div', { id: 'buttonBlock', className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('button', { id: 'save', onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, 'SAVE'), _react2.default.createElement('button', { id: 'delete', onClick: function onClick(e) {
          return _this3.handleDelete(e);
        }, className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'DELETE')), savedText, _react2.default.createElement('br', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '1305359047',
        css: '.error{color:red;font-size:.8em;padding-left:2px;}#savedText{color:limegreen;margin-left:12px;}#buttonBlock{padding-top:20px;margin-left:-10%;}a{text-decoration:none;color:black;}a:hover{color:#79589F;}input{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}button{background-color:black;margin-left:10%;cursor:pointer;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}#save{margin-bottom:20px;}#save:hover{background-color:#79589F;}#delete{background-color:#D11F33;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGeUIsQUFHa0IsQUFLTSxBQUlDLEFBSUssQUFJUixBQUdILEFBTVksQUFJdEIsQUFZSCxBQUU0QixBQUk1QixVQS9DaUIsQUFvQkksSUFIcEIsRUFabUIsQ0FLcEIsRUErQkMsRUEzQkQsQ0FZQyxDQUdrQixFQTVCQSxBQTJDbEIsQUFHQSxHQTFCZSxLQWZmLEFBUUEsQ0FKQSxLQW9CaUIsRUFSTyxDQXBCeEIsWUE2QmMsU0FSZCxHQVNjLFlBQ00sa0JBQ0Esa0JBQ0cscUJBQ0EscUJBQ04sZUFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9FbXBsb3llZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBhcGlVcmwgPSAnL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1wbG95ZWVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcmFuazogcHJvcHMucmFuayxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHNhdmVDYWxsOiBmYWxzZSxcbiAgICAgIG5hbWVJbnZhbGlkOiBmYWxzZSxcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVEZWxldGUgPSB0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pXG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5uYW1lID09PSB1bmRlZmluZWQgfHwgdGhpcy5zdGF0ZS5uYW1lID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWVJbnZhbGlkOiB0cnVlIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgcmFuaywgdGl0bGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICByYW5rLFxuICAgICAgICB0aXRsZSxcbiAgICAgIH1cbiAgICAgIGF3YWl0IGF4aW9zLnBhdGNoKGAke2FwaVVybH0vZW1wbG95ZWUvJHt0aGlzLnByb3BzLnVybC5xdWVyeS5pZH1gLCBwYXlsb2FkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQ2FsbDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEZWxldGUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHthcGlVcmx9L2VtcGxveWVlLyR7dGhpcy5wcm9wcy51cmwucXVlcnkuaWR9YCk7XG4gICAgUm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRhU2F2ZWQgPSB0aGlzLnN0YXRlLnNhdmVDYWxsO1xuICAgIGxldCBzYXZlZFRleHQgPSBudWxsO1xuICAgIGxldCBuYW1lRXJyb3IgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUubmFtZUludmFsaWQpIHtcbiAgICAgIG5hbWVFcnJvciA9IDxzcGFuIGNsYXNzTmFtZT1cImVycm9yXCI+TmFtZSBSZXF1aXJlZDwvc3Bhbj5cbiAgICB9XG4gICAgaWYgKGRhdGFTYXZlZCkge1xuICAgICAgc2F2ZWRUZXh0ID0gPHNwYW4gaWQ9XCJzYXZlZFRleHRcIj5FbXBsb3llZSBJbmZvcm1hdGlvbiBVcGRhdGVkPC9zcGFuPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJmb3JtQ29udGFpbmVyXCI+XG4gICAgICA8aDE+RWRpdCBFbXBsb3llZTwvaDE+XG4gICAgICAgIDxoMz5TdXBlcnZpc29yOiA8TGluayBocmVmPXtgL2VtcGxveWVlP2lkPSR7dGhpcy5wcm9wcy5zdXBlcnZpc29ySWQgPyB0aGlzLnByb3BzLnN1cGVydmlzb3JJZCA6IHRoaXMucHJvcHMudXJsLnF1ZXJ5LmlkfWB9PjxhPnt0aGlzLnByb3BzLnN1cGVydmlzb3IgPyB0aGlzLnByb3BzLnN1cGVydmlzb3IubmFtZSA6ICdOb25lJ308L2E+PC9MaW5rPjwvaDM+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGgzPk5hbWU6IHt0aGlzLnByb3BzLm5hbWV9PC9oMz5cbiAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge25hbWVFcnJvcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aDM+VGl0bGU6IHt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGgzPlJhbms6IHt0aGlzLnN0YXRlLnJhbmt9PC9oMz5cbiAgICAgICAgICA8aW5wdXQgbmFtZT1cInJhbmtcIiB0eXBlPVwibnVtYmVyXCIgbWluPXt0aGlzLnByb3BzLnN1cGVydmlzb3IgPyB0aGlzLnByb3BzLnN1cGVydmlzb3IucmFuayA6IDB9IG1heD1cIjk5XCIgcGxhY2Vob2xkZXI9XCJSYW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFua30gb25DaGFuZ2U9e2V2ZW50PT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uQmxvY2tcIj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwic2F2ZVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlKX0+U0FWRTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJkZWxldGVcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVEZWxldGUoZSl9PkRFTEVURTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3NhdmVkVGV4dH1cbiAgICAgICAgPGJyIC8+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgLmVycm9yIHtcbiAgICAgICAgY29sb3I6cmVkO1xuICAgICAgICBmb250LXNpemU6LjhlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0IDJweDtcbiAgICAgIH1cbiAgICAgICNzYXZlZFRleHQge1xuICAgICAgICBjb2xvcjpsaW1lZ3JlZW47XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgfVxuICAgICAgI2J1dHRvbkJsb2NrIHtcbiAgICAgICAgcGFkZGluZy10b3A6MjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMCVcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibGFja1xuICAgICAgfVxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiM3OTU4OUY7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIGlucHV0OmZvY3VzIHtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzU1NTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgI3NhdmUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgICB9XG4gICAgICAjc2F2ZTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTU4OUY7XG4gICAgICB9XG4gICAgICAjZGVsZXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QxMUYzM1xuICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=components/EmployeeCard.js */'
      }));
    }
  }]);

  return EmployeeCard;
}(_react2.default.Component);

exports.default = EmployeeCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiTGluayIsIlJvdXRlciIsImFwaVVybCIsIkVtcGxveWVlQ2FyZCIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic3RhdGUiLCJ1bmRlZmluZWQiLCJuYW1lSW52YWxpZCIsInJhbmsiLCJ0aXRsZSIsInBheWxvYWQiLCJwYXRjaCIsInVybCIsInF1ZXJ5IiwiaWQiLCJzYXZlQ2FsbCIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZSIsInB1c2giLCJiaW5kIiwiZGF0YVNhdmVkIiwic2F2ZWRUZXh0IiwibmFtZUVycm9yIiwic3VwZXJ2aXNvcklkIiwic3VwZXJ2aXNvciIsImUiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFOLEFBQWU7O0ksQUFFTTt3Q0FDbkI7O3dCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7O2tKQUFBLEFBQ1g7O1VBRFcsQUFjbkIsZUFBZSxVQUFBLEFBQUMsT0FBVSxBQUN4QjtZQUFBLEFBQU0sQUFDTjtZQUFBLEFBQUssMkNBQ0YsTUFBQSxBQUFNLE9BRFQsQUFDZ0IsTUFBTyxNQUFBLEFBQU0sT0FEN0IsQUFDb0MsQUFFckM7QUFuQmtCOztVQUFBLEFBcUJuQiwyQkFyQm1COzBGQXFCSixpQkFBQSxBQUFPLE9BQVA7NENBQUE7O3NFQUFBO29CQUFBOzZDQUFBO21CQUNiO3NCQURhLEFBQ2IsQUFBTTs7c0JBQ0YsTUFBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLGFBQWEsTUFBQSxBQUFLLE1BQUws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TyxPQUFPLEtBQUEsQUFBSyxNQUF0SSxBQUE0SSxNQUFNLFVBQVUseUJBQUE7aUJBQVEsT0FBQSxBQUFLLGFBQWIsQUFBUSxBQUFrQjtBQUF0TCxzQkFBQTs7b0JBQUE7c0JBakJOLEFBR0UsQUFZRSxBQUVFLEFBR0Y7QUFIRTs0QkFHRixjQUFBLFNBQUssSUFBTCxBQUFRLDBCQUFSOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxZQUFRLElBQVIsQUFBVyxRQUFPLFNBQVMsaUJBQUEsQUFBQyxHQUFEO2lCQUFPLE9BQUEsQUFBSyxhQUFaLEFBQU8sQUFBa0I7QUFBcEQsc0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0EseUJBQUEsY0FBQSxZQUFRLElBQVIsQUFBVyxVQUFTLFNBQVMsaUJBQUEsQUFBQyxHQUFEO2lCQUFPLE9BQUEsQUFBSyxhQUFaLEFBQU8sQUFBa0I7QUFBdEQsc0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7U0F0Qk4sQUFvQkksQUFFRSxBQUVELFlBeEJMLEFBeUJJO21CQUFBOztvQkFBQTtzQkF6QkosQUF5Qkk7QUFBQTtBQUFBO2lCQXpCSjthQURBLEFBQ0EsQUFpRkQ7QUFqRkM7Ozs7O0VBeERzQyxnQkFBTSxBOztrQkFBM0IsQSIsImZpbGUiOiJFbXBsb3llZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeCard.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeCard.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi41ZGUwMzM5MTZmNzY1NWY1ZjNmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FbXBsb3llZUNhcmQuanM/NDk0MGE4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBhcGlVcmwgPSAnL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1wbG95ZWVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcmFuazogcHJvcHMucmFuayxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHNhdmVDYWxsOiBmYWxzZSxcbiAgICAgIG5hbWVJbnZhbGlkOiBmYWxzZSxcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVEZWxldGUgPSB0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pXG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5uYW1lID09PSB1bmRlZmluZWQgfHwgdGhpcy5zdGF0ZS5uYW1lID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWVJbnZhbGlkOiB0cnVlIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgcmFuaywgdGl0bGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICByYW5rLFxuICAgICAgICB0aXRsZSxcbiAgICAgIH1cbiAgICAgIGF3YWl0IGF4aW9zLnBhdGNoKGAke2FwaVVybH0vZW1wbG95ZWUvJHt0aGlzLnByb3BzLnVybC5xdWVyeS5pZH1gLCBwYXlsb2FkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQ2FsbDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEZWxldGUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHthcGlVcmx9L2VtcGxveWVlLyR7dGhpcy5wcm9wcy51cmwucXVlcnkuaWR9YCk7XG4gICAgUm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRhU2F2ZWQgPSB0aGlzLnN0YXRlLnNhdmVDYWxsO1xuICAgIGxldCBzYXZlZFRleHQgPSBudWxsO1xuICAgIGxldCBuYW1lRXJyb3IgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUubmFtZUludmFsaWQpIHtcbiAgICAgIG5hbWVFcnJvciA9IDxzcGFuIGNsYXNzTmFtZT1cImVycm9yXCI+TmFtZSBSZXF1aXJlZDwvc3Bhbj5cbiAgICB9XG4gICAgaWYgKGRhdGFTYXZlZCkge1xuICAgICAgc2F2ZWRUZXh0ID0gPHNwYW4gaWQ9XCJzYXZlZFRleHRcIj5FbXBsb3llZSBJbmZvcm1hdGlvbiBVcGRhdGVkPC9zcGFuPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJmb3JtQ29udGFpbmVyXCI+XG4gICAgICA8aDE+RWRpdCBFbXBsb3llZTwvaDE+XG4gICAgICAgIDxoMz5TdXBlcnZpc29yOiA8TGluayBocmVmPXtgL2VtcGxveWVlP2lkPSR7dGhpcy5wcm9wcy5zdXBlcnZpc29ySWQgPyB0aGlzLnByb3BzLnN1cGVydmlzb3JJZCA6IHRoaXMucHJvcHMudXJsLnF1ZXJ5LmlkfWB9PjxhPnt0aGlzLnByb3BzLnN1cGVydmlzb3IgPyB0aGlzLnByb3BzLnN1cGVydmlzb3IubmFtZSA6ICdOb25lJ308L2E+PC9MaW5rPjwvaDM+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGgzPk5hbWU6IHt0aGlzLnByb3BzLm5hbWV9PC9oMz5cbiAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge25hbWVFcnJvcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aDM+VGl0bGU6IHt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGgzPlJhbms6IHt0aGlzLnN0YXRlLnJhbmt9PC9oMz5cbiAgICAgICAgICA8aW5wdXQgbmFtZT1cInJhbmtcIiB0eXBlPVwibnVtYmVyXCIgbWluPXt0aGlzLnByb3BzLnN1cGVydmlzb3IgPyB0aGlzLnByb3BzLnN1cGVydmlzb3IucmFuayA6IDB9IG1heD1cIjk5XCIgcGxhY2Vob2xkZXI9XCJSYW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFua30gb25DaGFuZ2U9e2V2ZW50PT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uQmxvY2tcIj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwic2F2ZVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlKX0+U0FWRTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJkZWxldGVcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVEZWxldGUoZSl9PkRFTEVURTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3NhdmVkVGV4dH1cbiAgICAgICAgPGJyIC8+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgLmVycm9yIHtcbiAgICAgICAgY29sb3I6cmVkO1xuICAgICAgICBmb250LXNpemU6LjhlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0IDJweDtcbiAgICAgIH1cbiAgICAgICNzYXZlZFRleHQge1xuICAgICAgICBjb2xvcjpsaW1lZ3JlZW47XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgfVxuICAgICAgI2J1dHRvbkJsb2NrIHtcbiAgICAgICAgcGFkZGluZy10b3A6MjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMCVcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibGFja1xuICAgICAgfVxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiM3OTU4OUY7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIGlucHV0OmZvY3VzIHtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzU1NTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgI3NhdmUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgICB9XG4gICAgICAjc2F2ZTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTU4OUY7XG4gICAgICB9XG4gICAgICAjZGVsZXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QxMUYzM1xuICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9FbXBsb3llZUNhcmQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFZQTtBQUVBO0FBQUE7QUFoQkE7QUFDQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUhBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFMQTtBQVFBO0FBQ0E7QUFIQTtBQUNBO0FBUEE7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBYkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFyQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFvQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQXJDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQU5BO0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBK0JBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF6QkE7QUFpRkE7QUFqRkE7Ozs7O0FBeERBO0FBQ0E7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=