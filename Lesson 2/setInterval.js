// 1.

function startCounting() {
  let count = 0;

  function counting() {
    count += 1;
    console.log(count);
  }

  return setInterval(counting, 1000);
};

let id = startCounting();


function stopCounting() {
  clearInterval(id);
}

setTimeout(stopCounting, 10000)