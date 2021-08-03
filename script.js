const showGreeting = document.getElementById("show-greeting");

function performGreetings() {
  const inputName = document.getElementById("input-name");
  const dateTime = document.getElementById("input-time");

  const date = new Date(dateTime.value);
  const result = greeting(date.getHours(), inputName.value);

  const element = `<p class="text-center">${result}<p>`;
  showGreeting.innerHTML = element;
}

function greeting(hour, userName) {
  if (hour >= 5 && hour < 12) {
    return `Good Morning, ${userName}`;
  } else if (hour >= 12) {
    if (hour >= 12 && hour < 16) {
      return `Good Afternoon, ${userName}`;
    } else {
      return `Good Evening, ${userName}`;
    }
  } else {
    return `Good Night, ${userName}`;
  }
}
