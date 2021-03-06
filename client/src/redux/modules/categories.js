import { combineReducers } from "redux";

export const FETCHING = "CATEGORIES/FETCHING";
export const FETCHED = "CATEGORIES/FETCHED";
const SET_CATEGORIES_FETCH_STATUS = "CATEGORIES/FETCH_STATUS";
export const GET_CATEGORIES = "CATEGORIES/GET";
export const ADD_CATEGORY = "CATEGORIES/ADD";
const SET_CATEGORIES = "CATEGORIES/SET";
const SET_CATEGORY = "CATEGORIES/SET_NEW";

// reducers
const byId = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return payload.entities.categories;
    case SET_CATEGORY:
      return {
        ...state,
        [payload.nameId]: payload
      };
    default:
      return state;
  }
};

const list = (state = [], { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return payload.result;
    case SET_CATEGORY:
      return [...state, payload.nameId];
    default:
      return state;
  }
};

const fetchingStatus = (state = FETCHED, { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES_FETCH_STATUS:
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
export const getCategories = () => ({
  type: GET_CATEGORIES
});

export const setCategories = categories => ({
  type: SET_CATEGORIES,
  payload: categories
});

export const addCategory = category => ({
  type: ADD_CATEGORY,
  payload: category
});

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: category
});

export const setFechingStatus = status => ({
  type: SET_CATEGORIES_FETCH_STATUS,
  payload: status
});

// selectors
export const categoriesSelector = globalState => {
  const ids = getIdsListState(globalState);
  return ids.map(id => getCategoryByIdState(globalState, id));
};

export const topicSelector = (globalState, categoryNameId, topicId) => {
  const category = categorySelector(globalState, categoryNameId);
  if (category) {
    return category.topics.find(t => t.nameId === topicId);
  }
  return null;
};

export const categorySelector = (globalState, id) => {
  return getCategoryByIdState(globalState, id);
};

export const isFetchingCategoriesSelector = globalState => {
  return getFetchingStatus(globalState) === FETCHING;
};

const getIdsListState = globalState => globalState.categories.list;
const getCategoryByIdState = (globalState, id) =>
  globalState.categories.byId[id];
const getFetchingStatus = globalState => globalState.categories.fetchingStatus;
