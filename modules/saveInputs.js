/* eslint-disable no-undef */
export default function saveInputs() {
  const formObj = {
    titleField: title.value,
    authorField: author.value,
  };

  localStorage.setItem('formBook', JSON.stringify(formObj));
}