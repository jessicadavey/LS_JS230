function iterateAndLog(array) {
  for (let index = 0; index < array.length; index += 1) {
    console.log(array[index]);
  }
}

function recursive(array) {
  if (array.length > 0) {
    console.log(array[0]);
    recursive(array.slice(1));
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
// iterateAndLog(arr);
recursive(arr);