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
                _context.next = 15;
                break;

              case 5:
                if (!(_this.state.isNotOwner && _this.state.rank < _this.props.supervisor.rank)) {
                  _context.next = 9;
                  break;
                }

                _this.setState({ rankInvalid: true });
                _context.next = 15;
                break;

              case 9:
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank, title = _this$state.title;
                payload = {
                  name: name,
                  rank: rank,
                  title: title
                };

                console.log('Payload', payload);
                _context.next = 14;
                return _axios2.default.patch(apiUrl + '/employee/' + _this.props.url.query.id, payload);

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
      var highestWorkerRank = this.props.workers.length !== 0 ? this.props.workers[0].rank : 99;

      if (this.state.nameInvalid) {
        nameError = _react2.default.createElement('span', { className: 'error', __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, 'Name Required');
      }
      if (this.state.rankInvalid) {
        rankError = _react2.default.createElement('span', { className: 'error', __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, 'Rank out of bounds');
      }
      if (dataSaved) {
        savedText = _react2.default.createElement('span', { id: 'savedText', __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, 'Employee Information Updated');
      }
      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Edit Employee'), _react2.default.createElement('h3', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Supervisor: ', this.props.supervisor ? this.props.supervisor.name : 'None'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'Name: ', this.props.name)), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, nameError), _react2.default.createElement('label', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, 'Title: ', this.props.title)), _react2.default.createElement('input', { name: 'title', placeholder: 'Title', type: 'text', value: this.state.title, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), _react2.default.createElement('label', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, 'Rank: ', this.state.rank)), this.state.isNotOwner && _react2.default.createElement('input', { name: 'rank', type: 'number', min: this.props.supervisor ? this.props.supervisor.rank : 0, max: highestWorkerRank, placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
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
          lineNumber: 114
        }
      }, rankError)), _react2.default.createElement('div', { id: 'buttonBlock', className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('button', { id: 'save', onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, 'SAVE'), this.state.isNotOwner && _react2.default.createElement('button', { id: 'delete', onClick: function onClick(e) {
          return _this3.handleDelete(e);
        }, className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, 'DELETE')), savedText, _react2.default.createElement('br', {
        className: 'jsx-531306699',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '531306699',
        css: '.error{color:red;font-size:.8em;padding-left:2px;}#savedText{color:limegreen;margin-left:12px;}#buttonBlock{padding-top:20px;margin-left:-10%;}a{text-decoration:none;color:black;}a:hover{color:#79589F;}input{width:100%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input:focus{border:3px solid #555;}button{background-color:black;margin-left:10%;cursor:pointer;border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;}#save{margin-bottom:20px;}#save:hover{background-color:#79589F;}#delete{background-color:#D11F33;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZIeUIsQUFHa0IsQUFLTSxBQUlDLEFBSUssQUFJUixBQUdGLEFBTVcsQUFJdEIsQUFZSCxBQUU0QixBQUk1QixVQS9DaUIsQ0FvQkksR0FIcEIsRUFabUIsQ0FLcEIsRUErQkMsRUEzQkQsQ0FZQyxDQUdrQixFQTVCQSxBQTJDbEIsQUFHQSxJQTFCZSxJQWZmLEFBUUEsQ0FKQSxLQW9CaUIsR0E1QmpCLEFBb0J3QixZQVNWLFVBUmQsRUFTYyxZQUNNLGtCQUNBLGtCQUNHLHFCQUNBLHFCQUNOLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgYXBpVXJsID0gJy9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgcmFuazogcHJvcHMucmFuayxcbiAgICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICAgIHNhdmVDYWxsOiBmYWxzZSxcbiAgICAgIG5hbWVJbnZhbGlkOiBmYWxzZSxcbiAgICAgIHJhbmtJbnZhbGlkOiBmYWxzZSxcbiAgICAgIHRpdGxlSW52YWxpZDogZmFsc2UsXG4gICAgICBpc1RleHQ6IHRydWUsXG4gICAgICBpc05vdE93bmVyOiB0aGlzLnByb3BzLnN1cGVydmlzb3IgJiYgdGhpcy5wcm9wcy5zdXBlcnZpc29yLmlkICE9PSAnTm9uZScsXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVEZWxldGUgPSB0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuc3VwZXJ2aXNvciAmJiBuZXh0UHJvcHMuc3VwZXJ2aXNvciAhPT0gJ05vbmUnKSB7XG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTm90T3duZXI6IHRydWUgfSk7XG4gICAgfVxuICAgIGlmIChuZXh0UHJvcHMubmFtZSAhPT0gdGhpcy5zdGF0ZS5uYW1lKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogbmV4dFByb3BzLm5hbWUgfSlcbiAgICB9XG4gICAgaWYgKG5leHRQcm9wcy50aXRsZSAhPT0gdGhpcy5zdGF0ZS50aXRsZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiBuZXh0UHJvcHMudGl0bGUgfSlcbiAgICB9XG4gICAgaWYgKG5leHRQcm9wcy5yYW5rICE9PSB0aGlzLnN0YXRlLnJhbmspIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyByYW5rOiBuZXh0UHJvcHMucmFuayB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSlcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnN0YXRlLm5hbWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnN0YXRlLm5hbWUgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZUludmFsaWQ6IHRydWUgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5pc05vdE93bmVyICYmICh0aGlzLnN0YXRlLnJhbmsgPCB0aGlzLnByb3BzLnN1cGVydmlzb3IucmFuaykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUgKHsgcmFua0ludmFsaWQ6IHRydWUgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBuYW1lLCByYW5rLCB0aXRsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHJhbmssXG4gICAgICAgIHRpdGxlLFxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ1BheWxvYWQnLCBwYXlsb2FkKTtcbiAgICAgIGF3YWl0IGF4aW9zLnBhdGNoKGAke2FwaVVybH0vZW1wbG95ZWUvJHt0aGlzLnByb3BzLnVybC5xdWVyeS5pZH1gLCBwYXlsb2FkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlQ2FsbDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEZWxldGUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHthcGlVcmx9L2VtcGxveWVlLyR7dGhpcy5wcm9wcy51cmwucXVlcnkuaWR9YCk7XG4gICAgUm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRhU2F2ZWQgPSB0aGlzLnN0YXRlLnNhdmVDYWxsO1xuICAgIGxldCBzYXZlZFRleHQgPSBudWxsO1xuICAgIGxldCBuYW1lRXJyb3IgPSBudWxsO1xuICAgIGxldCByYW5rRXJyb3IgPSBudWxsO1xuICAgIGNvbnN0IGhpZ2hlc3RXb3JrZXJSYW5rID0gdGhpcy5wcm9wcy53b3JrZXJzLmxlbmd0aCAhPT0gMCA/IHRoaXMucHJvcHMud29ya2Vyc1swXS5yYW5rIDogOTk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5uYW1lSW52YWxpZCkge1xuICAgICAgbmFtZUVycm9yID0gPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj5OYW1lIFJlcXVpcmVkPC9zcGFuPlxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5yYW5rSW52YWxpZCkge1xuICAgICAgcmFua0Vycm9yID0gPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj5SYW5rIG91dCBvZiBib3VuZHM8L3NwYW4+XG4gICAgfVxuICAgIGlmIChkYXRhU2F2ZWQpIHtcbiAgICAgIHNhdmVkVGV4dCA9IDxzcGFuIGlkPVwic2F2ZWRUZXh0XCI+RW1wbG95ZWUgSW5mb3JtYXRpb24gVXBkYXRlZDwvc3Bhbj5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiZm9ybUNvbnRhaW5lclwiPlxuICAgICAgPGgxPkVkaXQgRW1wbG95ZWU8L2gxPlxuICAgICAgICA8aDM+U3VwZXJ2aXNvcjoge3RoaXMucHJvcHMuc3VwZXJ2aXNvciA/IHRoaXMucHJvcHMuc3VwZXJ2aXNvci5uYW1lIDogJ05vbmUnfTwvaDM+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgIDxoMz5OYW1lOiB7dGhpcy5wcm9wcy5uYW1lfTwvaDM+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7bmFtZUVycm9yfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxoMz5UaXRsZToge3RoaXMucHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGgzPlJhbms6IHt0aGlzLnN0YXRlLnJhbmt9PC9oMz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge3RoaXMuc3RhdGUuaXNOb3RPd25lciAmJlxuICAgICAgICA8aW5wdXQgbmFtZT1cInJhbmtcIiB0eXBlPVwibnVtYmVyXCIgbWluPXt0aGlzLnByb3BzLnN1cGVydmlzb3IgPyB0aGlzLnByb3BzLnN1cGVydmlzb3IucmFuayA6IDB9IG1heD17aGlnaGVzdFdvcmtlclJhbmt9IHBsYWNlaG9sZGVyPVwiUmFua1wiIHZhbHVlPXt0aGlzLnN0YXRlLnJhbmt9IG9uQ2hhbmdlPXtldmVudD0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX0gLz5cbiAgICAgICAgfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtyYW5rRXJyb3J9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uQmxvY2tcIj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwic2F2ZVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlKX0+U0FWRTwvYnV0dG9uPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTm90T3duZXIgJiZcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVsZXRlXCIgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlRGVsZXRlKGUpfT5ERUxFVEU8L2J1dHRvbj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2F2ZWRUZXh0fVxuICAgICAgICA8YnIgLz5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAuZXJyb3Ige1xuICAgICAgICBjb2xvcjpyZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTouOGVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQgMnB4O1xuICAgICAgfVxuICAgICAgI3NhdmVkVGV4dCB7XG4gICAgICAgIGNvbG9yOmxpbWVncmVlbjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICB9XG4gICAgICAjYnV0dG9uQmxvY2sge1xuICAgICAgICBwYWRkaW5nLXRvcDoyMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwJVxuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsYWNrXG4gICAgICB9XG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6Izc5NTg5RjtcbiAgICAgIH1cbiAgICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIGlucHV0OmZvY3VzIHtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzU1NTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgI3NhdmUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XG4gICAgICB9XG4gICAgICAjc2F2ZTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTU4OUY7XG4gICAgICB9XG4gICAgICAjZGVsZXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QxMUYzM1xuICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=components/EmployeeCard.js */'
      }));
    }
  }]);

  return EmployeeCard;
}(_react2.default.Component);

