'use strict';

var _set = require('babel-runtime/core-js/set');

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