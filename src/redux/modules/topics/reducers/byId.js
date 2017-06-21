import { GET_TOPICS } from '../actions';

export default function byId (state = {}, action) {
  switch (action.type) {
    case GET_TOPICS:
      return action.payload.entities.topics;
    default:
      return state
  }
}