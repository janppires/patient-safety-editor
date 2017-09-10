import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ListHeader from "components/common/list-header";
import AddItemButton from "components/common/add-item-button";
import TopicsListGroup from "components/topics/list/list-group";
import TopicsListEmpty from "components/topics/topics-list-empty";

export default class TopicsList extends PureComponent {
  static propTypes = {
    category: PropTypes.object.isRequired,
    selectedTopic: PropTypes.object,
    isTopicsListEmpty: PropTypes.bool.isRequired,
    addCategory: PropTypes.func.isRequired
  };

  handleAddTopic = () => {
    this.props.history.push(`/topics/new`);
  };

  handleSelectTopic = category => {};

  render() {
    const { isTopicsListEmpty, category, selectedTopic } = this.props;
    return (
      <div style={styles.container}>
        <ListHeader title={"Topics"}>
          <AddItemButton
            id="add topic button"
            onClick={this.handleAddTopic}
            tooltip={"Add Topic"}
          />
        </ListHeader>
        {isTopicsListEmpty
          ? <TopicsListEmpty category={category} />
          : <TopicsListGroup
              topics={category.topics}
              selectedTopic={selectedTopic}
              onSelectTopic={this.handleSelectTopic}
            />}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  }
};
