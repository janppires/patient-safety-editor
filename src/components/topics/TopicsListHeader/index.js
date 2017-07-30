import React, { PureComponent } from 'react';
import Button from '../../common/Button';

class TopicsListHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.tooltip = {text: 'Add Topic'};
    this.title = 'Topics';
  }

  render() {
    const { onAddTopic } = this.props;
    return (
      <div className='d-flex justify-content-between align-items-center my-2'>
        <h2>{this.title}</h2>
        <Button 
          id={this.title} 
          color='danger'
          tooltip={this.tooltip}
          onClick={onAddTopic}
        >
        +
        </Button>
      </div>
    );
  }
}

export default TopicsListHeader;