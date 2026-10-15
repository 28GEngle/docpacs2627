database = require("./database");

function create_entry(user,password) {
    console.log(user)
    console.log(password)
    database.prepare(`INSERT INTO entries (user, password) VALUES (?, ?)`).run(user,password);
}

function get_entries() {
    statement = database.prepare(`SELECT id, user, password FROM entries`)
    console.log(statement.all());
}

module.exports = create_entry, get_entries;