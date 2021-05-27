function nodesToArr(node = document.querySelector('body')) {
  let children = Array.prototype.slice.call(node.children);

  if (children.length === 0) {
    return [node.tagName, []];
  }
  return [node.tagName, children.map(child => nodesToArr(child))];

  /*
  if element doesn't have any children
    - return a 2-element array:
      ["TAG_NAME", []]
  
  if the element does have children
    - return a 2-element array:
      ["TAG_NAME", children.map(child => nodesToArr(child))]
  
  
  */
}

console.log(nodesToArr());
