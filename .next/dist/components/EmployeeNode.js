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
  }, _react2.default.createElement(_link2.default, { as: 'employee/' + node.firstName + node.lastName, href: '/employee/' + node.id, __source: {
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
    css: 'a.jsx-4130575906{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQixBQUc0QixxQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9FbXBsb3llZU5vZGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5cbmNvbnN0IEVtcGxveWVlTm9kZSA9ICh7bm9kZX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPSdmbWwnPlxuICAgICAgPExpbmsgYXM9e2BlbXBsb3llZS8ke25vZGUuZmlyc3ROYW1lfSR7bm9kZS5sYXN0TmFtZX1gfSBocmVmPXtgL2VtcGxveWVlLyR7bm9kZS5pZH1gfT5cbiAgICAgICAgPGE+e25vZGUubmFtZX08L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8cD57bm9kZS5hY3Ryb3J9PC9wPlxuICAgICAgPHA+e25vZGUuc3VwZXJ2aXNvck5hbWV9PC9wPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVlTm9kZTsiXX0= */\n/*@ sourceURL=components/EmployeeNode.js */'
  }));
};

exports.default = EmployeeNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJFbXBsb3llZU5vZGUiLCJub2RlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpZCIsIm5hbWUiLCJhY3Ryb3IiLCJzdXBlcnZpc29yTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7QUFHUCxJQUFNLGVBQWUsU0FBZixBQUFlLG1CQUFZO01BQVYsQUFBVSxZQUFWLEFBQVUsQUFDL0I7O3lCQUNFLGNBQUEsU0FBSyxJQUFMLEFBQVEsa0JBQVI7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsZ0NBQUssa0JBQWdCLEtBQWhCLEFBQXFCLFlBQVksS0FBdkMsQUFBNEMsVUFBWSxxQkFBbUIsS0FBM0UsQUFBZ0Y7Z0JBQWhGO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLFVBRkosQUFDRSxBQUNFLEFBQVMsQUFFWCx3QkFBQSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLFVBSkYsQUFJRSxBQUFTLEFBQ1QseUJBQUEsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxVQUxGLEFBS0UsQUFBUzthQUxYO1NBREYsQUFDRSxBQWFIO0FBYkc7QUFGSixBQWlCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJFbXBsb3llZU5vZGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==