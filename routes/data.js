const { Pool } = require("pg");

// PostgreSQL "pool" to talk to database
const pool = new Pool({
    connectionString: "postgres://user:password@hostname/db"
});
