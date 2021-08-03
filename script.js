const showNumber = document.getElementById("show-number");

function performLooping() {
  const numberInput = document.getElementById("input-number");
  let elements = "";
  for (let i = 1; i <= numberInput.value; i++) {
    elements += `<p>${i}</p>`;
  }

  showNumber.innerHTML = elements;
}
