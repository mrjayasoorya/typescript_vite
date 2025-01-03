import { triggerNestedfunc, User } from "./User"
export function handleFormSubmit(event: Event): void {
  event.preventDefault(); // Prevent default form submission behavior

  const nameInput = document.getElementById("name") as HTMLInputElement;
  const ageInput = document.getElementById("age") as HTMLInputElement;
  let obj: User = {
    email: "",
    id: 1,
    name: ""
  }
  console.log(obj,"sdf");

  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  triggerNestedfunc()
  if (name && age) {
    alert(`Name: ${name}, Age: ${age}`);
  } else {
    alert("Please fill out all fields.");
  }
}
