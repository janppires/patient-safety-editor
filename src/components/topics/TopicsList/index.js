import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getTopics, getTopic } from "../../../redux/modules/topics/reducers";
import { addTopic } from "../../../redux/modules/topics/actions";
import TopicsList from "./TopicsList";

class TopicsListContainer extends PureComponent {
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

  handleSelectTopic = topic => {
    this.props.history.push(`/topics/${topic.id}`);
  };

  render() {
    const { topics, selectedTopic, addTopic } = this.props;
    return (
      <div>
        <TopicsList
          topics={topics}
          selectedTopic={selectedTopic}
          toggleAddTopicDialog={this.handleToggleModal}
          onSelectTopic={this.handleSelectTopic}
          isAddTopicDialogOpen={this.state.modal}
          addTopic={addTopic}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    topics: getTopics(state),
    selectedTopic: getTopic(state, props.match.params.topicId)
  };
};

const mapDispatchToProps = dispatch => ({
  addTopic: topic => dispatch(addTopic(topic))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopicsListContainer)
);
