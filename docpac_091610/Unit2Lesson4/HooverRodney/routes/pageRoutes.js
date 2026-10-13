const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.send(`
        <h1>Form Page</h1>
        <p>A form for creating project admission applications.
        <a href="/form">Form Page</a>
    `);
})

module.exports = router;