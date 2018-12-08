import { combineReducers } from "redux";

export const OPEN_DELETE_DIALOG = "DIALOGS/OPEN_DELETE_DIALOG";
export const CLOSE_DELETE_DIALOG = "DIALOGS/CLOSE_DELETE_DIALOG";

const showDeleteDialog = (state = null, { type, payload }) => {
  switch (type) {
    case OPEN_DELETE_DIALOG:
      return payload;
    case CLOSE_DELETE_DIALOG:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  showDeleteDialog
});

// actions
export const openDeleteDialog = (categoryId, topicId) => ({
  type: OPEN_DELETE_DIALOG,
  payload: {
    categoryId,
    topicId
  }
});

export const closeDeleteDialog = () => ({
  type: CLOSE_DELETE_DIALOG
});

// selectors
export const showDeleteDialogSelector = globalState => {
  return globalState.dialogs.showDeleteDialog;
};
