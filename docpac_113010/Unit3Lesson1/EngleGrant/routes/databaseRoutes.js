const express = require("express");
const entryModel = require("../models/entryModel");

const router = express.Router();

router.get("/database", (req,res) => {
    entryModel.get_entries(5)
    res.render("database", {pageTitle: "database"})
})

router.post("/database", (req,res) => {
    user = req.body.user
    password = req.body.password

    entryModel.create_entry(user,password);
    res.end(`created entry with:\nUsername: ${user}\nPassword: ${password}`)
})

module.exports = router