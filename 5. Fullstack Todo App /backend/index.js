const express = require("express");
const cors = require("cors");
const { createTodoSchema, updateTodoSchema } = require("./types.js");

const app = express();
const { PORT } = require("./config/server_config.js");
const Todo = require("./models/todo_model.js");
const connect = require("./config/db_config.js");

app.use(express.json());
app.use(cors());

app.get("/todos", async function (req, res) {
    try {
        const todos = await Todo.find({});
        return res.status(200).json({
            success: true,
            message: "Retrieved todos successfully",
            data: todos,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while retrieving todo",
            data: {},
            err: error
        });
    }
});

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodoSchema.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            mss: "You send wrong inputs"
        })
    }

    try {
        const todo = await Todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        });
        return res.status(200).json({
            success: true,
            message: "Todo created successfully",
            data: todo,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while creating todo",
            data: {},
            err: error
        });
    }

});

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodoSchema.safeParse(updatePayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "You send wrong inputs"
        })
    }

    try {
        const todo = await Todo.findByIdAndUpdate(updatePayload.id, {
            completed: true
        });
        return res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            data: todo,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while updating todo",
            data: {},
            err: error
        });
    }
});

app.listen(PORT, async () => {
    console.log(`Server is up and running on PORT ${PORT}`);
    await connect();
    console.log("DB connected");
});