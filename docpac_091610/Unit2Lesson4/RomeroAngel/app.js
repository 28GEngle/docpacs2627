const express = require('express');
const requestLogger = require('./utils/requestLogger.js');
const formRouter = require('./routes/formRoutes');
const parameterRouter = require('./routes/parametersRoutes');
const pageRouter = require('./routes/pageRoutes');
const path = require('path');
const { get } = require('http');
const app = express();
require('dotenv').config();
console.log(process.env.PORT);
console.log(process.env.APP_NAME)
const port = process.env.PORT;
const apiKey = process.env.API_KEY;

app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(express.static('public'));
app.use(formRouter);
app.use(parameterRouter);
app.use(pageRouter);

//req.query: This is a string that has data after "?", this also nice and visible in the URL while being great for filtering and search terms.
//req.params: Used for dynamic routing, matching values and can access a captured data using req.params.id

app.use((req, res) => {
    res.status(404).send('404 Page not found');
});


app.listen(port, () => {
    console.log(`${process.env.APP_NAME} is running on http://localhost:${port}`);
});

console.log("Hi again");
console.log("1990");
console.log("5 * 2 = 10");
console.log("Score = 100");
console.log("Hello World");