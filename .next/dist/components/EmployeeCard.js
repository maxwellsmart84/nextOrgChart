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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next/dist/lib/router/index.js');

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
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank, title = _this$state.title;
                payload = {
                  name: name,
                  rank: rank,
                  title: title
                };
                _context.next = 5;
                return _axios2.default.patch(apiUrl + '/employee/' + _this.props.url.query.id, payload);

              case 5:
                _this.setState({ saveCall: true });

              case 6:
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
      name: props.name || '',
      rank: props.rank,
      title: props.title || '',
      saveCall: false
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
      if (dataSaved) {
        savedText = _react2.default.createElement('span', { id: 'savedText', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, 'Employee Information Updated');
      }
      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Edit Employee'), _react2.default.createElement('h3', {
        className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Supervisor: ', this.props.supervisor ? this.props.supervisor.name : 'None'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Name: ', this.state.name), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Title: ', this.state.title), _react2.default.createElement('input', { name: 'title', placeholder: 'Title', type: 'text', value: this.state.title, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Rank:', this.state.rank), _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.supervisor ? this.props.supervisor.rank : 0, max: '99', placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }))), _react2.default.createElement('div', { id: 'buttonBlock', className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('button', { id: 'save', onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'SAVE'), _react2.default.createElement('button', { id: 'delete', onClick: function onClick(e) {
          return _this3.handleDelete(e);
        }, className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'DELETE')), savedText, _react2.default.createElement('br', {
        className: 'jsx-1013743559',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '1013743559',
        css: '#savedText{color:limegreen;margin-left:12px;}#buttonBlock{padding-top:20px;margin-left:-10%;}a{text-decoration:none;color:black;}#formContainer{width:100%;padding-bottom:5%;margin-left:20%;margin-right:20%;}input{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}button{background-color:black;margin-left:10%;cursor:pointer;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}#save{margin-bottom:20px;}#save:hover{background-color:#79589F;}#delete{background-color:#D11F33;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFeUIsQUFHc0IsQUFJRyxBQUlLLEFBSVYsQUFNRCxBQU1ZLEFBSXRCLEFBWUgsQUFFNEIsQUFJNUIsVUEzQnFCLENBTkEsS0FaSCxDQUtsQixFQWtDQyxFQTlCRCxDQWVDLENBR2tCLEVBZWxCLEFBR0EsR0ExQmUsQ0FORyxJQVpsQixBQVFBLENBSkEsS0F1QmlCLEVBUk8sSUFOTCxTQWVMLFFBZGQsQ0FNQSxHQVNjLFlBQ00sa0JBQ0Esa0JBQ0cscUJBQ0EscUJBQ04sZUFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9FbXBsb3llZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBhcGlVcmwgPSAnL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1wbG95ZWVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IHByb3BzLm5hbWUgfHwgJycsXG4gICAgICByYW5rOiBwcm9wcy5yYW5rLFxuICAgICAgdGl0bGU6IHByb3BzLnRpdGxlIHx8ICcnLFxuICAgICAgc2F2ZUNhbGw6IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZURlbGV0ZSA9IHRoaXMuaGFuZGxlRGVsZXRlLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSlcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgbmFtZSwgcmFuaywgdGl0bGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG5hbWUsXG4gICAgICByYW5rLFxuICAgICAgdGl0bGUsXG4gICAgfVxuICAgIGF3YWl0IGF4aW9zLnBhdGNoKGAke2FwaVVybH0vZW1wbG95ZWUvJHt0aGlzLnByb3BzLnVybC5xdWVyeS5pZH1gLCBwYXlsb2FkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2F2ZUNhbGw6IHRydWUgfSk7XG4gIH1cblxuICBoYW5kbGVEZWxldGUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHthcGlVcmx9L2VtcGxveWVlLyR7dGhpcy5wcm9wcy51cmwucXVlcnkuaWR9YCk7XG4gICAgUm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRhU2F2ZWQgPSB0aGlzLnN0YXRlLnNhdmVDYWxsO1xuICAgIGxldCBzYXZlZFRleHQgPSBudWxsO1xuICAgIGlmIChkYXRhU2F2ZWQpIHtcbiAgICAgIHNhdmVkVGV4dCA9IDxzcGFuIGlkPVwic2F2ZWRUZXh0XCI+RW1wbG95ZWUgSW5mb3JtYXRpb24gVXBkYXRlZDwvc3Bhbj5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiZm9ybUNvbnRhaW5lclwiPlxuICAgICAgPGgxPkVkaXQgRW1wbG95ZWU8L2gxPlxuICAgICAgPGgzPlN1cGVydmlzb3I6IHt0aGlzLnByb3BzLnN1cGVydmlzb3IgPyB0aGlzLnByb3BzLnN1cGVydmlzb3IubmFtZSA6ICdOb25lJ308L2gzPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxoMz5OYW1lOiB7dGhpcy5zdGF0ZS5uYW1lfTwvaDM+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGgzPlRpdGxlOiB7dGhpcy5zdGF0ZS50aXRsZX08L2gzPlxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxoMz5SYW5rOnt0aGlzLnN0YXRlLnJhbmt9PC9oMz5cbiAgICAgICAgICA8aW5wdXQgbmFtZT1cInJhbmtcIiB0eXBlPVwibnVtYmVyXCIgbWluPXt0aGlzLnByb3BzLnN1cGVydmlzb3IgPyB0aGlzLnByb3BzLnN1cGVydmlzb3IucmFuayA6IDB9IG1heD1cIjk5XCIgcGxhY2Vob2xkZXI9XCJSYW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFua30gb25DaGFuZ2U9e2V2ZW50PT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uQmxvY2tcIj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwic2F2ZVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlKX0+U0FWRTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJkZWxldGVcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVEZWxldGUoZSl9PkRFTEVURTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3NhdmVkVGV4dH1cbiAgICAgICAgPGJyIC8+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgI3NhdmVkVGV4dCB7XG4gICAgICBjb2xvcjpsaW1lZ3JlZW47XG4gICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgIH1cbiAgICAgICNidXR0b25CbG9jayB7XG4gICAgICAgIHBhZGRpbmctdG9wOjIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAlXG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAgIH1cbiAgICAgICNmb3JtQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIGlucHV0OmZvY3VzIHtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzU1NTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgI3NhdmUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgICB9XG4gICAgICAjc2F2ZTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTU4OUY7XG4gICAgICB9XG4gICAgICAjZGVsZXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QxMUYzM1xuICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=components/EmployeeCard.js */'
      }));
    }
  }]);

  return EmployeeCard;
}(_react2.default.Component);

