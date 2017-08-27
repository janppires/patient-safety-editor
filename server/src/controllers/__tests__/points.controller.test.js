describe("points controller", function() {
  beforeEach(() => {
    jest.resetModules();
  });

  it("get specific point by id", async () => {
    // Arrange
    const mockedTopic = { points: [{ _id: 4, name: "random" }] };
    const { Topic, pointsController } = preparePointsControllerWithValidData(
      mockedTopic
    );
    // Act
    const req = { params: { pointId: 4 } };
    const res = { json: jest.fn(), end: jest.fn() };
    await pointsController.get()(req, res);
    // Assert
    expect(Topic.findOne).toHaveBeenCalledWith({
      points: { $elemMatch: { _id: 4 } }
    });
    expect(res.json).toHaveBeenCalledWith({ _id: 4, name: "random" });
    expect(res.end).toHaveBeenCalled();
  });

  it("handle errors and returns 500 code", async () => {
    // Arrange
    const error = { message: "random error" };
    const { pointsController } = preparePointsControllerWithError(error);
    // Act
    const req = { params: { pointId: 4 } };
    const send = jest.fn();
    const res = {
      status: jest.fn(() => ({ send })),
      end: jest.fn()
    };
    await pointsController.get()(req, res);
    // Assert
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.status().send).toHaveBeenCalledWith({
      status: 500,
      message: "internal error",
      type: "internal",
      details: "random error"
    });
    expect(res.end).toHaveBeenCalled();
  });
});

const preparePointsControllerWithValidData = mockedTopic => {
  prepareResolvedTopicModelMock(mockedTopic);
  return preparePointsController();
};

const preparePointsControllerWithError = error => {
  prepareRejectedTopicModelMock(error);
  return preparePointsController();
};

const prepareResolvedTopicModelMock = mockedTopic => {
  jest.doMock("models/topic", () => {
    const findOne = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(mockedTopic);
        })
    );
    return jest.fn(() => ({ findOne }));
  });
};

const prepareRejectedTopicModelMock = error => {
  jest.doMock("models/topic", () => {
    const findOne = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          reject(error);
        })
    );
    return jest.fn(() => ({ findOne }));
  });
};

const preparePointsController = () => {
  const pointsController = require("controllers/points.controller");
  const TopicModel = require("models/topic");
  const Topic = TopicModel();
  return { pointsController, Topic };
};
