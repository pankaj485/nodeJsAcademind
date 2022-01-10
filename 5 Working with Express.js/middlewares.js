// importing express
const express = require("express");

// creating express app
const app = express();

// ussing app.use() in order to use middlewares
app.use((req, res, next) => {
	console.log("first middleware here! ");

	// allows the request to continue to the middleware in line
	next();
});

app.use((req, res, next) => {
	// request comes here after first app.use()
	console.log("second middleware here! ");

	// res.send() sets Content-Type header itself by default for text/html. We can manunnaly set as res.setHeader("Content-Type", "text/html")
	// res.send() which comes with express is better alternative to res.write() used in node
	res.send("<h2> hello from second middleware </h2>");
});

// creating server with express app
app.listen(3000);
