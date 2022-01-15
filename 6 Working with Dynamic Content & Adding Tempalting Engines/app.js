const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// importing handlebar templating engine
// const expressHbs = require("express-handlebars");

// importing the routing modules
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// other imports
// const rootDir = require("./util/path");

const app = express();

// initialize hanlebar, and setup as template engine
// app.engine(
// 	"hbs",
// 	expressHbs({
// 		layoutsDir: "views/layouts",
// 		defaultLayout: "main-layout",
// 		extname: "hbs",
// 	})
// );
// app.set("view engine", "hbs");
// app.set("views", "views");

// set pug as view engine
// app.set("view engine", "pug");
// app.set("views", "views");

// set ejs as view engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

// defining static folders
app.use(express.static(path.join((__dirname, "public"))));

// using the routing modules
app.use("/admin", adminData.routes);
app.use(shopRoutes);

// adding 404 page
// it works for all the unused routes above
app.use((req, res, next) => {
	// res.sendFile(path.join(rootDir, "views", "404.html"));
	res.render("404", { docTitle: "404 Not Found" });
});

app.listen(3000);
