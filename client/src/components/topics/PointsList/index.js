import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getTopic } from "../../../redux/modules/topics/reducers";
import { addTopic } from "../../../redux/modules/topics/actions";
import PointsList from "./PointsList";

class PointsListContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
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
        <PointsList
          points={topic.points}
          selectedPoint={selectedPoint}
          toggleAddPointDialog={this.handleToggleModal}
          onSelectPoint={this.handleSelectPoint}
          isAddPointDialogOpen={this.state.modal}
          addPoint={addPoint}
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
  connect(mapStateToProps, mapDispatchToProps)(PointsListContainer)
);
