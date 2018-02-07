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
      emp = buildTree2(emp, list);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS91dGlsaXR5LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJidWlsZFRyZWUiLCJpdGVtIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50SWQiLCJpZCIsImNoaWxkcmVuIiwiaSIsImxlbmd0aCIsImVtcCIsInN1cGVyVmlzb3JJZCIsImJ1aWxkVHJlZTIiLCJwdXNoIiwic29ydFJhbmsiLCJmaWx0ZXJTdXBlcnZpc29ycyIsImVtcGxveWVlcyIsInN1cGVydmlzb3JzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQ0EsUUFBQSxBQUFRLFlBQVksVUFBQSxBQUFTLE1BQVQsQUFBZSxNQUFNLEFBQ3ZDO1VBQUEsQUFBUSxJQUFSLEFBQVksY0FBWixBQUEwQixNQUExQixBQUFnQyxBQUNoQztNQUFNLFlBQVksS0FBbEIsQUFBdUIsQUFDdkI7T0FBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDaEI7T0FBSSxJQUFJLElBQVIsQUFBWSxHQUFHLElBQUksS0FBbkIsQUFBd0IsUUFBeEIsQUFBZ0MsS0FBSyxBQUNqQztRQUFJLE1BQU0sS0FBVixBQUFVLEFBQUssQUFDZjtRQUFJLElBQUEsQUFBSSxpQkFBUixBQUF5QixXQUFXLEFBQ2xDO1lBQU0sV0FBQSxBQUFXLEtBQWpCLEFBQU0sQUFBZ0IsQUFDdEI7V0FBQSxBQUFLLFNBQUwsQUFBYyxLQUFkLEFBQW1CLEFBQ3RCO0FBQ0Y7QUFDSDtTQUFBLEFBQU8sQUFDTjtBQVpEOztBQWNBLFFBQUEsQUFBUSxXQUFXLFVBQUEsQUFBUyxNQUFULEFBQWUsTUFBTSxBQUV2QyxDQUZEOztBQUlBLFFBQUEsQUFBUSxvQkFBb0IsVUFBQSxBQUFTLFdBQVcsQUFDOUM7TUFBTSx3QkFBYyxBQUFVLElBQUksVUFBQSxBQUFDLEtBQVEsQUFDekM7V0FBTyxJQUFQLEFBQVcsQUFDWjtBQUZELEFBQW9CLEFBR3BCLEdBSG9CO0FBSXBCO1NBQU8sa0JBQVAsQUFBTyxBQUFRLEFBQ2hCO0FBTkQiLCJmaWxlIjoidXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9