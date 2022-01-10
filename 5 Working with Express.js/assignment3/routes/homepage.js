// importing core packages
const express = require("express");
const router = express.Router();
const path = require("path");

// imporiting root directory as utility function
const rootDir = require("../util/root");

// route for homepage, get
router.get("/", (req, res, next) => {
	// serving HTML static file
	res.sendFile(path.join(rootDir, "views", "index.html"));
});

// exporting the router
module.exports = router;
