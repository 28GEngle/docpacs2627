const express = require("express");
const entryModel = require("../models/entryModel");

const router = express.Router();

router.get("/database", (req,res) => {
    res.end(entryModel.get_entries())
})

router.post("/database", (req,res) => {
    user = req.body.user
    password = req.body.password

    create_entry(entryModel.create_entry(user,password))
    res.end(`created entry with:\nUsername: ${user}\nPassword: ${password}`)
})

module.exports = router