let todos = [];

const showGrade = document.getElementById("show-grade");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", () => {
  const input = document.getElementById("input-value");

  const result = checkGrade(input.value);

  const element = `<p class="text-center">${result}<p>`;

  showGrade.innerHTML = element;
});

function checkGrade(value) {
  if (value >= 90) {
    return "Your grade is A+, Marvelous!!";
  } else if (value > 80 && value <= 90) {
    return "Your grade is A, Excellent!";
  } else if (value > 70 && value <= 80) {
    return "Your grade is B, Good";
  } else if (value >= 60 && value <= 70) {
    return "Your grade is C, Not Bad";
  } else {
    return "You must take remedial!!!";
  }
}
