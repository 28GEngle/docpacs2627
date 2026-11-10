const appDb = require("../models/database");

function up() {
    var fail = false;
    appDb.exec(`BEGIN TRANSACTION;`)

    try {
        appDb.exec(`ALTER TABLE users ADD COLUMN display_name TEXT`)
        appDb.exec(`ALTER TABLE users ADD COLUMN updated_at DATETIME`)
        appDb.exec(`ALTER TABLE users ADD COLUMN is_active BOOLEAN NOT NULL`)
    } catch {
        fail = true
        appDb.exec(`ROLLBACK;`)
    }
    if (!fail) {
        appDb.exec(`COMMIT;`)
        console.log("Added display_name, update_at, and is_active columns")
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