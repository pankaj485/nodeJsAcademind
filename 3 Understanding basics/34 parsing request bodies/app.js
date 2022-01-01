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
		res.write("	<h1>hello from homepage</h1>");
		res.write(
			'	<form method="POST" action="/message">	<input type="text" name="message" /> <button>submit</button> </form>'
		);
		res.write("</body>");
		// sending the response back to client
		return res.end();
	}

	// handling operatinos for "/message" route and POST method
	if (url === "/message" && method === "POST") {
		// creating an arry to store data we get from client side
		const body = [];

		// firing method whenever new data chunk is detected
		req.on("data", (dataChunkRecived) => {
			// printing recived data chunk
			console.log(dataChunkRecived);

			// reading new data stream and pushing it to data array
			body.push(dataChunkRecived);
		});

		// firing method whenever incoming data is parsed or incmoing request is done
		// ps: req.on("end") must be used whenever req.on("data") is used
		req.on("end", () => {
			// converting the buffer value we have got into string which is actually workable
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);

			// we get the data as key value as defined in client side. In our case, we had name="message" in our input form in "/"
			// splitting the key value pair from "=" and accessing 2nd index to get value of the recived message
			const userMessage = parsedBody.split("=")[1];
			console.log("usermessage", userMessage);

			// writing into the file when buffer is ready
			// create message.txt file and adding text content recived from form into it
			fs.writeFileSync("message.txt", userMessage);
		});

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
