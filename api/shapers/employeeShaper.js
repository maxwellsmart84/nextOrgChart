
exports.shapeEmployeeOut = function(data) {
  console.log(data)
  if (!data) {
    return null;
  }
    return {
      id: data._id ? data._id : null,
      name: data.name ? data.name : null,
      rank: data.rank ? data.rank : null,
      supervisorId: data.supervisorId ? data.supervisorId : null,
  }
  console.log('shaped data', data)
}

// these are set to undefined cause i would rather nothing happen then null get inserted
exports.shapeEmployeeIn = function(data) {
  if (!data)
    return undefined;
  return {
    _id: data.id ? data._id : undefined,
    name: data.name ? data.name : undefined,
    rank: data.rank ? data.rank : undefined,
    supervisorId: data. supervisorId ? data.supervisorId : undefined,
  }
}

exports.shap

exports.shapeEmployeesOut = function(data) {
  if (data.length === 0) {
    return [];
  }
  return data.map((item) => {
    return exports.shapeEmployeeOut(item);
  });
}