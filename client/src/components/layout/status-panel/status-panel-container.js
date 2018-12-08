import { connect } from "react-redux";
import { clearStatus, statusSelector } from "redux/modules/app-status";
import StatusPanel from "./status-panel-display";

const mapStateToProps = (state, props) => {
  const status = statusSelector(state);
  const show = status !== null;
  return {
    status,
    show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearStatus: () => dispatch(clearStatus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusPanel);
