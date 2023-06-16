/*function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then(function(response) {return response.json()})
  .then(function(data) {console.log(data)})
}
  

fetchBooks()

<-- WORKING*/


function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  // .then((response) => console.log(response))
  .then(function(response) {return response.json()})
  // .then((books) => console.log(books))
  .then(function (books) {renderBooks(books)})
}


/*

Define function that fetches books (no args)
(uses helper function that gets and renders titles from books)
  return a fetch that pings the API for books


*/


// fetchBooks() 

/*

Promise(...)
  .then((resp) => (resp.json()))
  .then((data) => ())

*/




function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
}) 

