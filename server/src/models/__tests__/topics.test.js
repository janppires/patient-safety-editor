import mongoose from "mongoose";
import createDatabase from "config/db";
import TopicModel from "models/topic";

mongoose.Promise = global.Promise;

let conn = null;

describe("topic model", function() {
  beforeAll(async done => {
    conn = await createDatabase("mongodb://localhost/testDatabase");
    done();
  });

  it("should be invalid if name is empty", function(done) {
    let Topic = TopicModel(conn);
    let m = new Topic();

    m.validate(function(err) {
      expect(err.errors.name).toBeDefined();
      done();
    });
  });

  it("should add createdOn property", () => {
    let Topic = TopicModel(conn);
    let m = new Topic({ name: "random" });
    expect(m.createdOn).toBeDefined();
  });

  it("should have empty points array", () => {
    let Topic = TopicModel(conn);
    let m = new Topic({ name: "random" });
    expect(m.points).toBeDefined();
    expect(m.points).toEqual(expect.arrayContaining([]));
  });

  it("should be invalid if a point name is empty", done => {
    let Topic = TopicModel(conn);
    let m = new Topic({ name: "random", points: [{}] });
    m.validate(function(err) {
      expect(err.errors["points.0.name"]).toBeDefined();
      done();
    });
  });

  //After all tests are finished drop database and close connection
  afterAll(function(done) {
    conn.db.dropDatabase(function() {
      conn.close(() => {
        done();
      });
    });
  });
});
