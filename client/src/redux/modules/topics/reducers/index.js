import { combineReducers } from "redux";

import list from "./list";
import byId from "./byId";

const topics = combineReducers({
  byId,
  list
});

export default topics;

// topics selectors

export const getTopics = state => {
  const ids = getIdsListState(state);
  return ids.map(id => getTopicByIdState(state, id));
};

export const getTopic = (state, id) => {
  return getTopicByIdState(state, id);
};

const getIdsListState = state => state.topics.list;
const getTopicByIdState = (state, id) => state.topics.byId[id];
