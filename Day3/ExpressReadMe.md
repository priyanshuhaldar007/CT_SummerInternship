# Express Server
This README provides an explanation of the given code, which creates a basic Express server with simple APIs for performing CRUD operations on a data array and generating JSON Web Tokens (JWT) for user authentication.

## Code Explanation

```javascript
const express = require("express"); // importing express library
const jwt = require("jsonwebtoken");
const {
    addData,
    getData,
    updateData,
    deleteData,
    getOneData,
} = require("./LocalDB/index");
```
The code starts by importing the necessary modules: `express` and `jsonwebtoken`. It also imports various functions (`addData`, `getData`, `updateData`, `deleteData`, `getOneData`) from a local module (`LocalDB/index`) for data manipulation.

```javascript
const app = express(); // creating express server
app.use(express.json()); // for parsing the incoming input to JSON
```
The code creates an Express server instance by calling `express()`. The `express.json()` middleware is used to parse the incoming request body as JSON.

```javascript
const createToken = (id) => {
    return jwt.sign({ id }, "PriyanshuSecret", { expiresIn: 21600 });
};
```
The `createToken` function is defined to generate a JWT token using the `jsonwebtoken` module. It takes an `id` parameter and signs the payload with a secret key ("PriyanshuSecret") and an expiration time of 21600 seconds (6 hours).

```javascript
app.get("/", (req, res) => {
    res.send({ message: "Get request completed" });
});
```

This is a basic route handler for the root URL ("/"). When a GET request is made to the root URL, it sends a JSON response with a message "Get request completed".

```javascript
app.get("/data", (req, res) => {
    res.send(getData()).status(200);
});
```
This route handler responds to a GET request made to the "/data" URL. It calls the `getData` function from the local module and sends the retrieved data as a response with a status code of 200 (OK).

```javascript
app.post("/data", (req, res) => {
    let UserIn = req.body;
    res.send(addData(UserIn));
});
```
This route handler handles a POST request made to the "/data" URL. It extracts the request body (`req.body`), which is expected to be in JSON format, and passes it to the `addData` function. The response from `addData` is sent back as the response.


```javascript
app.put("/data/:id", (req, res) => {
    let { id } = req.params;
    res.send(updateData(Number(id), req.body));
});
```
This route handler handles a PUT request made to the "/data/:id" URL, where `:id` is a route parameter representing the ID of the data to be updated. It extracts the ID from the request parameters (`req.params`) and the updated data from the request body. It then calls the `updateData` function, passing the ID and updated data, and sends the response from `updateData` back as the response.

```javascript
app.delete("/data/:id", (req, res) => {
    let { id } = req.params;
    res.send(deleteData(Number(id)));
});
```
This route handler handles a DELETE request made to the "/data/:id" URL. It extracts the ID from the request parameters (`req.params`), calls the `deleteData` function with the ID, and sends the response from `deleteData` back as the response.

```javascript
app.get("/data/:id", (req, res) => {
    const { id } = req.params;
    let Response = getOneData(id);
    if (typeof Response.response === "string") res.send(Response.response);
    else {
        res.send({
            id: Number(id),
            name: Response.response.name,
            email: Response.response.email,
            token: createToken(Response.response.email),
        });
    }
});
```

This route handler handles a GET request made to the "/data/:id" URL. It extracts the ID from the request parameters (`req.params`). It calls the `getOneData` function, passing the ID, which retrieves the corresponding data from the data array. If the response from `getOneData` is a string, it sends the string as the response. Otherwise, it sends an object containing the ID, name, email, and a JWT token generated using the createToken function.

```javascript
app.listen(5000, () => {
    console.log(`Server running on http://127.0.0.1:5000`);
});
```
This code initiates the Express server by calling the `listen` method, which makes the server listen on port 5000. It also logs a message to the console indicating that the server is running and specifies the URL where it can be accessed.

## Running the Code
To run the code, make sure you have Node.js installed on your machine. Fork the repo and clone it on your local PC. Then, open a terminal or command prompt, navigate to the directory where the file is located, and execute the following command:
```bash
npm i
nodemon
```

If everything is set up correctly, you should see the message "`Server running on http://127.0.0.1:5000`" logged to the console. The server is now running and ready to handle HTTP requests to the defined routes and perform CRUD operations on the DB file.

> For detailed information about the working of `addData`, `getData`, `updateData`, `deleteData` and `getOneData` functions, head over to [Day2/LocalDB](../Day2/LocalDB/Readme.md).