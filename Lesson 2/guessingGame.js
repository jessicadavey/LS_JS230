document.addEventListener('DOMContentLoaded', () => {
  let answer = Math.floor(Math.random() * 100) + 1;

  const form = document.querySelector('form');
  const input = document.querySelector('#guess');
  const paragraph = document.querySelector('p');
  const link = document.querySelector('a');

  form.addEventListener('submit', event => {
    event.preventDefault();
    let guess = parseInt(input.value, 10);
    let message;

    if (guess === answer) {
      message = "You guessed it!"
    } else if (guess > answer) {
      message = `My number is lower than ${String(guess)}`;
    } else if (guess < answer) {
      message = `My number is higher than ${String(guess)}`;
    }

    paragraph.textContent = message;
  });

  link.addEventListener('click', event => {
    event.preventDefault();
    answer = Math.floor(Math.random() * 100) + 1;
    paragraph.textContent = 'Pick a number between 1 and 100';
  });

});