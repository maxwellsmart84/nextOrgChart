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
      name: props.name,
      rank: props.rank,
      title: props.title,
      saveCall: false,
      nameInvalid: false,
      isNotOwner: _this.props.supervisor && _this.props.supervisor.id !== 'None'
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleDelete = _this.handleDelete.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EmployeeCard, [{
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

      var dataSaved = this.state.saveCall;
      var savedText = null;
      var nameError = null;

      if (this.state.nameInvalid) {
        nameError = _react2.default.createElement('span', { className: 'error', __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, 'Name Required');
      }
      if (dataSaved) {
        savedText = _react2.default.createElement('span', { id: 'savedText', __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, 'Employee Information Updated');
      }
      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Edit Employee'), _react2.default.createElement('h3', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Supervisor: ', this.props.supervisor ? this.props.supervisor.name : 'None'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Name: ', this.props.name), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, nameError), _react2.default.createElement('label', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Title: ', this.props.title), _react2.default.createElement('input', { name: 'title', placeholder: 'Title', type: 'text', value: this.state.title, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Rank: ', this.state.rank), _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.supervisor ? this.props.supervisor.rank : 0, max: '99', placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }))), _react2.default.createElement('div', { id: 'buttonBlock', className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement('button', { id: 'save', onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'SAVE'), this.state.isNotOwner && _react2.default.createElement('button', { id: 'delete', onClick: function onClick(e) {
          return _this3.handleDelete(e);
        }, className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, 'DELETE')), savedText, _react2.default.createElement('br', {
        className: 'jsx-1305359047',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '1305359047',
        css: '.error{color:red;font-size:.8em;padding-left:2px;}#savedText{color:limegreen;margin-left:12px;}#buttonBlock{padding-top:20px;margin-left:-10%;}a{text-decoration:none;color:black;}a:hover{color:#79589F;}input{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}button{background-color:black;margin-left:10%;cursor:pointer;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}#save{margin-bottom:20px;}#save:hover{background-color:#79589F;}#delete{background-color:#D11F33;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlHeUIsQUFHa0IsQUFLTSxBQUlDLEFBSUssQUFJUixBQUdILEFBTVksQUFJdEIsQUFZSCxBQUU0QixBQUk1QixVQS9DaUIsQUFvQkksSUFIcEIsRUFabUIsQ0FLcEIsRUErQkMsRUEzQkQsQ0FZQyxDQUdrQixFQTVCQSxBQTJDbEIsQUFHQSxHQTFCZSxLQWZmLEFBUUEsQ0FKQSxLQW9CaUIsRUFSTyxDQXBCeEIsWUE2QmMsU0FSZCxHQVNjLFlBQ00sa0JBQ0Esa0JBQ0cscUJBQ0EscUJBQ04sZUFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9FbXBsb3llZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBhcGlVcmwgPSAnL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1wbG95ZWVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICByYW5rOiBwcm9wcy5yYW5rLFxuICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgc2F2ZUNhbGw6IGZhbHNlLFxuICAgICAgbmFtZUludmFsaWQ6IGZhbHNlLFxuICAgICAgaXNOb3RPd25lcjogdGhpcy5wcm9wcy5zdXBlcnZpc29yICYmIHRoaXMucHJvcHMuc3VwZXJ2aXNvci5pZCAhPT0gJ05vbmUnLFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlRGVsZXRlID0gdGhpcy5oYW5kbGVEZWxldGUuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zdXBlcnZpc29yICE9PSB1bmRlZmluZWQgfHwgJ05vbmUnKSB7XG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTm90T3duZXI6IHRydWUgfSk7XG4gICAgfVxuICAgIGlmIChuZXh0UHJvcHMubmFtZSAhPT0gdGhpcy5zdGF0ZS5uYW1lKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogbmV4dFByb3BzLm5hbWUgfSlcbiAgICB9XG4gICAgaWYgKG5leHRQcm9wcy50aXRsZSAhPT0gdGhpcy5zdGF0ZS50aXRsZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBuZXh0UHJvcHMudGl0bGUgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pXG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5uYW1lID09PSB1bmRlZmluZWQgfHwgdGhpcy5zdGF0ZS5uYW1lID09PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWVJbnZhbGlkOiB0cnVlIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgcmFuaywgdGl0bGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICByYW5rLFxuICAgICAgICB0aXRsZSxcbiAgICAgIH1cbiAgICAgIGF3YWl0IGF4aW9zLnBhdGNoKGAke2FwaVVybH0vZW1wbG95ZWUvJHt0aGlzLnByb3BzLnVybC5xdWVyeS5pZH1gLCBwYXlsb2FkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQ2FsbDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEZWxldGUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHthcGlVcmx9L2VtcGxveWVlLyR7dGhpcy5wcm9wcy51cmwucXVlcnkuaWR9YCk7XG4gICAgUm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRhU2F2ZWQgPSB0aGlzLnN0YXRlLnNhdmVDYWxsO1xuICAgIGxldCBzYXZlZFRleHQgPSBudWxsO1xuICAgIGxldCBuYW1lRXJyb3IgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUubmFtZUludmFsaWQpIHtcbiAgICAgIG5hbWVFcnJvciA9IDxzcGFuIGNsYXNzTmFtZT1cImVycm9yXCI+TmFtZSBSZXF1aXJlZDwvc3Bhbj5cbiAgICB9XG4gICAgaWYgKGRhdGFTYXZlZCkge1xuICAgICAgc2F2ZWRUZXh0ID0gPHNwYW4gaWQ9XCJzYXZlZFRleHRcIj5FbXBsb3llZSBJbmZvcm1hdGlvbiBVcGRhdGVkPC9zcGFuPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJmb3JtQ29udGFpbmVyXCI+XG4gICAgICA8aDE+RWRpdCBFbXBsb3llZTwvaDE+XG4gICAgICAgIDxoMz5TdXBlcnZpc29yOiB7dGhpcy5wcm9wcy5zdXBlcnZpc29yID8gdGhpcy5wcm9wcy5zdXBlcnZpc29yLm5hbWUgOiAnTm9uZSd9PC9oMz5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aDM+TmFtZToge3RoaXMucHJvcHMubmFtZX08L2gzPlxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7bmFtZUVycm9yfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxoMz5UaXRsZToge3RoaXMucHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aDM+UmFuazoge3RoaXMuc3RhdGUucmFua308L2gzPlxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwicmFua1wiIHR5cGU9XCJudW1iZXJcIiBtaW49e3RoaXMucHJvcHMuc3VwZXJ2aXNvciA/IHRoaXMucHJvcHMuc3VwZXJ2aXNvci5yYW5rIDogMH0gbWF4PVwiOTlcIiBwbGFjZWhvbGRlcj1cIlJhbmtcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yYW5rfSBvbkNoYW5nZT17ZXZlbnQ9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgaWQ9XCJidXR0b25CbG9ja1wiPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJzYXZlXCIgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlU3VibWl0KGUpfT5TQVZFPC9idXR0b24+XG4gICAgICAgICAge3RoaXMuc3RhdGUuaXNOb3RPd25lciAmJlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJkZWxldGVcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVEZWxldGUoZSl9PkRFTEVURTwvYnV0dG9uPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzYXZlZFRleHR9XG4gICAgICAgIDxiciAvPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGNvbG9yOnJlZDtcbiAgICAgICAgZm9udC1zaXplOi44ZW07XG4gICAgICAgIHBhZGRpbmctbGVmdCAycHg7XG4gICAgICB9XG4gICAgICAjc2F2ZWRUZXh0IHtcbiAgICAgICAgY29sb3I6bGltZWdyZWVuO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgIH1cbiAgICAgICNidXR0b25CbG9jayB7XG4gICAgICAgIHBhZGRpbmctdG9wOjIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAlXG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAgIH1cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjojNzk1ODlGO1xuICAgICAgfVxuICAgICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM1NTU7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICAgICNzYXZlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxuICAgICAgfVxuICAgICAgI3NhdmU6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1ODlGO1xuICAgICAgfVxuICAgICAgI2RlbGV0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEMTFGMzNcbiAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=components/EmployeeCard.js */'
      }));
    }
  }]);

  return EmployeeCard;
}(_react2.default.Component);

