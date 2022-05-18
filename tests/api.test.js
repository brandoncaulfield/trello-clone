const request = require("supertest");
const server = require("../server/server");

// describe("Sanity check", () => {
//   it("test true === true", () => {
//     expect(true).toBe(true);
//   });
// });

/**
 * Boards Test
 */
describe("Boards", () => {
  test("should return a list of boards", async () => {
    const res = await request(server).get("/api/boards");
    expect(res.statusCode).toEqual(200);
  });
  test("should return a single board", async () => {
    const res = await request(server).post("/api/board").send({
      operation: "read",
      id: "1",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("cards");
  });
});

/**
 * Cards Test
 */
describe("Cards", () => {
  it("should create a card", async () => {
    const res = await request(server)
      .post("/api/board/card")
      .send({
        operation: "create",
        id: "1",
        data: {
          id: 4,
          title: "Later",
          description: "Stuff to do later",
          tasks: ["task1", "task2"],
        },
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBe(
      "Successfully created a new card and saved it to the database"
    );
  });
  it("should update a card", async () => {
    const res = await request(server)
      .post("/api/board/card")
      .send({
        operation: "update",
        id: "1",
        data: {
          id: 3,
          title: "Later",
          description: "Stuff to do later",
          tasks: ["task1", "task2"],
        },
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBe(
      "Successfully updated card and saved it to the database"
    );
  });
});

afterEach(async () => {
  await server.close();
});
