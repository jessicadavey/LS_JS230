function nodeSwap(id1, id2) {
  let element1 = document.getElementById(id1);
  let element2 = document.getElementById(id2);

  if (!element1 || !element2) {
    return undefined;
  }

  if (oneIsChildOfTheOther(element1, element2)) {
    console.log('one is a child');
    return undefined;
  }

  let placeholder1 = document.createElement('div');
  let placeholder2 = document.createElement('span');

  let parent1 = element1.parentElement;
  let parent2 = element2.parentElement;

  parent1.replaceChild(placeholder1, element1);
  parent2.replaceChild(placeholder2, element2);

  parent1.replaceChild(element2, placeholder1);
  parent2.replaceChild(element1, placeholder2);
}

function oneIsChildOfTheOther(element1, element2) {
  return Array.from(element1.children).includes(element2) || Array.from(element2.children).includes(element1);
}

console.log(nodeSwap(3, 1));
console.log(nodeSwap(7, 9));