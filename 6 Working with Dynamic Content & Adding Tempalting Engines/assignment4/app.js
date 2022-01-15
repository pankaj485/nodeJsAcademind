const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// importing handlebar templating engine
const expressHbs = require("express-handlebars");

// importing utility funcitons
const rootDir = require("./util/rootDir");

// imoprting routes
const homeRoutes = require("./routes/home");
const usersRoute = require("./routes/users");

// creating and configuring express app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public", "css")));

// setting templating engine as ejs
// app.set("view engine", "ejs");
// app.set("views", "views");

// setting templating engine as pug
// const pugViewPath = path.join(rootDir, "views", "pug");
// app.set("view engine", "pug");
// app.set("views", pugViewPath);

// setting templating engine as handlebars
// initialize handlebar, configuring handlebars as a layout option
app.engine(
	"hbs",
	expressHbs({
		layoutsDir: "views/layouts",
		defaultLayout: "basic-layout",
		extname: "hbs",
	})
);

app.set("view engine", "hbs");
app.set("views", "views/handlebars");

// handling routes
app.use(homeRoutes.homeRoute);
app.use(usersRoute);

app.listen(3000);