exports.default = EmployeeCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiTGluayIsIlJvdXRlciIsImFwaVVybCIsIkVtcGxveWVlQ2FyZCIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic3RhdGUiLCJ1bmRlZmluZWQiLCJuYW1lSW52YWxpZCIsImlzTm90T3duZXIiLCJyYW5rIiwic3VwZXJ2aXNvciIsInJhbmtJbnZhbGlkIiwidGl0bGUiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsInBhdGNoIiwidXJsIiwicXVlcnkiLCJpZCIsInNhdmVDYWxsIiwiaGFuZGxlRGVsZXRlIiwiZGVsZXRlIiwicHVzaCIsInRpdGxlSW52YWxpZCIsImlzVGV4dCIsImJpbmQiLCJuZXh0UHJvcHMiLCJkYXRhU2F2ZWQiLCJzYXZlZFRleHQiLCJuYW1lRXJyb3IiLCJyYW5rRXJyb3IiLCJoaWdoZXN0V29ya2VyUmFuayIsIndvcmtlcnMiLCJsZW5ndGgiLCJlIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sU0FBTixBQUFlOztJLEFBRU07d0NBQ25COzt3QkFBQSxBQUFZLE9BQU87aUJBQUE7O3dDQUFBOztrSkFBQSxBQUNYOztVQURXLEFBa0NuQixlQUFlLFVBQUEsQUFBQyxPQUFVLEFBQ3hCO1lBQUEsQUFBTSxBQUNOO1lBQUEsQUFBSywyQ0FDRixNQUFBLEFBQU0sT0FEVCxBQUNnQixNQUFPLE1BQUEsQUFBTSxPQUQ3QixBQUNvQyxBQUVyQztBQXZDa0I7O1VBQUEsQUF5Q25CLDJCQXpDbUI7MEZBeUNKLGlCQUFBLEFBQU8sT0FBUDs0Q0FBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ2I7c0JBRGEsQUFDYixBQUFNOztzQkFDRixNQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsYUFBYSxNQUFBLEFBQUssTUFBTCxBQUFXLFNBRm5DLEFBRTRDLEtBRjVDO2tDQUFBO0FBQUE7QUFHWDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsYUFITCxBQUdYLEFBQWMsQUFBZTtnQ0FIbEI7QUFBQTs7bUJBQUE7c0JBS0osTUFBQSxBQUFLLE1BQUwsQUFBVyxjQUFlLE1BQUEsQUFBSyxNQUFMLEFBQVcsT0FBTyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBTG5ELEFBSzhELE9BTDlEO2tDQUFBO0FBQUE7QUFNWDs7c0JBQUEsQUFBSyxTQUFVLEVBQUUsYUFOTixBQU1YLEFBQWUsQUFBZTtnQ0FObkI7QUFBQTs7bUJBQUE7OEJBUW1CLE1BUm5CLEFBUXdCLE9BUnhCLEFBUUgsbUJBUkcsQUFRSCxNQVJHLEFBUUcsbUJBUkgsQUFRRyxNQVJILEFBUVMsb0JBUlQsQUFRUyxBQUNkO0FBVEs7d0JBU0ssQUFFZDt3QkFGYyxBQUdkO3lCQVpTLEFBU0ssQUFLaEI7QUFMZ0IsQUFDZDs7d0JBSUYsQUFBUSxJQUFSLEFBQVksV0FkRCxBQWNYLEFBQXVCO2dDQWRaO3VCQWVMLGdCQUFBLEFBQU0sTUFBTixBQUFlLHdCQUFtQixNQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUFqRCxBQUF1RCxJQWZsRCxBQWVMLEFBQTZEOzttQkFDbkU7c0JBQUEsQUFBSyxTQUFTLEVBQUUsVUFoQkwsQUFnQlgsQUFBYyxBQUFZOzttQkFoQmY7bUJBQUE7Z0NBQUE7O0FBQUE7b0JBQUE7QUF6Q0k7OzJCQUFBO2dDQUFBO0FBQUE7QUFBQTs7VUFBQSxBQTZEbkIsMkJBN0RtQjsyRkE2REosa0JBQUEsQUFBTyxPQUFQO3dFQUFBO29CQUFBOytDQUFBO21CQUNiO3NCQURhLEFBQ2IsQUFBTTtpQ0FETzt1QkFFUCxnQkFBQSxBQUFNLE9BQU4sQUFBZ0Isd0JBQW1CLE1BQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BRjNDLEFBRVAsQUFBd0Q7O21CQUM5RDtnQ0FBQSxBQUFPLEtBSE0sQUFHYixBQUFZOzttQkFIQzttQkFBQTtpQ0FBQTs7QUFBQTtxQkFBQTtBQTdESTs7NEJBQUE7aUNBQUE7QUFBQTtBQUVqQjs7VUFBQSxBQUFLO1lBQ0csTUFESyxBQUNDLEFBQ1o7WUFBTSxNQUZLLEFBRUMsQUFDWjthQUFPLE1BSEksQUFHRSxBQUNiO2dCQUpXLEFBSUQsQUFDVjttQkFMVyxBQUtFLEFBQ2I7bUJBTlcsQUFNRSxBQUNiO29CQVBXLEFBT0csQUFDZDtjQVJXLEFBUUgsQUFDUjtrQkFBWSxNQUFBLEFBQUssTUFBTCxBQUFXLGNBQWMsTUFBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLE9BVDdELEFBQWEsQUFTdUQsQUFHcEU7QUFaYSxBQUNYOztVQVdGLEFBQUssZUFBZSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQUF0QyxBQUNBO1VBQUEsQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXRDLEFBQ0E7VUFBQSxBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FoQnJCLEFBZ0JqQjtXQUNEOzs7Ozs4Q0FFeUIsQSxXQUFXLEFBQ25DO1VBQUksVUFBQSxBQUFVLGNBQWMsVUFBQSxBQUFVLGVBQXRDLEFBQXFELFFBQVEsQUFDMUQ7YUFBQSxBQUFLLFNBQVMsRUFBRSxZQUFoQixBQUFjLEFBQWMsQUFDOUI7QUFDRDtVQUFJLFVBQUEsQUFBVSxTQUFTLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxNQUFNLEFBQ3RDO2FBQUEsQUFBSyxTQUFTLEVBQUUsTUFBTSxVQUF0QixBQUFjLEFBQWtCLEFBQ2pDO0FBQ0Q7VUFBSSxVQUFBLEFBQVUsVUFBVSxLQUFBLEFBQUssTUFBN0IsQUFBbUMsT0FBTyxBQUN4QzthQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sVUFBdkIsQUFBYyxBQUFtQixBQUNsQztBQUNEO1VBQUksVUFBQSxBQUFVLFNBQVMsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLE1BQU0sQUFDdEM7YUFBQSxBQUFLLFNBQVMsRUFBRSxNQUFNLFVBQXRCLEFBQWMsQUFBa0IsQUFDakM7QUFDRjs7Ozs2QkFtQ1E7bUJBQ1A7O1VBQU0sWUFBWSxLQUFBLEFBQUssTUFBdkIsQUFBNkIsQUFDN0I7VUFBSSxZQUFKLEFBQWdCLEFBQ2hCO1VBQUksWUFBSixBQUFnQixBQUNoQjtVQUFJLFlBQUosQUFBZ0IsQUFDaEI7VUFBTSxvQkFBb0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFdBQW5CLEFBQThCLElBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLEdBQXJELEFBQXdELE9BQWxGLEFBQXlGLEFBRXpGOztVQUFJLEtBQUEsQUFBSyxNQUFULEFBQWUsYUFBYSxBQUMxQjtvQ0FBWSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtTQUFBLEVBQVosQUFBWSxBQUNiO0FBQ0Q7VUFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLGFBQWEsQUFDMUI7b0NBQVksY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBO0FBQUE7U0FBQSxFQUFaLEFBQVksQUFDYjtBQUNEO1VBQUEsQUFBSSxXQUFXLEFBQ2I7b0NBQVksY0FBQSxVQUFNLElBQU4sQUFBUztzQkFBVDt3QkFBQTtBQUFBO1NBQUEsRUFBWixBQUFZLEFBQ2I7QUFDRDs2QkFDQSxjQUFBLFNBQUssSUFBTCxBQUFRLDRCQUFSOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Usa0NBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQWlCLHFCQUFBLEFBQUssTUFBTCxBQUFXLGFBQWEsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFuQyxBQUE4QyxPQUZuRSxBQUVJLEFBQXNFLEFBQ3hFLHlCQUFBLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCLHlCQUFyQjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFXLGVBQUEsQUFBSyxNQUZsQixBQUNFLEFBQ0EsQUFBc0IsQUFFdEIsaURBQU8sTUFBUCxBQUFZLFFBQU8sYUFBbkIsQUFBK0IsUUFBTyxNQUF0QyxBQUEyQyxRQUFPLE9BQU8sS0FBQSxBQUFLLE1BQTlELEFBQW9FLE1BQU0sVUFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssYUFBZCxBQUFTLEFBQWtCO0FBQS9HLHNCQUFBOztvQkFBQTtzQkFKRixBQUlFLEFBQ0E7QUFEQTswQkFDQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxTQUxGLEFBS0UsQUFHQSw0QkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBWSxnQkFBQSxBQUFLLE1BVHJCLEFBUUUsQUFDRSxBQUF1QixBQUV6QixrREFBTyxNQUFQLEFBQVksU0FBUSxhQUFwQixBQUFnQyxTQUFRLE1BQXhDLEFBQTZDLFFBQU8sT0FBTyxLQUFBLEFBQUssTUFBaEUsQUFBc0UsT0FBTyxVQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxhQUFkLEFBQVMsQUFBa0I7QUFBbEgsc0JBQUE7O29CQUFBO3NCQVhGLEFBV0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFXLGVBQUEsQUFBSyxNQWJwQixBQVlFLEFBQ0UsQUFBc0IsQUFFdkIsYUFBQSxBQUFLLE1BQUwsQUFBVyx1REFDTCxNQUFQLEFBQVksUUFBTyxNQUFuQixBQUF3QixVQUFTLEtBQUssS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFhLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBbkMsQUFBOEMsT0FBcEYsQUFBMkYsR0FBRyxLQUE5RixBQUFtRyxtQkFBbUIsYUFBdEgsQUFBa0ksUUFBTyxPQUFPLEtBQUEsQUFBSyxNQUFySixBQUEySixNQUFNLFVBQVUseUJBQUE7aUJBQVEsT0FBQSxBQUFLLGFBQWIsQUFBUSxBQUFrQjtBQUFyTSxzQkFBQTs7b0JBQUE7c0JBaEJGLEFBZ0JFLEFBRUE7QUFGQTtPQUFBLG1CQUVBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLFNBckJKLEFBR0UsQUFrQkUsQUFJQSw2QkFBQSxjQUFBLFNBQUssSUFBTCxBQUFRLDBCQUFSOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxZQUFRLElBQVIsQUFBVyxRQUFPLFNBQVMsaUJBQUEsQUFBQyxHQUFEO2lCQUFPLE9BQUEsQUFBSyxhQUFaLEFBQU8sQUFBa0I7QUFBcEQsc0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0MsY0FBQSxBQUFLLE1BQUwsQUFBVyw4QkFDWixjQUFBLFlBQVEsSUFBUixBQUFXLFVBQVMsU0FBUyxpQkFBQSxBQUFDLEdBQUQ7aUJBQU8sT0FBQSxBQUFLLGFBQVosQUFBTyxBQUFrQjtBQUF0RCxzQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtPQUFBLEVBNUJOLEFBeUJJLEFBR0UsQUFHRCxZQS9CTCxBQWdDSTttQkFBQTs7b0JBQUE7c0JBaENKLEFBZ0NJO0FBQUE7QUFBQTtpQkFoQ0o7YUFEQSxBQUNBLEFBd0ZEO0FBeEZDOzs7OztFQXJGc0MsZ0JBQU0sQTs7a0JBQTNCLEEiLCJmaWxlIjoiRW1wbG95ZWVDYXJkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=