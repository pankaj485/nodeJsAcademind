const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "shop.html"));
	// res.send(` </h1>  <h1> Home Page</h1>`);
});

module.exports = router;
