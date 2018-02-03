'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _EmployeeLink = require('./EmployeeLink');

var _EmployeeLink2 = _interopRequireDefault(_EmployeeLink);

var _NavLink = require('./NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/Header.js';


function Header(props) {
  console.log(props);
  return props.url.asPath === '/' ? _react2.default.createElement(_NavLink2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }) : _react2.default.createElement(_EmployeeLink2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  });
}

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJFbXBsb3llZUxpbmsiLCJOYXZMaW5rIiwiSGVhZGVyIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiYXNQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFhOzs7Ozs7Ozs7QUFHcEIsU0FBQSxBQUFTLE9BQVQsQUFBZ0IsT0FBTyxBQUNyQjtVQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7ZUFBTyxBQUFNLElBQU4sQUFBVSxXQUFWLEFBQXFCLHNCQUFNLEFBQUM7O2dCQUFEO2tCQUEzQixBQUEyQjtBQUFBO0FBQUEsR0FBQSxDQUEzQixtQkFBeUMsQUFBQzs7Z0JBQUQ7a0JBQWhELEFBQWdELEFBQ2pEO0FBRGlEO0FBQUEsR0FBQTtBQUdsRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==