
exports.shapeEmployee = function (data) {
  if (!data) {
    return null;
  }
    return {
    id: data._id ? data._id : null,
    firstName: data.firstName ? data.firstName : null,
    lastName: data.lastName ? data.lastName: null,
    rank: data.rank ? data.rank : null,
  }
}

exports.shapeEmployees = function (data) {
  if (data.length === 0) {
    return [];
  }
  return data.map(shapeEmployee);
}