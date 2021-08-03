const showResult = document.getElementById("show-result");
const additionButton = document.getElementById("btn-addition");
const subtractionButton = document.getElementById("btn-subtraction");
const multiplicationButton = document.getElementById("btn-multiplication");
const divisionButton = document.getElementById("btn-division");

const operand1 = document.getElementById("input-operand-1");
const operand2 = document.getElementById("input-operand-2");

additionButton.addEventListener("click", () => {
  const result = parseInt(operand1.value) + parseInt(operand2.value);

  const element = `<p class="text-center">${result}</p>`;

  showResult.innerHTML = element;
});

subtractionButton.addEventListener("click", () => {
  const result = parseInt(operand1.value) - parseInt(operand2.value);

  const element = `<p class="text-center">${result}</p>`;

  showResult.innerHTML = element;
});

multiplicationButton.addEventListener("click", () => {
  const result = parseInt(operand1.value) * parseInt(operand2.value);

  const element = `<p class="text-center">${result}</p>`;

  showResult.innerHTML = element;
});

divisionButton.addEventListener("click", () => {
  const result = parseInt(operand1.value) / parseInt(operand2.value);

  const element = `<p class="text-center">${result}</p>`;

  showResult.innerHTML = element;
});
