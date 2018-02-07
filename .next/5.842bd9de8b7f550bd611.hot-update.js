webpackHotUpdate(5,{

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _set = __webpack_require__(80);

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//recurive function for assembling the d3 style tree
exports.buildTree = function (item, list) {
  console.log('BUILD TREE', item, list);
  var currentId = item.id;
  item.children = [];
  for (var i = 0; i < list.length; i++) {
    var emp = list[i];
    if (emp.superVisorId === currentId) {
      emp = buildTree(emp, list);
      item.children.push(emp);
    }
  }
  return item;
};

exports.sortRank = function (item, list) {};

exports.filterSupervisors = function (employees) {
  var supervisors = employees.map(function (emp) {
    return emp.superVisorId;
  });
  //filter out dupes;
  return new _set2.default(supervisors);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS91dGlsaXR5LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJidWlsZFRyZWUiLCJpdGVtIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50SWQiLCJpZCIsImNoaWxkcmVuIiwiaSIsImxlbmd0aCIsImVtcCIsInN1cGVyVmlzb3JJZCIsInB1c2giLCJzb3J0UmFuayIsImZpbHRlclN1cGVydmlzb3JzIiwiZW1wbG95ZWVzIiwic3VwZXJ2aXNvcnMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQSxRQUFBLEFBQVEsWUFBWSxVQUFBLEFBQVMsTUFBVCxBQUFlLE1BQU0sQUFDdkM7VUFBQSxBQUFRLElBQVIsQUFBWSxjQUFaLEFBQTBCLE1BQTFCLEFBQWdDLEFBQ2hDO01BQU0sWUFBWSxLQUFsQixBQUF1QixBQUN2QjtPQUFBLEFBQUssV0FBTCxBQUFnQixBQUNoQjtPQUFJLElBQUksSUFBUixBQUFZLEdBQUcsSUFBSSxLQUFuQixBQUF3QixRQUF4QixBQUFnQyxLQUFLLEFBQ2pDO1FBQUksTUFBTSxLQUFWLEFBQVUsQUFBSyxBQUNmO1FBQUksSUFBQSxBQUFJLGlCQUFSLEFBQXlCLFdBQVcsQUFDbEM7WUFBTSxVQUFBLEFBQVUsS0FBaEIsQUFBTSxBQUFlLEFBQ3JCO1dBQUEsQUFBSyxTQUFMLEFBQWMsS0FBZCxBQUFtQixBQUN0QjtBQUNGO0FBQ0g7U0FBQSxBQUFPLEFBQ047QUFaRDs7QUFjQSxRQUFBLEFBQVEsV0FBVyxVQUFBLEFBQVMsTUFBVCxBQUFlLE1BQU0sQUFFdkMsQ0FGRDs7QUFJQSxRQUFBLEFBQVEsb0JBQW9CLFVBQUEsQUFBUyxXQUFXLEFBQzlDO01BQU0sd0JBQWMsQUFBVSxJQUFJLFVBQUEsQUFBQyxLQUFRLEFBQ3pDO1dBQU8sSUFBUCxBQUFXLEFBQ1o7QUFGRCxBQUFvQixBQUdwQixHQUhvQjtBQUlwQjtTQUFPLGtCQUFQLEFBQU8sQUFBUSxBQUNoQjtBQU5EIiwiZmlsZSI6InV0aWxpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/api/utility.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/maxwellkrause/Documents/projects/atlatlEval/orgChartReactNode/api/utility.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44NDJiZDlkZThiN2Y1NTBiZDYxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBpL3V0aWxpdHkuanM/NjdiZTk4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vcmVjdXJpdmUgZnVuY3Rpb24gZm9yIGFzc2VtYmxpbmcgdGhlIGQzIHN0eWxlIHRyZWVcbmV4cG9ydHMuYnVpbGRUcmVlID0gZnVuY3Rpb24oaXRlbSwgbGlzdCkge1xuICBjb25zb2xlLmxvZygnQlVJTEQgVFJFRScsIGl0ZW0sIGxpc3QpO1xuICBjb25zdCBjdXJyZW50SWQgPSBpdGVtLmlkO1xuICBpdGVtLmNoaWxkcmVuID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZW1wID0gbGlzdFtpXTtcbiAgICAgIGlmIChlbXAuc3VwZXJWaXNvcklkID09PSBjdXJyZW50SWQpIHtcbiAgICAgICAgZW1wID0gYnVpbGRUcmVlKGVtcCwgbGlzdClcbiAgICAgICAgaXRlbS5jaGlsZHJlbi5wdXNoKGVtcCk7XG4gICAgfVxuICB9XG5yZXR1cm4gaXRlbVxufVxuXG5leHBvcnRzLnNvcnRSYW5rID0gZnVuY3Rpb24oaXRlbSwgbGlzdCkge1xuXG59XG5cbmV4cG9ydHMuZmlsdGVyU3VwZXJ2aXNvcnMgPSBmdW5jdGlvbihlbXBsb3llZXMpIHtcbiAgY29uc3Qgc3VwZXJ2aXNvcnMgPSBlbXBsb3llZXMubWFwKChlbXApID0+IHtcbiAgICByZXR1cm4gZW1wLnN1cGVyVmlzb3JJZDtcbiAgfSlcbiAgLy9maWx0ZXIgb3V0IGR1cGVzO1xuICByZXR1cm4gbmV3IFNldChzdXBlcnZpc29ycylcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS91dGlsaXR5LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBWkE7QUFDQTtBQWFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFMQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9