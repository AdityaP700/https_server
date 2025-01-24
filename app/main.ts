import * as net from "net";

// Create the server
const server = net.createServer((socket) => {
  console.log("New Connection Established");

  socket.on("data", (data) => {
    console.log(`Received data: ${data}`);
  });

  socket.write(Buffer.from("HTTP/1.1 200 OK\r\n\r\n"));
  socket.end();

  socket.on("error", (err) => {
    console.log(`Socket error: ${err.message}`);
  });
});

console.log("Logs from your program will appear here!");

server.listen(4221, "localhost", () => {
  console.log("TCP server is listening on Port 4221");
});

server.on("error", (err) => {
  console.log(`Server error: ${err.message}`);
});
