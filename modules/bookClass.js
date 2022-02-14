import library from '../Script/index.js';

export default class{
    constructor(title, author, id) {
      this.title = title;
      this.author = author;
      this.id = id;
    }
  
    addBook() {
      library.push(this);
      localStorage.setItem('library', JSON.stringify(library));
    }
  
    removeBook() {
      library.forEach((e, i, lib) => {
        if (e.id === this.id) {
          lib.splice(i, 1);
        }
      });
      localStorage.setItem('library', JSON.stringify(library));
      createBooks(); // eslint-disable-line
    }
  }