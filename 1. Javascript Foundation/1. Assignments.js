// Create a counter in JS(counts down 30 to 0)

count = 30

let timer = setInterval(countDown, 1000);

function countDown() {
    if (count == -1) {
        clearInterval(timer);
    }
    else {
        console.log(count);
        count--;
    }
}


// Calculate the time it takes between a setTimeout call and the inner function actually running

// using performance.now()

function calculateTimePrecise() {

    const startTime = performance.now();
    setTimeout(function () {
        const endTime = performance.now();
        console.log(`The time it takes between a setTimeout call and the inner function ${endTime - startTime} milliseconds`);
    }, 1000);
}

calculateTimePrecise();


// Create a terminal clock(HH:MM:SS)

function clock() {
    const time = new Date();
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    console.log(`${hours}:${minutes}:${seconds}`)
}

// Run the clock function every 1 sec   
setInterval(clock, 1000)
