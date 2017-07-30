import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ListGroup } from "reactstrap";
import TopicItem from "../TopicItem";
import styles from "./styles";

const propTypes = {
  style: PropTypes.object,
  topics: PropTypes.array.isRequired
};

class TopicsList extends PureComponent {
  isTopicActive = (topic, selectedTopic) => {
    return topic === selectedTopic;
  };

  render() {
    const { style, topics, selectedTopic, onSelectTopic } = this.props;

    return (
      <ListGroup style={{ ...style, ...styles.container }}>
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

TopicsList.propTypes = propTypes;

export default TopicsList;
