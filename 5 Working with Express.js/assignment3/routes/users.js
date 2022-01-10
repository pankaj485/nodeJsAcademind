// importing core packages
const express = require("express");
const router = express.Router();
const path = require("path");

// imporiting root directory as utility function
const rootDir = require("../util/root");
console.log(rootDir);

// route for /users, get
router.get("/users", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "users.html"));
});

// exporting the router
module.exports = router;
