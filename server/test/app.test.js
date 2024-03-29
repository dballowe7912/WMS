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
