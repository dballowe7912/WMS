const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectToDB = () => {
	mongoose.connect("mongodb://127.0.0.1:27017/wms").catch((err) => {
		throw new Error(err);
	});

	if (process.env.NODE_ENV === "development") {
		mongoose.connection.once("open", () => {
			console.log("Connected to MongoDB...".cyan.underline);
		});
	}
};

module.exports = { connectToDB };
