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
    supervisorId: data.supervisorId ? data.supervisorId : 'None'
  };
};

// these are set to undefined cause i would rather nothing happen then null get inserted
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJzaGFwZUVtcGxveWVlT3V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwibmFtZSIsInJhbmsiLCJzdXBlcnZpc29ySWQiLCJzaGFwZUVtcGxveWVlSW4iLCJpdGVtIiwidW5kZWZpbmVkIiwic2hhcGVFbXBsb3llZXNPdXQiLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7O0FBQ0EsUUFBQSxBQUFRLG1CQUFtQixVQUFBLEFBQVMsTUFBTSxBQUN4QztVQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7TUFBSSxDQUFKLEFBQUssTUFBTSxBQUNUO1dBQUEsQUFBTyxBQUNSO0FBQ0M7O1FBQ00sS0FBQSxBQUFLLElBREosQUFDRCxBQUFTLEFBQ2I7VUFBTSxLQUZELEFBRU0sQUFDWDtVQUFNLEtBSEQsQUFHTSxBQUNYO2tCQUFjLEtBQUEsQUFBSyxlQUFlLEtBQXBCLEFBQXlCLGVBSnpDLEFBQU8sQUFJaUQsQUFFM0Q7QUFOVSxBQUNMO0FBTk47O0FBYUE7QUFDQSxRQUFBLEFBQVEsa0JBQWtCLFVBQUEsQUFBUyxNQUFNLEFBQ3ZDO09BQUssSUFBTCxBQUFTLFFBQVQsQUFBaUIsTUFBTSxBQUNyQjtRQUFJLEtBQUEsQUFBSyxVQUFMLEFBQWUsYUFBYSxLQUFBLEFBQUssVUFBckMsQUFBK0MsTUFBTSxBQUNuRDthQUFPLEtBQVAsQUFBTyxBQUFLLEFBQ2I7QUFDRjtBQUNEO1NBQUEsQUFBTyxBQUNSO0FBUEQ7O0FBU0EsUUFBQSxBQUFRLG9CQUFvQixVQUFBLEFBQVMsTUFBTSxBQUN6QztNQUFJLEtBQUEsQUFBSyxXQUFULEFBQW9CLEdBQUcsQUFDckI7V0FBQSxBQUFPLEFBQ1I7QUFDRDtjQUFPLEFBQUssSUFBSSxVQUFBLEFBQUMsTUFBUyxBQUN4QjtXQUFPLFFBQUEsQUFBUSxpQkFBZixBQUFPLEFBQXlCLEFBQ2pDO0FBRkQsQUFBTyxBQUdSLEdBSFE7QUFKVCIsImZpbGUiOiJlbXBsb3llZVNoYXBlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4d2VsbGtyYXVzZS9Eb2N1bWVudHMvcHJvamVjdHMvYXRsYXRsRXZhbC9vcmdDaGFydFJlYWN0Tm9kZSJ9