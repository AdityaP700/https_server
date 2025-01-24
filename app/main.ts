import * as net from "net";

// Create the server
const server = net.createServer((socket) => {
  console.log("New Connection Established");

  // Handle the 'data' event (when a client sends a request)
  socket.on("data", (data) => {
    console.log(`Received data: ${data}`);
  });

  // Handle the 'close' event (when a client disconnects)
  socket.on("close", () => {
    console.log("Connection closed");
  });

  // Handle errors
  socket.on("error", (err) => {
    console.log(`Socket error: ${err.message}`);
  });
});

// Log a message to confirm the server is running
console.log("Logs from your program will appear here!");

// Start the server on port 4221
server.listen(4221, "localhost", () => {
  console.log("TCP server is listening on Port 4221");
});

// Handle server-level errors
server.on("error", (err) => {
  console.log(`Server error: ${err.message}`);
});
