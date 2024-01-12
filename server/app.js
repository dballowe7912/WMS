const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.listen(5000, () => {
	console.log(`Server is listening on port ${PORT} in ${NODE_ENV} mode...`);
});
