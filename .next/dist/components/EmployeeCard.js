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
        var _this$state, name, rank, supervisorId, payload, _ref2, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$state = _this.state, name = _this$state.name, rank = _this$state.rank, supervisorId = _this$state.supervisorId;
                payload = {
                  name: name || undefined,
                  rank: rank || undefined,
                  supervisorId: supervisorId || undefined
                };
                _context.next = 5;
                return _axios2.default.patch(apiUrl + '/employee/' + _this.props.url.query.id, payload);

              case 5:
                _ref2 = _context.sent;
                data = _ref2.data;

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
      rank: props.rank,
      supervisor: props.supervisor || 'None'
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EmployeeCard, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { id: 'formContainer', className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Edit Employee'), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('label', {
        className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('h2', {
        className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Name:'), _react2.default.createElement('h3', {
        className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, this.state.name), _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', value: this.state.name, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Rank: ', this.state.rank)), _react2.default.createElement('label', {
        className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('input', { name: 'rank', type: 'text', placeholder: 'Rank', value: this.state.rank, onChange: function onChange(event) {
          return _this3.handleChange(event);
        }, className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement('h2', {
        className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Supervisor:'), _react2.default.createElement('a', {
        className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.state.supervisor.name), _react2.default.createElement('div', {
        className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this3.handleSubmit(e);
        }, className: 'jsx-2420067690',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'SUBMIT'))), _react2.default.createElement(_style2.default, {
        styleId: '2420067690',
        css: 'a{text-decoration:none;color:black;}#formContainer{width:100%;border:black;border-style:solid;padding-bottom:5%;padding-left:30%;}input[type=text]{width:30%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}input[type=text]:focus{border:3px solid #555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREeUIsQUFHOEIsQUFJVixBQU9ELEFBTVksVUFMSixDQVBMLFVBSGhCLENBZ0JDLEVBWnFCLElBT04sS0FYZixRQVl3QixFQVBKLGtCQUNELEVBT25CLGVBTkEiLCJmaWxlIjoiY29tcG9uZW50cy9FbXBsb3llZUNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgcmFuazogcHJvcHMucmFuayxcbiAgICAgIHN1cGVydmlzb3I6IHByb3BzLnN1cGVydmlzb3IgfHwgJ05vbmUnLFxuICAgIH1cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSlcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgbmFtZSwgcmFuaywgc3VwZXJ2aXNvcklkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBuYW1lOiBuYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgIHJhbms6IHJhbmsgfHwgdW5kZWZpbmVkLFxuICAgICAgc3VwZXJ2aXNvcklkOiBzdXBlcnZpc29ySWQgfHwgdW5kZWZpbmVkLFxuICAgIH1cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBhdGNoKGAke2FwaVVybH0vZW1wbG95ZWUvJHt0aGlzLnByb3BzLnVybC5xdWVyeS5pZH1gLCBwYXlsb2FkKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImZvcm1Db250YWluZXJcIj5cbiAgICAgIDxoMT5FZGl0IEVtcGxveWVlPC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8aDI+TmFtZTo8L2gyPlxuICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlJhbms6IHt0aGlzLnN0YXRlLnJhbmt9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicmFua1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJSYW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFua30gb25DaGFuZ2U9e2V2ZW50PT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aDI+U3VwZXJ2aXNvcjo8L2gyPlxuICAgICAgICB7LyogPExpbmsgaHJlZj17YC9lbXBsb3llZT9pZD0ke3RoaXMucHJvcHMuc3VwZXJ2aXNvci5pZH1gfT4gKi99XG4gICAgICAgICAgPGE+e3RoaXMuc3RhdGUuc3VwZXJ2aXNvci5uYW1lfTwvYT5cbiAgICAgICAgey8qIDwvTGluaz4gKi99XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZSl9PlNVQk1JVDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAgIH1cbiAgICAgICNmb3JtQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogYmxhY2s7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gICAgICB9XG4gICAgICBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM1NTU7XG4gICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=components/EmployeeCard.js */'
      }));
    }
  }]);

  return EmployeeCard;
}(_react2.default.Component);

