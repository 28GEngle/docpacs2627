const database = require("./database");

function createEntry(value, source) {
    database.prepare(
        "INSERT INTO entries VALUES (?, ?, ?, DATETIME('now'))"
    ).run(undefined, value, source)
}

function getAllEntries() {
    dbEntries = database.prepare(
        "SELECT * FROM entries"
    ).all()

    console.log(dbEntries)
}

module.exports = { createEntry, getAllEntries };