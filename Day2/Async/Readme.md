# Asynchronous Execution with fs Library

The `fs` module in Node.js provides an asynchronous API for working with the file system. Asynchronous operations allow the program to continue executing other tasks while waiting for file operations to complete. This can improve overall performance and responsiveness of your applications.

## Asynchronous Methods

The `fs` module provides several asynchronous methods for file system operations. Here are some commonly used methods:

- `fs.readFile(path, options, callback)`: Reads the contents of a file asynchronously and calls the provided `callback` function with the data or an error.
- `fs.writeFile(file, data, options, callback)`: Writes data to a file asynchronously and calls the `callback` function with an error if any occurred.
- `fs.appendFile(file, data, options, callback)`: Appends data to a file asynchronously and calls the `callback` function with an error if any occurred.
- `fs.unlink(path, callback)`: Deletes a file asynchronously and calls the `callback` function with an error if any occurred.

## Working with Asynchronous Methods

When working with asynchronous methods in the `fs` module, it's essential to provide a callback function that handles the result or error after the operation is complete. The callback function follows the Node.js convention of using the `(err, data)` pattern, where the first parameter is an error object (if any occurred), and the second parameter contains the result.

Here's an example of reading a file asynchronously using the `fs.readFile` method:

```javascript
const fs = require('fs');

fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('File content:', data);
});
```

> For better understaning of working in asynchronous file please refer to [index.js](../Async/index.js)

---

## Explainantion of in Index.js file

The code in the index.js file is executed asynchronously and hence will be giving error for the first execution, butwill work seamlessly after that.
The reason behind this can be understood after examining the output of second execution. Upon executing for the 2nd time we get the following output:
```OUTPUT
File Deleted
testFile2 File Created
File Created
File updated
```
While closely examining the code we find that the delete function should be executed at the end, but in output we see that it has finished it's execution at first. So we can conclude that since in **Asynchronous mode** all the functions are executed simultanously, the [unlink](#asynchronous-methods) method finishes it's execution faster than others and hence we get error for the first execution of index.js file in asynchronous mode. 