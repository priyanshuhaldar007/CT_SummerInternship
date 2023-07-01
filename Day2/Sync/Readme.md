# Asynchronous Execution in the fs Library

The `fs` (File System) module in Node.js provides methods for working with files and directories. Many of these methods have both synchronous and asynchronous versions. In this README, we will focus on understanding asynchronous execution and how it applies to the `fs` library.

## Asynchronous Execution

Asynchronous execution allows the program to continue executing other tasks while waiting for I/O operations to complete. In the case of the `fs` library, asynchronous methods do not block the program's execution while performing file operations. Instead, they utilize callbacks or promises to handle the results of the operation once it completes.

The advantage of asynchronous execution is that it allows the program to be more efficient by not blocking other operations while waiting for potentially slow I/O operations to finish. It is particularly useful when working with large files or performing network operations.

## Understanding the Code Example given in [index.js](../Sync/index.js)

The code provided demonstrates the asynchronous mode of the `fs` library. Let's break it down and understand its functioning:

```javascript
// Importing fs library
const fs = require("fs");

// Create a file and add sample text to it
fs.writeFileSync("test.txt", "Hello! This is my first file");
console.log("File Created");

// Append additional text to an existing file
fs.appendFileSync("test.txt", "\nThis is an added statement");
console.log("File updated");

// Creating testFile2.txt to be deleted
fs.writeFileSync("testFile2.txt", "Hello! This is testFile2");
console.log("testFile2 File Created");

// Delete a specific file after 5 seconds
setTimeout(() => {
    fs.unlinkSync("testFile2.txt");
    console.log("File Deleted");
}, 5000);
```
The above code demonstrates the following asynchronous operations:

1. **Creating a file and adding sample text:** The `fs.writeFile` method is used to create a file named test.txt and add the text `"Hello! This is my first file"` to it. The provided callback function is executed once the operation completes, either successfully or with an error.

2. **Appending text to an existing file:** The `fs.appendFile` method is used to open the test.txt file and append the text `"This is an added statement"` to its contents. Similarly, a callback function is provided to handle the completion of the operation.

3. **Creating a file to be deleted:** The `fs.writeFile` method is used again to create another file named `testFile2.txt` with the content `"Hello! This is testFile2"`. The callback function is used to handle the result of the operation.

4. **Deleting a specific file:** The `fs.unlink` method is used to delete the `testFile2.txt` file. As with the previous operations, a callback function is provided to handle the result.

> For better understaning of working in asynchronous file please refer to [index.js](../Sync/index.js)

## Explainantion of in Index.js file

The code in the index.js file is executed synchronously and hence unlink in asynchronous mode will be giving desired result after execution.

The reason behind this can be understood after examining the output of execution. 
```OUTPUT
File Created
File updated
testFile2 File Created
File Deleted
```

While closely examining the code we find that all the functions are getting executed serially and next function starts execution only after the previous one has finished. So we can conclude that since in **Synchronous mode** all the functions are executed serially and one after another unlike in [Asynchronous mode](../Async).