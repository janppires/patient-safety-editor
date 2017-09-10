import setupDatabase from "database/setup";

let conn = null;

describe("category model", function() {
  beforeAll(async () => {
    await prepareDatabase();
  });

  beforeEach(done => {
    conn.db.dropDatabase(() => done());
  });

  //After all tests are finished drop database and close connection
  afterAll(done => {
    conn.close(() => done());
  });

  test("should add createdOn property", () => {
    const CategoryModel = require("models/category").default;
    const m = new CategoryModel();
    expect(m.createdOn).toBeDefined();
  });

  test("should have empty topics array", () => {
    const CategoryModel = require("models/category").default;
    const m = new CategoryModel({ name: "random" });
    expect(m.topics).toBeDefined();
    expect(m.topics).toEqual(expect.arrayContaining([]));
  });

  test("should have virtual 'nameId' field", () => {
    const CategoryModel = require("models/category").default;
    const m = new CategoryModel({ name: "Random category" });
    expect(m.nameId).toBe("random-category");
  });

  test("should have virtual 'url' field", () => {
    const CategoryModel = require("models/category").default;
    const m = new CategoryModel({ name: "Random category" });
    expect(m.url).toBe("/categories/" + m._id);
  });

  test("should be invalid if name is missing", function(done) {
    const CategoryModel = require("models/category").default;
    const m = new CategoryModel();

    m.validate(function(err) {
      expect(err.errors.name).toBeDefined();
      done();
    });
  });

  test("should be invalid if icon is missing", function(done) {
    const CategoryModel = require("models/category").default;
    const m = new CategoryModel({
      name: "ai maria"
    });

    m.validate(function(err) {
      expect(err.errors.icon).toBeDefined();
      done();
    });
  });

  test("should be invalid if a topic name is missing", done => {
    const CategoryModel = require("models/category").default;
    const m = new CategoryModel({ name: "random", topics: [{}] });
    m.validate(function(err) {
      expect(err.errors["topics.0.name"]).toBeDefined();
      done();
    });
  });

  test("should be invalid if a topic icon is missing", done => {
    const CategoryModel = require("models/category").default;
    const m = new CategoryModel({
      name: "random",
      topics: [{ name: "ai maria" }]
    });
    m.validate(function(err) {
      expect(err.errors["topics.0.icon"]).toBeDefined();
      done();
    });
  });
});

const prepareDatabase = async () => {
  conn = await setupDatabase("mongodb://localhost/testDatabase");
  jest.doMock("database", () => conn);
  return conn;
};
