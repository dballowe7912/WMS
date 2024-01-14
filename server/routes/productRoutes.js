const express = require("express");
const router = express.Router();
// import products from "../data/products.js";
const {
	getProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
} = require("../controllers/productControllers.js");
const { protect, admin } = require("../middleware/authMiddleware.js");
const checkObjectId = require("../middleware/checkObjectId.js");

router.route("/").get(getProducts).post(protect, admin, createProduct);
router
	.route("/:id")
	.get(checkObjectId, getProductById)
	.put(protect, admin, checkObjectId, updateProduct)
	.delete(protect, admin, checkObjectId, deleteProduct);

module.exports = router;
