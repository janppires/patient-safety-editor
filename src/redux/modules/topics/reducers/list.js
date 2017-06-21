import { GET_TOPICS } from '../actions';

export default function list (state = [], action) {
  switch (action.type) {
    case GET_TOPICS:
      return action.payload.result;
    default:
      return state
  }
}