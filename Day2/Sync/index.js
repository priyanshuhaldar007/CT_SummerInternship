// Using file system in Node.js synchronous mode
// Synchronous Mode: The control waits for the process to complete before moving to the next function.

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

/*
OUTPUT:-
  File Created
  File updated
  testFile2 File Created
  File Deleted
*/
