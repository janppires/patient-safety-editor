import { FETCH_TOPICS } from "../actions";

export default function list(state = [], action) {
  switch (action.type) {
    case FETCH_TOPICS:
      return action.payload.result;
    default:
      return state;
  }
}
