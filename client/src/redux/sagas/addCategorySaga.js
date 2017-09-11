import { take, call, apply, put } from "redux-saga/effects";
import { ADD_CATEGORY, setCategory } from "redux/modules/categories";
import { setStatus } from "redux/modules/app-status";

export function* addCategorySaga() {
  const { payload } = yield take(ADD_CATEGORY);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };
  let response = yield call(fetch, `/categories`, options);
  response = yield apply(response, response.json);

  if (response.status) {
    yield put(setStatus(response));
  } else {
    yield put(setCategory(response));
  }
}
