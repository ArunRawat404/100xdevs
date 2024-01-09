import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" placeholder="title" style={{ padding: 10, margin: 10 }} onChange={function (e) {
            const value = e.target.value;
            setTitle(value)
        }}></input>
        <br></br>
        <input type="text" placeholder="description" style={{ padding: 10, margin: 10 }} onChange={function (e) {
            const value = e.target.value;
            setDescription(value)
        }}></input>
        <br></br>
        <button onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function (res) {
                    const json = await res.json();
                    alert("Todo added");
                })
        }} style={{ padding: 10, margin: 10 }}>Add a todo</button>
    </div>
}