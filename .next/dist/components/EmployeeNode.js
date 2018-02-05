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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeNode.js';


var EmployeeNode = function EmployeeNode(_ref) {
  var node = _ref.node;

  return _react2.default.createElement('div', { id: 'fml', className: 'jsx-4130575906',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { as: 'employee/' + node.id, href: '/employee/' + node.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-4130575906',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, node.name)), _react2.default.createElement('p', {
    className: 'jsx-4130575906',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, node.actror), _react2.default.createElement('p', {
    className: 'jsx-4130575906',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, node.supervisorName), _react2.default.createElement(_style2.default, {
    styleId: '4130575906',
    css: 'a.jsx-4130575906{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQixBQUc0QixxQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9FbXBsb3llZU5vZGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5cbmNvbnN0IEVtcGxveWVlTm9kZSA9ICh7bm9kZX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPSdmbWwnPlxuICAgICAgPExpbmsgYXM9e2BlbXBsb3llZS8ke25vZGUuaWR9YH0gaHJlZj17YC9lbXBsb3llZS8ke25vZGUuaWR9YH0+XG4gICAgICAgIDxhPntub2RlLm5hbWV9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHA+e25vZGUuYWN0cm9yfTwvcD5cbiAgICAgIDxwPntub2RlLnN1cGVydmlzb3JOYW1lfTwvcD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZU5vZGU7Il19 */\n/*@ sourceURL=components/EmployeeNode.js */'
  }));
};

exports.default = EmployeeNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJFbXBsb3llZU5vZGUiLCJub2RlIiwiaWQiLCJuYW1lIiwiYWN0cm9yIiwic3VwZXJ2aXNvck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBR1AsSUFBTSxlQUFlLFNBQWYsQUFBZSxtQkFBWTtNQUFWLEFBQVUsWUFBVixBQUFVLEFBQy9COzt5QkFDRSxjQUFBLFNBQUssSUFBTCxBQUFRLGtCQUFSOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLGdDQUFLLGtCQUFnQixLQUF0QixBQUEyQixJQUFNLHFCQUFtQixLQUFwRCxBQUF5RDtnQkFBekQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsVUFGSixBQUNFLEFBQ0UsQUFBUyxBQUVYLHdCQUFBLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsVUFKRixBQUlFLEFBQVMsQUFDVCx5QkFBQSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLFVBTEYsQUFLRSxBQUFTO2FBTFg7U0FERixBQUNFLEFBYUg7QUFiRztBQUZKLEFBaUJBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkVtcGxveWVlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9