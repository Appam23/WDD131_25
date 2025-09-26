let tasks = [];

// RENDER FUNCTION: Updates the <ul> with all tasks
function renderTasks(tasks) {
  const listElement = document.querySelector("#todoList"); // ❗ Fix: ID must match HTML (todoList)
  listElement.innerHTML = ""; // clear the list first

  tasks.forEach((task) => {
    const li = document.createElement("li");

    // Add strike class if completed
    if (task.completed) {
      li.classList.add("strike");
    }

    li.innerHTML = `
      <p>${task.detail}</p>
      <span data-action="delete">❌</span>
      <span data-action="complete">✔️</span>
    `;

    listElement.appendChild(li);
  });
}

// ADD NEW TASK
function newTask() {
  const inputElement = document.querySelector("#todo");
  const taskDetail = inputElement.value.trim();

  if (taskDetail === "") return; // prevent adding empty tasks

  // Add to the tasks array
  tasks.push({
    detail: taskDetail,
    completed: false,
  });

  inputElement.value = ""; // clear input
  renderTasks(tasks); // update list
}

// REMOVE TASK
function removeTask(taskElement) {
  const taskText = taskElement.querySelector("p").innerText;

  tasks = tasks.filter((task) => task.detail !== taskText);
  taskElement.remove();
}

// MARK COMPLETE / UNCOMPLETE
function completeTask(taskElement) {
  const taskText = taskElement.querySelector("p").innerText;
  const taskIndex = tasks.findIndex((task) => task.detail === taskText);

  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

// HANDLE CLICKS ON LIST
function manageTasks(event) {
  const action = event.target.dataset.action;
  if (!action) return;

  const taskElement = event.target.closest("li");

  if (action === "delete") {
    removeTask(taskElement);
  } else if (action === "complete") {
    completeTask(taskElement);
  }
}

// EVENT LISTENERS
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);
        