const db = require('../models/database')
const fs = require('fs');
const path = require('path')

function initMigrationsTable() {
    console.log('migration table init starting');

    db.exec(
        `CREATE TABLE IF NOT EXISTS schema_migrations(
        name TEXT NOT NULL PRIMARY KEY,
        timestamp TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );`
    );
    console.log('Migration table created!');
};

initMigrationsTable();

const migrationFiles = fs.readdirSync('./migrations');
migrationFiles.sort();
console.log(`Found migration files: ${migrationFiles}`);

const completedMigrations = db.prepare('SELECT name FROM schema_migrations').all();
console.log(`Completed migrations: ${completedMigrations}`);

for (const pending of migrationFiles) {
    const migrationPath = path.join('..', 'migrations', pending)
    console.log(`Pending jawns: ${migrationPath}`);
    const migration = require(migrationPath);
    
    if (completedMigrations.some((element) => {
        if (element.name === migration.migName) {
            return true
        };
    })
    ) { continue };
    
    if (migration.up(db) === false){
        migration.down(db);
        console.log('Uh oh! Something went wrong! Migration bugging!')
        return
    }
    
    db.prepare(
        `INSERT INTO schema_migrations (name)
        VALUES (?)`
    ).run(migration.migName)
    console.log('Completed! Yahoo!')
    
};

db.close()

