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
    className: "jsx-4219738636",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { href: "/create?id=" + node.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("a", { id: "plus", className: "jsx-4219738636",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "+")), _react2.default.createElement(_link2.default, { href: "/employee?id=" + node.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("a", { id: "name", className: "jsx-4219738636",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, node.name)), _react2.default.createElement("span", {
    className: "jsx-4219738636" + " " + "rank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, node.rank), _react2.default.createElement("div", {
    className: "jsx-4219738636",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement("span", { id: "title", className: "jsx-4219738636",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "title")), _react2.default.createElement(_style2.default, {
    styleId: "4219738636",
    css: ".rank.jsx-4219738636{background:black;border-radius:0.8em;-moz-border-radius:0.8em;-webkit-border-radius:0.8em;color:#ffffff;display:inline-block;font-weight:bold;line-height:1.6em;text-align:center;width:1.3em;}a.jsx-4219738636{text-decoration:none;color:black;}#name.jsx-4219738636{padding-left:5px;padding-right:5px;}#name.jsx-4219738636:hover{color:#79589F;font-weight:bold;}#plus.jsx-4219738636{color:#cccccc;font-size:1.5rem;text-align:center;}#plus.jsx-4219738636:hover{color:limegreen;}#title.jsx-4219738636{font-size:.8rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHd0IsQUFZSSxBQUlKLEFBSUgsQUFJQSxBQU1qQixBQUdBLGNBWm9CLEFBSUEsRUFLbkIsQUFHQSxDQWhDc0IsQUFnQkYsSUFKTixVQVNkLEFBSW9CLEVBWnBCLEVBSUEsRUFoQjJCLFlBeUIzQixhQXhCOEIsNEJBQ2QsY0FDTyxxQkFDSixpQkFDQyxrQkFDQSxrQkFDTixZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5jb25zdCBFbXBsb3llZU5vZGUgPSAoe25vZGV9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPXtgL2NyZWF0ZT9pZD0ke25vZGUuaWR9YH0+XG4gICAgICAgICAgPGEgaWQ9XCJwbHVzXCI+JiM0Mzs8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17YC9lbXBsb3llZT9pZD0ke25vZGUuaWR9YH0+XG4gICAgICAgICAgPGEgaWQ9XCJuYW1lXCI+e25vZGUubmFtZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lID1cInJhbmtcIj57bm9kZS5yYW5rfTwvc3Bhbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3BhbiBpZD1cInRpdGxlXCI+dGl0bGU8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAucmFuayB7XG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuOGVtO1xuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAwLjhlbTtcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMC44ZW07XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEuM2VtO1xuICAgIH1cbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgI25hbWUge1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgfVxuICAgICNuYW1lOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjNzk1ODlGO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgICNwbHVzIHtcbiAgICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICNwbHVzOmhvdmVyIHtcbiAgICAgIGNvbG9yOmxpbWVncmVlblxuICAgIH1cbiAgICAjdGl0bGUge1xuICAgICAgZm9udC1zaXplOi44cmVtXG4gICAgfVxuICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZU5vZGU7Il19 */\n/*@ sourceURL=components/EmployeeNode.js */"
  }));
};

exports.default = EmployeeNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJFbXBsb3llZU5vZGUiLCJub2RlIiwiaWQiLCJuYW1lIiwicmFuayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7QUFHUCxJQUFNLGVBQWUsU0FBZixBQUFlLG1CQUFZO01BQVYsQUFBVSxZQUFWLEFBQVUsQUFDL0I7O3lCQUNJLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLGdDQUFLLHNCQUFvQixLQUExQixBQUErQjtnQkFBL0I7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxJQUFILEFBQU0sbUJBQU47O2dCQUFBO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFFRix1QkFBQSxBQUFDLGdDQUFLLHdCQUFzQixLQUE1QixBQUFpQztnQkFBakM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxJQUFILEFBQU0sbUJBQU47O2dCQUFBO2tCQUFBLEFBQWM7QUFBZDtVQUxKLEFBSUUsQUFDRSxBQUFtQixBQUVyQix3QkFBQSxjQUFBO3dDQUFBLEFBQWlCOztnQkFBakI7a0JBQUEsQUFBeUI7QUFBekI7QUFBQSxVQVBGLEFBT0UsQUFBOEIsQUFDOUIsdUJBQUEsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLFVBQU0sSUFBTixBQUFTLG9CQUFUOztnQkFBQTtrQkFBQTtBQUFBO0tBVEosQUFRRSxBQUNFO2FBVEo7U0FESixBQUNJLEFBa0RMO0FBbERLO0FBRk4sQUFzREE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRW1wbG95ZWVOb2RlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=