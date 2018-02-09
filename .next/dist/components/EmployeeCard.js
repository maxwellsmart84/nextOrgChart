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
        var titleRegEx, _this$state, name, rank, title, payload;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                titleRegEx = RegExp('[\w\s.\\-][0-9]');

                if (!(_this.state.name === undefined || _this.state.name === '')) {
                  _context.next = 6;
                  break;
                }

                _this.setState({ nameInvalid: true });
                _context.next = 19;
                break;

              case 6:
                if (titleRegEx.test(_this.state.title)) {
                  _context.next = 10;
                  break;
                }

                _this.setState({ titleInvalid: true });
                _context.next = 19;
                break;

              case 10:
                if (!(_this.state.rank < _this.props.rank)) {
                  _context.next = 14;
                  break;
                }

                _this.setState({ rankInvalid: true });
                _context.next = 19;
                break;

              case 14:
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank, title = _this$state.title;
                payload = {
                  name: name,
                  rank: rank,
                  title: title
                };
                _context.next = 18;
                return _axios2.default.patch(apiUrl + '/employee/' + _this.props.url.query.id, payload);

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
      rankInvalid: false,
      titleInvalid: false,
      isText: true,
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
      if (nextProps.supervisor && nextProps.supervisor !== 'None') {
        this.setState({ isNotOwner: true });
      }
      if (nextProps.name !== this.state.name) {
        this.setState({ name: nextProps.name });
      }
      if (nextProps.title !== this.state.title) {
        this.setState({ title: nextProps.title });
      }
      if (nextProps.rank !== this.state.rank) {
        this.setState({ rank: nextProps.rank });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var dataSaved = this.state.saveCall;
      var savedText = null;
      var nameError = null;
      var rankError = null;
      var titleError = null;
      var highestWorkerRank = this.props.workers.length !== 0 ? this.props.workers[0].rank : 99;

      if (this.state.nameInvalid) {
        nameError = _react2.default.createElement('span', { className: 'error', __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, 'Name Required');
      }
      if (this.state.rankInvalid) {
        rankError = _react2.default.createElement('span', { className: 'error', __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, 'Rank out of bounds');
      }
      if (dataSaved) {
        savedText = _react2.default.createElement('span', { id: 'savedText', __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, 'Employee Information Updated');
      }
      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'Edit Employee'), _react2.default.createElement('h3', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'Supervisor: ', this.props.supervisor ? this.props.supervisor.name : 'None'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, 'Name: ', this.props.name)), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, nameError), _react2.default.createElement('label', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, 'Title: ', this.props.title)), _react2.default.createElement('input', { name: 'title', placeholder: 'Title', type: 'text', value: this.state.title, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, titleError), _react2.default.createElement('label', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, 'Rank: ', this.state.rank)), _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.supervisor ? this.props.supervisor.rank : 0, max: highestWorkerRank, placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, rankError)), _react2.default.createElement('div', { id: 'buttonBlock', className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('button', { id: 'save', onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, 'SAVE'), this.state.isNotOwner && _react2.default.createElement('button', { id: 'delete', onClick: function onClick(e) {
          return _this3.handleDelete(e);
        }, className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, 'DELETE')), savedText, _react2.default.createElement('br', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '531306699',
        css: '.error{color:red;font-size:.8em;padding-left:2px;}#savedText{color:limegreen;margin-left:12px;}#buttonBlock{padding-top:20px;margin-left:-10%;}a{text-decoration:none;color:black;}a:hover{color:#79589F;}input{width:100%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}button{background-color:black;margin-left:10%;cursor:pointer;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}#save{margin-bottom:20px;}#save:hover{background-color:#79589F;}#delete{background-color:#D11F33;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1JeUIsQUFHa0IsQUFLTSxBQUlDLEFBSUssQUFJUixBQUdGLEFBTVcsQUFJdEIsQUFZSCxBQUU0QixBQUk1QixVQS9DaUIsQ0FvQkksR0FIcEIsRUFabUIsQ0FLcEIsRUErQkMsRUEzQkQsQ0FZQyxDQUdrQixFQTVCQSxBQTJDbEIsQUFHQSxJQTFCZSxJQWZmLEFBUUEsQ0FKQSxLQW9CaUIsR0E1QmpCLEFBb0J3QixZQVNWLFVBUmQsRUFTYyxZQUNNLGtCQUNBLGtCQUNHLHFCQUNBLHFCQUNOLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgYXBpVXJsID0gJy9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgcmFuazogcHJvcHMucmFuayxcbiAgICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICAgIHNhdmVDYWxsOiBmYWxzZSxcbiAgICAgIG5hbWVJbnZhbGlkOiBmYWxzZSxcbiAgICAgIHJhbmtJbnZhbGlkOiBmYWxzZSxcbiAgICAgIHRpdGxlSW52YWxpZDogZmFsc2UsXG4gICAgICBpc1RleHQ6IHRydWUsXG4gICAgICBpc05vdE93bmVyOiB0aGlzLnByb3BzLnN1cGVydmlzb3IgJiYgdGhpcy5wcm9wcy5zdXBlcnZpc29yLmlkICE9PSAnTm9uZScsXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVEZWxldGUgPSB0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuc3VwZXJ2aXNvciAmJiBuZXh0UHJvcHMuc3VwZXJ2aXNvciAhPT0gJ05vbmUnKSB7XG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTm90T3duZXI6IHRydWUgfSk7XG4gICAgfVxuICAgIGlmIChuZXh0UHJvcHMubmFtZSAhPT0gdGhpcy5zdGF0ZS5uYW1lKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogbmV4dFByb3BzLm5hbWUgfSlcbiAgICB9XG4gICAgaWYgKG5leHRQcm9wcy50aXRsZSAhPT0gdGhpcy5zdGF0ZS50aXRsZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBuZXh0UHJvcHMudGl0bGUgfSlcbiAgICB9XG4gICAgaWYgKG5leHRQcm9wcy5yYW5rICE9PSB0aGlzLnN0YXRlLnJhbmspIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyByYW5rOiBuZXh0UHJvcHMucmFuayB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSlcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlUmVnRXggPSBSZWdFeHAoJ1tcXHdcXHMuXFxcXC1dWzAtOV0nKTtcblxuICAgIGlmICh0aGlzLnN0YXRlLm5hbWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnN0YXRlLm5hbWUgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZUludmFsaWQ6IHRydWUgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAoIXRpdGxlUmVnRXgudGVzdCh0aGlzLnN0YXRlLnRpdGxlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSAoeyB0aXRsZUludmFsaWQ6IHRydWUgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5yYW5rIDwgdGhpcy5wcm9wcy5yYW5rKSB7XG4gICAgICB0aGlzLnNldFN0YXRlICh7IHJhbmtJbnZhbGlkOiB0cnVlIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgcmFuaywgdGl0bGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICByYW5rLFxuICAgICAgICB0aXRsZSxcbiAgICAgIH1cbiAgICAgIGF3YWl0IGF4aW9zLnBhdGNoKGAke2FwaVVybH0vZW1wbG95ZWUvJHt0aGlzLnByb3BzLnVybC5xdWVyeS5pZH1gLCBwYXlsb2FkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQ2FsbDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEZWxldGUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHthcGlVcmx9L2VtcGxveWVlLyR7dGhpcy5wcm9wcy51cmwucXVlcnkuaWR9YCk7XG4gICAgUm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRhU2F2ZWQgPSB0aGlzLnN0YXRlLnNhdmVDYWxsO1xuICAgIGxldCBzYXZlZFRleHQgPSBudWxsO1xuICAgIGxldCBuYW1lRXJyb3IgPSBudWxsO1xuICAgIGxldCByYW5rRXJyb3IgPSBudWxsO1xuICAgIGxldCB0aXRsZUVycm9yID0gbnVsbDtcbiAgICBjb25zdCBoaWdoZXN0V29ya2VyUmFuayA9IHRoaXMucHJvcHMud29ya2Vycy5sZW5ndGggIT09IDAgPyB0aGlzLnByb3BzLndvcmtlcnNbMF0ucmFuayA6IDk5O1xuXG4gICAgaWYgKHRoaXMuc3RhdGUubmFtZUludmFsaWQpIHtcbiAgICAgIG5hbWVFcnJvciA9IDxzcGFuIGNsYXNzTmFtZT1cImVycm9yXCI+TmFtZSBSZXF1aXJlZDwvc3Bhbj5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUucmFua0ludmFsaWQpIHtcbiAgICAgIHJhbmtFcnJvciA9IDxzcGFuIGNsYXNzTmFtZT1cImVycm9yXCI+UmFuayBvdXQgb2YgYm91bmRzPC9zcGFuPlxuICAgIH1cbiAgICBpZiAoZGF0YVNhdmVkKSB7XG4gICAgICBzYXZlZFRleHQgPSA8c3BhbiBpZD1cInNhdmVkVGV4dFwiPkVtcGxveWVlIEluZm9ybWF0aW9uIFVwZGF0ZWQ8L3NwYW4+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImZvcm1Db250YWluZXJcIj5cbiAgICAgIDxoMT5FZGl0IEVtcGxveWVlPC9oMT5cbiAgICAgICAgPGgzPlN1cGVydmlzb3I6IHt0aGlzLnByb3BzLnN1cGVydmlzb3IgPyB0aGlzLnByb3BzLnN1cGVydmlzb3IubmFtZSA6ICdOb25lJ308L2gzPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICA8aDM+TmFtZToge3RoaXMucHJvcHMubmFtZX08L2gzPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge25hbWVFcnJvcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aDM+VGl0bGU6IHt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dGl0bGVFcnJvcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aDM+UmFuazoge3RoaXMuc3RhdGUucmFua308L2gzPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmFtZT1cInJhbmtcIiB0eXBlPVwibnVtYmVyXCIgbWluPXt0aGlzLnByb3BzLnN1cGVydmlzb3IgPyB0aGlzLnByb3BzLnN1cGVydmlzb3IucmFuayA6IDB9IG1heD17aGlnaGVzdFdvcmtlclJhbmt9IHBsYWNlaG9sZGVyPVwiUmFua1wiIHZhbHVlPXt0aGlzLnN0YXRlLnJhbmt9IG9uQ2hhbmdlPXtldmVudD0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7cmFua0Vycm9yfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBpZD1cImJ1dHRvbkJsb2NrXCI+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cInNhdmVcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSl9PlNBVkU8L2J1dHRvbj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5pc05vdE93bmVyICYmXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImRlbGV0ZVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZURlbGV0ZShlKX0+REVMRVRFPC9idXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3NhdmVkVGV4dH1cbiAgICAgICAgPGJyIC8+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgLmVycm9yIHtcbiAgICAgICAgY29sb3I6cmVkO1xuICAgICAgICBmb250LXNpemU6LjhlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0IDJweDtcbiAgICAgIH1cbiAgICAgICNzYXZlZFRleHQge1xuICAgICAgICBjb2xvcjpsaW1lZ3JlZW47XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgfVxuICAgICAgI2J1dHRvbkJsb2NrIHtcbiAgICAgICAgcGFkZGluZy10b3A6MjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMCVcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibGFja1xuICAgICAgfVxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiM3OTU4OUY7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM1NTU7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICAgICNzYXZlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxuICAgICAgfVxuICAgICAgI3NhdmU6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1ODlGO1xuICAgICAgfVxuICAgICAgI2RlbGV0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEMTFGMzNcbiAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=components/EmployeeCard.js */'
      }));
    }
  }]);

  return EmployeeCard;
}(_react2.default.Component);

