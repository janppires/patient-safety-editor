import { FETCH_TOPICS, ADD_TOPIC } from "../actions";

export default function byId(state = {}, { type, payload }) {
  switch (type) {
    case FETCH_TOPICS:
      return payload.entities.topics;
    case ADD_TOPIC:
      return Object.assign({}, state, { [payload.id]: payload });
    default:
      return state;
  }
}
