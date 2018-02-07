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

var _EmployeeLink = require('./EmployeeLink');

var _EmployeeLink2 = _interopRequireDefault(_EmployeeLink);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeCard.js';


var EmployeeCard = function (_React$Component) {
  (0, _inherits3.default)(EmployeeCard, _React$Component);

  function EmployeeCard(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, EmployeeCard);

    console.log(props);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EmployeeCard.__proto__ || (0, _getPrototypeOf2.default)(EmployeeCard)).call(this, props));

    _this.handleChange = function (event) {
      _this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    };

    _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var _this$state, name, rank, supervisorId, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank, supervisorId = _this$state.supervisorId;
                _context.next = 3;
                return _axios2.default.patch('http://localhost:3000:employees/?id=' + _this.props.id, { name: name, rank: rank, supervisorId: supervisorId });

              case 3:
                data = _context.sent;

                event.preventDefault();

              case 5:
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
      rank: -1,
      supervisor: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EmployeeCard, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('h2', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Name:'), _react2.default.createElement('h3', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, this.props.name), _react2.default.createElement('input', { name: 'name', placeholder: this.props.name, type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('h2', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Rank:'), _react2.default.createElement('h3', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, this.props.rank), _react2.default.createElement('input', { name: 'rank', type: 'text', placeholder: this.props.rank, value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), _react2.default.createElement('label', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('h2', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Supervisor:'), _react2.default.createElement('select', { name: 'supervisor', type: 'text', placeholder: this.props.supervisorId || 'None', value: this.state.supervisor || 'None', className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-876106242',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'SUBMIT'))), _react2.default.createElement(_style2.default, {
        styleId: '876106242',
        css: '#formContainer{width:100%;border:black;border-style:solid;padding-bottom:5%;padding-left:30%;}input[type=text]{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input[type=text]:focus{border:3px solid #555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EeUIsQUFHb0IsQUFPRCxBQU1ZLFVBTEosQ0FQTCxXQWFmLEVBWnFCLElBT04sYUFDUyxFQVBKLGtCQUNELEVBT25CLGVBTkEiLCJmaWxlIjoiY29tcG9uZW50cy9FbXBsb3llZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRW1wbG95ZWVMaW5rIGZyb20gJy4vRW1wbG95ZWVMaW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1wbG95ZWVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcmFuazogLTEsXG4gICAgICBzdXBlcnZpc29yOiAnJyxcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KVxuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgcmFuaywgc3VwZXJ2aXNvcklkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5wYXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwOmVtcGxveWVlcy8/aWQ9JHt0aGlzLnByb3BzLmlkfWAsIHsgbmFtZSwgcmFuaywgc3VwZXJ2aXNvcklkIH0pXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJmb3JtQ29udGFpbmVyXCI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGgyPk5hbWU6PC9oMj5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMubmFtZX08L2gzPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMubmFtZX0gdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGgyPlJhbms6PC9oMj5cbiAgICAgICAgICA8aDM+e3RoaXMucHJvcHMucmFua308L2gzPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJyYW5rXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5yYW5rfSB2YWx1ZT17dGhpcy5zdGF0ZS5yYW5rfSBvbkNoYW5nZT17ZXZlbnQ9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aDI+U3VwZXJ2aXNvcjo8L2gyPlxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic3VwZXJ2aXNvclwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuc3VwZXJ2aXNvcklkIHx8ICdOb25lJ30gdmFsdWU9e3RoaXMuc3RhdGUuc3VwZXJ2aXNvciB8fCAnTm9uZSd9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSl9PlNVQk1JVDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAjZm9ybUNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IGJsYWNrO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzAlO1xuICAgICAgfVxuICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNTU1O1xuICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=components/EmployeeCard.js */'
      }));
    }
  }]);

  return EmployeeCard;
}(_react2.default.Component);

