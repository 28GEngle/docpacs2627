const database = require("./database");

function createUser(username,email,password) {

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