import mongoose from "mongoose";
import fs from "fs";
import createDatabase from "config/db";
import ImageModel from "models/image";

mongoose.Promise = global.Promise;

let conn = null;

describe("image model", function() {
  beforeAll(async done => {
    conn = await createDatabase("mongodb://localhost/testDatabase");
    done();
  });

  test("should be invalid if data, contentType and description fields are missing", function(
    done
  ) {
    const Image = ImageModel(conn);
    const m = new Image();

    m.validate(function(err) {
      expect(err.errors.data).toBeDefined();
      expect(err.errors.contentType).toBeDefined();
      expect(err.errors.description).toBeDefined();
      done();
    });
  });

  test.skip("should save image", done => {
    const Image = ImageModel(conn);
    const newImage = new Image({
      data: getFileContent("/test-image.jpeg"),
      contentType: "image/jpeg",
      description: "funny"
    });

    Image.create(newImage, (err, updated) => {
      expect(updated.data).toBeDefined();
      expect(updated.contentType).toBe("image/jpeg");
      expect(updated.description).toBe("funny");
      expect(updated.createdOn).toBeDefined();
    });
  });

  test("should validate when attempt to save image with taken description", done => {
    const Image = ImageModel(conn);
    const newImage = new Image({
      data: getFileContent("/test-image.jpeg"),
      contentType: "image/jpeg",
      description: "funny"
    });

    // Act
    Image.create(newImage, (err, updated) => {
      expect(err).toBeNull();
      // Act and fail
      Image.create(newImage, (err, updated) => {
        expect(err.errors.description).toBeDefined();
        expect(err.errors.description.message).toBe(
          "Description already taken"
        );
        done();
      });
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

const getFileContent = path => {
  const filePath = __dirname + path;
  return fs.readFileSync(filePath);
};
