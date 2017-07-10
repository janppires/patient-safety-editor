import { FETCH_TOPICS } from '../actions';

export default function byId (state = {}, action) {
  switch (action.type) {
    case FETCH_TOPICS:
      return action.payload.entities.topics;
    default:
      return state
  }
}