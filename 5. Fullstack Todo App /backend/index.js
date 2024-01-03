const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/todos", function (req, res) {
    res.send("To get all the todos");
});

app.post("/todo", function (req, res) {
    res.send("To post a todo");
});

app.put("/completed", function (req, res) {
    res.send("To update a todo");
});

app.listen(PORT, async () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});