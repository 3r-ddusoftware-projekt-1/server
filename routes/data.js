const fs = require("fs");
const { Pool } = require("pg");

let connectionstring;
try {
    connectionstring = fs.readFileSync('connectionstring.txt', 'utf8');
} catch {
    throw new Error("Could not read 'connectionstring.txt'. Please make sure that the file exists and contains a postgresql connection string.");
}

// PostgreSQL "pool" to talk to database
const pool = new Pool({
    connectionString: connectionstring,
});

function init() {
    pool.query("CREATE TABLE IF NOT EXISTS datapoints (timestamp bigint, temperature float)");
}

async function insert(data_packet) {
    const res = await pool.query("INSERT INTO datapoints(timestamp, temperature) VALUES ($1, $2)", [data_packet.timestamp, data_packet.temperature]);
    return res;
}

init();

module.exports = {insert};
