let globalId = 1;
let todoState = [];
let oldTodoState = [];
const markStr = "Mark as Done";
const doneStr = "Done";
const endpoint = "https://sum-server.100xdevs.com/todos"
const todos = document.getElementById("todos");

function markDone(todoId) {
    const todo = document.getElementById(todoId);
    todo.children[2].innerText = doneStr;
}

function addTodo(todo) {
    const todoDiv = document.createElement("div");
    const titleP = document.createElement("p");
    const descriptionP = document.createElement("p");
    const isDone = document.createElement("button");

    titleP.innerText = todo.title;
    descriptionP.innerText = todo.descripton;
    isDone.innerText = markStr;

    // appending title, description and button to todo
    todoDiv.appendChild(titleP);
    todoDiv.appendChild(descriptionP);
    todoDiv.appendChild(isDone);

    todoDiv.setAttribute("id", todo.id);
    isDone.setAttribute("onclick", `markDone(${todo.id})`);

    todos.appendChild(todoDiv);
}

function removeTodo(todo) {
    const element = document.getElementById(todo.id);
    todos.removeChild(element);
}

function updateTodo(oldTodo, newTodo) {
    const element = document.getElementById(oldTodo.id);
    element.children[0].innerHTML = newTodo.title;
    element.children[1].innerHTML = newTodo.descripton;
    element.children[0].innerHTML = newTodo.completed ? "Mark as done" : "Done";
}


function isTodoUpdated(oldTodo, newTodo) {
    // todo has been updated
    if (oldTodo.title != newTodo.title || oldTodo.descripton != newTodo.descripton) {
        updateTodo(oldTodo, newTodo);
        return true
    }
    return false;
};

function updateState(newTodos) {
    // calculate the diff b/w newTodos and oldTodos.
    // More specifically, find out what todos are - 
    // 1. added
    // 2. deleted
    // 3. updated
    const added = [];
    const deleted = [];
    const updated = [];
    const noChange = [];

    newTodos.forEach(newTodo => {
        const oldTodo = oldTodoState.find(element => element.id == newTodo.id);

        // if todo is not present in old todos
        if (!oldTodo) {
            added.push(newTodo);
        }
        // if todo is present in old todos but is updated
        else if (oldTodo && isTodoUpdated(oldTodo, newTodo)) {
            updated.push(newTodo);
        }
        // if todo is present in old todos and is not updated
        else {
            noChange.push(newTodo);
        }
    });

    oldTodoState.forEach(oldTodo => {
        const newTodo = newTodos.find(element => element.id == oldTodo.id);
        // if todo was present in old todos but not in new todos
        if (!newTodo) {
            deleted.push(oldTodo);
        }
    });

    // calculate these 3 arrays
    // call addTodo, removeTodo, updateTodo functions on each of the
    // elements

    added.forEach(todo => { addTodo(todo) });
    deleted.forEach(todo => { removeTodo(todo) });
    oldTodoState = newTodos;
}

async function getTodo() {
    const response = await fetch(endpoint);
    const data = await response.json();
    updateState(data.todos);
}

const title = "Dummy Title";
const description = "Dummy Description";
addTodo({
    title: title,
    descripton: description,
    id: 0,
})