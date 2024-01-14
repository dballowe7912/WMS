const { Schema, model } = require("mongoose");

const productSchema = new Schema({
	// user: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	required: true,
	// 	ref: "User",
	// },
	// sku: "G88303102015"
	sku: {
		type: String,
		required: true,
	},
	// lot: "6420000103"
	lot: {
		type: Number,
		default: 6400000103,
	},
	// palletNumber: 1,
	palletNumber: {
		type: Number,
		default: 0,
	},
	// quantity: 100
	quantity: {
		type: Number,
		default: 0,
	},
	// description: "Orange tropicana regular",
	description: {
		type: String,
		default: "Please add product description",
	},
	// countInStock: 1200
	countInStock: {
		type: Number,
		default: 0,
	},
	// loc: "CA006A",
	loc: {
		type: String,
	},
	// subLoc: "SDFG",
	subLoc: {
		type: String,
		default: "SDFG",
	},
	// date: "11/11/23"
	date: {
		type: Date,
		default: Date.now(),
	},
});

const Product = model("Product", productSchema);

module.exports = Product;
