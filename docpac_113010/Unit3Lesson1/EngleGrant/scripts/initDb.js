const database = require("../models/database");

database.exec(`
    CREATE TABLE IF NOT EXISTS entries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        value TEXT NOT NULL,
        source TEXT NOT NULL,
        creation_date DATETIME 
    );
`)

database.close()