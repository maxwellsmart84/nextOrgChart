'use strict';

exports.shapeEmployee = function (data) {
  console.log(data);
  if (!data) {
    return null;
  }
  return {
    id: data._id ? data._id : null,
    name: data.firstName ? data.firstName + ' ' + data.lastName : null,
    rank: data.rank ? data.rank : null
  };
  console.log('shaped data', data);
};

exports.shapeEmployees = function (data) {
  if (data.length === 0) {
    return [];
  }
  return data.map(function (item) {
    return exports.shapeEmployee(item);
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJzaGFwZUVtcGxveWVlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIl9pZCIsIm5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInJhbmsiLCJzaGFwZUVtcGxveWVlcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7O0FBQ0EsUUFBQSxBQUFRLGdCQUFnQixVQUFBLEFBQVMsTUFBTSxBQUNyQztVQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7TUFBSSxDQUFKLEFBQUssTUFBTSxBQUNUO1dBQUEsQUFBTyxBQUNSO0FBQ0M7O1FBQ00sS0FBQSxBQUFLLE1BQU0sS0FBWCxBQUFnQixNQURmLEFBQ3FCLEFBQzFCO1VBQU0sS0FBQSxBQUFLLFlBQWUsS0FBcEIsQUFBeUIsa0JBQWEsS0FBdEMsQUFBMkMsV0FGNUMsQUFFeUQsQUFDOUQ7VUFBTSxLQUFBLEFBQUssT0FBTyxLQUFaLEFBQWlCLE9BSHpCLEFBQU8sQUFHeUIsQUFFbEM7QUFMUyxBQUNMO1VBSUosQUFBUSxJQUFSLEFBQVksZUFBWixBQUEyQixBQUM1QjtBQVhEOztBQWFBLFFBQUEsQUFBUSxpQkFBaUIsVUFBQSxBQUFTLE1BQU0sQUFDdEM7TUFBSSxLQUFBLEFBQUssV0FBVCxBQUFvQixHQUFHLEFBQ3JCO1dBQUEsQUFBTyxBQUNSO0FBQ0Q7Y0FBTyxBQUFLLElBQUksVUFBQSxBQUFDLE1BQVMsQUFDeEI7V0FBTyxRQUFBLEFBQVEsY0FBZixBQUFPLEFBQXNCLEFBQzlCO0FBRkQsQUFBTyxBQUdSLEdBSFE7QUFKVCIsImZpbGUiOiJlbXBsb3llZVNoYXBlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9