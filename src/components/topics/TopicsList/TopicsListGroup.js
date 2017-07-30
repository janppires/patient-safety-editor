import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ListGroup } from "reactstrap";
import TopicItem from "./TopicItem";

const propTypes = {
  topics: PropTypes.array.isRequired,
  selectedTopic: PropTypes.object,
  onSelectTopic: PropTypes.func.isRequired
};

class TopicsListGroup extends PureComponent {
  isTopicActive = (topic, selectedTopic) => {
    return topic === selectedTopic;
  };

  render() {
    const { topics, selectedTopic, onSelectTopic } = this.props;

    return (
      <ListGroup>
        {topics.map(topic =>
          <TopicItem
            key={topic.id}
            topic={topic}
            active={this.isTopicActive(topic, selectedTopic)}
            onClick={() => onSelectTopic(topic)}
          />
        )}
      </ListGroup>
    );
  }
}

TopicsListGroup.propTypes = propTypes;

export default TopicsListGroup;
