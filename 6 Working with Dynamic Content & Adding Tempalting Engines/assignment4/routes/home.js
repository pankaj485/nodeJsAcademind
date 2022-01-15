const express = require("express");
const path = require("path");
const rootDir = require("../util/rootDir");

const router = express.Router();

const allUserData = [];

router.get("/", (req, res, next) => {
	res.render("home", { docTitle: "Home Page", path: "/", inHomePage: true });
});

router.post("/send-data", (req, res, next) => {
	const { username, email } = req.body;

	const newData = {
		username: username,
		email: email,
	};

	if (newData.username.length > 0 && newData.email.length > 0) {
		allUserData.push(newData);
	}

	// console.log(allUserData);

	res.redirect("/users");
});

module.exports = { homeRoute: router, allUserData: allUserData };
