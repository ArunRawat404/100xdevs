const markStr = "Mark as Done";
const doneStr = "Done";
const endpoint = "https://sum-server.100xdevs.com/todos"

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

/* 
state = [{
    id: 1,
    title: "Title",
    description: "Description"
}]
*/
function updateDomState(state) {
    const todos = document.getElementById("todos");
    todos.innerHTML = "";

    for (let i = 0; i < state.length; i++) {
        const child = createTodo(state[i].title, state[i].descripton, state[i].id);
        todos.appendChild(child)
    };
};


async function getTodoData() {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data.todos)
    updateDomState(data.todos);
}

getTodoData();