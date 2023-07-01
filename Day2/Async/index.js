// using file system in node JS asynchronous mode
// Asynchronous Mode:- the control doesn't wait for the process to execute and continues execution of next function

// importing fs library
const fs = require('fs');

// Create a file and add sample text to it
fs.writeFile('test.txt', 'Hello! This is my first file', (err) => {
  if (err) throw err;
  console.log('File Created');
});

// Append additional text to an existing file
fs.appendFile('test.txt', '\nThis is an added statement', (err) => {
  if (err) throw err;
  console.log('File updated');
});


// creating testFile2.txt to be deleted
fs.writeFile('testFile2.txt', 'Hello! This is testFile2', (err) => {
    if (err) throw err;
    console.log('testFile2 File Created');
  });
// Delete a specific file
fs.unlink('testFile2.txt', (err) => {
  if (err) throw err;
  console.log('File Deleted');
});

/*
OUTPUT:-
  File Deleted
  testFile2 File Created
  File Created
  File updated
*/