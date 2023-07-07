// using filesystem to perfom CRUD opration on a json file using synchronous method
const fs = require("fs");

// defining the db file
const filePath = "./LocalDB/db.json";

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
        return {response: 'Data added successfully'}
    } else {
        return {response:"data with same id already exists"};
    }
}

// Update operation - Update an existing item in the JSON file
function updateData(dataId, updatedItem) {
    const allData = getData();
    console.log(dataId, updatedItem);
    const dataIndex = allData.findIndex((item) => item.id === dataId);
    if (dataIndex !== -1) {
        allData[dataIndex] = { ...allData[dataIndex], ...updatedItem };
        writeData(allData);
        return {response:"Data updated successfully"};
    } else {
        return {response:"Data not found",input:[dataId, updatedItem]};
    }
}

// Delete operation - Remove an item from the JSON file
function deleteData(itemId) {
    const data = getData();
    const updatedData = data.filter((item) => item.id !== itemId);
    if (updatedData.length < data.length) {
        writeData(updatedData);
        return {response:"Data deleted successfully"};
    } else {
        return {response:"Data not found"};
    }
}

// Get specific data
function getOneData(itemId){
    const allData = getData();
    const dataIndex = allData.findIndex((item) => item.id === Number(itemId));
    if (dataIndex !== -1) {
        return {response:allData[dataIndex]};
    } else {
        return {response:"Data not found"};
    }
}

module.exports = { addData, getData, updateData, deleteData, getOneData };
