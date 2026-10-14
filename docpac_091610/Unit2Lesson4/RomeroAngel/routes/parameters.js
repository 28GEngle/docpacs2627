const express = require('express');
const router = express.Router();

router.get('/urlparams/:paramname', (req, res) => {
    if (!req.params.paramname || req.params.paramname.trim() === "") {
        res.status(400).send("You must send a valid parameter");
    } else {

        res.send(`The value of paramname is: ${req.params.paramname.trim()}`);
    }
});

router.post('/', (req, res) => {

});

module.exports = router;
