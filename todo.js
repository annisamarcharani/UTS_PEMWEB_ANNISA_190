const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  
  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  
  todoLane.appendChild(newTask);
  input.value = "";
});

droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    const bottomTask = insertAboveTask(zone, e.clientY);
    const curTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      zone.appendChild(curTask);
    } else {
      zone.insertBefore(curTask, bottomTask);
    }

    
    if (zone.querySelector("h3").innerText === "Done" && !curTask.querySelector(".delete-btn")) {
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<img src="delete.png" alt="Delete Icon" class="delete-icon">';
      deleteButton.classList.add("delete-btn");

      deleteButton.addEventListener("click", () => {
        curTask.remove(); s
      });

      curTask.appendChild(deleteButton);
    }
  });
});
