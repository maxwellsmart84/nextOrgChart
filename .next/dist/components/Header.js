'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _EmployeeLink = require('./EmployeeLink');

var _EmployeeLink2 = _interopRequireDefault(_EmployeeLink);

var _NavLink = require('./NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/Header.js';


function Header(props) {
  _react2.default.createElement('div', {
    className: 'jsx-2402250848',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('title', {
    className: 'jsx-2402250848',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.title), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-2402250848',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', className: 'jsx-2402250848',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: '2402250848',
    css: '{font:menlo;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl1QixBQUVrQixXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgRW1wbG95ZWVMaW5rIGZyb20gJy4vRW1wbG95ZWVMaW5rJztcbmltcG9ydCBOYXZMaW5rIGZyb20gJy4vTmF2TGluayc7XG5cbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnPjwvbWV0YT5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJy8+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBmb250OiBtZW5sbztcbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuICByZXR1cm4gcHJvcHMudXJsLmFzUGF0aCA9PT0gJy8nID8gPE5hdkxpbmsgLz4gOiA8RW1wbG95ZWVMaW5rIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19 */\n/*@ sourceURL=components/Header.js */'
  }));
  return props.url.asPath === '/' ? _react2.default.createElement(_NavLink2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }) : _react2.default.createElement(_EmployeeLink2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  });
}

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiRW1wbG95ZWVMaW5rIiwiTmF2TGluayIsIkhlYWRlciIsInByb3BzIiwidGl0bGUiLCJ1cmwiLCJhc1BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBYTs7Ozs7Ozs7O0FBRXBCLFNBQUEsQUFBUyxPQUFULEFBQWdCLE9BQU8sQUFDckI7a0JBQUEsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQVE7QUFBUjtBQUFBLFdBREYsQUFDRSxBQUFjLEFBQ2QsZ0RBQU0sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIsb0RBQTlCOztnQkFBQTtrQkFGRixBQUVFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QixvRkFBNUI7O2dCQUFBO2tCQUpKLEFBQ0UsQUFHRTtBQUFBOzthQUpKO1NBQUEsQUFXQTtBQVhBO2VBV08sQUFBTSxJQUFOLEFBQVUsV0FBVixBQUFxQixzQkFBTSxBQUFDOztnQkFBRDtrQkFBM0IsQUFBMkI7QUFBQTtBQUFBLEdBQUEsQ0FBM0IsbUJBQXlDLEFBQUM7O2dCQUFEO2tCQUFoRCxBQUFnRCxBQUNqRDtBQURpRDtBQUFBLEdBQUE7QUFHbEQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=