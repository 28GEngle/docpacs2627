const database = require("./database");

function createEntry(value) {
    database.prepare(
        "INSERT INTO entries VALUES (?, DATETIME('now'))"
    ).run(value)
}

function getAllEntries() {
    entries = database.prepare(
        "SELECT * FROM entries"
    ).get()

    entries.forEach(element => {
        console.log(element.value)
    });
}

module.exports = { createEntry, getAllEntries };