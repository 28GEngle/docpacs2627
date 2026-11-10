const appDb = require("../models/database");

function up() {
    
    var fail = false;
    appDb.exec(`BEGIN TRANSACTION;`)

    try {
        appDb.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user TEXT NOT NULL UNIQUE,
                email TEXT NOT NULL,
                password TEXT NOT NULL,
                creation_date DATETIME
            );
        `)
    } catch {
        fail = true
        appDb.exec(`ROLLBACK;`)
    }
    if (!fail) {
        appDb.exec(`COMMIT;`)
        console.log("Created users table")
    }
    return true
}

function down() {
    var fail = false;
    appDb.exec(`BEGIN TRANSACTION;`)

    try {
        appDb.exec(`DROP TABLE IF NOT EXISTS users;`)
    } catch {
        fail = true
        appDb.exec(`ROLLBACK;`)
    }
    if (!fail) {
        appDb.exec(`COMMIT;`)
        console.log("Migration undone. Hope you saved your data! :)")
    }
    return true
}

module.exports = { up };