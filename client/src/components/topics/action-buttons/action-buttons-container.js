import { connect } from "react-redux";
import { push } from "react-router-redux";
import ActionButtons from "./action-buttons-display";
import { getTopicIconsActions } from "./icons-actions";

const mapStateToProps = (state, props) => {
  const { category, topic } = props;
  return {
    icons: getTopicIconsActions(category.nameId, topic.nameId)
  };
};

const mapDispatchToProps = dispatch => ({
  goTo: url => dispatch(push(url)),
  dispatchAction: action => dispatch(action)
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);
