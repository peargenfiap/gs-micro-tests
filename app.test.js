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

describe("GET /v1/objetivos/", () => {
  it("deve ser um array com objetos contendo as propriedades id, objetivos e indicadores", async () => {
    const res = await request("http://localhost:8080")
      .get("/v1/objetivos/")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(res.body).toBeInstanceOf(Array);
    res.body.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("objetivos");
      expect(item).toHaveProperty("indicadores");
      expect(item.indicadores).toBeInstanceOf(Array);
    });
  });

  it("cada indicador deve ter id e descricao", async () => {
    const res = await request("http://localhost:8080")
      .get("/v1/objetivos/")
      .expect("Content-Type", /json/)
      .expect(200);

    res.body.forEach((item) => {
      item.indicadores.forEach((indicador) => {
        expect(indicador).toHaveProperty("id");
        expect(indicador).toHaveProperty("descricao");
      });
    });
  });

  it("deve ter um item específico com id e indicadores corretos", async () => {
    const res = await request("http://localhost:8080")
      .get("/v1/objetivos/")
      .expect("Content-Type", /json/)
      .expect(200);

    const item = res.body.find((i) => i.id === "3.1");
    expect(item).toBeDefined();
    expect(item.indicadores[0].id).toBe("3.1.1");
    expect(item.indicadores[1].id).toBe("3.1.2");
  });

  it("deve ter um número específico de itens e indicadores", async () => {
    const res = await request("http://localhost:8080")
      .get("/v1/objetivos/")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(res.body.length).toBe(9);
    const item = res.body.find((i) => i.id === "3.3");
    expect(item.indicadores.length).toBe(4);
  });
});
