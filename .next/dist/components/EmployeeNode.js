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
  }, node.name)), _react2.default.createElement("span", { id: node.rank, className: "jsx-4219738636" + " " + "rank",
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
  }, node.title)), _react2.default.createElement(_style2.default, {
    styleId: "4219738636",
    css: ".rank.jsx-4219738636{background:black;border-radius:0.8em;-moz-border-radius:0.8em;-webkit-border-radius:0.8em;color:#ffffff;display:inline-block;font-weight:bold;line-height:1.6em;text-align:center;width:1.3em;}a.jsx-4219738636{text-decoration:none;color:black;}#name.jsx-4219738636{padding-left:5px;padding-right:5px;}#name.jsx-4219738636:hover{color:#79589F;font-weight:bold;}#plus.jsx-4219738636{color:#cccccc;font-size:1.5rem;text-align:center;}#plus.jsx-4219738636:hover{color:limegreen;}#title.jsx-4219738636{font-size:.8rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHd0IsQUFZSSxBQUlKLEFBSUgsQUFJQSxBQU1qQixBQUdBLGNBWm9CLEFBSUEsRUFLbkIsQUFHQSxDQWhDc0IsQUFnQkYsSUFKTixVQVNkLEFBSW9CLEVBWnBCLEVBSUEsRUFoQjJCLFlBeUIzQixhQXhCOEIsNEJBQ2QsY0FDTyxxQkFDSixpQkFDQyxrQkFDQSxrQkFDTixZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5jb25zdCBFbXBsb3llZU5vZGUgPSAoe25vZGV9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPXtgL2NyZWF0ZT9pZD0ke25vZGUuaWR9YH0+XG4gICAgICAgICAgPGEgaWQ9XCJwbHVzXCI+JiM0Mzs8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17YC9lbXBsb3llZT9pZD0ke25vZGUuaWR9YH0+XG4gICAgICAgICAgPGEgaWQ9XCJuYW1lXCI+e25vZGUubmFtZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHNwYW4gaWQ9e25vZGUucmFua31jbGFzc05hbWU9XCJyYW5rXCI+e25vZGUucmFua308L3NwYW4+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4gaWQ9XCJ0aXRsZVwiPntub2RlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgIC5yYW5rIHtcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC44ZW07XG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAuOGVtO1xuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwLjhlbTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsaW5lLWhlaWdodDogMS42ZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMS4zZW07XG4gICAgfVxuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAjbmFtZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICB9XG4gICAgI25hbWU6aG92ZXIge1xuICAgICAgY29sb3I6ICM3OTU4OUY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgI3BsdXMge1xuICAgICAgY29sb3I6ICNjY2NjY2M7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgI3BsdXM6aG92ZXIge1xuICAgICAgY29sb3I6bGltZWdyZWVuXG4gICAgfVxuICAgICN0aXRsZSB7XG4gICAgICBmb250LXNpemU6LjhyZW1cbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVlTm9kZTsiXX0= */\n/*@ sourceURL=components/EmployeeNode.js */"
  }));
};

exports.default = EmployeeNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJFbXBsb3llZU5vZGUiLCJub2RlIiwiaWQiLCJuYW1lIiwicmFuayIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztBQUdQLElBQU0sZUFBZSxTQUFmLEFBQWUsbUJBQVk7TUFBVixBQUFVLFlBQVYsQUFBVSxBQUMvQjs7eUJBQ0ksY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsZ0NBQUssc0JBQW9CLEtBQTFCLEFBQStCO2dCQUEvQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLElBQUgsQUFBTSxtQkFBTjs7Z0JBQUE7a0JBQUE7QUFBQTtLQUZKLEFBQ0UsQUFDRSxBQUVGLHVCQUFBLEFBQUMsZ0NBQUssd0JBQXNCLEtBQTVCLEFBQWlDO2dCQUFqQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLElBQUgsQUFBTSxtQkFBTjs7Z0JBQUE7a0JBQUEsQUFBYztBQUFkO1VBTEosQUFJRSxBQUNFLEFBQW1CLEFBRXJCLHdCQUFBLGNBQUEsVUFBTSxJQUFJLEtBQVYsQUFBZSwwQ0FBZixBQUE4Qjs7Z0JBQTlCO2tCQUFBLEFBQXNDO0FBQXRDO1VBUEYsQUFPRSxBQUEyQyxBQUMzQyx1QkFBQSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUEsVUFBTSxJQUFOLEFBQVMsb0JBQVQ7O2dCQUFBO2tCQUFBLEFBQWtCO0FBQWxCO1VBVEosQUFRRSxBQUNFLEFBQXVCO2FBVDNCO1NBREosQUFDSSxBQWtETDtBQWxESztBQUZOLEFBc0RBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkVtcGxveWVlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9