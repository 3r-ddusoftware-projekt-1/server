let socket = new WebSocket("ws://localhost:8080");


socket.onopen = function (e) {
    console.log("[ws] Opened websocket");
};

socket.onmessage = function (event) {
	console.log(`[ws] Received new data from server: ${event.data}`);
};

socket.onclose = function (event) {
	if (event.wasClean) {
		alert(`[ws] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
	} else {
		// e.g. server process killed or network down
		// event.code is usually 1006 in this case
		alert('[ws] Connection died');
	}
};

socket.onerror = function (error) {
	alert(`[ws] Error: ${error.message}`);
};
