const express = require("express");
const zod = require("zod");

const app = express();

app.use(express.json());

const PORT = 3000;

// array of number schema
const schema = zod.array(zod.number());

/* 
{
    email: string, should look like email
    password: atleast 8 characters long
    country: "IN" or "US"
}

schema for above object in zod

const schemaObj = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8), // Ensures password is at least 8 characters long
    country: zod.literal("IN", "US") // Uses .literal() to specify multiple literals
});
*/

// middlewares

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
    // validation
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(411).json({
            mss: "Input is invalid"
        })
    } else {
        const kidneyLength = kidneys.length;
        res.send("You have " + kidneyLength + " kidneys");
    }
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