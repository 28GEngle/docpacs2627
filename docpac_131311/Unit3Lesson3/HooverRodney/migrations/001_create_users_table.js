// const db = require('../models/database.js');

db.exec(`
    CREATE TABLE IF NOT EXISTS entries (
    id INTEGER PRIMARY key AUTOINCREMENT,
    value TEXT NOT NULL,
    source TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
`);