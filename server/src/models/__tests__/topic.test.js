import setupDatabase from "database/setup";

let conn = null;

describe("topic model", function() {
  beforeAll(async () => {
    await prepareDatabase();
  });

  beforeEach(done => {
    conn.db.dropDatabase(() => done());
  });

  test("should be invalid if name is empty", function(done) {
    const TopicModel = require("models/topic").default;
    const m = new TopicModel();

    m.validate(function(err) {
      expect(err.errors.name).toBeDefined();
      done();
    });
  });

  test("should add createdOn property", () => {
    const TopicModel = require("models/topic").default;
    const m = new TopicModel({ name: "random" });
    expect(m.createdOn).toBeDefined();
  });

  test("should have empty points array", () => {
    const TopicModel = require("models/topic").default;
    const m = new TopicModel({ name: "random" });
    expect(m.points).toBeDefined();
    expect(m.points).toEqual(expect.arrayContaining([]));
  });

  test("should be invalid if a point name is empty", done => {
    const TopicModel = require("models/topic").default;
    const m = new TopicModel({ name: "random", points: [{}] });
    m.validate(function(err) {
      expect(err.errors["points.0.name"]).toBeDefined();
      done();
    });
  });

  //After all tests are finished drop database and close connection
  afterAll(done => {
    conn.close(() => done());
  });
});

const prepareDatabase = async () => {
  conn = await setupDatabase("mongodb://localhost/testDatabase");
  jest.doMock("database", () => conn);
  return conn;
};
