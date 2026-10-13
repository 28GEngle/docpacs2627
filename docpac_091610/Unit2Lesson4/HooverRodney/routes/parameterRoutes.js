const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/query', (req, res) => {
    const message = req.query.message;
    if (message === null || message === "" || message === undefined) {
        res.status(400).send("Please provide a message parameter. Example: /query?message=YourMessage");
    } else {
        const trimmedMessage = message.trim();
        if (trimmedMessage === null || trimmedMessage === "") {
            res.status(400).send("Please provide a message parameter. Example: /query?message=YourMessage");
        } else {
            res.send(`<p>Your message is: ${trimmedMessage}</p>`);
        }
    }
})

router.get('/urlparams/:paramname', (req, res) => {
    const parameter = req.params.paramname;
    const trimmedParameter = parameter.trim();
    if (trimmedParameter === null || trimmedParameter === "") {
        res.status(400).send("Please provide a URL parameter. Example: '/urlparams/ ' <- your URL parameters go after this bit.");
    } else {
        res.send(`<p>Your query parameters are: ${trimmedParameter}</p>`);
    }
})

module.exports = router;