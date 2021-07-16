const showNumber = document.getElementById("show-number");
const btnSubmit = document.getElementById("btn-input-number");

btnSubmit.addEventListener("click", addTask);

function addTask() {
  const numberInput = document.getElementById("input-number");
  let elements = "";
  for (let i = 1; i <= numberInput.value; i++) {
    elements += `<p>${i}</p>`;
  }
  console.log(elements);
  showNumber.innerHTML = elements;
}
