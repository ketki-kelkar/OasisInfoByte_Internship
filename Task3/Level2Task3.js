const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", addTask);

function addTask(event) {
    event.preventDefault();
   
    const taskTitle = document.getElementById("task-title").value;
    const taskDesc = document.getElementById("task-desc").value;

    
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
        <h2>${taskTitle}</h2>
        <p>Description: ${taskDesc}</p>
    `;

    
    taskList.appendChild(taskItem);

    
    document.getElementById("task-form").reset();
}