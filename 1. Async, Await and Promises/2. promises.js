// Callback Syntax

const fs = require("fs");

function readFileFunction(callback) {
    fs.readFile("text.txt", "utf-8", function (err, data) {
        callback(data);
    });
}

// callback function
function onDone(data) {
    console.log(data);
}

readFileFunction(onDone);


// Promises Syntax

function readFilePromises() {
    return new Promise(function (resolve) {
        fs.readFile("text.txt", "utf-8", function (err, data) {
            resolve(data);
        });
    })
}

let promise = readFilePromises();
console.log(promise);
promise.then(onDone);