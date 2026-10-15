const express = require("express");
const create_entry = require("../models/create_entry");
const get_entries = require("../models/get_entries");

const router = express.Router();

router.get("/database", (req,res) => {
    res.end(get_entries())
})

router.post("/database", (req,res) => {
    user = req.body.user
    password = req.body.password

    create_entry(user,password)
})

module.exports = router