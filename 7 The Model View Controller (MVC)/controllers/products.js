// importing file associated with models
const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
	// rendering the template file and passing data to it
	res.render("add-product", {
		docTitle: "Add Product",
		path: "/admin/add-product",
		formsCSS: true,
		activeAddProduct: true,
		productCSS: true,
	});
};

exports.postAddProducts = (req, res, next) => {
	// create a new object
	const product = new Product(req.body.title);

	// push object into products array through save method defined in models=>product.js
	product.save();

	// unlinke core node, this method will auto redirect to the route without setting headers and status code
	res.redirect("/");
};

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		console.log("producted fetched: ", products);
		// rendering the template file and passing data to it
		res.render("shop", {
			hasProducts: products.length > 0,
			prods: products,
			docTitle: "shop",
			path: "/",
			activeShop: true,
			productCSS: true,
		});
	});
};
