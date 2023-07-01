// using filesystem to perfom CRUD opration on a json file using synchronous method
const fs = require("fs");

// defining the db file
const filePath = "db.json";

// Read JSON data from file
function getData() {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        if (err.message.includes("Unexpected end of JSON input")) {
            console.log("DB is empty, Please enter some data to read");
            return [];
        } else if (err.message.includes("no such file or directory")) {
            console.log("There is error in filePath of db");
        } else {
            console.log(err.message);
        }
    }
}

// Write JSON data to file
function writeData(data) {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(filePath, jsonData, "utf8");
    } catch (err) {
        console.error("Error writing data to file:", err);
    }
}

// Create operation - Add new item to the JSON file
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
        console.log("data with same id already exists");
        return;
    }
}

// Update operation - Update an existing item in the JSON file
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

// Delete operation - Remove an item from the JSON file
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

addData({ id: 1, name: "Data 1" });
addData({ id: 2, name: "Data 2" });
console.log(getData());

updateData(1, { name: "Updated Data 1" });
console.log(getData());

deleteData(2);
console.log(getData());
