const request = require("supertest");

describe("GET /v1/consume", () => {
  it("deve responder com dados do indicador", async () => {
    const res = await request("http://localhost:8080")
      .get("/v1/consume/")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(res.body).toBeInstanceOf(Array);
    res.body.forEach((item) => {
      expect(item).toHaveProperty("consumeKey");
      expect(item).toHaveProperty("indicatorKey");
      expect(item).toHaveProperty("consumeYear");
      expect(item).toHaveProperty("consumeQuantity");
    });
  });
});
