const express = require("express");

const app = express();

// first middlware
app.use("/users", (req, res, next) => {
	console.log("first middleware up now ");
	res.send("<h1> first route up! </h1>");
});

// second middleware
app.use("/", (req, res, next) => {
	console.log("server is up ");
	res.send("<h1>second middleware up</h1> ");
	next();
});

app.listen(3000);
