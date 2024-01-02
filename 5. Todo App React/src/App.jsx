import { useState } from "react";

function App() {
  let [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym in morning",
    completed: false
  }, {
    title: "Study DSA",
    description: "Do 2 DSA problem each day",
    completed: true
  }]);

  function addTodo() {
    setTodos([...todos, {
      title: "New todo",
      description: "New description"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}

// component
function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>

  </div>
}


export default App
