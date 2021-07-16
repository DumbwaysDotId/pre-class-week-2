let todos = [];

const showTodo = document.getElementById("show-todo");
const btnSubmit = document.getElementById("btn-input-todo");

function renderTodo() {
  let todoElements = "";

  if (todos.length < 1) {
    todoElements += `
        <div class="text-center">
            <img src="img/todo.svg" alt="img todo" class="img-todo-left">
        </div>
        `;
  }

  for (elem of todos) {
    const id = elem.id;
    const description = elem.description;
    const isDone = elem.isDone;

    let btnDone = `<button class="btn-done" onclick="doneTodo(${id})">Done</button>`;

    let textSuccess = "";

    if (isDone) {
      btnDone = "";
      textSuccess = "text-success";
    }

    todoElements += `
        <div class="todo">
            <p class="todo-name ${textSuccess}">${description}</p>
            <div class="todo-isdone">
                ${btnDone}
                <button class="btn-delete" onclick="deleteTodo(${id})">X</button>
            </div>
        </div>
        `;
  }

  showTodo.innerHTML = todoElements;
}

btnSubmit.addEventListener("click", addTodo);

function addTodo() {
  const todoInput = document.getElementById("input-todo");

  if (!todoInput.value) {
    alert("todo input is not be empty");
    return;
  }

  const todo = {
    id: Date.now(),
    description: todoInput.value,
    isDone: false,
  };

  todos.push(todo);

  todoInput.value = "";
  renderTodo();
}

function deleteTodo(id) {
  for (let index = 0; index < todos.length; index++) {
    console.log("id", id);
    console.log("index", index);
    if (id === todos[index].id) {
      todos.splice(index, 1);
    }
  }
  renderTodo();
}

// Done TODO
function doneTodo(id) {
  for (i = 0; i < todos.length; i++) {
    if (id == todos[i].id) {
      todos[i].isDone = true;
    }
  }
  renderTodo();
}

renderTodo();
