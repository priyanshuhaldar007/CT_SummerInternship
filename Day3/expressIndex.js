// basic express server with simple APIs
const express = require("express"); // importing express library
const jwt = require("jsonwebtoken");
const {
    addData,
    getData,
    updateData,
    deleteData,
    getOneData,
} = require("./LocalDB/index");

const app = express(); // creating express server
app.use(express.json()); // for parsing the incoming input to JSON

// function to create JWT
const createToken = (id) => {
    return jwt.sign({ id }, "PriyanshuSecret", { expiresIn: 21600 });
};

// basic `/` route for home
app.get("/", (req, res) => {
    res.send({ message: "Get request completed" });
});

// to get all the data from `data` array
app.get("/data", (req, res) => {
    res.send(getData()).status(200);
});

// to add data to the `data` array
app.post("/data", (req, res) => {
    let UserIn = req.body;
    res.send(addData(UserIn));
});

// to find and update specific data by id
app.put("/data/:id", (req, res) => {
    let { id } = req.params;
    res.send(updateData(Number(id), req.body));
});

// to find and delete specific data by id
app.delete("/data/:id", (req, res) => {
    let { id } = req.params;
    res.send(deleteData(Number(id)));
});

// to get jwt token for entry based on id
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

// initiating express server
app.listen(5000, () => {
    console.log(`Server running on http://127.0.0.1:5000`);
});
