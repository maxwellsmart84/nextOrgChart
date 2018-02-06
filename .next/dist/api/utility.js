'use strict';

//recurive function for assembling the d3 style tree
exports.buildTree = function (item, list) {
  console.log('BUILD TREE', item, list);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS91dGlsaXR5LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJidWlsZFRyZWUiLCJpdGVtIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50SWQiLCJpZCIsImNoaWxkcmVuIiwiaSIsImxlbmd0aCIsImVtcCIsInN1cGVyVmlzb3JJZCIsImJ1aWxkVHJlZTIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0EsUUFBUSxBQUFSLFlBQW9CLFVBQVUsQUFBVixNQUFnQixBQUFoQixNQUFzQixBQUN4QztVQUFRLEFBQVIsSUFBWSxBQUFaLGNBQTBCLEFBQTFCLE1BQWdDLEFBQWhDLEFBQ0E7TUFBTSxZQUFZLEtBQUssQUFBdkIsQUFDQTtPQUFLLEFBQUwsV0FBZ0IsQUFBaEIsQUFDQTtPQUFJLElBQUksSUFBSSxBQUFaLEdBQWUsSUFBSSxLQUFLLEFBQXhCLFFBQWdDLEFBQWhDLEtBQXFDLEFBQ2pDO1FBQUksTUFBTSxLQUFLLEFBQUwsQUFBVixBQUNBO1FBQUksSUFBSSxBQUFKLGlCQUFxQixBQUF6QixXQUFvQyxBQUNsQztZQUFNLFdBQVcsQUFBWCxLQUFnQixBQUFoQixBQUFOLEFBQ0E7V0FBSyxBQUFMLFNBQWMsQUFBZCxLQUFtQixBQUFuQixBQUNIO0FBQ0Y7QUFDSDtTQUFPLEFBQVAsQUFDQztBQVpEIiwiZmlsZSI6InV0aWxpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21heHdlbGxrcmF1c2UvRG9jdW1lbnRzL3Byb2plY3RzL2F0bGF0bEV2YWwvb3JnQ2hhcnRSZWFjdE5vZGUifQ==