// importing required module to create server
const http = require("http");
const fs = require("fs");

// createServer method comes from http module of node
const server = http.createServer((req, res) => {
	const { url, method } = req;

	// setting Content-Type header as text/html
	res.setHeader("Content-Type", "text/html");

	if (url === "/") {
		// sending the content response on route "/"
		res.write("<head>");
		res.write("	<title>Document</title>");
		res.write("</head>");
		res.write("<body>");
		res.write("	<h1>hello from other page</h1>");
		res.write(
			'	<form method="POST" action="/message">	<input type="text" name="message" /> <button>submit</button> </form>'
		);
		res.write("</body>");
		// sending the response back to client
		return res.end();
	}

	// handling operatinos for "/message" route and POST method
	if (url === "/message" && method === "POST") {
		// create message.txt file and adding text content to it
		fs.writeFileSync("message.txt", "Your message is sent <3");

		// setting statuscode after submission
		// to set the location header, statusCode has to be served with 3XX status response
		res.statusCode = 302;

		// setting header to redirect after submission
		res.setHeader("Location", "/hjkfd");

		return res.end();
	}

	// sending the content response on route other than "/"
	res.write("<head>");
	res.write("	<title>Document</title>");
	res.write("</head>");
	res.write("<body>");
	res.write("	<h1>hello from random page</h1>");
	res.write("</body>");

	// sending the response back to client
	res.end();
});

// adding a port to the listen while creating server
server.listen(3000);
