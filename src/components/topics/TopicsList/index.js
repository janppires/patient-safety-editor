import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';

import TopicItem from '../TopicItem';
import styles from './styles';

const TopicsList = ({style, topics, selectedTopic, onSelectTopic}) => {

  const renderTopicItem = (topic) => {
    const active = selectedTopic === topic;
    return (
      <TopicItem 
        key={topic.id} 
        topic={topic}
        active={active}
        onClick={() => onSelectTopic(topic)}
      />
    )
  }

  const listItems = topics.map(renderTopicItem);

  return (
    <ListGroup style={{...style, ...styles.container}}>
      {listItems}
    </ListGroup>
  )
}

TopicsList.propTypes = {
  style: PropTypes.object,
  topics: PropTypes.array.isRequired
}

export default TopicsList;