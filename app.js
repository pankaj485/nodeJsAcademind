const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// importing the routing modules
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// other imports
const rootDir = require("./util/path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// defining static folders
app.use(express.static(path.join((__dirname, "public"))));

// using the routing modules
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// adding 404 page
// it works for all the unused routes above
app.use((req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
