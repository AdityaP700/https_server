import * as net from "net";

// Create the server
const server = net.createServer((socket) => {
  console.log("New Connection Established");

  socket.on("data", (data) => {
    console.log(`Received data: ${data.toString()}`);
    const request = data.toString();
    const urlPath = request.split(" ")[1];

    // Determine the response based on the URL path
    const response = urlPath === '/' 
      ? 'HTTP/1.1 200 OK\r\n\r\n' 
      : 'HTTP/1.1 404 Not Found\r\n\r\n';

    socket.write(response);  // Send the response
    socket.end();  // End the connection
  });

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
