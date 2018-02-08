
exports.shapeEmployeeOut = function(data) {
  console.log(data)
  if (!data) {
    return null;
  }
    return {
      id: data._id.toString(),
      name: data.name,
      rank: data.rank,
      supervisorId: data.supervisorId ? data.supervisorId : 'None',
  }
}

// these are set to undefined cause i would rather nothing happen then null get inserted
exports.shapeEmployeeIn = function(data) {
  for (let item in data) {
    if (data[item] === undefined || data[item] === null) {
      delete data[item];
    }
  }
  return data
}

exports.shapeEmployeesOut = function(data) {
  if (data.length === 0) {
    return [];
  }
  return data.map((item) => {
    return exports.shapeEmployeeOut(item);
  });
}