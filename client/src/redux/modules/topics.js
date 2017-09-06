import { normalize, schema } from "normalizr";
import { combineReducers } from "redux";

const FETCH_TOPICS = "TOPICS/FETCH";
const ADD_TOPIC = "TOPICS/ADD";

const topic = new schema.Entity("topics");
const topicsSchema = [topic];
const topics = [
  { id: 1, name: "funny topic", points: [] },
  { id: 5, name: "other", points: [] }
];

// reducers
const byId = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_TOPICS:
      return payload.entities.topics;
    case ADD_TOPIC:
      return Object.assign({}, state, { [payload.id]: payload });
    default:
      return state;
  }
};

const list = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_TOPICS:
      return payload.result;
    case ADD_TOPIC:
      return [...state, payload.id];
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  list
});

// actions
export const fetchTopics = () => {
  return {
    type: FETCH_TOPICS,
    payload: normalize(topics, topicsSchema)
  };
};

export const addTopic = topic => {
  return {
    type: ADD_TOPIC,
    payload: topic
  };
};

// selectors
export const getTopics = globalState => {
  const ids = getIdsListState(globalState);
  return ids.map(id => getTopicByIdState(globalState, id));
};

export const getTopic = (globalState, id) => {
  return getTopicByIdState(globalState, id);
};

const getIdsListState = globalState => globalState.topics.list;
const getTopicByIdState = (globalState, id) => globalState.topics.byId[id];
