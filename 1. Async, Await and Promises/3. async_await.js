// Promise Syntax

function promiseFunction() {
    let promise = new Promise(function (resolve) {
        // do some async logic here
        resolve("Hi there!")
    });
    return promise;
}

promiseFunction().then(function (value) {
    console.log(value);
})


// Async Await Syntax

async function asyncAwaitFunction() {
    const value = await promiseFunction();
    console.log(value);
}

asyncAwaitFunction();