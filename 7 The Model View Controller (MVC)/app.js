const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// importing the routing modules
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

const app = express();

// set ejs as view engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

// defining static folders
app.use(express.static(path.join((__dirname, "public"))));

// using the routing modules
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// adding 404 page
// it works for all the unused routes above
app.use(errorController.get404);

app.listen(3000);
