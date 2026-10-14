const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (!req.query.message || req.query.message.trim() === "") {
        res.status(400).send('Please provide a message');
    } else {
        res.send(`Your message is: ${req.query.message.trim()}`);
    }
});

router.post('/', (req, res) => {

});

module.exports = router;
