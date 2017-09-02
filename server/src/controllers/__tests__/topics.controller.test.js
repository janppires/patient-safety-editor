describe("topics controller", function() {
  beforeEach(() => {
    jest.resetModules();
  });

  test("gets all topics", async () => {
    // Arrange
    const allTopics = [{ name: "random name" }];
    prepareResolvedTopicModelMock(allTopics);

    // Act
    const req = {};
    const res = { json: jest.fn(), end: jest.fn() };
    const TopicsCtrl = require("controllers/topics.controller");
    await TopicsCtrl.getAll(req, res);

    // Assert
    const TopicModel = require("models/topic");
    expect(TopicModel.findAndSort).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith([{ name: "random name" }]);
  });

  test("get topic by id", async () => {
    // Arrange
    const topicMock = { name: "random name" };
    prepareResolvedTopicModelMock(topicMock);

    // Act
    const req = { params: { topicId: 50 } };
    const res = { json: jest.fn(), end: jest.fn() };
    const TopicsCtrl = require("controllers/topics.controller");
    await TopicsCtrl.get(req, res);

    // Assert
    const TopicModel = require("models/topic");
    expect(TopicModel.findById).toHaveBeenCalledWith(50);
    expect(res.json).toHaveBeenCalledWith({ name: "random name" });
  });

  test("creates new topic", async () => {
    // Arrange
    const topicMock = { name: "random name" };
    prepareResolvedTopicModelMock(topicMock);

    // Act
    const req = { body: { topic: { name: "new name" } } };
    const res = { json: jest.fn(), end: jest.fn() };
    const TopicsCtrl = require("controllers/topics.controller");
    await TopicsCtrl.create(req, res);

    // Assert
    const TopicModel = require("models/topic");
    expect(TopicModel.create).toHaveBeenCalledWith({
      topic: { name: "new name" }
    });
    expect(res.json).toHaveBeenCalledWith({ name: "random name" });
  });
});

const prepareResolvedTopicModelMock = mockedData => {
  jest.doMock("models/topic", () => {
    const findAndSort = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(mockedData);
        })
    );
    const findById = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(mockedData);
        })
    );
    const create = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(mockedData);
        })
    );
    return { findAndSort, findById, create };
  });
};
