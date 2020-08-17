const request = require("supertest");
const express = require("express");

const app = require("../index");

describe("GET on '/posts/:id/comments'", () => {
	it("should return a list of comments", () => {
		request(app).
			get("/posts/1/comments").
			expect(200).
			expect("Content-Type", /json/).
			expect((res) => typeof(res.body) == Array).
			end((err, res) => {
				expect(err).toBeNull();
			});
	});

	afterAll(done => {
		server.close(done);
	});
});

