const db = require('../models/database')
const fs = require('fs');

function initMigrationsTable() {
    console.log('migration table init starting');
    
    db.exec(
        `CREATE TABLE IF NOT EXISTS schema_migrations(
        version TEXT NOT NULL PRIMARY KEY,
        timestamp TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );`
    );
    console.log('Migration table created!');
};

initMigrationsTable()

const migrationFiles = fs.readdirSync('./migrations')
migrationFiles.sort()
console.log(`Found migration files: ${migrationFiles}`)

const completedMigrations = db.prepare('SELECT version FROM schema_migrations').all();
console.log(`Completed migrations: ${completedMigrations}`)

