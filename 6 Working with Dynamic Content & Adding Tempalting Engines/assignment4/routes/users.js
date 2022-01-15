const express = require("express");
const path = require("path");
const rootDir = require("../util/rootDir");
const { allUserData } = require("./home");

const router = express.Router();

router.get("/users", (req, res, next) => {
	const usernames = [];
	const emails = [];

	allUserData.forEach((data) => {
		usernames.push(data.username);
		emails.push(data.email);
	});

	res.render("users", {
		usernames: usernames,
		emails: emails,
		allUserData: allUserData,
		docTitle: "Users Page",
		path: "/users",
		inUsersPage: true,
		hasSomeData: allUserData.length > 0,
	});
	// console.log("all user data", allUserData);
	// console.log("usernames: ", usernames);
	// console.log("usernames: ", emails);
});

module.exports = router;
