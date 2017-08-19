import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getTopic, addTopic } from "redux/modules/topics";
import ListHeader from "components/common/list-header";
import AddItemButton from "components/common/add-item-button";
import PointsListGroup from "components/points/list/list-group";
import CreateTopicDialog from "components/topics/create-dialog";

export class PointsList extends PureComponent {
  static propTypes = {
    points: PropTypes.array.isRequired,
    selectedPoint: PropTypes.object,
    toggleAddPointModal: PropTypes.func.isRequired,
    onSelectPoint: PropTypes.func.isRequired,
    isAddPointModalOpen: PropTypes.bool.isRequired,
    addPoint: PropTypes.func.isRequired
  };

  state = {
    modal: false
  };

  handleToggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleSelectPoint = topic => {};

  render() {
    const { topic, selectedPoint, addPoint } = this.props;
    return (
      <div>
        <ListHeader title={"Points"}>
          <AddItemButton
            onClick={this.handleToggleModal}
            tooltip={"Add Point"}
          />
        </ListHeader>
        <PointsListGroup
          points={topic.points}
          selectedPoint={selectedPoint}
          onSelectPoint={this.handleSelectPoint}
        />
        <CreateTopicDialog
          toggle={this.handleToggleModal}
          isOpen={this.state.modal}
          submit={addPoint}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    topic: getTopic(state, props.match.params.topicId)
  };
};

const mapDispatchToProps = dispatch => ({
  addTopic: topic => dispatch(addTopic(topic))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PointsList)
);
