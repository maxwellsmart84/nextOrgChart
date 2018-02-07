'use strict';

exports.shapeEmployeeOut = function (data) {
  console.log(data);
  if (!data) {
    return null;
  }
  return {
    id: data._id ? data._id : null,
    name: data.name ? data.name : null,
    rank: data.rank ? data.rank : null,
    supervisorId: data.supervisorId ? data.supervisorId : null
  };
  console.log('shaped data', data);
};

// these are set to undefined cause i would rather nothing happen then null get inserted
exports.shapeEmployeeIn = function (data) {
  if (!data) return undefined;
  return {
    _id: data.id ? data._id : undefined,
    name: data.name ? data.name : undefined,
    rank: data.rank ? data.rank : undefined,
    supervisorId: data.supervisorId ? data.supervisorId : undefined
  };
};

exports.shap;

exports.shapeEmployeesOut = function (data) {
  if (data.length === 0) {
    return [];
  }
  return data.map(function (item) {
    return exports.shapeEmployeeOut(item);
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJzaGFwZUVtcGxveWVlT3V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIl9pZCIsIm5hbWUiLCJyYW5rIiwic3VwZXJ2aXNvcklkIiwic2hhcGVFbXBsb3llZUluIiwidW5kZWZpbmVkIiwic2hhcCIsInNoYXBlRW1wbG95ZWVzT3V0IiwibGVuZ3RoIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxRQUFBLEFBQVEsbUJBQW1CLFVBQUEsQUFBUyxNQUFNLEFBQ3hDO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtNQUFJLENBQUosQUFBSyxNQUFNLEFBQ1Q7V0FBQSxBQUFPLEFBQ1I7QUFDQzs7UUFDTSxLQUFBLEFBQUssTUFBTSxLQUFYLEFBQWdCLE1BRGYsQUFDcUIsQUFDMUI7VUFBTSxLQUFBLEFBQUssT0FBTyxLQUFaLEFBQWlCLE9BRmxCLEFBRXlCLEFBQzlCO1VBQU0sS0FBQSxBQUFLLE9BQU8sS0FBWixBQUFpQixPQUhsQixBQUd5QixBQUM5QjtrQkFBYyxLQUFBLEFBQUssZUFBZSxLQUFwQixBQUF5QixlQUp6QyxBQUFPLEFBSWlELEFBRTFEO0FBTlMsQUFDTDtVQUtKLEFBQVEsSUFBUixBQUFZLGVBQVosQUFBMkIsQUFDNUI7QUFaRDs7QUFjQTtBQUNBLFFBQUEsQUFBUSxrQkFBa0IsVUFBQSxBQUFTLE1BQU0sQUFDdkM7TUFBSSxDQUFKLEFBQUssTUFDSCxPQUFBLEFBQU8sQUFDVDs7U0FDTyxLQUFBLEFBQUssS0FBSyxLQUFWLEFBQWUsTUFEZixBQUNxQixBQUMxQjtVQUFNLEtBQUEsQUFBSyxPQUFPLEtBQVosQUFBaUIsT0FGbEIsQUFFeUIsQUFDOUI7VUFBTSxLQUFBLEFBQUssT0FBTyxLQUFaLEFBQWlCLE9BSGxCLEFBR3lCLEFBQzlCO2tCQUFjLEtBQUEsQUFBTSxlQUFlLEtBQXJCLEFBQTBCLGVBSjFDLEFBQU8sQUFJa0QsQUFFMUQ7QUFOUSxBQUNMO0FBSko7O0FBV0EsUUFBQSxBQUFROztBQUVSLFFBQUEsQUFBUSxvQkFBb0IsVUFBQSxBQUFTLE1BQU0sQUFDekM7TUFBSSxLQUFBLEFBQUssV0FBVCxBQUFvQixHQUFHLEFBQ3JCO1dBQUEsQUFBTyxBQUNSO0FBQ0Q7Y0FBTyxBQUFLLElBQUksVUFBQSxBQUFDLE1BQVMsQUFDeEI7V0FBTyxRQUFBLEFBQVEsaUJBQWYsQUFBTyxBQUF5QixBQUNqQztBQUZELEFBQU8sQUFHUixHQUhRO0FBSlQiLCJmaWxlIjoiZW1wbG95ZWVTaGFwZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==