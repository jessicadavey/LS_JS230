/*

input: n number of callback functions
output: run callbacks

rules:

- log elapsed time every second between 1 and 2 * n
- run all callbacks sometime within 2 * n seconds

examples:
// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6

algorithm:

counter:
- set a counter to 1 and log it to the console
- set an interval:
  - each 1000 ms, log counter + 1
- when counter === 2 * n, clear the interval

callbacks:
- get an array of callback functions
- for each callback:  
  - make a random number between 0 and total number of milliseconds (2 * n * 1000)
  - setTimeout(callback, random number)


*/

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let counter = 0;
  let n = callbacks.length;

  callbacks.forEach(callback => {
    let random = Math.random() * 2 * n * 1000;
    setTimeout(callback, random);
  });

  let timer = setInterval(() => {
    counter += 1;
    console.log(counter);
    if (counter === 2 * n) {
      clearInterval(timer);
    }
  }, 1000);
}

randomizer(callback1, callback2, callback3);

