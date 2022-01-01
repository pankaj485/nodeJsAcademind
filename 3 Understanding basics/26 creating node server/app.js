// importing required module to create server
const http = require("http");

// createServer method comes from http module of node
const server = http.createServer((req, res) => {
	// printing the request done to the server
	console.log(req);
});

// adding a port to the listen while creating server
server.listen(3000);
