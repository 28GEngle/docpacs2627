const database = require("../models/database");

database.prepare(`
    INSERT INTO schema_migrations (migration_name, applied_date)
    VALUES (?, ?);    
`).run('002_add_user_profile_fields.js',Date())

database.close()