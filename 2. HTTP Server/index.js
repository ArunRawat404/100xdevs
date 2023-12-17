const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

app.use(bodyParser.json({ extended: true }));

app.get("/", function (req, res) {
    res.send("Hello World Get");
});

app.post("/", function (req, res) {
    console.log(req.body);
    res.send("Hello World Post");
});

app.listen(PORT, function () {
    console.log(`Server up and running on PORT: ${PORT}`);
});


