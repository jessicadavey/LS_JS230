function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

// 1.
// Starting with the document node, use the lastChild and childNodes properties to change the text color to red on the On the River heading and set its font size to 48 pixels.

// document.lastChild.lastChild.childNodes[1].style.color = 'red';
// document.lastChild.lastChild.childNodes[1].style.fontSize = '48px';

// 2. 
// Count the paragraphs on the page, and then log the result.

// (function countParagraphs() {
//   let count = 0;
//   walk(document, node => {
//     if (node.nodeName === 'P') {
//       count += 1;
//     }
//   });

//   console.log(`There are ${count} paragraphs on the page.`);
// })();

// 3.
// Retrieve the first word from each paragraph on the page and log the entire list.

// (function retrieveWords() {
//   let text = [];

//   walk(document, node => {
//     if (node.nodeName === 'P') {
//       // text.push(node.textContent.trim().split(' ')[0]);
//       text.push(node.firstChild.data.trim().split(' ')[0]);
//     }
//   });

//   console.log(text);
// })();


// 4.
// Add the class stanza to each paragraph except the first.

// (function addClass() {
//   let nodes = [];
//     walk(document, node => {
//       if (node.nodeName === 'P') {
//         nodes.push(node);
//       }
//     });
//     nodes.slice(1).forEach(node => {
//       node.classList.add('stanza');
//     }
//       )
// })();

// 5.
// Count the images on the page, then count the PNG images. Log both results.

(function count() {
  let images = 0;
  let png = 0;

  walk(document, node => {
    if (node.nodeName = "IMG") {
      images += 1;
      if (node.src) {
        let string = node.src.toString();
        if (string.substring(string.length - 3).toLowerCase() === 'png') {
          png += 1;
        }
      }
    }
  });

  console.log(images, png);
})();

// 6.
// Change the link color to red for every link on the page.

(function links() {
  walk(document, node => {
    if (node.nodeName === 'A') {
      node.style.color = 'red';
    }
  })

})();