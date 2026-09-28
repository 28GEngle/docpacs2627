const http = require("http");
const express = require("express");
const fs = require("fs");
const env = require("dotenv").config()

const app = express();

app.use(express.static("public")) // Only allow external access to the files located in /public
app.use(express.json()); // Allows files to use json middleware
app.use(express.urlencoded({ extended: true })); // Lets files use urlencoded middleware

const PORT = process.env.PORT;

app.get("/",(req, res) => {
    fs.readFile("public/index.html",(err,data) => {
        res.end(data);
    })
});

app.get("/form",(req, res) => {
    fs.readFile("public/form.html",(err,data) => {
        res.end(data);
    })
});

app.get("/query",(req,res) => {
    data = req.query;

    message = data.message

    if (!message) {
        res.status(400)
        res.end("Input invalid. Ensure you have typed a message in before submitting.");
        return;
    }

    res.send(data)
})

app.get("/urlparams",(req,res) => {
    res.end("Add a parameter to the URL to return it.")
})

app.get("/urlparams/:param",(req,res) => { // : makes the route of the path a variable that can be used in script for dynamicness
    res.end(`Inputted parameter: ${req.params.param}`)
    res.send()
})

app.post("/form",(req,res) => {
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
    }

    res.send(data);
});

app.use("",(req,res) => {
    res.status(404)
    res.end("No resource found.")
})

function validate(input,minLength=0,maxLength=0) { // returns true if valid.
    if (!input || input == "") {
        return false;
    } else {
        if (minLength == 0 && maxLength == 0) {
            return true;
        } else {
            if (input.length >= minLength && input.length <= maxLength) {
                return true;
            }
        }
    }
}

app.listen(PORT,"localhost", () => {
    console.log(`listening on port ${PORT}`)
});