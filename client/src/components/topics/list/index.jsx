import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getTopics, getTopic, addTopic } from "redux/modules/topics";
import ListHeader from "components/common/list-header";
import AddItemButton from "components/common/add-item-button";
import TopicsListGroup from "components/topics/list/list-group";
import CreateTopicDialog from "components/topics/create-dialog";

export class TopicsList extends PureComponent {
  static propTypes = {
    topics: PropTypes.array.isRequired,
    selectedTopic: PropTypes.object,
    addTopic: PropTypes.func.isRequired
  };

  state = {
    modal: false
  };

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
      <div style={styles.container}>
        <ListHeader title={"Topics"}>
          <AddItemButton
            onClick={this.handleToggleModal}
            tooltip={"Add Topic"}
          />
        </ListHeader>
        <TopicsListGroup
          topics={topics}
          selectedTopic={selectedTopic}
          onSelectTopic={this.handleSelectTopic}
        />
        <CreateTopicDialog
          toggle={this.handleToggleModal}
          isOpen={this.state.modal}
          submit={addTopic}
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
  connect(mapStateToProps, mapDispatchToProps)(TopicsList)
);

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  }
};