exports.default = EmployeeCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiTGluayIsIlJvdXRlciIsImFwaVVybCIsIkVtcGxveWVlQ2FyZCIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic3RhdGUiLCJ1bmRlZmluZWQiLCJuYW1lSW52YWxpZCIsInJhbmsiLCJ0aXRsZSIsInBheWxvYWQiLCJwYXRjaCIsInVybCIsInF1ZXJ5IiwiaWQiLCJzYXZlQ2FsbCIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZSIsInB1c2giLCJpc05vdE93bmVyIiwic3VwZXJ2aXNvciIsImJpbmQiLCJuZXh0UHJvcHMiLCJkYXRhU2F2ZWQiLCJzYXZlZFRleHQiLCJuYW1lRXJyb3IiLCJlIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sU0FBTixBQUFlOztJLEFBRU07d0NBQ25COzt3QkFBQSxBQUFZLE9BQU87aUJBQUE7O3dDQUFBOztrSkFBQSxBQUNYOztVQURXLEFBNEJuQixlQUFlLFVBQUEsQUFBQyxPQUFVLEFBQ3hCO1lBQUEsQUFBTSxBQUNOO1lBQUEsQUFBSywyQ0FDRixNQUFBLEFBQU0sT0FEVCxBQUNnQixNQUFPLE1BQUEsQUFBTSxPQUQ3QixBQUNvQyxBQUVyQztBQWpDa0I7O1VBQUEsQUFtQ25CLDJCQW5DbUI7MEZBbUNKLGlCQUFBLEFBQU8sT0FBUDs0Q0FBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ2I7c0JBRGEsQUFDYixBQUFNOztzQkFDRixNQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsYUFBYSxNQUFB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O0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBVyxlQUFBLEFBQUssTUFEbEIsQUFDRSxBQUFzQixBQUN0QixnREFBTyxNQUFQLEFBQVksUUFBTyxNQUFuQixBQUF3QixVQUFTLEtBQUssS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFhLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBbkMsQUFBOEMsT0FBcEYsQUFBMkYsR0FBRyxLQUE5RixBQUFrRyxNQUFLLGFBQXZHLEFBQW1ILFFBQU8sT0FBTyxLQUFBLEFBQUssTUFBdEksQUFBNEksTUFBTSxVQUFVLHlCQUFBO2lCQUFRLE9BQUEsQUFBSyxhQUFiLEFBQVEsQUFBa0I7QUFBdEwsc0JBQUE7O29CQUFBO3NCQWpCTixBQUdFLEFBWUUsQUFFRSxBQUdGO0FBSEU7NEJBR0YsY0FBQSxTQUFLLElBQUwsQUFBUSwwQkFBUjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsWUFBUSxJQUFSLEFBQVcsUUFBTyxTQUFTLGlCQUFBLEFBQUMsR0FBRDtpQkFBTyxPQUFBLEFBQUssYUFBWixBQUFPLEFBQWtCO0FBQXBELHNCQUFBOztvQkFBQTtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNDLGNBQUEsQUFBSyxNQUFMLEFBQVcsOEJBQ1osY0FBQSxZQUFRLElBQVIsQUFBVyxVQUFTLFNBQVMsaUJBQUEsQUFBQyxHQUFEO2lCQUFPLE9BQUEsQUFBSyxhQUFaLEFBQU8sQUFBa0I7QUFBdEQsc0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7T0FBQSxFQXZCTixBQW9CSSxBQUdFLEFBR0QsWUExQkwsQUEyQkk7bUJBQUE7O29CQUFBO3NCQTNCSixBQTJCSTtBQUFBO0FBQUE7aUJBM0JKO2FBREEsQUFDQSxBQW1GRDtBQW5GQzs7Ozs7RUF0RXNDLGdCQUFNLEE7O2tCQUEzQixBIiwiZmlsZSI6IkVtcGxveWVlQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9