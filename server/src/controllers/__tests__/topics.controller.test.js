describe("topic controller", function() {
  beforeEach(() => {
    jest.resetModules();
  });

  test("get specific topic by id", async () => {
    // Arrange
    const topicData = { _id: 4, name: "random" };
    prepareResolvedCategoryModelMock(topicData);

    // Act
    const req = { params: { topicId: 4 } };
    const res = { json: jest.fn(), end: jest.fn() };
    const TopicsCtrl = require("controllers/topics.controller");
    await TopicsCtrl.get(req, res);

    // Assert
    const CategoryModel = require("models/category");
    expect(CategoryModel.findOneTopic).toHaveBeenCalledWith(4);
    expect(res.json).toHaveBeenCalledWith({ _id: 4, name: "random" });
  });

  test("given topicId and topic data, update specific topic", async () => {
    // Arrange
    prepareResolvedCategoryModelMock();

    // Act
    const req = { params: { topicId: 4 }, body: { field: "A" } };
    const res = { json: jest.fn(), end: jest.fn() };
    const TopicsCtrl = require("controllers/topics.controller");
    await TopicsCtrl.update(req, res);

    // Assert
    const CategoryModel = require("models/category");
    expect(CategoryModel.findOneTopicAndUpdate).toHaveBeenCalledWith(4, {
      field: "A"
    });
  });

  test("handle errors and returns 500 code", async () => {
    // Arrange
    const error = { message: "random error" };
    prepareRejectedCategoryModelMock(error);

    // Act
    const req = { params: { topicId: 4 } };
    const send = jest.fn();
    const res = {
      status: jest.fn(() => ({ send })),
      end: jest.fn()
    };
    const TopicsCtrl = require("controllers/topics.controller");
    await TopicsCtrl.get(req, res);

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

const prepareResolvedCategoryModelMock = topicData => {
  jest.doMock("models/category", () => {
    const findOneTopic = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(topicData);
        })
    );
    const findOneTopicAndUpdate = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(topicData);
        })
    );
    return { findOneTopic, findOneTopicAndUpdate };
  });
};

const prepareRejectedCategoryModelMock = error => {
  jest.doMock("models/category", () => {
    const findOneTopic = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          reject(error);
        })
    );
    return { findOneTopic };
  });
};
