## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

### Solution

```js
const fs = require("fs");

function formatFile() {
	fs.readFile("test.txt", "utf-8", function (err, data) {
		if (err) throw err;
		const formattedData = data.replace(/\s+/g, " ");
		fs.writeFile("test.txt", formattedData, function (err) {
			if (err) throw err;
			console.log("The file has been saved!");
		});
	});
}

formatFile();
```
