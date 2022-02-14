import saveInputs from '../modules/saveInputs.js';
import Book from '../modules/bookClass.js';
import createBooks from '../modules/createBooks.js';
import switchDisplay from '../modules/switchDisplay.js';

const bookSubmit = document.querySelector('#book-submit');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const bookList = document.getElementById('book-list');
const addBook = document.getElementById('add-book');
const contact = document.getElementById('contact');
const bookWrapper = document.querySelector('#book-wrapper');
let library = [];
if (localStorage.getItem('library') != null) {
  library = JSON.parse(localStorage.getItem('library'));
}
export {library as default, bookWrapper, bookList, addBook, contact};

title.addEventListener('input', saveInputs);
author.addEventListener('input', saveInputs);

document.addEventListener('DOMContentLoaded', () => {
  createBooks();
  if (localStorage.getItem('formBook')) {
    const formObj = JSON.parse(localStorage.getItem('formBook'));
    title.value = formObj.titleField;
    author.value = formObj.authorField;
  }
  switchDisplay();
  bookList.classList.remove('not-display');
});

let bookId = 0;
if (library.length !== 0) {
  bookId = library.at(-1).id;
}

bookSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  bookId += 1;
  const someBook = new Book(title.value, author.value, bookId);
  someBook.addBook();
  createBooks();
  title.value = '';
  author.value = '';
  saveInputs();
});

const bookListNav = document.querySelector('[href="#book-list"]');
const addBookNav = document.querySelector('[href="#add-book"]');
const contactNav = document.querySelector('[href="#contact"]');

bookListNav.addEventListener('click', () => {
  switchDisplay();
  bookList.classList.remove('not-display');
});

addBookNav.addEventListener('click', () => {
  switchDisplay();
  addBook.classList.remove('not-display');
});

contactNav.addEventListener('click', () => {
  switchDisplay();
  contact.classList.remove('not-display');
});
