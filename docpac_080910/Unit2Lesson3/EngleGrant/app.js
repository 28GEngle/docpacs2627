const express = require("express");
const path = require("path");
const requestLogger = require("./utils/requestLogger.js");
const env = require("dotenv").config();

const app = express();

app.use(requestLogger) // MIDDLEWARE
app.use(express.static("public")) // MIDDLEWARE
app.use(express.json()); // MIDDLEWARE
app.use(express.urlencoded({ extended: true })); // MIDDLEWARE

const PORT = process.env.PORT;

const options = {
    root: path.join(__dirname)
}

app.get("/",(req, res) => { // ROUTE HANDLER
    res.sendFile("public/index.html", options, (err) => {})
});

app.get("/form",(req, res) => { // ROUTE HANDLER
    res.sendFile("public/form.html", options, (err) => {})
});

app.get("/query",(req,res) => {  // ROUTE HANDLER
    data = req.query;

    message = data.message;

    if (!message) {
        res.status(400)
        res.end("Input invalid. Ensure you have typed a message in before submitting.");
        return;
    };

    res.send(data);
})

app.get("/urlparams",(req,res) => { // ROUTE HANDLER
    res.end("Add a parameter to the URL to return it.");
});

app.get("/urlparams/:param",(req,res) => { // ROUTE HANDLER
    res.end(`Inputted parameter: ${req.params.param}`);
    res.send();
});

app.post("/form",(req,res) => {  // ROUTE HANDLER
    data = req.body;

    username = data.username;
    password = data.password;

    if (
        !validate(username) ||
        !validate(password,0,5)
    ) {
        res.status(400)
        res.end("Input invalid. Ensure all fields have been filled in correctly before submitting.");
        return;
    };

    res.send(data);
});

app.use("",(req,res) => { // ROUTE HANDLER
    res.status(404)
    res.end("No resource found.")
});

function validate(input,minLength=0,maxLength=0) {
    if (!input || input == "") {
        return false;
    } else {
        if (minLength == 0 && maxLength == 0) {
            return true;
        } else {
            if (input.length >= minLength && input.length <= maxLength) {
                return true;
            };
        };
    };
};

app.listen(PORT,"localhost", () => { // APPLICATION SETUP
    console.log(`listening on port ${PORT}`)
});