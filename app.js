const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const data = require("./data.js"); // Load js to insert and get data from db
const api = require("./routes/api.js");
const evtest = require("./evtest.js");
const bodyParser = require("body-parser");

data.insert({ timestamp: 17, altitude: 6, temperature: 45, pressure: 10 }).then(
    () => {
        data.get_all().then((data) => console.log(data));
    }
);

express()
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(express.static(path.join(__dirname, "public"))) // Make files in public folder available
    .use("/api", api)
    .listen(PORT, () => console.log(`Listening on ${PORT}`)); // Start server
