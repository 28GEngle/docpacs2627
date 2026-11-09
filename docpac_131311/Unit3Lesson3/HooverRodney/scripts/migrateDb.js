const db = require('../models/database.js');

db.exec(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
    migration_name TEXT PRIMARY key,
    date_applied TEXT DEFAULT CURRENT_TIMESTAMP
    );
`);