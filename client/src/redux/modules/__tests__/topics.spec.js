import topicsReducer, {
  addTopic,
  topicsSelector,
  topicSelector
} from "redux/modules/topics";

describe("reducer: topics.byId ", () => {
  it("adds new topic by id to empty state", () => {
    const topic = { id: 2, name: "random name" };
    const action = addTopic(topic);
    expect(topicsReducer({}, action)).toMatchSnapshot();
  });

  it("adds new topic by id to existing state", () => {
    const state = prepareState();
    const topic = { id: 2, name: "random name" };
    const action = addTopic(topic);
    expect(topicsReducer(state, action)).toMatchSnapshot();
  });

  const prepareState = () => ({
    byId: {
      33: {
        id: 33,
        name: "other 33 topic"
      }
    },
    list: [33]
  });
});

describe("topics selectors", () => {
  test("get topics array from state", () => {
    const state = prepareStateWithTopics();
    const topics = topicsSelector(state);
    expect(topics).toMatchSnapshot();
  });

  test("get undefined topic when topicId is unknown", () => {
    const state = prepareStateWithTopics();
    const topic = topicSelector(state);
    expect(topic).toMatchSnapshot();
  });

  test("get topic from id", () => {
    const state = prepareStateWithTopics();
    const topicId = 2;
    const topic = topicSelector(state, topicId);
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
