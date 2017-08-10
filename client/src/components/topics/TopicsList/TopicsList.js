import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ListHeader from "../../common/ListHeader";
import AddItemButton from "../../common/AddItemButton";
import TopicsListGroup from "./TopicsListGroup";
import CreateTopicDialog from "../CreateTopicDialog";

class TopicsList extends PureComponent {
  static propTypes = {
    topics: PropTypes.array.isRequired,
    selectedTopic: PropTypes.object,
    toggleAddTopicDialog: PropTypes.func.isRequired,
    onSelectTopic: PropTypes.func.isRequired,
    isAddTopicDialogOpen: PropTypes.bool.isRequired,
    addTopic: PropTypes.func.isRequired
  };
  render() {
    const {
      topics,
      selectedTopic,
      toggleAddTopicDialog,
      onSelectTopic,
      isAddTopicDialogOpen,
      addTopic
    } = this.props;
    return (
      <div>
        <ListHeader title={"Topics"}>
          <AddItemButton onClick={toggleAddTopicDialog} tooltip={"Add Topic"} />
        </ListHeader>
        <TopicsListGroup
          topics={topics}
          selectedTopic={selectedTopic}
          onSelectTopic={onSelectTopic}
        />
        <CreateTopicDialog
          toggle={toggleAddTopicDialog}
          isOpen={isAddTopicDialogOpen}
          submit={addTopic}
        />
      </div>
    );
  }
}

export default TopicsList;
