import { combineReducers } from "redux";

import list from "./list";
import byId from "./byId";
import selected from "./selected";

const topics = combineReducers({
  byId,
  list,
  selected
});

export default topics;

// topics selectors

export const getTopics = state => {
  const ids = getIdsListState(state);
  return ids.map(id => getTopicByIdState(state, id));
};

export const getSelectedTopic = state => {
  const id = getSelectedTopicIdState(state);
  return getTopicByIdState(state, id);
};

const getIdsListState = state => state.topics.list;
const getTopicByIdState = (state, id) => state.topics.byId[id];
const getSelectedTopicIdState = state => state.topics.selected;
