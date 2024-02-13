function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data);
    })
    .catch(error => console.log(error));
}

function renderBooks(data) {
  const booksContainer = document.getElementById('books-container');

  data.forEach(book => {
    const title = book.name || book.title;

    const bookElement = document.createElement('li');
    bookElement.textContent = title;

    booksContainer.appendChild(bookElement);
  });
}

fetchBooks();

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