exports.default = EmployeeCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVDYXJkLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImF4aW9zIiwiTGluayIsImFwaVVybCIsIkVtcGxveWVlQ2FyZCIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic3RhdGUiLCJyYW5rIiwic3VwZXJ2aXNvcklkIiwicGF5bG9hZCIsInVuZGVmaW5lZCIsInBhdGNoIiwidXJsIiwicXVlcnkiLCJpZCIsImRhdGEiLCJzdXBlcnZpc29yIiwiYmluZCIsImUiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFNBQU4sQUFBZTs7SSxBQUVNO3dDQUNuQjs7d0JBQUEsQUFBWSxPQUFPO2lCQUFBOzt3Q0FBQTs7a0pBQUEsQUFDWDs7VUFEVyxBQVduQixlQUFlLFVBQUEsQUFBQyxPQUFVLEFBQ3hCO1lBQUEsQUFBTSxBQUNOO1lBQUEsQUFBSywyQ0FDRixNQUFBLEFBQU0sT0FEVCxBQUNnQixNQUFPLE1BQUEsQUFBTSxPQUQ3QixBQUNvQyxBQUVyQztBQWhCa0I7O1VBQUEsQUFrQm5CLDJCQWxCbUI7MEZBa0JKLGlCQUFBLEFBQU8sT0FBUDttRUFBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ2I7c0JBRGEsQUFDYixBQUFNOzhCQUMrQixNQUZ4QixBQUU2QixPQUY3QixBQUVMLG1CQUZLLEFBRUwsTUFGSyxBQUVDLG1CQUZELEFBRUMsTUFGRCxBQUVPLDJCQUZQLEFBRU8sQUFDZDtBQUhPO3dCQUlMLFFBRFEsQUFDQSxBQUNkO3dCQUFNLFFBRlEsQUFFQSxBQUNkO2dDQUFjLGdCQU5ILEFBR0csQUFHZ0I7QUFIaEIsQUFDZDtnQ0FKVzt1QkFRVSxnQkFBQSxBQUFNLE1BQU4sQUFBZSx3QkFBbUIsTUFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFBakQsQUFBdUQsSUFSakUsQUFRVSxBQUE2RDs7bUJBUnZFO2lDQVFMO0FBUkssNkJBQUEsQUFRTDs7bUJBUks7bUJBQUE7Z0NBQUE7O0FBQUE7b0JBQUE7QUFsQkk7OzJCQUFBO2dDQUFBO0FBQUE7QUFFakI7O1VBQUEsQUFBSztZQUNHLE1BREssQUFDQyxBQUNaO1lBQU0sTUFGSyxBQUVDLEFBQ1o7a0JBQVksTUFBQSxBQUFNLGNBSHBCLEFBQWEsQUFHcUIsQUFFbEM7QUFMYSxBQUNYO1VBSUYsQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXRDLEFBQ0E7VUFBQSxBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FSckIsQUFRakI7V0FDRDs7Ozs7NkJBb0JRO21CQUNQOzs2QkFDQSxjQUFBLFNBQUssSUFBTCxBQUFRLDRCQUFSOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0NBQUEsY0FBQSxVQUFNLFVBQVUsS0FBaEIsQUFBcUIseUJBQXJCOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDBCQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBSyxNQUZaLEFBRUUsQUFBZ0IsQUFDZCxnREFBTyxNQUFQLEFBQVksUUFBTyxhQUFuQixBQUErQixRQUFPLE1BQXRDLEFBQTJDLFFBQU8sT0FBTyxLQUFBLEFBQUssTUFBOUQsQUFBb0UsTUFBTSxVQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxhQUFkLEFBQVMsQUFBa0I7QUFBL0csc0JBQUE7O29CQUFBO3NCQUpOLEFBQ0UsQUFHSSxBQUVKO0FBRkk7MkJBRUosY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVcsZUFBQSxBQUFLLE1BUHBCLEFBTUUsQUFDRSxBQUFzQixBQUV4Qix3QkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSxrREFDVyxNQUFQLEFBQVksUUFBTyxNQUFuQixBQUF3QixRQUFPLGFBQS9CLEFBQTJDLFFBQU8sT0FBTyxLQUFBLEFBQUssTUFBOUQsQUFBb0UsTUFBTSxVQUFVLHlCQUFBO2lCQUFRLE9BQUEsQUFBSyxhQUFiLEFBQVEsQUFBa0I7QUFBOUcsc0JBQUE7O29CQUFBO3NCQVZOLEFBU0UsQUFDSSxBQUVKO0FBRkk7MkJBRUosY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBWkYsQUFZRSxBQUVFLGdDQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLGNBQUksQUFBSyxNQUFMLEFBQVcsV0FkbkIsQUFjSSxBQUEwQixBQUU1Qix1QkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFlBQVEsU0FBUyxpQkFBQSxBQUFDLEdBQUQ7aUJBQU8sT0FBQSxBQUFLLGFBQVosQUFBTyxBQUFrQjtBQUExQyxzQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtTQW5CTixBQUVFLEFBZ0JFLEFBQ0U7aUJBbkJOO2FBREEsQUFDQSxBQStDRDtBQS9DQzs7Ozs7RUFoQ3NDLGdCQUFNLEE7O2tCQUEzQixBIiwiZmlsZSI6IkVtcGxveWVlQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9