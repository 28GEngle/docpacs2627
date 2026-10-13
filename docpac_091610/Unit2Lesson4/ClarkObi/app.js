const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const { time } = require('console');
const requestLogger=require('./utils/requestLogger');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(requestLogger);

app.listen(process.env.PORT, () => {
    console.log(process.env.APP)
    console.log(process.env.PORT)
    console.log('http://localhost:', process.env.PORT)
});
