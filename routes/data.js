const { Pool } = require("pg");

// PostgreSQL "pool" to talk to database
const pool = new Pool({
    connectionString: "postgres://user:password@hostname/db"
});

async function query(query) {
    const client = await pool.connect();
    return await client.query(query);
}

module.exports = { pool, query };