exports.default = EmployeeCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiTGluayIsIlJvdXRlciIsImFwaVVybCIsIkVtcGxveWVlQ2FyZCIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwidGl0bGVSZWdFeCIsIlJlZ0V4cCIsInN0YXRlIiwidW5kZWZpbmVkIiwibmFtZUludmFsaWQiLCJ0ZXN0IiwidGl0bGUiLCJ0aXRsZUludmFsaWQiLCJyYW5rIiwicmFua0ludmFsaWQiLCJwYXlsb2FkIiwicGF0Y2giLCJ1cmwiLCJxdWVyeSIsImlkIiwic2F2ZUNhbGwiLCJoYW5kbGVEZWxldGUiLCJkZWxldGUiLCJwdXNoIiwiaXNUZXh0IiwiaXNOb3RPd25lciIsInN1cGVydmlzb3IiLCJiaW5kIiwibmV4dFByb3BzIiwiZGF0YVNhdmVkIiwic2F2ZWRUZXh0IiwibmFtZUVycm9yIiwicmFua0Vycm9yIiwidGl0bGVFcnJvciIsImhpZ2hlc3RXb3JrZXJSYW5rIiwid29ya2VycyIsImxlbmd0aCIsImUiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFOLEFBQWU7O0lBRU0sQTt3Q0FDbkI7O3dCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7O2tKQUFBLEFBQ1g7O1VBRFcsQUFrQ25CLGVBQWUsVUFBQSxBQUFDLE9BQVUsQUFDeEI7WUFBQSxBQUFNLEFBQ047WUFBQSxBQUFLLDJDQUNGLE1BQUEsQUFBTSxPQURULEFBQ2dCLE1BQU8sTUFBQSxBQUFNLE9BRDdCLEFBQ29DLEFBRXJDO0FBdkNrQjs7VUFBQSxB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