const express = require('express');
const path = require('path');

const form = express.Router()

form.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/form.html'));
});

form.post('/form', (req, res) => {
    const submission = req.body.input;

    if (!submission || submission.trim === '') {
        res.status(400).send(`
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="/css/style.css">
</head>

<body>
    <h1 class='element'> 400 ERROR: PLEASE USE CORRECT FORMAT OR ENTER A VALID SUBMISSION</h1>
</body>

</html>`);
    } else {
        console.log('Submission recieved!');
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
        
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="/css/style.css">
</head>

<body>
    <h1 class='element'> You answered: ${submission}! :D </h1>
</body>

</html>`);

    };

});


module.exports = form;