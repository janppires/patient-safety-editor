import { combineReducers } from "redux";

export const FETCHING = "CATEGORIES/FETCHING";
export const FETCHED = "CATEGORIES/FETCHED";
const SET_CATEGORIES_FETCH_STATUS = "CATEGORIES/FETCH_STATUS";
export const GET_CATEGORIES = "CATEGORIES/GET";
const ADD_CATEGORY = "CATEGORIES/ADD";
const SET_CATEGORIES = "CATEGORIES/SET";

// reducers
const byId = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return payload.entities.categories;
    case ADD_CATEGORY:
      return Object.assign({}, state, { [payload.id]: payload });
    default:
      return state;
  }
};

const list = (state = [], { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return payload.result;
    case ADD_CATEGORY:
      return [...state, payload.id];
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

export const setFechingStatus = status => ({
  type: SET_CATEGORIES_FETCH_STATUS,
  payload: status
});

// selectors
export const categoriesSelector = globalState => {
  const ids = getIdsListState(globalState);
  return ids.map(id => getCategoryByIdState(globalState, id));
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
