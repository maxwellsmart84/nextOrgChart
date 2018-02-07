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
    className: "jsx-262262736",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { href: "/create?id=" + node.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("a", { id: "plus", className: "jsx-262262736",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "+")), _react2.default.createElement(_link2.default, { href: "/employee?id=" + node.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("a", { id: "name", className: "jsx-262262736",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, node.name)), _react2.default.createElement("span", { id: "rank", className: "jsx-262262736",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, node.rank), _react2.default.createElement(_style2.default, {
    styleId: "262262736",
    css: "#rank.jsx-262262736{background:#cccccc;border-radius:0.8em;-moz-border-radius:0.8em;-webkit-border-radius:0.8em;color:#ffffff;display:inline-block;font-weight:bold;line-height:1.6em;margin-right:5px;text-align:center;width:1.3em;}a.jsx-262262736{text-decoration:none;color:black;}#name.jsx-262262736:hover{color:red;}#plus.jsx-262262736{color:white;font-size:1.5rem;}#plus.jsx-262262736:hover{color:limegreen;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUcwQixBQWFFLEFBSVgsQUFHRSxBQUtmLFVBUEMsRUFHbUIsSUFJbkIsR0F4QnNCLEVBYVIsUUFRZCxJQVBBLE1BYjJCLHlCQUNHLDRCQUNkLGNBQ08scUJBQ0osaUJBQ0Msa0JBQ0QsaUJBQ0Msa0JBQ04sWUFDZCIsImZpbGUiOiJjb21wb25lbnRzL0VtcGxveWVlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuY29uc3QgRW1wbG95ZWVOb2RlID0gKHtub2RlfSkgPT4ge1xuICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPExpbmsgaHJlZj17YC9jcmVhdGU/aWQ9JHtub2RlLmlkfWB9PlxuICAgICAgICAgIDxhIGlkPVwicGx1c1wiPiYjNDM7PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvZW1wbG95ZWU/aWQ9JHtub2RlLmlkfWB9PlxuICAgICAgICAgIDxhIGlkPVwibmFtZVwiPntub2RlLm5hbWV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzcGFuIGlkPSdyYW5rJz57bm9kZS5yYW5rfTwvc3Bhbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgI3Jhbmsge1xuICAgICAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuOGVtO1xuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAwLjhlbTtcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMC44ZW07XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMS4zZW07XG4gICAgfVxuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAjbmFtZTpob3ZlciB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICAjcGx1cyB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICAgI3BsdXM6aG92ZXIge1xuICAgICAgY29sb3I6bGltZWdyZWVuXG4gICAgfVxuICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZU5vZGU7Il19 */\n/*@ sourceURL=components/EmployeeNode.js */"
  }));
};

exports.default = EmployeeNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJFbXBsb3llZU5vZGUiLCJub2RlIiwiaWQiLCJuYW1lIiwicmFuayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7QUFHUCxJQUFNLGVBQWUsU0FBZixBQUFlLG1CQUFZO01BQVYsQUFBVSxZQUFWLEFBQVUsQUFDL0I7O3lCQUNJLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLGdDQUFLLHNCQUFvQixLQUExQixBQUErQjtnQkFBL0I7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxJQUFILEFBQU0sbUJBQU47O2dCQUFBO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFFRix1QkFBQSxBQUFDLGdDQUFLLHdCQUFzQixLQUE1QixBQUFpQztnQkFBakM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxJQUFILEFBQU0sbUJBQU47O2dCQUFBO2tCQUFBLEFBQWM7QUFBZDtVQUxKLEFBSUUsQUFDRSxBQUFtQixBQUVyQix3QkFBQSxjQUFBLFVBQU0sSUFBTixBQUFTLG1CQUFUOztnQkFBQTtrQkFBQSxBQUFpQjtBQUFqQjtVQVBGLEFBT0UsQUFBc0I7YUFQeEI7U0FESixBQUNJLEFBdUNMO0FBdkNLO0FBRk4sQUEyQ0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRW1wbG95ZWVOb2RlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=