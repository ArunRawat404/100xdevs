const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types.js");

const app = express();
const { PORT } = require("./config/server_config.js")

app.use(express.json());

app.get("/todos", function (req, res) {
    res.send("To get all the todos");
});

app.post("/todo", function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodoSchema.safeParse(createPayload);
    if (!parsedPayload) {
        return res.status(411).json({
            mss: "You send wrong inputs"
        })
    }
});

app.put("/completed", function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodoSchema.safeParse(updatePayload);
    if (!parsedPayload) {
        return res.status(411).json({
            mss: "You send wrong inputs"
        })
    }
});

app.listen(PORT, async () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});