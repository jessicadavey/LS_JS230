function domTreeTracer(id) {
  let element = document.getElementById(id);
  let parentId = element.parentElement.id;
  let siblingNamesArray = [...element.parentNode.children].map(node => node.nodeName)

  if (parentId === "") {
    return [siblingNamesArray];
  }

  let ancestors = domTreeTracer(parentId)
  ancestors.unshift(siblingNamesArray);
  return ancestors;
}


console.log(domTreeTracer(1));
// // [["ARTICLE"]]
console.log(domTreeTracer(2));
// [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
console.log(domTreeTracer(22));
// [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]