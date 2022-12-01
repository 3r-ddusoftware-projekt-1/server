const fs = require("fs");
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
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
    console.log("hi");
    pool.query(
        "CREATE TABLE IF NOT EXISTS datapoints (timestamp bigint, altitude float, temperature float, pressure float)"
    );
}

async function insert(datapoint) {
    eventEmitter.emit('cansat_received_datapoint', datapoint);
    const res = await pool.query(
        "INSERT INTO datapoints(timestamp, altitude, temperature, pressure) VALUES ($1, $2, $3, $4)",
        [datapoint.timestamp, datapoint.altitude,datapoint.temperature, datapoint.pressure]
    );
    return res;
}

async function get_all() {
    const res = await pool.query("SELECT * FROM datapoints");
    return res.rows;
}

init();

module.exports = {insert, get_all, eventEmitter};
