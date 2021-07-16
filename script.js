const users = [];

const showData = document.getElementById("show-data");
const form = document.getElementById("form");

class User {
  constructor(id, name, email, gender, address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.address = address;
  }

  renderToElements() {
    return `
    <tr id="${this.id}">
      <td class="text-center">${this.name}</td>
      <td class="text-center">${this.email}</td>
      <td class="text-center">${this.gender}</td>
      <td class="text-center">${this.address}</td>
      <td class="text-center"><button class="btn-delete" onclick="deleteUser(${this.id})">Delete</button></td>
    </tr>
    `;
  }
}
function renderData() {
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
    for (user of users) {
      HTMLElements += user.renderToElements();
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

  const user = new User(
    Date.now(),
    inputName.value,
    inputEmail.value,
    inputGender.value,
    inputAddress.value
  );

  console.log("user intance: ", user);

  users.push(user);

  inputName.value = "";
  inputEmail.value = "";
  inputGender.value = "";
  inputAddress.value = "";
  renderData();
}

function deleteUser(id) {
  for (let index = 0; index < users.length; index++) {
    if (id === users[index].id) {
      users.splice(index, 1);
    }
  }
  renderData();
}

renderData();
