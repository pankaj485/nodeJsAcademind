const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
//  as app.use() will work for both get and post method, adding a route for the post request only
router.post("/add-product", (req, res, next) => {
	console.log(req.body);
	// unlinke core node, this method will auto redirect to the route without setting headers and status code
	res.redirect("/");
});

module.exports = router;
