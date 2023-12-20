const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const PORT = 3000;

const app = express();

app.use(express.json());

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

function userExists(username, password) {
    // Checks if any user matches the conditions
    return ALL_USERS.some(user => user["username"] === username && user["password"] === password);
}

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
        res.json({
            users: ALL_USERS.filter((user) => {
                if (user.username == username) {
                    return false;
                } else {
                    return true;
                }
            })
        });

    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(PORT, function () {
    console.log(`Server up and running on PORT: ${PORT}`);
});