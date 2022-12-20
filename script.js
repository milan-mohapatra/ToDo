const container = document.querySelector(".container");
const form = document.querySelector("form");
const title = document.getElementById("title");
const description = document.getElementById("description");

//
const tasks = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task"))
  : [];

const showAllTasks = () => {
  tasks.forEach((toDoObj, index) => {
    const innerDiv = document.createElement("div");

    const p = document.createElement("p");
    p.innerText = toDoObj.title;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerText = toDoObj.description;
    innerDiv.append(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "-";
    deleteBtn.setAttribute("class", "deleteBtn");

    // removing task on click
    deleteBtn.addEventListener("click", () => {
      removeTasks();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showAllTasks();
    });

    const div = document.createElement("div");
    div.setAttribute("class", "task");
    div.append(innerDiv);
    div.append(deleteBtn);

    container.append(div);
  });
};

const removeTasks = () => {
  const divs = document.querySelectorAll(".task");
  divs.forEach((value) => {
    value.remove();
  });
};

// code execution starts hear
showAllTasks();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  removeTasks();

  tasks.push({
    title: title.value,
    description: description.value,
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  showAllTasks();
});
