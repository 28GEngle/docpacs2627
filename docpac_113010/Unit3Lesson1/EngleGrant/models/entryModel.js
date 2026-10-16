database = require("./databaseRetrieve");

function create_entry(user, password) {
    console.log(user)
    console.log(password)
    database
        .prepare(`INSERT INTO entries (user, password) VALUES (?, ?)`)
        .run(user, password);
}

function get_entries(chunk, offset = 0) {
    out = database
        .prepare(`SELECT id, user, password FROM entries LIMIT ? OFFSET ?`)
        .all(chunk, offset);

    out.forEach(row => {
        console.log(row.user)
        console.log(row.password)
    });
}

module.exports = { create_entry, get_entries };