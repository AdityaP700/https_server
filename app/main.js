"use strict";
exports.__esModule = true;
var net = require("net");
// Create the server
var server = net.createServer(function (socket) {
    console.log("New Connection Established");
    socket.on("data", function (data) {
        console.log("Received data: ".concat(data.toString()));
        var request = data.toString();
        var urlPath = request.split(" ")[1];
        // Determine the response based on the URL path
        var response = urlPath === '/'
            ? 'HTTP/1.1 200 OK\r\n\r\n'
            : 'HTTP/1.1 404 Not Found\r\n\r\n';
        socket.write(response); // Send the response
        socket.end(); // End the connection
    });
    socket.on("error", function (err) {
        console.log("Socket error: ".concat(err.message));
    });
});
console.log("Logs from your program will appear here!");
server.listen(4221, "localhost", function () {
    console.log("TCP server is listening on Port 4221");
});
server.on("error", function (err) {
    console.log("Server error: ".concat(err.message));
});
