const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

const PORT = 3000;

mongoose.connect(
    "your_mongo_url",
);

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

const app = express();
app.use(express.json());

// to check user credentials 
async function checkCredentials(username, password) {
    // should check in the database
    const user = await User.findOne({ username: username, password: password });
    if (user) {
        return true;
    } else {
        return false;
    }
};

// to create new user account
app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password
    const name = req.body.name;

    // checking in database if user already exist or not
    const existingUser = await User.findOne({ username: username })

    if (existingUser) {
        return res.status(400).send("Username already exist");
    }

    const user = new User({
        username: username,
        password: password,
        name: name
    });
    user.save();

    res.json({
        mss: "User created successfully"
    });
});

// to login a user
app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const response = await checkCredentials(username, password)
    if (!response) {
        return res.status(403).json({
            msg: "User doesn't exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", async function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username from the database
        const response = await User.find({ 'username': { $ne: username } })
        res.json({
            users: response
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