exports.default = EmployeeCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiTGluayIsIlJvdXRlciIsImFwaVVybCIsIkVtcGxveWVlQ2FyZCIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic3RhdGUiLCJyYW5rIiwidGl0bGUiLCJwYXlsb2FkIiwicGF0Y2giLCJ1cmwiLCJxdWVyeSIsImlkIiwic2F2ZUNhbGwiLCJoYW5kbGVEZWxldGUiLCJkZWxldGUiLCJwdXNoIiwiYmluZCIsImRhdGFTYXZlZCIsInNhdmVkVGV4dCIsInN1cGVydmlzb3IiLCJlIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sU0FBTixBQUFlOztJQUVNLEE7d0NBQ25COzt3QkFBQSxBQUFZLE9BQU87aUJBQUE7O3dDQUFBOztrSkFBQSxBQUNYOztVQURXLEFBYW5CLGVBQWUsVUFBQSxBQUFDLE9BQVUsQUFDeEI7WUFBQSxBQUFNLEFBQ047WUFBQSxBQUFLLDJDQUNGLE1BQUEsQUFBTSxPQURULEFBQ2dCLE1BQU8sTUFBQSxBQUFNLE9BRDdCLEFBQ29DLEFBRXJDO0FBbEJrQjs7VUFBQSxBQW9CbkIsMkJBcEJtQjswRkFvQkosaUJBQUEsQUFBTyxPQUFQOzRDQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFDYjtzQkFEYSxBQUNiLEFBQU07OEJBQ3dCLE1BRmpCLEFBRXNCLE9BRnRCLEFBRUwsbUJBRkssQUFFTCxNQUZLLEFBRUMsbUJBRkQsQUFFQyxNQUZELEFBRU8sb0JBRlAsQUFFTyxBQUNkO0FBSE87d0JBR0csQUFFZDt3QkFGYyxB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