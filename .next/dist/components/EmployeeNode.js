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
    className: "jsx-196905868",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { href: "/create?id=" + node.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("a", { id: "plus", className: "jsx-196905868",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "+")), _react2.default.createElement(_link2.default, { href: "/employee?id=" + node.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("a", { id: "name", className: "jsx-196905868",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, node.name)), _react2.default.createElement("span", { id: node.rank, className: "jsx-196905868" + " " + "rank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, node.rank), _react2.default.createElement("div", {
    className: "jsx-196905868",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement("span", { id: "title", className: "jsx-196905868",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, node.title)), _react2.default.createElement(_style2.default, {
    styleId: "196905868",
    css: ".rank.jsx-196905868{background:black;border-radius:0.8em;-moz-border-radius:0.8em;-webkit-border-radius:0.8em;color:#ffffff;display:inline-block;font-weight:bold;line-height:1.6em;text-align:center;width:1.3em;}a.jsx-196905868{text-decoration:none;color:black;font-weight:bold;}#name.jsx-196905868{padding-left:5px;padding-right:5px;}#name.jsx-196905868:hover{color:#79589F;}#plus.jsx-196905868{color:#cccccc;font-size:1.5rem;text-align:center;}#plus.jsx-196905868:hover{color:limegreen;}#title.jsx-196905868{font-size:.8rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHd0IsQUFZSSxBQUtKLEFBSUgsQUFHQSxBQU1qQixBQUdBLGNBWEMsQUFHbUIsRUFLbkIsQUFHQSxDQWhDc0IsQUFpQkYsSUFMTixVQWFNLEVBWkQsRUFLbkIsRUFqQjJCLFlBeUIzQixDQVpBLFlBWjhCLDRCQUNkLGNBQ08scUJBQ0osaUJBQ0Msa0JBQ0Esa0JBQ04sWUFDZCIsImZpbGUiOiJjb21wb25lbnRzL0VtcGxveWVlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuY29uc3QgRW1wbG95ZWVOb2RlID0gKHtub2RlfSkgPT4ge1xuICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPExpbmsgaHJlZj17YC9jcmVhdGU/aWQ9JHtub2RlLmlkfWB9PlxuICAgICAgICAgIDxhIGlkPVwicGx1c1wiPiYjNDM7PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvZW1wbG95ZWU/aWQ9JHtub2RlLmlkfWB9PlxuICAgICAgICAgIDxhIGlkPVwibmFtZVwiPntub2RlLm5hbWV9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzcGFuIGlkPXtub2RlLnJhbmt9IGNsYXNzTmFtZT1cInJhbmtcIj57bm9kZS5yYW5rfTwvc3Bhbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3BhbiBpZD1cInRpdGxlXCI+e25vZGUudGl0bGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgLnJhbmsge1xuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjhlbTtcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMC44ZW07XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAuOGVtO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxLjNlbTtcbiAgICB9XG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgI25hbWUge1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgfVxuICAgICNuYW1lOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjNzk1ODlGO1xuICAgIH1cbiAgICAjcGx1cyB7XG4gICAgICBjb2xvcjogI2NjY2NjYztcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAjcGx1czpob3ZlciB7XG4gICAgICBjb2xvcjpsaW1lZ3JlZW5cbiAgICB9XG4gICAgI3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTouOHJlbVxuICAgIH1cbiAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWVOb2RlOyJdfQ== */\n/*@ sourceURL=components/EmployeeNode.js */"
  }));
};

exports.default = EmployeeNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRW1wbG95ZWVOb2RlLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJFbXBsb3llZU5vZGUiLCJub2RlIiwiaWQiLCJuYW1lIiwicmFuayIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztBQUdQLElBQU0sZUFBZSxTQUFmLEFBQWUsbUJBQVk7TUFBVixBQUFVLFlBQVYsQUFBVSxBQUMvQjs7eUJBQ0ksY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsZ0NBQUssc0JBQW9CLEtBQTFCLEFBQStCO2dCQUEvQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLElBQUgsQUFBTSxtQkFBTjs7Z0JBQUE7a0JBQUE7QUFBQTtLQUZKLEFBQ0UsQUFDRSxBQUVGLHVCQUFBLEFBQUMsZ0NBQUssd0JBQXNCLEtBQTVCLEFBQWlDO2dCQUFqQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLElBQUgsQUFBTSxtQkFBTjs7Z0JBQUE7a0JBQUEsQUFBYztBQUFkO1VBTEosQUFJRSxBQUNFLEFBQW1CLEFBRXJCLHdCQUFBLGNBQUEsVUFBTSxJQUFJLEtBQVYsQUFBZSx5Q0FBZixBQUErQjs7Z0JBQS9CO2tCQUFBLEFBQXVDO0FBQXZDO1VBUEYsQUFPRSxBQUE0QyxBQUM1Qyx1QkFBQSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUEsVUFBTSxJQUFOLEFBQVMsb0JBQVQ7O2dCQUFBO2tCQUFBLEFBQWtCO0FBQWxCO1VBVEosQUFRRSxBQUNFLEFBQXVCO2FBVDNCO1NBREosQUFDSSxBQWtETDtBQWxESztBQUZOLEFBc0RBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkVtcGxveWVlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9