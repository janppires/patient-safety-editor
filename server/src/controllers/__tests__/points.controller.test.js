describe("points controller", function() {
  beforeEach(() => {
    jest.resetModules();
  });

  test("get specific point by id", async () => {
    // Arrange
    const pointData = { _id: 4, name: "random" };
    prepareResolvedTopicModelMock(pointData);

    // Act
    const req = { params: { pointId: 4 } };
    const res = { json: jest.fn(), end: jest.fn() };
    const PointsCtrl = require("controllers/points.controller");
    await PointsCtrl.get(req, res);

    // Assert
    const TopicModel = require("models/topic");
    expect(TopicModel.findOnePoint).toHaveBeenCalledWith(4);
    expect(res.json).toHaveBeenCalledWith({ _id: 4, name: "random" });
  });

  test("given pointId and point data, update specific point", async () => {
    // Arrange
    prepareResolvedTopicModelMock();

    // Act
    const req = { params: { pointId: 4 }, body: { field: "A" } };
    const res = { json: jest.fn(), end: jest.fn() };
    const PointsCtrl = require("controllers/points.controller");
    await PointsCtrl.update(req, res);

    // Assert
    const TopicModel = require("models/topic");
    expect(TopicModel.findOnePointAndUpdate).toHaveBeenCalledWith(4, {
      field: "A"
    });
  });

  test("handle errors and returns 500 code", async () => {
    // Arrange
    const error = { message: "random error" };
    prepareRejectedTopicModelMock(error);

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

const prepareResolvedTopicModelMock = pointData => {
  jest.doMock("models/topic", () => {
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

const prepareRejectedTopicModelMock = error => {
  jest.doMock("models/topic", () => {
    const findOnePoint = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          reject(error);
        })
    );
    return { findOnePoint };
  });
};
