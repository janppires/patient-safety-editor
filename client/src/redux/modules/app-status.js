const SET_STATUS = "APP-STATUS/SET";
const CLEAR_STATUS = "APP-STATUS/CLEAR";

export default function reducer(state = null, { type, payload }) {
  switch (type) {
    case SET_STATUS:
      return payload;
    case CLEAR_STATUS:
      return null;
    default:
      return state;
  }
}

// actions
export const setStatus = status => ({
  type: SET_STATUS,
  payload: status
});

export const clearStatus = () => ({
  type: CLEAR_STATUS
});

// selectors
export const statusSelector = globalState => globalState.appStatus;
