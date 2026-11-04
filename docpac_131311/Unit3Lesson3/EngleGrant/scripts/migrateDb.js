/*
1: Open the appDb connection
2: Ensure a table called "migration-tracking" exists in app.db
3: Use fs module to read the "migrations" folder
4: Sort the contents of the "migrations" folder by name (001 first, 002 second, etc)
5: Retrieve the names of the completed migrations from app.db
6: Identify which migrations still need to be done based on what is in app.db
7: Run each of the migrations in order
8: Record successful migrations
9: Report what was changed/applied
10: Close database cleanly via appDb.close()

-- If no migrations pending, say database is up to date.
*/

const path = require("path");
const appDb = require("../models/database");
const fs = require("fs")

if (findMigrationTable()) {
    
} else {

}

function findMigrationTable() {
    return appDb.exec(`
        SELECT EXISTS (
            SELECT
                schema-migrations
            FROM
                sqlite_schema
            WHERE
                type='table' AND
                name='YourTableName'
        );    
    `)
}

function readPendingMigrations() {

}