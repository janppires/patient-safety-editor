import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import styles from './styles';

const propTypes = {
  topic: PropTypes.object.isRequired
}

const TopicItem = ({topic, ...attributes}) => {
  return (
    <ListGroupItem style={styles.container} tag="button" {...attributes}>
      <ListGroupItemHeading>{topic.name}</ListGroupItemHeading>
      <ListGroupItemText>
       Has {topic.points.length} points
      </ListGroupItemText>
    </ListGroupItem>
  )
}

TopicItem.propTypes = propTypes;

export default TopicItem;