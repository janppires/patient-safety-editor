import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ListGroup } from "reactstrap";
import TopicItem from "components/topics/list/item";

export default class TopicsListGroup extends PureComponent {
  static propTypes = {
    topics: PropTypes.array.isRequired,
    selectedTopic: PropTypes.object,
    onSelectTopic: PropTypes.func.isRequired
  };

  isTopicActive = (topic, selectedTopic) => {
    return topic === selectedTopic;
  };

  render() {
    const { topics, selectedTopic, onSelectTopic } = this.props;

    return (
      <ListGroup>
        {topics.map(topic =>
          <TopicItem
            key={topic._id}
            topic={topic}
            active={this.isTopicActive(topic, selectedTopic)}
            onClick={() => onSelectTopic(topic)}
          />
        )}
      </ListGroup>
    );
  }
}
