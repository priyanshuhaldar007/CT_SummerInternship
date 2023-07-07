# CRUD using File System
This README provides an explanation of the given JavaScript code, which demonstrates performing CRUD operations on a JSON file using synchronous methods provided by the fs (file system) module.

## Code Explanation
```javascript
const fs = require("fs");
const filePath = "db.json";
```
The code starts by importing the `fs` module, which is a built-in Node.js module for working with the file system. It also defines the file path for the JSON file (`db.json`) that will be used for storing and retrieving data.

```javascript
function getData() {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        // Error handling for different scenarios
        if (err.message.includes("Unexpected end of JSON input")) {
            console.log("DB is empty, Please enter some data to read");
            return [];
        } else if (err.message.includes("no such file or directory")) {
            console.log("There is an error in the filePath of db");
        } else {
            console.log(err.message);
        }
    }
}
```
The `getData` function is defined to read and parse the JSON data from the file. It uses the `fs.readFileSync()` method to read the contents of the file synchronously. If the file exists and contains valid JSON data, it is parsed and returned. If any error occurs, different error scenarios are handled and appropriate messages are logged to the console.

```javascript
function writeData(data) {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(filePath, jsonData, "utf8");
    } catch (err) {
        console.error("Error writing data to file:", err);
    }
}
```
The `writeData` function is defined to write JSON data to the file. It takes the data to be written as an argument and converts it to a JSON string using `JSON.stringify()`. It then uses the `fs.writeFileSync()` method to write the JSON string to the file synchronously. If any error occurs during the write operation, an error message is logged to the console.

```javascript
function addData(item) {
    const data = getData();
    let flag = false;
    data.map((ele) => {
        if (ele.id === item.id) {
            flag = true;
        }
    });
    if (!flag) {
        data.push(item);
        writeData(data);
    } else {
        console.log("Data with the same id already exists");
        return;
    }
}

function updateData(dataId, updatedItem) {
    const allData = getData();
    const dataIndex = allData.findIndex((item) => item.id === dataId);
    if (dataIndex !== -1) {
        allData[dataIndex] = { ...allData[dataIndex], ...updatedItem };
        writeData(allData);
        console.log("Data updated successfully");
    } else {
        console.log("Data not found");
    }
}

function deleteData(itemId) {
    const data = getData();
    const updatedData = data.filter((item) => item.id !== itemId);
    if (updatedData.length < data.length) {
        writeData(updatedData);
        console.log("Data deleted successfully");
    } else {
        console.log("Data not found");
    }
}
```
The code defines three functions: `addData`, `updateData`, and `deleteData`. These functions perform the basic CRUD operations on the JSON file.

- `addData` function adds a new item to the JSON file by first retrieving the existing data using `getData`, checking if an item with the same ID already exists, and then either pushing the new item to the data array and writing it back to the file using `writeData`, or logging a message if an item with the same ID exists.

- `updateData` function updates an existing item in the JSON file by retrieving all the data using `getData`, finding the index of the item to be updated, updating the item's properties with the provided `updatedItem`, and then writing the updated data back to the file using `writeData`.

- `deleteData` function removes an item from the JSON file by retrieving the data using `getData`, filtering out the item with the specified `itemId`, writing the updated data back to the file using `writeData`, and logging a success message if the item was found and deleted.

```javascript
addData({ id: 1, name: "Data 1", body: "object1" });
addData({ id: 2, name: "Data 2", body: "object2" });
console.log(getData());

updateData(1, { name: "Updated Data 1" });
console.log(getData());

deleteData(2);
console.log(getData());
```
The code demonstrates the usage of the defined functions. It adds two items to the JSON file using `addData`, retrieves and logs the data using `getData`, updates an item using `updateData`, retrieves and logs the updated data, deletes an item using `deleteData`, and retrieves and logs the final data after the deletion.

## Running the Code
To run the code, make sure you have Node.js installed on your machine. Save the code in a file with a `.js` extension, for example, `app.js`. Also, create an empty file named `db.json` in the same directory. Then, open a terminal or command prompt, navigate to the directory where the file is located, and execute the following command:
```bash
node app.js
```

If everything is set up correctly, you should see the data being added, updated, and deleted, along with the corresponding log messages indicating the success of each operation. You can also observe the changes in the db.json file.




