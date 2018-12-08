import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ListGroup } from "reactstrap";
import TopicItem from "components/topics/list/item";

class TopicsListGroup extends PureComponent {
  static propTypes = {
    topics: PropTypes.array.isRequired,
    selectedTopic: PropTypes.object,
    selectedCategory: PropTypes.object,
    onSelectTopic: PropTypes.func.isRequired
  };

  isTopicActive = (topic, selectedTopic) => {
    return topic === selectedTopic;
  };

  render() {
    const {
      topics,
      selectedTopic,
      selectedCategory,
      onSelectTopic
    } = this.props;

    return (
      <ListGroup>
        {topics.map(topic =>
          <TopicItem
            key={topic.id}
            category={selectedCategory}
            topic={topic}
            active={this.isTopicActive(topic, selectedTopic)}
            onClick={() => onSelectTopic(topic)}
          />
        )}
      </ListGroup>
    );
  }
}

export default TopicsListGroup;
