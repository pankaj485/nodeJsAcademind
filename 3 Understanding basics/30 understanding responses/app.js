// importing required module to create server
const http = require("http");

// createServer method comes from http module of node
const server = http.createServer((req, res) => {
	// setting Content-Type header as text/html
	res.setHeader("Content-Type", "text/html");

	// sending the content response
	res.write("<head>");
	res.write("	<title>Document</title>");
	res.write("</head>");
	res.write("<body>");
	res.write("	<h1>hello there</h1>");
	res.write("</body>");

	// res.end() is used when all response is made and when it's time to send it back to client
	res.end();
});

// adding a port to the listen while creating server
server.listen(3000);
