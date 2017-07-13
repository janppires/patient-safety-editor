import React, { Component } from 'react';
import TopicsListHeader from '../TopicsListHeader';
import CreateTopicModal from '../CreateTopicModal';

class TopicsListHeaderContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  }
  handleToggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <TopicsListHeader onAddTopic={this.handleToggleModal}/>
        <CreateTopicModal toggle={this.handleToggleModal} isOpen={this.state.modal}/>
      </div>
    );
  }
}

export default TopicsListHeaderContainer;