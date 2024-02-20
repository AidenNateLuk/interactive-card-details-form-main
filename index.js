const nameInput = document.getElementById("name");
const numberInput = document.getElementById("card-digits");
const monthInput = document.getElementById("mm");
const yearInput = document.getElementById("yy");
const cvcInput = document.getElementById("cvc");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  String(nameInput.value);
  const content = document.getElementById("c-con");
  content.innerHTML = "";
  content.classList.add("success");
  const newTitle = document.createElement("h1");
  newTitle.innerHTML = "Thank you! We've added your card details Continue";
  newTitle.classList.add("successCardTitle");
  content.appendChild(newTitle);
});
