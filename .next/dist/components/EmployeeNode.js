"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/components/EmployeeNode.js";


var EmployeeNode = function EmployeeNode(_ref) {
  var node = _ref.node;

  return _react2.default.createElement("div", {
    className: "jsx-3024275854",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { href: "/create?id=" + node.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("a", { id: "plus", className: "jsx-3024275854",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "+")), _react2.default.createElement(_link2.default, { href: "/employee?id=" + node.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("a", { id: "name", className: "jsx-3024275854",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, node.name)), _react2.default.createElement("span", {
    className: "jsx-3024275854" + " " + "rank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, node.rank), _react2.default.createElement(_style2.default, {
    styleId: "3024275854",
    css: ".rank.jsx-3024275854{background:#cccccc;border-radius:0.8em;-moz-border-radius:0.8em;-webkit-border-radius:0.8em;color:#ffffff;display:inline-block;font-weight:bold;line-height:1.6em;text-align:center;width:1.3em;}a.jsx-3024275854{text-decoration:none;color:black;}#name.jsx-3024275854:hover{color:red;}#plus.jsx-3024275854{color:#cccccc;font-size:1.5rem;text-align:center;}#plus.jsx-3024275854:hover{color:limegreen;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUcwQixBQVlFLEFBSVgsQUFHSSxBQU1qQixVQVJDLElBR21CLEVBS25CLEdBeEJzQixFQVlSLFVBUU0sRUFQcEIsTUFaMkIsVUFvQjNCLGVBbkI4Qiw0QkFDZCxjQUNPLHFCQUNKLGlCQUNDLGtCQUNBLGtCQUNOLFlBQ2QiLCJmaWxlIjoiY29tcG9uZW50cy9FbXBsb3llZU5vZGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5cbmNvbnN0IEVtcGxveWVlTm9kZSA9ICh7bm9kZX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvY3JlYXRlP2lkPSR7bm9kZS5pZH1gfT5cbiAgICAgICAgICA8YSBpZD1cInBsdXNcIj4mIzQzOzwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPXtgL2VtcGxveWVlP2lkPSR7bm9kZS5pZH1gfT5cbiAgICAgICAgICA8YSBpZD1cIm5hbWVcIj57bm9kZS5uYW1lfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWUgPVwicmFua1wiPntub2RlLnJhbmt9PC9zcGFuPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAucmFuayB7XG4gICAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC44ZW07XG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAuOGVtO1xuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwLjhlbTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsaW5lLWhlaWdodDogMS42ZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMS4zZW07XG4gICAgfVxuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAjbmFtZTpob3ZlciB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICAjcGx1cyB7XG4gICAgICBjb2xvcjogI2NjY2NjYztcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAjcGx1czpob3ZlciB7XG4gICAgICBjb2xvcjpsaW1lZ3JlZW5cbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVlTm9kZTsiXX0= */\n/*@ sourceURL=components/EmployeeNode.js */"
  }));
};

exports.default = EmployeeNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJFbXBsb3llZU5vZGUiLCJub2RlIiwiaWQiLCJuYW1lIiwicmFuayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7QUFHUCxJQUFNLGVBQWUsU0FBZixBQUFlLG1CQUFZO01BQVYsQUFBVSxZQUFWLEFBQVUsQUFDL0I7O3lCQUNJLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLGdDQUFLLHNCQUFvQixLQUExQixBQUErQjtnQkFBL0I7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxJQUFILEFBQU0sbUJBQU47O2dCQUFBO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFFRix1QkFBQSxBQUFDLGdDQUFLLHdCQUFzQixLQUE1QixBQUFpQztnQkFBakM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxJQUFILEFBQU0sbUJBQU47O2dCQUFBO2tCQUFBLEFBQWM7QUFBZDtVQUxKLEFBSUUsQUFDRSxBQUFtQixBQUVyQix3QkFBQSxjQUFBO3dDQUFBLEFBQWlCOztnQkFBakI7a0JBQUEsQUFBeUI7QUFBekI7QUFBQSxVQVBGLEFBT0UsQUFBOEI7YUFQaEM7U0FESixBQUNJLEFBdUNMO0FBdkNLO0FBRk4sQUEyQ0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRW1wbG95ZWVOb2RlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=