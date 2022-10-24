const data = require("./data.js");

data.eventEmitter.on("cansat_received_datapoint", (datapoint) => {
    console.log(datapoint);
});
