const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");
button.addEventListener("click", function () {
  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  addTask(taskText);
  input.value = "";
});

function addTask(text){
  const li = document.createElement("li");
  li.textContent = text;
//Delete logic for each button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function(){
    li.remove();
  })

  li.appendChild(deleteBtn);
  list.appendChild(li);
}
