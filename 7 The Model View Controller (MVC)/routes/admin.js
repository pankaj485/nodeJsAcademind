const express = require("express");
const productsController = require("../controllers/products");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productsController.getAddProducts);

// /admin/add-product => POST
//  as app.use() will work for both get and post method, adding a route for the post request only
router.post("/add-product", productsController.postAddProducts);

module.exports = router;
