'use strict';

exports.shapeEmployeeOut = function (data) {
  console.log(data);
  if (!data) {
    return null;
  }
  return {
    id: data._id.toString(),
    name: data.name,
    rank: data.rank,
    title: data.title,
    supervisorId: data.supervisorId ? data.supervisorId : 'None'
  };
};

// data sanitization
exports.shapeEmployeeIn = function (data) {
  for (var item in data) {
    if (data[item] === undefined || data[item] === null) {
      delete data[item];
    }
  }
  return data;
};

exports.shapeEmployeesOut = function (data) {
  if (data.length === 0) {
    return [];
  }
  return data.map(function (item) {
    return exports.shapeEmployeeOut(item);
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJzaGFwZUVtcGxveWVlT3V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwibmFtZSIsInJhbmsiLCJ0aXRsZSIsInN1cGVydmlzb3JJZCIsInNoYXBlRW1wbG95ZWVJbiIsIml0ZW0iLCJ1bmRlZmluZWQiLCJzaGFwZUVtcGxveWVlc091dCIsImxlbmd0aCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxRQUFBLEFBQVEsbUJBQW1CLFVBQUEsQUFBUyxNQUFNLEFBQ3hDO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtNQUFJLENBQUosQUFBSyxNQUFNLEFBQ1Q7V0FBQSxBQUFPLEFBQ1I7QUFDQzs7UUFDTSxLQUFBLEFBQUssSUFESixBQUNELEFBQVMsQUFDYjtVQUFNLEtBRkQsQUFFTSxBQUNYO1VBQU0sS0FIRCxBQUdNLEFBQ1g7V0FBTyxLQUpGLEFBSU8sQUFDWjtrQkFBYyxLQUFBLEFBQUssZUFBZSxLQUFwQixBQUF5QixlQUx6QyxBQUFPLEFBS2lELEFBRTNEO0FBUFUsQUFDTDtBQU5OOztBQWNBO0FBQ0EsUUFBQSxBQUFRLGtCQUFrQixVQUFBLEFBQVMsTUFBTSxBQUN2QztPQUFLLElBQUwsQUFBUyxRQUFULEFBQWlCLE1BQU0sQUFDckI7UUFBSSxLQUFBLEFBQUssVUFBTCxBQUFlLGFBQWEsS0FBQSxBQUFLLFVBQXJDLEFBQStDLE1BQU0sQUFDbkQ7YUFBTyxLQUFQLEFBQU8sQUFBSyxBQUNiO0FBQ0Y7QUFDRDtTQUFBLEFBQU8sQUFDUjtBQVBEOztBQVNBLFFBQUEsQUFBUSxvQkFBb0IsVUFBQSxBQUFTLE1BQU0sQUFDekM7TUFBSSxLQUFBLEFBQUssV0FBVCxBQUFvQixHQUFHLEFBQ3JCO1dBQUEsQUFBTyxBQUNSO0FBQ0Q7Y0FBTyxBQUFLLElBQUksVUFBQSxBQUFDLE1BQVMsQUFDeEI7V0FBTyxRQUFBLEFBQVEsaUJBQWYsQUFBTyxBQUF5QixBQUNqQztBQUZELEFBQU8sQUFHUixHQUhRO0FBSlQiLCJmaWxlIjoiZW1wbG95ZWVTaGFwZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==