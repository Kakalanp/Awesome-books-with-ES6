/* eslint-disable import/no-cycle */
import { bookList, addBook, contact } from '../Script/index.js';

export default function switchDisplay() {
  bookList.classList.add('not-display');
  addBook.classList.add('not-display');
  contact.classList.add('not-display');
}