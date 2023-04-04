import request from "supertest";
import { app } from "../../app";

it("fails when email that does not exist is supplied", async () => {
  return request(app)
    .post("/api/users/signin")
    .send({
      email: "testtest@test.com",
      password: "123123123",
    })
    .expect(400);
});
