const express = require("express");
const bodyParser = require("body-parser");

// importing the routing modules
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// using the routing modules
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// adding 404 page
// it works for all the unused routes above
app.use((req, res, next) => {
	res
		.status(404)
		.send(
			'<h1 style="background-color: red; text-align: center">404 page not found</h1>'
		);
});

app.listen(3000);
