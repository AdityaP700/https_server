"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
// Create the server
var server = net.createServer(function (socket) {
    console.log("New Connection Established");
    // Handle the 'data' event (when a client sends a request)
    socket.on("data", function (data) {
        console.log("Received data: ".concat(data));
    });
    // Handle the 'close' event (when a client disconnects)
    socket.on("close", function () {
        console.log("Connection closed");
    });
    // Handle errors
    socket.on("error", function (err) {
        console.log("Socket error: ".concat(err.message));
    });
});
// Log a message to confirm the server is running
console.log("Logs from your program will appear here!");
// Start the server on port 4221
server.listen(4221, "localhost", function () {
    console.log("TCP server is listening on Port 4221");
});
// Handle server-level errors
server.on("error", function (err) {
    console.log("Server error: ".concat(err.message));
});
