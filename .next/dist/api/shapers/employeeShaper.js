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
    name: data.name ? data.name : undefined,
    rank: data.rank ? data.rank : undefined,
    supervisorId: data.supervisorId ? data.supervisorId : undefined
  };
};

exports.shapeEmployeesOut = function (data) {
  if (data.length === 0) {
    return [];
  }
  return data.map(function (item) {
    return exports.shapeEmployeeOut(item);
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJzaGFwZUVtcGxveWVlT3V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIl9pZCIsIm5hbWUiLCJyYW5rIiwic3VwZXJ2aXNvcklkIiwic2hhcGVFbXBsb3llZUluIiwidW5kZWZpbmVkIiwic2hhcGVFbXBsb3llZXNPdXQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOztBQUNBLFFBQUEsQUFBUSxtQkFBbUIsVUFBQSxBQUFTLE1BQU0sQUFDeEM7VUFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO01BQUksQ0FBSixBQUFLLE1BQU0sQUFDVDtXQUFBLEFBQU8sQUFDUjtBQUNDOztRQUNNLEtBQUEsQUFBSyxNQUFNLEtBQVgsQUFBZ0IsTUFEZixBQUNxQixBQUMxQjtVQUFNLEtBQUEsQUFBSyxPQUFPLEtBQVosQUFBaUIsT0FGbEIsQUFFeUIsQUFDOUI7VUFBTSxLQUFBLEFBQUssT0FBTyxLQUFaLEFBQWlCLE9BSGxCLEFBR3lCLEFBQzlCO2tCQUFjLEtBQUEsQUFBSyxlQUFlLEtBQXBCLEFBQXlCLGVBSnpDLEFBQU8sQUFJaUQsQUFFMUQ7QUFOUyxBQUNMO1VBS0osQUFBUSxJQUFSLEFBQVksZUFBWixBQUEyQixBQUM1QjtBQVpEOztBQWNBO0FBQ0EsUUFBQSxBQUFRLGtCQUFrQixVQUFBLEFBQVMsTUFBTSxBQUN2QztNQUFJLENBQUosQUFBSyxNQUNILE9BQUEsQUFBTyxBQUNUOztVQUNRLEtBQUEsQUFBSyxPQUFPLEtBQVosQUFBaUIsT0FEbEIsQUFDeUIsQUFDOUI7VUFBTSxLQUFBLEFBQUssT0FBTyxLQUFaLEFBQWlCLE9BRmxCLEFBRXlCLEFBQzlCO2tCQUFjLEtBQUEsQUFBTSxlQUFlLEtBQXJCLEFBQTBCLGVBSDFDLEFBQU8sQUFHa0QsQUFFMUQ7QUFMUSxBQUNMO0FBSko7O0FBVUEsUUFBQSxBQUFRLG9CQUFvQixVQUFBLEFBQVMsTUFBTSxBQUN6QztNQUFJLEtBQUEsQUFBSyxXQUFULEFBQW9CLEdBQUcsQUFDckI7V0FBQSxBQUFPLEFBQ1I7QUFDRDtjQUFPLEFBQUssSUFBSSxVQUFBLEFBQUMsTUFBUyxBQUN4QjtXQUFPLFFBQUEsQUFBUSxpQkFBZixBQUFPLEFBQXlCLEFBQ2pDO0FBRkQsQUFBTyxBQUdSLEdBSFE7QUFKVCIsImZpbGUiOiJlbXBsb3llZVNoYXBlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9