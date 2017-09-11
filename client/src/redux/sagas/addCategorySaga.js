import { take, call, apply, put } from "redux-saga/effects";
import { ADD_CATEGORY, setCategory } from "redux/modules/categories";

export function* addCategorySaga() {
  const { payload } = yield take(ADD_CATEGORY);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };
  const response = yield call(fetch, `/categories`, options);
  const category = yield apply(response, response.json);
  yield put(setCategory(category));
}
