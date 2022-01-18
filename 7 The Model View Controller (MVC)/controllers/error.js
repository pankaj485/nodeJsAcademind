exports.get404 = (req, res, next) => {
	const { path } = req;
	// res.sendFile(path.join(rootDir, "views", "404.html"));
	res.render("404", { docTitle: "404 Not Found", path: path });
};
