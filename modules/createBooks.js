/* eslint-disable import/no-cycle */
import Book from './bookClass.js';
// eslint-disable-next-line import/no-named-default
import { default as library, bookWrapper } from '../Script/index.js';

export default function createBooks() {
  const bookCollection = library.map((bookData) => new Book(
    bookData.title, bookData.author, bookData.id,
  ));

  let number = 0;

  bookWrapper.innerHTML = '';
  bookCollection.forEach((book) => {
    const div = document.createElement('div');
    if (number % 2 === 0) {
      div.className = 'background';
    }
    number += 1;
    div.id = `book-${book.id}`;
    div.innerHTML = `
      <h2>${book.title}</h2>
      <p>by</p>
      <h3>${book.author}</h3>
      <button type="button" class="remove-book">Remove</button>
      `;
    bookWrapper.appendChild(div);

    const buttons = document.querySelector(`#book-${book.id} button`);
    buttons.addEventListener('click', () => {
      book.removeBook();
    });
  });
}