"use strict";

exports.shapeEmployee = function (data) {
  if (!data) {
    return null;
  }
  return {
    id: data._id ? data._id : null,
    name: data.firstName ? data.firstName + " " + data.lastName : null,
    rank: data.rank ? data.rank : null
  };
};

exports.shapeEmployees = function (data) {
  if (data.length === 0) {
    return [];
  }
  return data.map(function (item) {
    return exports.shapeEmployee(item);
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJzaGFwZUVtcGxveWVlIiwiZGF0YSIsImlkIiwiX2lkIiwibmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicmFuayIsInNoYXBlRW1wbG95ZWVzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxRQUFBLEFBQVEsZ0JBQWdCLFVBQUEsQUFBUyxNQUFNLEFBQ3JDO01BQUksQ0FBSixBQUFLLE1BQU0sQUFDVDtXQUFBLEFBQU8sQUFDUjtBQUNDOztRQUNJLEtBQUEsQUFBSyxNQUFNLEtBQVgsQUFBZ0IsTUFEYixBQUNtQixBQUMxQjtVQUFNLEtBQUEsQUFBSyxZQUFlLEtBQXBCLEFBQXlCLGtCQUFhLEtBQXRDLEFBQTJDLFdBRjFDLEFBRXVELEFBQzlEO1VBQU0sS0FBQSxBQUFLLE9BQU8sS0FBWixBQUFpQixPQUh2QixBQUFPLEFBR3VCLEFBRWpDO0FBTFUsQUFDUDtBQUxKOztBQVdBLFFBQUEsQUFBUSxpQkFBaUIsVUFBQSxBQUFTLE1BQU0sQUFDdEM7TUFBSSxLQUFBLEFBQUssV0FBVCxBQUFvQixHQUFHLEFBQ3JCO1dBQUEsQUFBTyxBQUNSO0FBQ0Q7Y0FBTyxBQUFLLElBQUksVUFBQSxBQUFDLE1BQVMsQUFDeEI7V0FBTyxRQUFBLEFBQVEsY0FBZixBQUFPLEFBQXNCLEFBQzlCO0FBRkQsQUFBTyxBQUdSLEdBSFE7QUFKVCIsImZpbGUiOiJlbXBsb3llZVNoYXBlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9