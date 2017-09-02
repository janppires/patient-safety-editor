import fs from "fs";
import setupDatabase from "database/setup";

let conn = null;

describe("image model", function() {
  beforeAll(async () => {
    await prepareDatabase();
  });

  beforeEach(done => {
    conn.db.dropDatabase(() => done());
  });

  test("should be invalid if data, contentType and description fields are missing", function(
    done
  ) {
    const ImageModel = require("models/image").default;
    const m = new ImageModel();

    m.validate(function(err) {
      expect(err.errors.data).toBeDefined();
      expect(err.errors.contentType).toBeDefined();
      expect(err.errors.description).toBeDefined();
      done();
    });
  });

  test("should save image", async () => {
    //Arrange
    const ImageModel = require("models/image").default;
    const newImage = new ImageModel({
      data: getFileContent("/test-image.jpeg"),
      contentType: "image/jpeg",
      description: "funny"
    });

    // Act
    const result = await ImageModel.create(newImage);

    // Assert
    expect(result.data).toBeDefined();
    expect(result.contentType).toBe("image/jpeg");
    expect(result.description).toBe("funny");
    expect(result.createdOn).toBeDefined();
  });

  test("should validate when attempt to save image with description in use", async () => {
    // Arrange
    const ImageModel = require("models/image").default;
    const newImage = new ImageModel({
      data: getFileContent("/test-image.jpeg"),
      contentType: "image/jpeg",
      description: "funny"
    });
    const result = await ImageModel.create(newImage);

    try {
      // Act
      await ImageModel.create(newImage);
    } catch (error) {
      // Assert
      expect(error.errors.description).toBeDefined();
      expect(error.errors.description.message).toBe(
        "Description already taken"
      );
    }
  });

  afterAll(done => {
    conn.close(() => done());
  });
});

const getFileContent = path => {
  const filePath = __dirname + path;
  return fs.readFileSync(filePath);
};

const prepareDatabase = async () => {
  conn = await setupDatabase("mongodb://localhost/testDatabase");
  jest.doMock("database", () => conn);
  return conn;
};
