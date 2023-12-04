// Print all even numbers in an array

const numArray = [1, 2, 4, 100, 11, 13, 20];

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 == 0) {
        console.log(numArray[i]);
    }
}


// Print largest numbers in an array

largestNum = numArray[0];

for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > largestNum) {
        largestNum = numArray[i];
    }
}

console.log("Largest Number in array is " + largestNum);


// Print all the male people's first name given a user object 

// Array of objects
const users = [{
    firstName: "Arun",
    gender: "Male"
}, {
    firstName: "Priya",
    gender: "Female"
}, {
    firstName: "Aditya",
    gender: "Male"
}
]


for (let i = 0; i < users.length; i++) {
    if (users[i]["gender"] == "Male") {
        console.log(users[i]["firstName"]);
    }
}


// Reverse an array

const array = [1, 2, 3, 4, 5];
const reversArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversArray.push(array[i]);
}

console.log(reversArray);


// Callbacks

function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

const ans = sum(2, 5, displayResult);

// After 1 sec greet function will be called

function greet() {
    console.log("Hello World");
}

setTimeout(greet, 1000);