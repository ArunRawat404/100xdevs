const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "Arun" || password != "Pass") {
        res.status(403).json({ msg: "Something wrong with your credentials" });
    } else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({ msg: "Something wrong with your inputs" });
    } else {
        next();
    }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
    res.json({
        msg: "Your kidney is fine"
    });
});

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys");
});

// global catches
// // Error Handling Middleware
app.use(function (err, req, res, next) {
    res.json({
        msg: "Sorry something is up with our server"
    });
});

app.listen(PORT, function () {
    console.log(`Server up and running on PORT: ${PORT}`);
});