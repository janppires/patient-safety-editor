import { SET_SELECTED_TOPIC, GET_SELECTED_TOPIC } from "../actions";

export default (state = null, action) => {
  switch (action.type) {
    case SET_SELECTED_TOPIC:
      return action.payload;
    case GET_SELECTED_TOPIC:
      return state;
    default:
      return state;
  }
};
