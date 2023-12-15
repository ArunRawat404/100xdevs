## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

```js
const fs = require("fs");

const data = "This is added to file";

function writeFileFunction() {
	fs.writeFile("test.txt", data, function (err) {
		if (err) throw err;
		console.log("The file has been saved!");
	});
}

writeFileFunction();
```
