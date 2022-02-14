export default function() {
    const formObj = {
      titleField: title.value,
      authorField: author.value,
    };
  
    localStorage.setItem('formBook', JSON.stringify(formObj));
  }