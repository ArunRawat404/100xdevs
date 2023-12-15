/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const inMs = n * 1000;
    console.log("Waiting for " + n + " seconds...")
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, inMs);
    });
}

module.exports = wait;
