const showResult = document.getElementById("show-result");

const operand1 = document.getElementById("input-operand-1");
const operand2 = document.getElementById("input-operand-2");

function addition() {
  const result = parseInt(operand1.value) + parseInt(operand2.value);

  const element = `<p class="text-center">${result}</p>`;

  showResult.innerHTML = element;
}

function subtraction() {
  const result = parseInt(operand1.value) - parseInt(operand2.value);

  const element = `<p class="text-center">${result}</p>`;

  showResult.innerHTML = element;
}

function multiplication() {
  const result = parseInt(operand1.value) * parseInt(operand2.value);

  const element = `<p class="text-center">${result}</p>`;

  showResult.innerHTML = element;
}

function division() {
  const result = parseInt(operand1.value) / parseInt(operand2.value);

  const element = `<p class="text-center">${result}</p>`;

  showResult.innerHTML = element;
}
