describe("topics controller", function() {
  beforeEach(() => {
    jest.resetModules();
  });

  test("gets all topics", async () => {
    // Arrange
    const topicsMock = [{ name: "random name" }];
    const { Topic, topicsController } = prepareTopicsControllerWithData(
      topicsMock
    );
    // Act
    const req = {};
    const res = { json: jest.fn(), end: jest.fn() };
    await topicsController.getAll()(req, res);
    // Assert
    expect(Topic.find).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith([{ name: "random name" }]);
    expect(res.end).toHaveBeenCalled();
  });

  test("get topic by id", async () => {
    // Arrange
    const topicMock = { name: "random name" };
    const { Topic, topicsController } = prepareTopicsControllerWithData(
      topicMock
    );
    // Act
    const req = { params: { topicId: 50 } };
    const res = { json: jest.fn(), end: jest.fn() };
    await topicsController.get()(req, res);
    // Assert
    expect(Topic.findById).toHaveBeenCalledWith(50);
    expect(res.json).toHaveBeenCalledWith({ name: "random name" });
    expect(res.end).toHaveBeenCalled();
  });

  test("creates new topic", async () => {
    // Arrange
    const topicMock = { name: "random name" };
    const { Topic, topicsController } = prepareTopicsControllerWithData(
      topicMock
    );
    // Act
    const req = { body: { topic: { name: "new name" } } };
    const res = { json: jest.fn(), end: jest.fn() };
    await topicsController.create()(req, res);
    // Assert
    expect(Topic.create).toHaveBeenCalledWith({ topic: { name: "new name" } });
    expect(res.json).toHaveBeenCalledWith({ name: "random name" });
    expect(res.end).toHaveBeenCalled();
  });
});

const prepareTopicsControllerWithData = topicsMock => {
  prepareResolvedTopicModelMock(topicsMock);
  return prepareTopicsController();
};

const prepareResolvedTopicModelMock = mockedData => {
  jest.doMock("models/topic", () => {
    const exec = jest.fn(cb => {
      cb(null, mockedData);
      return new Promise((resolve, reject) => {
        resolve();
      });
    });
    const sort = jest.fn(() => ({ exec }));
    const find = jest.fn(() => ({ sort }));
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
    return jest.fn(() => ({ find, findById, create }));
  });
};

const prepareTopicsController = () => {
  const topicsController = require("controllers/topics.controller");
  const TopicModel = require("models/topic");
  const Topic = TopicModel();
  return { topicsController, Topic };
};
