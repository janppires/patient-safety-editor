import React, { Component } from "react";
import ModifyTopicModal from "../ModifyTopicModal";

class CreateTopicModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: {
        name: "",
        icon: ""
      }
    };
  }

  handleSubmit = topic => {
    console.log("weeee", topic);
  };

  render() {
    return (
      <div>
        <ModifyTopicModal
          mode="create"
          submit={this.handleSubmit}
          topic={this.state.topic}
          toggle={this.props.toggle}
          isOpen={this.props.isOpen}
        />
      </div>
    );
  }
}

export default CreateTopicModal;
