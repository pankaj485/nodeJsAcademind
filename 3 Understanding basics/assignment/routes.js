const fs = require("fs");

const handleReques = (req, res) => {
	const { url, method } = req;

	res.setHeader("Content-Type", "text/html");

	if (url === "/") {
		res.write("    <body>");
		res.write("	<h1>Home Route </h1>");
		res.write("	<h3>Greeting <3 </h3>");
		res.write('	<form  method="POST" action="/create-user"> type="submit"');
		res.write('		<input type="text" name="username" /> <button>submit</button>');
		res.write("	</form>");
		return res.end();
	}

	if (url === "/users") {
		res.write("<body>");
		res.write("	<h1>User Route </h1>");
		res.write("	<h3>Username lists here</h3>");
		res.write(
			"	<ul><li>user 1</li><li>user 2</li><li>user 3</li><li>user 4</li><li>user 5</li></ul>"
		);
		res.write("</body>");
		return res.end();
	}

	if (url === "/create-user" && method === "POST") {
		const body = [];

		req.on("data", (datachunk) => {
			// console.log(datachunk);
			body.push(datachunk);
		});

		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			const username = parsedBody.split("=")[1];
			// console.log("parsed body: ", parsedBody);
			// console.log("username: ", username);

			fs.writeFile("username.txt", username, (err) => {
				res.statusCode = 302;
				res.setHeader("Location", "/users");
				return res.end();
			});
		});
	}

	res.write("<body>");
	res.write("	<h1>Unknown Route </h1>");
	res.write("	<h3>Visit proper route please!</h3>");
	res.write("</body>");
	res.end();
};

module.exports = handleReques;
