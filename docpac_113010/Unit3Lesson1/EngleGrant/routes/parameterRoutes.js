const express = require("express");

const router = express.Router()

router.get("/urlparams",(req,res) => {
    res.render('error',{pageTitle: "Error", error: "Add a parameter to the URL to return it."});
});

router.get("/urlparams/:param",(req,res) => {
    res.end(`Inputted parameter: ${req.params.param}`);
    res.send();
});

module.exports = router;