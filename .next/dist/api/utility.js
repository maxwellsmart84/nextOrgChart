'use strict';

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//recurive function for assembling the d3 style tree
exports.buildTree = function (arr) {
  if (!arr || arr.length === 0) {
    return arr;
  }
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
      if (mappedElem.supervisorId !== 'None' && mappedArr[mappedElem.supervisorId] !== undefined) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS91dGlsaXR5LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJidWlsZFRyZWUiLCJhcnIiLCJsZW5ndGgiLCJ0cmVlIiwibWFwcGVkQXJyIiwiYXJyRWxlbSIsIm1hcHBlZEVsZW0iLCJpIiwibGVuIiwiaWQiLCJjaGlsZHJlbiIsImhhc093blByb3BlcnR5Iiwic3VwZXJ2aXNvcklkIiwidW5kZWZpbmVkIiwicHVzaCIsImZpbHRlclN1cGVydmlzb3JzIiwiZW1wbG95ZWVzIiwic3VwZXJ2aXNvcnMiLCJtYXAiLCJlbXAiLCJzdXBlclZpc29ySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQSxRQUFBLEFBQVEsWUFBWSxVQUFBLEFBQVUsS0FBSyxBQUNqQztNQUFJLENBQUEsQUFBQyxPQUFPLElBQUEsQUFBSSxXQUFoQixBQUEyQixHQUFHLEFBQzVCO1dBQUEsQUFBTyxBQUNSO0FBQ0Q7TUFBSSxPQUFKLEFBQVc7TUFDVCxZQURGLEFBQ2M7TUFEZCxBQUVFO01BRkYsQUFHRSxBQUVGOztBQUNBO09BQUssSUFBSSxJQUFKLEFBQVEsR0FBRyxNQUFNLElBQXRCLEFBQTBCLFFBQVEsSUFBbEMsQUFBc0MsS0FBdEMsQUFBMkMsS0FBSyxBQUM5QztjQUFVLElBQVYsQUFBVSxBQUFJLEFBQ2Q7Y0FBVSxRQUFWLEFBQWtCLE1BQWxCLEFBQXdCLEFBQ3hCO2NBQVUsUUFBVixBQUFrQixJQUFsQixBQUFzQixXQUF0QixBQUFpQyxBQUNsQztBQUVEOztPQUFLLElBQUwsQUFBUyxNQUFULEFBQWUsV0FBVyxBQUN4QjtRQUFJLFVBQUEsQUFBVSxlQUFkLEFBQUksQUFBeUIsS0FBSyxBQUNoQzttQkFBYSxVQUFiLEFBQWEsQUFBVSxBQUN2QjtBQUNBO1VBQUksV0FBQSxBQUFXLGlCQUFYLEFBQTRCLFVBQVUsVUFBVSxXQUFWLEFBQXFCLGtCQUEvRCxBQUFpRixXQUFXLEFBQzFGO2tCQUFVLFdBQVYsQUFBcUIsY0FBckIsQUFBbUMsU0FBbkMsQUFBNEMsS0FBNUMsQUFBaUQsQUFDbEQ7QUFDRDtBQUhBO1dBSUssQUFDSDtlQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1g7QUFDRjtBQUNGO0FBQ0Q7U0FBQSxBQUFPLEFBQ1I7QUE5QkQ7O0FBZ0NBOztBQUVBOztBQUVBLFFBQUEsQUFBUSxvQkFBb0IsVUFBQSxBQUFTLFdBQVcsQUFDOUM7TUFBTSx3QkFBYyxBQUFVLElBQUksVUFBQSxBQUFDLEtBQVEsQUFDekM7V0FBTyxJQUFQLEFBQVcsQUFDWjtBQUZELEFBQW9CLEFBR3BCLEdBSG9CO0FBSXBCO1NBQU8sa0JBQVAsQUFBTyxBQUFRLEFBQ2hCO0FBTkQiLCJmaWxlIjoidXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9