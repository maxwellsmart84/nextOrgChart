"use strict";

//recurive function for assembling the d3 style tree
exports.buildTree = function (item, list) {
  var currentId = item.id;
  item.children = [];
  for (var i = 0; i < list.length; i++) {
    var emp = list[i];
    if (emp.superVisorId === currentId) {
      emp = buildTree2(emp, list);
      item.children.push(emp);
    }
  }
  return item;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS91dGlsaXR5LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJidWlsZFRyZWUiLCJpdGVtIiwibGlzdCIsImN1cnJlbnRJZCIsImlkIiwiY2hpbGRyZW4iLCJpIiwibGVuZ3RoIiwiZW1wIiwic3VwZXJWaXNvcklkIiwiYnVpbGRUcmVlMiIsInB1c2giXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFDQSxRQUFRLEFBQVIsWUFBb0IsVUFBVSxBQUFWLE1BQWdCLEFBQWhCLE1BQXNCLEFBQ3hDO01BQU0sWUFBWSxLQUFLLEFBQXZCLEFBQ0E7T0FBSyxBQUFMLFdBQWdCLEFBQWhCLEFBQ0E7T0FBSSxJQUFJLElBQUksQUFBWixHQUFlLElBQUksS0FBSyxBQUF4QixRQUFnQyxBQUFoQyxLQUFxQyxBQUNqQztRQUFJLE1BQU0sS0FBSyxBQUFMLEFBQVYsQUFDQTtRQUFJLElBQUksQUFBSixpQkFBcUIsQUFBekIsV0FBb0MsQUFDbEM7WUFBTSxXQUFXLEFBQVgsS0FBZ0IsQUFBaEIsQUFBTixBQUNBO1dBQUssQUFBTCxTQUFjLEFBQWQsS0FBbUIsQUFBbkIsQUFDSDtBQUNGO0FBQ0g7U0FBTyxBQUFQLEFBQ0M7QUFYRCIsImZpbGUiOiJ1dGlsaXR5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXh3ZWxsa3JhdXNlL0RvY3VtZW50cy9wcm9qZWN0cy9hdGxhdGxFdmFsL29yZ0NoYXJ0UmVhY3ROb2RlIn0=