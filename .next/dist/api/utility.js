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
    mappedArr[arrElem.id]['children'] = [];
  }

  for (var id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.supervisorId) {
        mappedArr[mappedElem['supervisorId']]['children'].push(mappedElem);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS91dGlsaXR5LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJidWlsZFRyZWUiLCJhcnIiLCJ0cmVlIiwibWFwcGVkQXJyIiwiYXJyRWxlbSIsIm1hcHBlZEVsZW0iLCJpIiwibGVuIiwibGVuZ3RoIiwiaWQiLCJoYXNPd25Qcm9wZXJ0eSIsInN1cGVydmlzb3JJZCIsInB1c2giLCJmaWx0ZXJTdXBlcnZpc29ycyIsImVtcGxveWVlcyIsInN1cGVydmlzb3JzIiwibWFwIiwiZW1wIiwic3VwZXJWaXNvcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQ0EsUUFBQSxBQUFRLFlBQVksVUFBQSxBQUFTLEtBQUssQUFDaEM7TUFBSSxPQUFKLEFBQVc7TUFDVCxZQURGLEFBQ2M7TUFEZCxBQUVFO01BRkYsQUFHRSxBQUVGOztBQUNBO09BQUssSUFBSSxJQUFKLEFBQVEsR0FBRyxNQUFNLElBQXRCLEFBQTBCLFFBQVEsSUFBbEMsQUFBc0MsS0FBdEMsQUFBMkMsS0FBSyxBQUM5QztjQUFVLElBQVYsQUFBVSxBQUFJLEFBQ2Q7Y0FBVSxRQUFWLEFBQWtCLE1BQWxCLEFBQXdCLEFBQ3hCO2NBQVUsUUFBVixBQUFrQixJQUFsQixBQUFzQixjQUF0QixBQUFvQyxBQUNyQztBQUdEOztPQUFLLElBQUwsQUFBUyxNQUFULEFBQWUsV0FBVyxBQUN4QjtRQUFJLFVBQUEsQUFBVSxlQUFkLEFBQUksQUFBeUIsS0FBSyxBQUNoQzttQkFBYSxVQUFiLEFBQWEsQUFBVSxBQUN2QjtBQUNBO1VBQUksV0FBSixBQUFlLGNBQWMsQUFDM0I7a0JBQVUsV0FBVixBQUFVLEFBQVcsaUJBQXJCLEFBQXNDLFlBQXRDLEFBQWtELEtBQWxELEFBQXVELEFBQ3hEO0FBQ0Q7QUFIQTtXQUlLLEFBQ0g7ZUFBQSxBQUFLLEtBQUwsQUFBVSxBQUNYO0FBQ0Y7QUFDRjtBQUNEO1NBQUEsQUFBTyxBQUNSO0FBNUJEOztBQThCQTs7QUFFQTs7QUFFQSxRQUFBLEFBQVEsb0JBQW9CLFVBQUEsQUFBUyxXQUFXLEFBQzlDO01BQU0sd0JBQWMsQUFBVSxJQUFJLFVBQUEsQUFBQyxLQUFRLEFBQ3pDO1dBQU8sSUFBUCxBQUFXLEFBQ1o7QUFGRCxBQUFvQixBQUdwQixHQUhvQjtBQUlwQjtTQUFPLGtCQUFQLEFBQU8sQUFBUSxBQUNoQjtBQU5EIiwiZmlsZSI6InV0aWxpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==