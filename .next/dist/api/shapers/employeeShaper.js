"use strict";

exports.shapeEmployee = function (data) {
  if (!data) {
    return null;
  }
  return {
    id: data._id ? data._id : null,
    firstName: data.firstName ? data.firstName : null,
    lastName: data.lastName ? data.lastName : null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9zaGFwZXJzL2VtcGxveWVlU2hhcGVyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJzaGFwZUVtcGxveWVlIiwiZGF0YSIsImlkIiwiX2lkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyYW5rIiwic2hhcGVFbXBsb3llZXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOztBQUNBLFFBQUEsQUFBUSxnQkFBZ0IsVUFBQSxBQUFTLE1BQU0sQUFDckM7TUFBSSxDQUFKLEFBQUssTUFBTSxBQUNUO1dBQUEsQUFBTyxBQUNSO0FBQ0M7O1FBQ0ksS0FBQSxBQUFLLE1BQU0sS0FBWCxBQUFnQixNQURiLEFBQ21CLEFBQzFCO2VBQVcsS0FBQSxBQUFLLFlBQVksS0FBakIsQUFBc0IsWUFGMUIsQUFFc0MsQUFDN0M7Y0FBVSxLQUFBLEFBQUssV0FBVyxLQUFoQixBQUFxQixXQUh4QixBQUdrQyxBQUN6QztVQUFNLEtBQUEsQUFBSyxPQUFPLEtBQVosQUFBaUIsT0FKdkIsQUFBTyxBQUl1QixBQUVqQztBQU5VLEFBQ1A7QUFMSjs7QUFZQSxRQUFBLEFBQVEsaUJBQWlCLFVBQUEsQUFBUyxNQUFNLEFBQ3RDO01BQUksS0FBQSxBQUFLLFdBQVQsQUFBb0IsR0FBRyxBQUNyQjtXQUFBLEFBQU8sQUFDUjtBQUNEO2NBQU8sQUFBSyxJQUFJLFVBQUEsQUFBQyxNQUFTLEFBQ3hCO1dBQU8sUUFBQSxBQUFRLGNBQWYsQUFBTyxBQUFzQixBQUM5QjtBQUZELEFBQU8sQUFHUixHQUhRO0FBSlQiLCJmaWxlIjoiZW1wbG95ZWVTaGFwZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==