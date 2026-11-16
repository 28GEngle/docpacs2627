const database = require("./database");

function createUser(username,email,password) {
    if (!usernameToUser(username) && !emailToUser(email)) {
        user = database.prepare(
            `INSERT INTO users (user, email, password, display_name, is_active, creation_date, updated_at)
            VALUES (?, ?, ?, ?, true, DATETIME(),DATETIME())`
        ).run(username, email, password, username)
        return user
    } else {
        console.log("duplicate username or email")
        return false
    }
}

function usernameToUser(displayName) {
    return database.prepare("SELECT user FROM users WHERE display_name = ? LIMIT 1;").get(displayName)
}

function emailToUser(email) {
    return database.prepare("SELECT user FROM users WHERE email = ? LIMIT 1;").get(email)
}

function userIdToUser(id) {
    return database.prepare("SELECT user FROM users WHERE id = ? LIMIT 1;").get(id)
}

module.exports = { createUser, usernameToUser, emailToUser, userIdToUser }