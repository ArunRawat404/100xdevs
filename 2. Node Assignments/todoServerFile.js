const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

const PORT = 3000;


app.get("/todos", function (req, res) {
    fs.readFile("./todos.json", "utf-8", function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

app.get("/todos/:id", function (req, res) {
    fs.readFile("./todos.json", "utf-8", function (err, data) {
        if (err) throw err;
        const todos = JSON.parse(data);
        const todo = todos.find(t => t.id === parseInt(req.params.id));
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).send();
        }
    });
});


app.post("/todos", function (req, res) {
    const newTodoItem = {
        id: Math.floor(Math.random() * 1000000), // unique random id
        title: req.body.title,
        description: req.body.description
    };
    fs.readFile("./todos.json", "utf-8", function (err, data) {
        if (err) throw err;
        const todos = JSON.parse(data);
        todos.push(newTodoItem);
        fs.writeFile("./todos.json", JSON.stringify(todos), function (err) {
            if (err) throw err;
            res.status(201).json(newTodoItem);
        });
    });
});

app.put("/todos/:id", function (req, res) {
    fs.readFile("./todos.json", "utf-8", function (err, data) {
        if (err) throw err;
        const todos = JSON.parse(data);
        const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
        if (todoIndex != -1) {
            todos[todoIndex].title = req.body.title;
            todos[todoIndex].description = req.body.description;
            fs.writeFile("./todos.json", JSON.stringify(todos), function (err) {
                if (err) throw err;
                res.status(200).json(todos[todoIndex]);
            });
        } else {
            res.status(404).send();
        }
    });
});

app.delete("/todos/:id", function (req, res) {
    fs.readFile("./todos.json", "utf-8", function (err, data) {
        if (err) throw err;
        const todos = JSON.parse(data);
        const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
        if (todoIndex != -1) {
            todos.splice(todoIndex, 1)
            fs.writeFile("./todos.json", JSON.stringify(todos), function (err) {
                if (err) throw err;
                res.status(200).send();
            });
        } else {
            res.status(404).send();
        }
    });
})

// handles requests that don't match any of the defined routes
app.use(function (req, res, next) {
    res.status(404).send();
});

// app.listen(PORT, function () {
//     console.log(`Server up and running on PORT: ${PORT}`);
// });

module.exports = app;