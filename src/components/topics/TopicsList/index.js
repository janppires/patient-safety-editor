import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getTopics, getTopic } from "../../../redux/modules/topics/reducers";
import Header from "./Header";
import TopicsListGroup from "./TopicsListGroup";
import CreateTopicModal from "../CreateTopicModal";

class TopicsList extends PureComponent {
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
    const { topics, selectedTopic } = this.props;
    return (
      <div>
        <Header onAddTopic={this.handleToggleModal} />
        <TopicsListGroup
          topics={topics}
          selectedTopic={selectedTopic}
          onSelectTopic={this.handleSelectTopic}
        />
        <CreateTopicModal
          toggle={this.handleToggleModal}
          isOpen={this.state.modal}
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

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopicsList)
);
