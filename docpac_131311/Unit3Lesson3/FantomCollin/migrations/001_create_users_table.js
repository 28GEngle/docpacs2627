const db = require('better-sqlite3')
const path = require('path')

db.exec(
    `CREATE TABEL IF NOT EXISTS schema_migrations(
        version INTEGER PRIMARY KEY
        timestamp TEXT DEFAULT CURRENT_TIMESTAMP
    )`
)