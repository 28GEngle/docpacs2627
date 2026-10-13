const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'form.html'));
})

router.post('/form', (req, res) => {
    const studentName = req.body.studentName;
    if (studentName === undefined) {
        res.status(400).send("You must provide a valid name! The current value is either missing or blank!");
    } else {
        const trimmedName = studentName.trim();
        if (trimmedName === null || trimmedName === "") {
            res.status(400).send("You must provide a valid name! The current value is either missing or blank!");
        } else {
            res.send(`<p>Student Name: ${trimmedName}</p>`);
        }
    }
})

module.exports = router;