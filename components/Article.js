import data from '../data/data.js';

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

// Parent to append code-generated articles to the DOM
const article = document.querySelector('.articles');

// creates articles
function articleMaker({ title, date, firstParagraph, secondParagraph, thirdParagraph }) {

  // instantiate all the elements for an article
  const article = document.createElement('div');
  const articleTitle = document.createElement('h2');
  const articleDate = document.createElement('p.date');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const expandButton = document.createElement('span');

  // setting up structure of elements
  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(p3);
  article.appendChild(expandButton);


  // adding proper class names
  article.classList.add('article');
  articleDate.classList.add('date');
  expandButton.classList.add('expandButton');

  // set text content using arguments
  articleTitle.textContent = title;
  articleDate.textContent = date;
  p1.textContent = firstParagraph;
  p2.textContent = secondParagraph;
  p3.textContent = thirdParagraph;
  expandButton.textContent = '+';

  // event listener to toggle article-open
  expandButton.addEventListener('click', (event) => {
    article.classList.toggle('article-open');
  });

  // return article
  return article;
}

// loop through data to create articles
data.forEach(item => {
  article.appendChild(articleMaker(item));
});