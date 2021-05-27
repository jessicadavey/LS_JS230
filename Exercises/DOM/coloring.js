function colorGeneration(generation) {

  if (generation === 0) {
    return;
  }

  let childElements = Array.from(document.querySelector('body').children);

  for (let index = 1; index < generation; index += 1) {
    childElements = childElements.flat().map(element => {
      if (element.children) {
        return Array.from(element.children);
      } else {
        return [];
      }
    });

  }

  childElements.flat().forEach(element => element.classList.add('generation-color'));

}



// colorGeneration(1);
// colorGeneration(4);
// colorGeneration(7);
// colorGeneration(8);
// colorGeneration(3);
colorGeneration(0);


/*
for each child of the body element
  - go down the tree until the required generation
    - add generation-color to the class list
    - if the generation doesn't exist, stop


*/