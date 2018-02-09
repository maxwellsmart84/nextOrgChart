
exports.shapeEmployeeOut = function(data) {
    return {
      id: data._id.toString(),
      name: data.name,
      rank: data.rank,
      title: data.title,
      supervisorId: data.supervisorId ? data.supervisorId : 'None',
  }
}

// data sanitization
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