// importing required module to create server
const http = require("http");

// createServer method comes from http module of node
const server = http.createServer((req, res) => {
	const { url } = req;

	// setting Content-Type header as text/html
	res.setHeader("Content-Type", "text/html");

	if (url === "/") {
		// sending the content response on route "/"
		res.write("<head>");
		res.write("	<title>Document</title>");
		res.write("</head>");
		res.write("<body>");
		res.write("	<h1>hello from homepage</h1>");
		res.write("</body>");

		// sending the response back to client
		// using return so that further code won't be executed
		return res.end();
	}

	// sending the content response on route other than "/"
	res.write("<head>");
	res.write("	<title>Document</title>");
	res.write("</head>");
	res.write("<body>");
	res.write("	<h1>hello from other page</h1>");
	res.write("</body>");

	// sending the response back to client
	res.end();
});

// adding a port to the listen while creating server
server.listen(3000);
