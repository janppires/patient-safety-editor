describe("images controller", function() {
  beforeEach(() => {
    jest.resetModules();
  });

  test("get image by id", async () => {
    // Arrange
    const image = { contentType: "random type", data: "random data" };
    prepareSuccessfulResponse(image);

    // Act
    const req = { params: { imageId: 4 } };
    const res = { contentType: jest.fn(), send: jest.fn() };
    const ImagesCtrl = require("controllers/images.controller");
    await ImagesCtrl.get(req, res);

    // Assert
    const ImageModel = require("models/image");
    expect(ImageModel.findById).toHaveBeenCalledWith(4);
    expect(res.contentType).toHaveBeenCalledWith("random type");
    expect(res.send).toHaveBeenCalledWith("random data");
  });
});

test("upload image formats image to png", async () => {
  // Arrange
  const image = { contentType: "random type", data: "random data" };
  prepareSuccessfulResponse(image);

  // Act
  const req = { file: { mime: "random mime" }, body: { description: "fancy" } };
  const res = { json: jest.fn() };
  const ImagesCtrl = require("controllers/images.controller");
  await ImagesCtrl.upload(req, res);

  // Assert
  const ImageProcessor = require("services/image-processor");
  expect(ImageProcessor.formatToPng).toHaveBeenCalledWith({
    mime: "random mime"
  });
});

test("upload image creates new image into database", async () => {
  // Arrange
  const image = { contentType: "random type", data: "random data" };
  prepareSuccessfulResponse(image);

  // Act
  const req = { file: { mime: "random mime" }, body: { description: "fancy" } };
  const res = { json: jest.fn() };
  const ImagesCtrl = require("controllers/images.controller");
  await ImagesCtrl.upload(req, res);

  // Assert
  const ImageModel = require("models/image");
  expect(ImageModel.create).toHaveBeenCalledWith({
    contentType: "random type",
    data: "random data",
    description: "fancy"
  });
});

const prepareSuccessfulResponse = image => {
  mockImageModelModule(image);
  mockImageProcessorModule(image);
};

const mockImageModelModule = image => {
  jest.doMock("models/image", () => {
    const findById = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(image);
        })
    );
    const create = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(image);
        })
    );
    return { findById, create };
  });
};

const mockImageProcessorModule = image => {
  jest.doMock("services/image-processor", () => {
    const formatToPng = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(image);
        })
    );
    return { formatToPng };
  });
};
