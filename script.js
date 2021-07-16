const users = [];

const showData = document.getElementById("show-data");
const form = document.getElementById("form");

function renderTodo() {
  let HTMLElements = "";

  if (users.length < 1) {
    HTMLElements += `
        <div class="text-center">
            <img src="img/no_data.svg" alt="no data" class="img">
        </div>
        `;
  } else {
    HTMLElements += `
      <table>
        <tr>
         <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
    `;
    for (elem of users) {
      const id = elem.id;
      const name = elem.name;
      const email = elem.email;
      const gender = elem.gender;
      const address = elem.address;

      HTMLElements += `
          <tr id="${id}">
            <td class="text-center">${name}</td>
            <td class="text-center">${email}</td>
            <td class="text-center">${gender}</td>
            <td class="text-center">${address}</td>
            <td class="text-center"><button class="btn-delete" onclick="deleteTodo(${id})">Delete</button></td>
          </tr>
          `;
    }
    HTMLElements += "</table>";
  }

  showData.innerHTML = HTMLElements;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addUser();
});

function addUser() {
  const inputName = document.getElementById("input-name");
  const inputEmail = document.getElementById("input-email");
  const inputGender = document.getElementById("input-gender");
  const inputAddress = document.getElementById("input-address");

  const user = {
    id: Date.now(),
    name: inputName.value,
    email: inputEmail.value,
    gender: inputGender.value,
    address: inputAddress.value,
  };

  users.push(user);

  inputName.value = "";
  inputEmail.value = "";
  inputGender.value = "";
  inputAddress.value = "";
  renderTodo();
}

function deleteTodo(id) {
  for (let index = 0; index < users.length; index++) {
    console.log("id", id);
    console.log("index", index);
    if (id === users[index].id) {
      users.splice(index, 1);
    }
  }
  renderTodo();
}

renderTodo();
