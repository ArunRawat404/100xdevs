function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}

function findSumTill100(n) {
    console.log(findSum(100));
}

// busy waiting 

function syncSleep() {
    let a = 1;
    for (let i = 0; i < 10000000; i++) {
        a += i;
    }
}

// syncSleep();
findSumTill100();

setTimeout(findSumTill100, 1000)
console.log("Hello World");


const fs = require("fs");

fs.readFile("text.txt", "utf-8", function (err, data) {
    console.log(data);
})

console.log("Hi there");