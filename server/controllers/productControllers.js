const asyncHandler = require("../middleware/asyncHandler.js");
const Product = require("../models/productModel.js");

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});
	res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		return res.json(product);
	} else {
		res.status(404);
		throw new Error("Resource not found");
	}
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
	const product = new Product({
		sku: "G88303102015",
		lot: 6420000103,
		palletNumber: 1,
		quantity: 100,
		description: "Orange tropicana regular",
		countInStock: 1200,
		loc: "CA006A",
		subLoc: "SDFG",
		date: "11/11/23",
	});

	const createdProduct = await product.save();
	res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
	const {
		sku,
		lot,
		palletNumber,
		quantity,
		description,
		countInStock,
		loc,
		subLoc,
		date,
	} = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		product.sku = sku;
		product.lot = lot;
		product.palletNumber = palletNumber;
		product.quantity = quantity;
		product.loc = loc;
		product.subLoc = subLoc;
		product.description = description;
		product.countInStock = countInStock;

		const updatedProduct = await product.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		await Product.deleteOne({ _id: product._id });
		res.json({ message: "Product removed" });
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
});

module.exports = {
	getProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
