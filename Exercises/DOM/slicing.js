function sliceTree(parentId, innerChildId) {
  if (!document.getElementById(parentId) || !document.getElementById(innerChildId)) {
    return undefined;
  }
  let elementList = [];

  let id = innerChildId;
  while (id >= parentId) {
    let currentElement = document.getElementById(id)
    elementList.unshift(currentElement);
    id = parseInt(currentElement.parentElement.id, 10);
  }

  let ids = elementList.map(element => element.id);

  if (!ids.includes(String(parentId))) {
    return undefined;
  }

  return elementList.map(element => element.tagName);
}


console.log(sliceTree(1, 4));
//["ARTICLE", "HEADER", "SPAN", "A"]
console.log(sliceTree(1, 76));
//undefined
console.log(sliceTree(2, 5));
//undefined
console.log(sliceTree(5, 4));
//undefined
console.log(sliceTree(1, 23));
//["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22));
//["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19));
//["SECTION", "P", "SPAN", "STRONG", "A"]