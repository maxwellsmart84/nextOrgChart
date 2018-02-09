'use strict';

exports.shapeEmployeeOut = function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJzaGFwZUVtcGxveWVlT3V0IiwiZGF0YSIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJuYW1lIiwicmFuayIsInRpdGxlIiwic3VwZXJ2aXNvcklkIiwic2hhcGVFbXBsb3llZUluIiwiaXRlbSIsInVuZGVmaW5lZCIsInNoYXBlRW1wbG95ZWVzT3V0IiwibGVuZ3RoIiwibWFwIl0sIm1hcHBpbmdzIjoiOztBQUNBLFFBQUEsQUFBUSxtQkFBbUIsVUFBQSxBQUFTLE1BQU0sQUFDdEM7O1FBQ00sS0FBQSxBQUFLLElBREosQUFDRCxBQUFTLEFBQ2I7VUFBTSxLQUZELEFBRU0sQUFDWDtVQUFNLEtBSEQsQUFHTSxBQUNYO1dBQU8sS0FKRixBQUlPLEFBQ1o7a0JBQWMsS0FBQSxBQUFLLGVBQWUsS0FBcEIsQUFBeUIsZUFMekMsQUFBTyxBQUtpRCxBQUUzRDtBQVBVLEFBQ0w7QUFGTjs7QUFVQTtBQUNBLFFBQUEsQUFBUSxrQkFBa0IsVUFBQSxBQUFTLE1BQU0sQUFDdkM7T0FBSyxJQUFMLEFBQVMsUUFBVCxBQUFpQixNQUFNLEFBQ3JCO1FBQUksS0FBQSxBQUFLLFVBQUwsQUFBZSxhQUFhLEtBQUEsQUFBSyxVQUFyQyxBQUErQyxNQUFNLEFBQ25EO2FBQU8sS0FBUCxBQUFPLEFBQUssQUFDYjtBQUNGO0FBQ0Q7U0FBQSxBQUFPLEFBQ1I7QUFQRDs7QUFTQSxRQUFBLEFBQVEsb0JBQW9CLFVBQUEsQUFBUyxNQUFNLEFBQ3pDO01BQUksS0FBQSxBQUFLLFdBQVQsQUFBb0IsR0FBRyxBQUNyQjtXQUFBLEFBQU8sQUFDUjtBQUNEO2NBQU8sQUFBSyxJQUFJLFVBQUEsQUFBQyxNQUFTLEFBQ3hCO1dBQU8sUUFBQSxBQUFRLGlCQUFmLEFBQU8sQUFBeUIsQUFDakM7QUFGRCxBQUFPLEFBR1IsR0FIUTtBQUpUIiwiZmlsZSI6ImVtcGxveWVlU2hhcGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=