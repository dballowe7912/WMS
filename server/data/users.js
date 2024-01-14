const bcrypt = require("bcryptjs");

const users = [
	{
		username: "Admin_User",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		username: "John_Doe",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		username: "Jane_Doe",
		password: bcrypt.hashSync("123456", 10),
	},
];

module.exports = users;
