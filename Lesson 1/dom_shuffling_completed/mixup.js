/*

Correct Page Hierarchy:

body
  header1
    h1
    nav
  main
    section #content
      article
        header2
          h1
          h2
        p
        figure
          img
          figcaption
        figure
          img
          figcaption
  footer
    p
*/
// headers

let headers = document.querySelectorAll('header');
let header1 = headers[1];
let header2 = headers[0];

let pageTitle = document.querySelector('body h1');
let nav = document.querySelector('nav');

header1.insertBefore(pageTitle, nav);

let main = document.querySelector('main');
main.insertAdjacentElement('beforebegin', header1);

// figure captions

let captions = document.querySelectorAll('figcaption');

let chinStickCaption = captions[0];
let babyMopCaption = captions[1];

let figures = document.querySelectorAll('figure');
let babyMopFigure = figures[0];
let chinStickFigure = figures[1];

babyMopFigure.replaceChild(babyMopCaption, chinStickCaption);
chinStickFigure.appendChild(chinStickCaption);

// figures

let article = document.querySelector('article');

article.appendChild(chinStickFigure);
article.appendChild(babyMopFigure);