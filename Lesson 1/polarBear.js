// 1.

// let h2s = document.querySelectorAll('h2');

// for (let index = 0; index < h2s.length; index += 1) {
//   let wordCount = h2s[index].textContent.split(' ').length;
//   console.log(wordCount);

// }

// 2.

// let contentDiv1 = document.querySelector('#toc');
// let contentDiv2 = document.querySelectorAll('.toc')[0];
// let contentDiv3 = document.getElementById('toc');
// console.log(contentDiv1, contentDiv2, contentDiv3);

// 3.

// let contentsLinks = document.querySelectorAll('#toc a');
// let linksArray = [...contentsLinks];

// linksArray.forEach((link, index) => {
//   if (index % 2 !== 0) {
//     link.style.color = 'green';
//   }
// })

// 4.
// let captions = [...document.querySelectorAll('.thumbcaption')];

// console.log(captions.map(caption => caption.textContent.trim()));

// 5.

let taxonomies = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'];
let polarBear = {};

let table = document.querySelector('tbody');
let cells = table.querySelectorAll('td');

for (let index = 0; index < cells.length; index += 1) {
  let cell = cells[index];
  taxonomies.forEach(group => {
    if (cell.textContent.match(group)) {
      polarBear[group] = cell.nextElementSibling.textContent;
    }
  });
}

console.log(polarBear);