const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
	res.send(
		'<h1> Add product</h1>  <form action="/admin/products" method="POST"><input type="text" name="product"  /><button>submit</button></form>'
	);
});

// /admin/add-product => POST
//  as app.use() will work for both get and post method, adding a route for the post request only
router.post("/products", (req, res, next) => {
	console.log(req.body);
	// unlinke core node, this method will auto redirect to the route without setting headers and status code
	res.redirect("/");
});

module.exports = router;
