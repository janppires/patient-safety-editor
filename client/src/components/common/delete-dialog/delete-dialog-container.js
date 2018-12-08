import { connect } from "react-redux";
import { categorySelector, topicSelector } from "redux/modules/categories";
import {
  showDeleteDialogSelector,
  closeDeleteDialog
} from "redux/modules/dialogs";
import DeleteDialog from "./delete-dialog-display";

const mapStateToProps = (state, props) => {
  const deleteDialogInfo = showDeleteDialogSelector(state);
  const category = deleteDialogInfo
    ? categorySelector(state, deleteDialogInfo.categoryId)
    : null;
  const topic = deleteDialogInfo
    ? topicSelector(
        state,
        deleteDialogInfo.categoryId,
        deleteDialogInfo.topicId
      )
    : null;
  const showDialog = category != null;
  return {
    showDialog,
    category,
    topic
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDialog: () => dispatch(closeDeleteDialog())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteDialog);
