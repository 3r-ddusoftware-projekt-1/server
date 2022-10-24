const data = require("./data.js");
const ws = require('ws');

const websocket = new ws.Server({ port: 8080 });

let sockets = [];

websocket.on("connection", socket => {
	sockets.push(socket);
});

data.eventEmitter.on("cansat_received_datapoint", (datapoint) => {
    for (const socket of sockets) {
        console.log("Sending...");
        socket.send(JSON.stringify(datapoint));
    }
});
