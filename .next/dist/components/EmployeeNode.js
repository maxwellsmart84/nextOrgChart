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
    className: "jsx-630151140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { href: "/employee?id=" + node.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("a", { id: "name", className: "jsx-630151140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, node.name)), _react2.default.createElement(_link2.default, { href: "/create?id=" + node.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("a", { id: "plus", className: "jsx-630151140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "+")), _react2.default.createElement(_style2.default, {
    styleId: "630151140",
    css: "a.jsx-630151140{text-decoration:none;color:black;}#name.jsx-630151140:hover{color:red;}#plus.jsx-630151140{color:white;font-size:1.5rem;}#plus.jsx-630151140:hover{color:limegreen;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUc0QixBQUlYLEFBR0UsQUFLZixVQVBDLEVBR21CLElBSW5CLEtBWGMsUUFRZCxJQVBBIiwiZmlsZSI6ImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5jb25zdCBFbXBsb3llZU5vZGUgPSAoe25vZGV9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMaW5rIGhyZWY9e2AvZW1wbG95ZWU/aWQ9JHtub2RlLmlkfWB9PlxuICAgICAgICA8YSBpZD1cIm5hbWVcIj57bm9kZS5uYW1lfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9e2AvY3JlYXRlP2lkPSR7bm9kZS5pZH1gfT5cbiAgICAgICAgPGEgaWQ9XCJwbHVzXCI+JiM0Mzs8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAjbmFtZTpob3ZlciB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICAjcGx1cyB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICAgI3BsdXM6aG92ZXIge1xuICAgICAgY29sb3I6bGltZWdyZWVuXG4gICAgfVxuICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZU5vZGU7Il19 */\n/*@ sourceURL=components/EmployeeNode.js */"
  }));
};

exports.default = EmployeeNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJFbXBsb3llZU5vZGUiLCJub2RlIiwiaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztBQUdQLElBQU0sZUFBZSxTQUFmLEFBQWUsbUJBQVk7TUFBVixBQUFVLFlBQVYsQUFBVSxBQUMvQjs7eUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsZ0NBQUssd0JBQXNCLEtBQTVCLEFBQWlDO2dCQUFqQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLElBQUgsQUFBTSxtQkFBTjs7Z0JBQUE7a0JBQUEsQUFBYztBQUFkO1VBRkosQUFDRSxBQUNFLEFBQW1CLEFBRXJCLHdCQUFBLEFBQUMsZ0NBQUssc0JBQW9CLEtBQTFCLEFBQStCO2dCQUEvQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLElBQUgsQUFBTSxtQkFBTjs7Z0JBQUE7a0JBQUE7QUFBQTtLQUxKLEFBSUUsQUFDRTthQUxKO1NBREYsQUFDRSxBQXlCSDtBQXpCRztBQUZKLEFBNkJBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkVtcGxveWVlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9