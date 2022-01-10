const express = require("express");

const app = express();

// we use app.use("<route>", (<callbackFunctions>)) for managing routes

// checks if the site starts with "/about"
app.use("/about", (req, res, next) => {
	console.log("about route kicked !");
	res.send("<h2>hello from about route</h2>");
});

// checks if the site starts with "/about"
// if "/" will be used in top then, while executing the code, it will not check the other routes
// since all other routes are started from "/" and it always runs default route only since it verifies the "/"
app.use("/", (req, res, next) => {
	console.log("home route kicked !");
	res.send("<h2>hello from home route</h2>");
});

app.listen(3000);
