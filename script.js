let tasks = [];

const showTask = document.getElementById("show-todo");
const btnSubmit = document.getElementById("btn-input-task");

function renderTodo() {
  let taskElements = "";

  if (tasks.length < 1) {
    taskElements += `
        <div class="text-center">
            <img src="img/todo_2.svg" alt="img task" class="img-todo-left">
        </div>
        `;
  }

  for (elem of tasks) {
    const id = elem.id;
    const description = elem.description;
    const isDone = elem.isDone;

    let btnDone = `<button class="btn-done" onclick="doneTask(${id})">Done</button>`;

    let textSuccess = "";

    if (isDone) {
      btnDone = "";
      textSuccess = "text-success";
    }

    taskElements += `
        <div class="list-task">
            <p class="task-name ${textSuccess}">${description}</p>
            <div class="task-isdone">
                ${btnDone}
                <button class="btn-delete" onclick="deleteTask(${id})">X</button>
            </div>
        </div
        `;
  }

  showTask.innerHTML = taskElements;
}

btnSubmit.addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("input-task");

  if (!taskInput.value) {
    alert("Task input is not be empty");
    return;
  }

  const task = {
    id: Date.now(),
    description: taskInput.value,
    isDone: false,
  };

  tasks.push(task);

  taskInput.value = "";
  renderTodo();
}

function deleteTask(id) {
  for (let index = 0; index < tasks.length; index++) {
    console.log("id", id);
    console.log("index", index);
    if (id === tasks[index].id) {
      tasks.splice(index, 1);
    }
  }
  renderTodo();
}

function doneTask(id) {
  for ([index, elem] of tasks.entries()) {
    if (id === tasks[index].id) {
      tasks[index].isDone = true;
    }
  }
  renderTodo();
}

renderTodo();
