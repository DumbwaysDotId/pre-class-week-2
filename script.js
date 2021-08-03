const showType = document.getElementById("show-type");
const form = document.getElementById("form");

function performCheckNumber() {
  const input = document.getElementById("input-value");
  const result = checkOddEven(input.value);
  const element = `<p class="text-center">${result}<p>`;
  
  showType.innerHTML = element;
}

function checkOddEven(value) {
  if (value % 2 !== 0) {
    return "Odd Number";
  } else {
    return "Even Number";
  }
}
