import { handleFormSubmit } from './models/formHandler';

// Attach event listeners
const form = document.getElementById("formSubmit") as HTMLButtonElement;

if (form) {
  form.addEventListener("click", handleFormSubmit);
}
