const markStr = "Mark as Done";
const doneStr = "Done";
let id = 1;

function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const todos = document.getElementById("todos");
    // appending todo to todos 
    todos.appendChild(createTodo(title, description, id++));
};

function createTodo(title, description, id) {
    const todo = document.createElement("div");
    const titleP = document.createElement("p");
    const descriptionP = document.createElement("p");
    const isDone = document.createElement("button");

    titleP.innerText = title;
    descriptionP.innerText = description;
    isDone.innerText = markStr;

    // appending title, description and button to todo
    todo.appendChild(titleP);
    todo.appendChild(descriptionP);
    todo.appendChild(isDone);

    todo.setAttribute("id", id);
    isDone.setAttribute("onclick", `markDone(${id})`);

    return todo;
};

function markDone(todoId) {
    const todo = document.getElementById(todoId);
    todo.children[2].innerText = doneStr;
}