const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
	// res.sendFile(path.join(rootDir, "views", "add-product.html"));
	res.render("add-product", {
		docTitle: "Add Product",
		path: "/admin/add-product",
		formsCSS: true,
		activeAddProduct: true,
		productCSS: true,
	});
});

// /admin/add-product => POST
//  as app.use() will work for both get and post method, adding a route for the post request only
router.post("/add-product", (req, res, next) => {
	products.push({ title: req.body.title });
	console.log(req.body);
	// unlinke core node, this method will auto redirect to the route without setting headers and status code
	res.redirect("/");
});

exports.routes = router;
exports.products = products;
