const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
	console.log(adminData.products);

	const products = adminData.products;

	// serving static html file
	// res.sendFile(path.join(rootDir, "views", "shop.html"));

	// serving pug file, i.e dynamic content is going to be added
	// we need to use res.render() method in order to serve the templating files
	// we have defined both type of templaing enging and view file location in app.js so we don't have to  define those  here
	// passing dynamic data to the pug, handlebars file to use form there
	res.render("shop", {
		hasProducts: products.length > 0,
		prods: products,
		docTitle: "shop",
		path: "/",
		activeShop: true,
		productCSS: true,
	});
});

module.exports = router;
