const showNumber = document.getElementById("show-number");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  proceedNumber();
});

function proceedNumber() {
  const numberInput = document.getElementById("input-number");
  let elements = "";
  for (let i = 1; i <= numberInput.value; i++) {
    elements += `<p>${i}</p>`;
  }

  showNumber.innerHTML = elements;
}
