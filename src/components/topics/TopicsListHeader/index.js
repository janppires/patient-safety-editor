import React from 'react';
import Button from '../../common/Button';

const TopicsListHeader = ({onAddTopic}) => {
  const tooltipText = 'Add Topic';
  const title = 'Topics';
  return (
    <div className='d-flex justify-content-between align-items-center my-2'>
      <h2>{title}</h2>
      <Button id={title} 
        color='danger'
        tooltip={{text: tooltipText}}
        onClick={onAddTopic}
        >+</Button>
    </div>
  );
};

export default TopicsListHeader;