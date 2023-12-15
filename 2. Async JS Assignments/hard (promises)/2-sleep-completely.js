/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let start = Date.now();
    console.log("Halting the js thread for " + milliseconds + " milliseconds...");

    // busy wait
    while (Date.now() - start <= milliseconds) { }
    return new Promise(function (resolve) {
        console.log(milliseconds + "have passed");
        resolve();
    });
}

module.exports = sleep;
