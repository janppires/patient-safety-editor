import { normalize } from "normalizr";
import { take, put, call, apply } from "redux-saga/effects";
import fetch from "isomorphic-fetch";
import {
  FETCHING,
  FETCHED,
  GET_TOPICS,
  setTopics,
  setFechingStatus
} from "redux/modules/topics";
import { topicsSchema } from "schemas";

export function* getTopicsSaga() {
  yield take(GET_TOPICS);
  yield put(setFechingStatus(FETCHING));
  const response = yield call(fetch, `/topics`);
  yield put(setFechingStatus(FETCHED));
  const data = yield apply(response, response.json);
  const topics = normalize(data, topicsSchema);
  yield put(setTopics(topics));
}
