// importing required module to create server
const http = require("http");

// custom modules
const routes = require("./routes");

// createServer method comes from http module of node
const server = http.createServer(routes);

// adding a port to the listen while creating server
server.listen(3000);
