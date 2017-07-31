import { FETCH_TOPICS, ADD_TOPIC } from "../actions";

export default function list(state = [], { type, payload }) {
  switch (type) {
    case FETCH_TOPICS:
      return payload.result;
    case ADD_TOPIC:
      return [...state, payload.id];
    default:
      return state;
  }
}
