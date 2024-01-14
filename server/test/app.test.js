const request = require("supertest");
var { app, server } = require("../app");
const mongoose = require("mongoose");

describe("Test / route", (done) => {
	afterAll(() => {
		mongoose.connection.close({ force: true });
		server.close();
	});

	it("GET / returns a status code 200", async () => {
		const response = await request(app).get("/");
		expect(response.status).toBe(200);
	});
});
