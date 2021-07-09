const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const header = document.querySelector("h1");
const form = document.querySelector("form");
const person = prompt("Hey there, what is your name?");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

if (person === ""){
    header.innerHTML = "Hei whoever you are, what do you wanna do today?";
} else {
    header.innerHTML = "Hei " + person + " what do you wanna do today?";     
}

function addTodo(event) {
    event.preventDefault();
    //CREATE div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // CREATE li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    //CHECK MARK
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //DELETE MARK
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv); 
    //DELETE INPUT
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    console.log(item.classList);
    if(item.classList[0] === 'trash-btn'){
        const itemDelete = item.parentElement;
        itemDelete.classList.add('fall');
        itemDelete.addEventListener('transitionend', function(){
            itemDelete.remove();
        });
    } else if (item.classList[0] === 'complete-btn'){
        const itemChecked = item.parentElement;
        itemChecked.classList.toggle('completed');
    }
}

function filterTodo(event){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        if (event.target.value === 'completed'){
            if(todo.classList.contains('completed'))
                todo.style.display = 'flex';
            else 
                todo.style.display = 'none';
        } else if (event.target.value === 'all'){
            todo.style.display = 'flex';
        } else if (event.target.value === 'uncompleted') {
            if(todo.classList.contains('completed'))
                todo.style.display = 'none';
            else 
                todo.style.display = 'flex'
          } 
    });
}