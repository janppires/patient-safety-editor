import { delay } from "redux-saga";

export function* randomSaga() {
  while (true) {
    yield delay(1000);
    console.info("user saga loop");
  }
}
