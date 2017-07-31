import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import TopicsListGroup from "./TopicsListGroup";
import CreateTopicModal from "../CreateTopicModal";

class TopicsList extends PureComponent {
  static propTypes = {
    topics: PropTypes.array.isRequired,
    selectedTopic: PropTypes.object,
    toggleAddTopicModal: PropTypes.func.isRequired,
    onSelectTopic: PropTypes.func.isRequired,
    isAddTopicModalOpen: PropTypes.bool.isRequired,
    addTopic: PropTypes.func.isRequired
  };
  render() {
    const {
      topics,
      selectedTopic,
      toggleAddTopicModal,
      onSelectTopic,
      isAddTopicModalOpen,
      addTopic
    } = this.props;
    return (
      <div>
        <Header onAddTopic={toggleAddTopicModal} />
        <TopicsListGroup
          topics={topics}
          selectedTopic={selectedTopic}
          onSelectTopic={onSelectTopic}
        />
        <CreateTopicModal
          toggle={toggleAddTopicModal}
          isOpen={isAddTopicModalOpen}
          submit={addTopic}
        />
      </div>
    );
  }
}

export default TopicsList;
