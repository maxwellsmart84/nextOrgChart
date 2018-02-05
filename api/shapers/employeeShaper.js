
exports.shapeEmployee = function(data) {
  if (!data) {
    return null;
  }
    return {
    id: data._id ? data._id : null,
    name: data.firstName ? `${data.firstName} ${data.lastName}` : null,
    rank: data.rank ? data.rank : null,
  }
}

exports.shapeEmployees = function(data) {
  if (data.length === 0) {
    return [];
  }
  return data.map((item) => {
    return exports.shapeEmployee(item);
  });
}