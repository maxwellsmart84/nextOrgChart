
//recurive function for assembling the d3 style tree
exports.buildTree = function(item, list) {
  console.log('BUILD TREE', item, list);
  const currentId = item.id;
  item.children = [];
  for(let i = 0; i < list.length; i++) {
      let emp = list[i];
      if (emp.superVisorId === currentId) {
        emp = buildTree2(emp, list)
        item.children.push(emp);
    }
  }
return item
}

exports.sortRank = function(item, list) {

}

exports.filterSupervisors = function(employees) {
  const supervisors = employees.map((emp) => {
    return emp.superVisorId;
  })
  //filter out dupes;
  return new Set(supervisors)
}