exports.default = EmployeeCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkVtcGxveWVlTGluayIsImF4aW9zIiwiRW1wbG95ZWVDYXJkIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInN0YXRlIiwicmFuayIsInN1cGVydmlzb3JJZCIsInBhdGNoIiwiaWQiLCJkYXRhIiwicHJldmVudERlZmF1bHQiLCJzdXBlcnZpc29yIiwiYmluZCIsImUiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTzs7Ozs7Ozs7O0ksQUFHYzt3Q0FDbkI7O3dCQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQ2pCOztZQUFBLEFBQVEsSUFEUyxBQUNqQixBQUFZOztrSkFESyxBQUVYOztVQUZXLEFBWW5CLGVBQWUsVUFBQSxBQUFDLE9BQVUsQUFDeEI7WUFBQSxBQUFLLDJDQUNGLE1BQUEsQUFBTSxPQURULEFBQ2dCLE1BQU8sTUFBQSxBQUFNLE9BRDdCLEFBQ29DLEFBRXJDO0FBaEJrQjs7VUFBQSxBQWtCbkIsMkJBbEJtQjswRkFrQkosaUJBQUEsQUFBTyxPQUFQO21EQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFBQTs4QkFDd0IsTUFEeEIsQUFDNkIsT0FEN0IsQUFDTCxtQkFESyxBQUNMLE1BREssQUFDQyxtQkFERCxBQUNDLE1BREQsQUFDTywyQkFEUCxBQUNPO2dDQURQO3VCQUVNLGdCQUFBLEFBQU0sK0NBQTZDLE1BQUEsQUFBSyxNQUF4RCxBQUE4RCxJQUFNLEVBQUUsTUFBRixNQUFRLE1BQVIsTUFBYyxjQUZ4RixBQUVNLEFBQW9FOzttQkFBakY7QUFGTyxnQ0FHYjs7c0JBSGEsQUFHYixBQUFNOzttQkFITzttQkFBQTtnQ0FBQTs7QUFBQTtvQkFBQTtBQWxCSTs7MkJBQUE7Z0NBQUE7QUFBQTtBQUdqQjs7VUFBQSxBQUFLO1lBQVEsQUFDTCxBQUNOO1lBQU0sQ0FGSyxBQUVKLEFBQ1A7a0JBSEYsQUFBYSxBQUdDLEFBRWQ7QUFMYSxBQUNYO1VBSUYsQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXRDLEFBQ0E7VUFBQSxBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FUckIsQUFTakI7V0FDRDs7Ozs7NkJBY1E7bUJBQ1A7OzZCQUNBLGNBQUEsU0FBSyxJQUFMLEFBQVEsNEJBQVI7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCLHlCQUFyQjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwwQkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFGWixBQUVFLEFBQWdCLEFBQ2QsZ0RBQU8sTUFBUCxBQUFZLFFBQU8sYUFBYSxLQUFBLEFBQUssTUFBckMsQUFBMkMsTUFBTSxNQUFqRCxBQUFzRCxRQUFPLE9BQU8sS0FBQSxBQUFLLE1BQXpFLEFBQStFLE1BQU0sVUFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssYUFBZCxBQUFTLEFBQWtCO0FBQTFILHNCQUFBOztvQkFBQTtzQkFKTixBQUNFLEFBR0ksQUFFSjtBQUZJOzJCQUVKLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwwQkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFGWixBQUVFLEFBQWdCLEFBQ2QsZ0RBQU8sTUFBUCxBQUFZLFFBQU8sTUFBbkIsQUFBd0IsUUFBTyxhQUFhLEtBQUEsQUFBSyxNQUFqRCxBQUF1RCxNQUFNLE9BQU8sS0FBQSxBQUFLLE1BQXpFLEFBQStFLE1BQU0sVUFBVSx5QkFBQTtpQkFBUSxPQUFBLEFBQUssYUFBYixBQUFRLEFBQWtCO0FBQXpILHNCQUFBOztvQkFBQTtzQkFUTixBQU1FLEFBR0ksQUFFSjtBQUZJOzJCQUVKLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDRSwwREFBUSxNQUFSLEFBQWEsY0FBYSxNQUExQixBQUErQixRQUFPLGFBQWEsS0FBQSxBQUFLLE1BQUwsQUFBVyxnQkFBOUQsQUFBOEUsUUFBUSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsY0FBeEcsQUFBc0gsbUJBQXRIOztvQkFBQTtzQkFiTixBQVdFLEFBRUksQUFFSjtBQUZJOzJCQUVKLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsWUFBUSxTQUFTLGlCQUFBLEFBQUMsR0FBRDtpQkFBTyxPQUFBLEFBQUssYUFBWixBQUFPLEFBQWtCO0FBQTFDLHNCQUFBOztvQkFBQTtzQkFBQTtBQUFBO1NBakJOLEFBQ0UsQUFlRSxBQUNFO2lCQWpCTjthQURBLEFBQ0EsQUF5Q0Q7QUF6Q0M7Ozs7O0VBM0JzQyxnQkFBTSxBOztrQkFBM0IsQSIsImZpbGUiOiJFbXBsb3llZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==