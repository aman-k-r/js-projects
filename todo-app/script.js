let add = document.querySelector('.btn');
let newTask = document.querySelector('#todo-input');
let list = document.querySelector('#todo-list');

function addTask() {

  if (newTask.value.trim() !== "") {
    let toAdd = document.createElement("li");
    toAdd.innerHTML = newTask.value;
    list.appendChild(toAdd);
    newTask.value = "";
  }
  else {
    alert("Input Box is Empty")
  }
}

// Event listener for button click
add.addEventListener('click', addTask);
