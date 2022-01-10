const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// using body parser.
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
	res.send(
		'<h1> Add product</h1>  <form action="/products" method="POST"><input type="text" name="product"  /><button>submit</button></form>'
	);
});

//  as app.use() will work for both get and post method, adding a route for the post request
app.post("/products", (req, res, next) => {
	console.log(req.body);
	// unlinke core node, this method will auto redirect to the route without setting headers and status code
	res.redirect("/");
});

app.use("/", (req, res, next) => {
	res.send(` </h1>  <h1> Home Page</h1>`);
});

app.listen(3000);
