require('dotenv').config();
const requestLogger = require('./utils/requestLogger');
const express = require('express')
const app = express();
const path = require('path');
app.use(requestLogger);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});
app.listen(process.env.PORT, 'localhost', () => {
    console.log(`${process.env.APP_NAME} is running at http://localhost:${process.env.PORT}/`);
});