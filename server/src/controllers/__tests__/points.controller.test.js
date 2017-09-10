describe("points controller", function() {
  beforeEach(() => {
    jest.resetModules();
  });

  test("get specific point by id", async () => {
    // Arrange
    const pointData = { _id: 4, name: "random" };
    prepareResolvedCategoryModelMock(pointData);

    // Act
    const req = { params: { pointId: 4 } };
    const res = { json: jest.fn(), end: jest.fn() };
    const PointsCtrl = require("controllers/points.controller");
    await PointsCtrl.get(req, res);

    // Assert
    const CategoryModel = require("models/category");
    expect(CategoryModel.findOnePoint).toHaveBeenCalledWith(4);
    expect(res.json).toHaveBeenCalledWith({ _id: 4, name: "random" });
  });

  test("given pointId and point data, update specific point", async () => {
    // Arrange
    prepareResolvedCategoryModelMock();

    // Act
    const req = { params: { pointId: 4 }, body: { field: "A" } };
    const res = { json: jest.fn(), end: jest.fn() };
    const PointsCtrl = require("controllers/points.controller");
    await PointsCtrl.update(req, res);

    // Assert
    const CategoryModel = require("models/category");
    expect(CategoryModel.findOnePointAndUpdate).toHaveBeenCalledWith(4, {
      field: "A"
    });
  });

  test("handle errors and returns 500 code", async () => {
    // Arrange
    const error = { message: "random error" };
    prepareRejectedCategoryModelMock(error);

    // Act
    const req = { params: { pointId: 4 } };
    const send = jest.fn();
    const res = {
      status: jest.fn(() => ({ send })),
      end: jest.fn()
    };
    const PointsCtrl = require("controllers/points.controller");
    await PointsCtrl.get(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.status().send).toHaveBeenCalledWith({
      status: 500,
      message: "internal error",
      type: "internal",
      details: "random error"
    });
  });
});

const prepareResolvedCategoryModelMock = pointData => {
  jest.doMock("models/category", () => {
    const findOnePoint = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(pointData);
        })
    );
    const findOnePointAndUpdate = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(pointData);
        })
    );
    return { findOnePoint, findOnePointAndUpdate };
  });
};

const prepareRejectedCategoryModelMock = error => {
  jest.doMock("models/category", () => {
    const findOnePoint = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          reject(error);
        })
    );
    return { findOnePoint };
  });
};
