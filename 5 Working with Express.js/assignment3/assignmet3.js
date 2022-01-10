// importing core packages
const express = require("express");
const path = require("path");

// imporiting root directory as utility function
// const rootDir = require("./util/root");

// importing externally exported packages
const homeRoute = require("./routes/homepage");
const usersRoute = require("./routes/users");

const app = express();

// adding static directory
app.use(express.static(path.join(__dirname, "public")));

// adding routes for the routes files
app.use(homeRoute);
app.use(usersRoute);

app.listen(3000);
