require('dotenv').config();
let express = require('express');
const path = require('path');
const logRequest = require('./utils/requestLogger.js');
const formRoutes = require('./routes/formRoutes.js');
const parameterRoutes = require('./routes/parameterRoutes.js');
const pageRoutes = require('./routes/pageRoutes.js');

const app = express();
const port = process.env.PORT;
const appName = process.env.APP_NAME;

app.use(logRequest); 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(pageRoutes); //currently contain controller logic
app.use(formRoutes); //currently contain controller logic
app.use(parameterRoutes); //currently contain controller logic

app.use((req, res, next) => {
  res.status(404).send("Sorry, that file doesn't exist!");
});

app.listen(port, () => { //application setup
    console.log("APP_NAME is " + appName);
    console.log("PORT is " + port);
    console.log("URL is localhost:" + port);
});