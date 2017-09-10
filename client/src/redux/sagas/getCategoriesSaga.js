import { normalize } from "normalizr";
import { take, put, call, apply } from "redux-saga/effects";
import fetch from "isomorphic-fetch";
import {
  FETCHING,
  FETCHED,
  GET_CATEGORIES,
  setCategories,
  setFechingStatus
} from "redux/modules/categories";
import { categoriesSchema } from "schemas";

export function* getCategoriesSaga() {
  yield take(GET_CATEGORIES);
  yield put(setFechingStatus(FETCHING));
  const response = yield call(fetch, `/categories`);
  yield put(setFechingStatus(FETCHED));
  const data = yield apply(response, response.json);
  const categories = normalize(data, categoriesSchema);
  yield put(setCategories(categories));
}
