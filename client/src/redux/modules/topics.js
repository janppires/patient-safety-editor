import { combineReducers } from "redux";

export const FETCHING = "TOPICS/FETCHING";
export const FETCHED = "TOPICS/FETCHED";
const SET_TOPICS_FETCH_STATUS = "TOPICS/FETCH_STATUS";
export const GET_TOPICS = "TOPICS/GET";
const ADD_TOPIC = "TOPICS/ADD";
const SET_TOPICS = "TOPICS/SET";

// reducers
const byId = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_TOPICS:
      return payload.entities.topics;
    case ADD_TOPIC:
      return Object.assign({}, state, { [payload.id]: payload });
    default:
      return state;
  }
};

const list = (state = [], { type, payload }) => {
  switch (type) {
    case SET_TOPICS:
      return payload.result;
    case ADD_TOPIC:
      return [...state, payload.id];
    default:
      return state;
  }
};

const fetchingStatus = (state = FETCHED, { type, payload }) => {
  switch (type) {
    case SET_TOPICS_FETCH_STATUS:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  list,
  fetchingStatus
});

// actions
export const getTopics = () => ({
  type: GET_TOPICS
});

export const setTopics = topics => ({
  type: SET_TOPICS,
  payload: topics
});

export const addTopic = topic => ({
  type: ADD_TOPIC,
  payload: topic
});

export const setFechingStatus = status => ({
  type: SET_TOPICS_FETCH_STATUS,
  payload: status
});

// selectors
export const topicsSelector = globalState => {
  const ids = getIdsListState(globalState);
  return ids.map(id => getTopicByIdState(globalState, id));
};

export const topicSelector = (globalState, id) => {
  return getTopicByIdState(globalState, id);
};

export const isFetchingTopicsSelector = globalState => {
  return getFetchingStatus(globalState) === FETCHING;
};

const getIdsListState = globalState => globalState.topics.list;
const getTopicByIdState = (globalState, id) => globalState.topics.byId[id];
const getFetchingStatus = globalState => globalState.topics.fetchingStatus;
