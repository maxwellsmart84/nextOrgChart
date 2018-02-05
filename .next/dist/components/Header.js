'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.title), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })));
  return props.url.asPath === '/' ? _react2.default.createElement(_NavLink2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }) : _react2.default.createElement(_EmployeeLink2.default, { url: props.url, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  });
}

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiRW1wbG95ZWVMaW5rIiwiTmF2TGluayIsIkhlYWRlciIsInByb3BzIiwidGl0bGUiLCJ1cmwiLCJhc1BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFhOzs7Ozs7Ozs7QUFFcEIsU0FBQSxBQUFTLE9BQVQsQUFBZ0IsT0FBTyxBQUNyQjtrQkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFRO0FBQVI7QUFBQSxXQURGLEFBQ0UsQUFBYyxBQUNkLGdEQUFNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO2dCQUE5QjtrQkFGRixBQUVFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBSkosQUFDRSxBQUdFLEFBR0o7QUFISTs7ZUFHRyxBQUFNLElBQU4sQUFBVSxXQUFWLEFBQXFCLHNCQUFNLEFBQUM7O2dCQUFEO2tCQUEzQixBQUEyQjtBQUFBO0FBQUEsR0FBQSxDQUEzQixtQkFBeUMsQUFBQyx3Q0FBYSxLQUFLLE1BQW5CLEFBQXlCO2dCQUF6QjtrQkFBaEQsQUFBZ0QsQUFDakQ7QUFEaUQ7R0FBQTtBQUdsRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==