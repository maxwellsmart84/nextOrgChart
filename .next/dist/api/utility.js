'use strict';

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//recurive function for assembling the d3 style tree
exports.buildTree = function (arr) {
  var tree = [],
      mappedArr = {},
      arrElem,
      mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  for (var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem.id] = arrElem;
    mappedArr[arrElem.id].children = [];
  }

  for (var id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.supervisorId !== 'None') {
        mappedArr[mappedElem.supervisorId].children.push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
          tree.push(mappedElem);
        }
    }
  }
  return tree;
};

// exports.sortRank = function(item, list) {

// }

exports.filterSupervisors = function (employees) {
  var supervisors = employees.map(function (emp) {
    return emp.superVisorId;
  });
  //filter out dupes;
  return new _set2.default(supervisors);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS91dGlsaXR5LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJidWlsZFRyZWUiLCJhcnIiLCJ0cmVlIiwibWFwcGVkQXJyIiwiYXJyRWxlbSIsIm1hcHBlZEVsZW0iLCJpIiwibGVuIiwibGVuZ3RoIiwiaWQiLCJjaGlsZHJlbiIsImhhc093blByb3BlcnR5Iiwic3VwZXJ2aXNvcklkIiwicHVzaCIsImZpbHRlclN1cGVydmlzb3JzIiwiZW1wbG95ZWVzIiwic3VwZXJ2aXNvcnMiLCJtYXAiLCJlbXAiLCJzdXBlclZpc29ySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQSxRQUFBLEFBQVEsWUFBWSxVQUFBLEFBQVUsS0FBSyxBQUNqQztNQUFJLE9BQUosQUFBVztNQUNULFlBREYsQUFDYztNQURkLEFBRUU7TUFGRixBQUdFLEFBRUY7O0FBQ0E7T0FBSyxJQUFJLElBQUosQUFBUSxHQUFHLE1BQU0sSUFBdEIsQUFBMEIsUUFBUSxJQUFsQyxBQUFzQyxLQUF0QyxBQUEyQyxLQUFLLEFBQzlDO2NBQVUsSUFBVixBQUFVLEFBQUksQUFDZDtjQUFVLFFBQVYsQUFBa0IsTUFBbEIsQUFBd0IsQUFDeEI7Y0FBVSxRQUFWLEFBQWtCLElBQWxCLEFBQXNCLFdBQXRCLEFBQWlDLEFBQ2xDO0FBRUQ7O09BQUssSUFBTCxBQUFTLE1BQVQsQUFBZSxXQUFXLEFBQ3hCO1FBQUksVUFBQSxBQUFVLGVBQWQsQUFBSSxBQUF5QixLQUFLLEFBQ2hDO21CQUFhLFVBQWIsQUFBYSxBQUFVLEFBQ3ZCO0FBQ0E7VUFBSSxXQUFBLEFBQVcsaUJBQWYsQUFBZ0MsUUFBUSxBQUN0QztrQkFBVSxXQUFWLEFBQXFCLGNBQXJCLEFBQW1DLFNBQW5DLEFBQTRDLEtBQTVDLEFBQWlELEFBQ2xEO0FBQ0Q7QUFIQTtXQUlLLEFBQ0g7ZUFBQSxBQUFLLEtBQUwsQUFBVSxBQUNYO0FBQ0Y7QUFDRjtBQUNEO1NBQUEsQUFBTyxBQUNSO0FBM0JEOztBQTZCQTs7QUFFQTs7QUFFQSxRQUFBLEFBQVEsb0JBQW9CLFVBQUEsQUFBUyxXQUFXLEFBQzlDO01BQU0sd0JBQWMsQUFBVSxJQUFJLFVBQUEsQUFBQyxLQUFRLEFBQ3pDO1dBQU8sSUFBUCxBQUFXLEFBQ1o7QUFGRCxBQUFvQixBQUdwQixHQUhvQjtBQUlwQjtTQUFPLGtCQUFQLEFBQU8sQUFBUSxBQUNoQjtBQU5EIiwiZmlsZSI6InV0aWxpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==