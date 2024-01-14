const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cookieParser = require("cookie-parser");
const { connectToDB } = require("./config/db.js");
// Routes
const userRoutes = require("./routes/userRoutes.js");

const { errorMiddleware } = require("./middleware/error.js");

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

const app = express();
connectToDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorMiddleware);

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
	res.json({ message: "API is running..." });
});

const server = app.listen(5000, () => {
	console.log(`Server is listening on port ${PORT} in ${NODE_ENV} mode...`);
});

module.exports = { app, server };
