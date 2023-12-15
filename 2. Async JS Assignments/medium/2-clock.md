Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

### Solution

```js
// Create a terminal clock(HH:MM:SS)

function clock() {
	const time = new Date();
	const hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	console.log(`${hours}:${minutes}:${seconds}`);
}

// Run the clock function every 1 sec
setInterval(clock, 1000);
```

```js
// Create a terminal clock(HH:MM:SS AM/PM)

function clock() {
	const time = new Date();
	const dateTextInAmPm = time.toLocaleTimeString();
	console.log(dateTextInAmPm);
}

// Run the clock function every 1 sec
setInterval(clock, 1000);
```
