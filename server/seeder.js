const mongoose = require("mongoose");
const dotenv = require("dotenv");

const colors = require("colors");
const users = require("./data/users.js");
const products = require("./data/products.js");
// const locations = require("./data/locations.js");

const User = require("./models/userModel.js");
const Product = require("./models/productModel.js");
// const Location = require("./models/locationModel.js");
const { connectToDB } = require("./config/db.js");

dotenv.config();

connectToDB();

const importData = async () => {
	try {
		await Product.deleteMany();
		await User.deleteMany();
		// await Location.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUser = createdUsers[0]._id;

		const sampleProducts = products.map((product) => {
			return { ...product, username: adminUser };
		});

		// const sampleLocations = locations.map((location) => {
		// 	return { ...location };
		// });

		await Product.insertMany(sampleProducts);

		// await Location.insertMany(sampleLocations);

		console.log("Data Imported!".green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Product.deleteMany();
		await User.deleteMany();

		console.log("Data Destroyed!".red.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	destroyData();
} else {
	importData();
}
