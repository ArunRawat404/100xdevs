// push()
function pushExample(arr, element) {
    console.log("Original Array:", arr);

    arr.push(element);
    console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
    console.log("Original Array:", arr);

    arr.pop();
    console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift()
function shiftExample(arr) {
    console.log("Original Array:", arr);

    arr.shift();
    console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift()
function unshiftExample(arr, element) {
    console.log("Original Array:", arr);

    arr.unshift(element);
    console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, ",", arr2);

    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach()
function forEachExample(arr) {
    console.log("Original Array:", arr);

    arr.forEach(function (item, index) {
        console.log(item, index);
    });
}

forEachExample([1, 2, 3]);

// arrow function
const sum = (a, b) => {
    console.log("Inside an arrow function");
    return a + b;
}

console.log(sum(1, 2));

// map()
// given an input array, give me back a new array in which every value is multiplied by 2. [1, 2, 3, 4, 5] -> [2, 4, 6, 8, 10]

const array = [1, 2, 3, 4, 5];

const newArray = array.map((item) => item * 2);
console.log(array, "After every value multiplied by 2 :", newArray);


// filter 
// given an input array, give me back all the even values from it, [1, 2, 3, 4, 5] -> [2, 4]

const evenArray = array.filter((item) => item % 2 == 0);
console.log(array, "After filtering out even values :", evenArray);


// Create a custom map function that takes 2 inputs an array, and a transformation callback/function and transform the array into a new one using the transformation function.

function mapCustom(array, transform) {
    let transformArray = [];
    for (let i = 0; i < array.length; i++) {
        transformArray.push(transform(array[i]));
    }
    return transformArray;
}

function squareFunction(num) {
    return num * num;
}

const transformArray = mapCustom([1, 2, 3, 4, 5], squareFunction);
console.log("After squaring each element", transformArray);