import byId from "../byId";
import { addTopic } from "../../actions";

describe("reducer: byId", () => {
  it("adds new topic by id to empty state", () => {
    const topic = { id: 2, name: "random name" };
    const action = addTopic(topic);
    expect(byId({}, action)).toMatchSnapshot();
  });

  it("adds new topic by id to existing state", () => {
    const state = prepareStateWithTopicsById();
    const topic = { id: 2, name: "random name" };
    const action = addTopic(topic);
    expect(byId(state, action)).toMatchSnapshot();
  });

  const prepareStateWithTopicsById = () => ({
    33: {
      id: 33,
      name: "other 33 topic"
    }
  });
});
