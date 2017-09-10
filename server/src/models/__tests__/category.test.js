import setupDatabase from "database/setup";

let conn = null;

describe("category model", function() {
  beforeAll(async () => {
    await prepareDatabase();
  });

  beforeEach(done => {
    conn.db.dropDatabase(() => done());
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

  test("should add createdOn property", () => {
    const CategoryModel = require("models/category").default;
    const m = new CategoryModel({ name: "random" });
    expect(m.createdOn).toBeDefined();
  });

  test("should have empty points array", () => {
    const CategoryModel = require("models/category").default;
    const m = new CategoryModel({ name: "random" });
    expect(m.points).toBeDefined();
    expect(m.points).toEqual(expect.arrayContaining([]));
  });

  test("should be invalid if a point name is missing", done => {
    const CategoryModel = require("models/category").default;
    const m = new CategoryModel({ name: "random", points: [{}] });
    m.validate(function(err) {
      expect(err.errors["points.0.name"]).toBeDefined();
      done();
    });
  });

  test("should be invalid if a point icon is missing", done => {
    const CategoryModel = require("models/category").default;
    const m = new CategoryModel({
      name: "random",
      points: [{ name: "ai maria" }]
    });
    m.validate(function(err) {
      expect(err.errors["points.0.icon"]).toBeDefined();
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
