import * as topicsSelector from "../index";

describe("topics selectors", () => {
  test("get topics array from state", () => {
    const state = prepareStateWithTopics();
    const topics = topicsSelector.getTopics(state);
    expect(topics).toMatchSnapshot();
  });

  test("get undefined topic when topicId is unknown", () => {
    const state = prepareStateWithTopics();
    const topic = topicsSelector.getTopic(state);
    expect(topic).toMatchSnapshot();
  });

  test("get topic from id", () => {
    const state = prepareStateWithTopics();
    const topicId = 2;
    const topic = topicsSelector.getTopic(state, topicId);
    expect(topic).toMatchSnapshot();
  });

  const prepareStateWithTopics = () => ({
    topics: {
      list: [1, 2],
      byId: {
        1: { name: "random" },
        2: { name: "random 2" }
      }
    }
  });
});
