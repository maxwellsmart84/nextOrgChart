
//recurive function for assembling the d3 style tree
exports.buildTree = function(arr) {
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
      if (mappedElem.supervisorId !== 'None') {
        mappedArr[mappedElem['supervisorId']]['children'].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}

// exports.sortRank = function(item, list) {

// }

exports.filterSupervisors = function(employees) {
  const supervisors = employees.map((emp) => {
    return emp.superVisorId;
  })
  //filter out dupes;
  return new Set(supervisors)
}
