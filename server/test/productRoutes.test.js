const request = require("supertest");
var { app, server } = require("../app");
const mongoose = require("mongoose");

afterAll(() => {
	mongoose.connection.close({ force: true });
	server.close();
});

describe("Test / route", (done) => {
	it("GET / returns a status code 200", async () => {
		const response = await request(server).get("/");
		expect(response.status).toBe(200);
	});
});

describe("GET /api/products", () => {
	it("should return all products", async () => {
		const res = await request(app).get("/api/products");
		expect(res.statusCode).toBe(200);
		expect(res.body.length).toBeGreaterThan(0);
	});
});
