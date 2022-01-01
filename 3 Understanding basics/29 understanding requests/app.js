// importing required module to create server
const http = require("http");

// createServer method comes from http module of node
const server = http.createServer((req, res) => {
	// printing the request done to the server
	const { url, headers, method } = req;

	console.log("url: ", url);
	console.log("========================");
	console.log("headers: ", headers);
	console.log("========================");
	console.log("method: ", method);
	console.log("========================");
});

// adding a port to the listen while creating server
server.listen(3000);
