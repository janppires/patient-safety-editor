import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import UUID from "node-uuid";
import ModifyTopicDialog from "../ModifyTopicDialog";

const getEmptyTopic = () => ({
  name: "",
  icon: ""
});

class CreateTopicDialog extends PureComponent {
  static propTypes = {
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    submit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      topic: getEmptyTopic()
    };
  }

  handleSubmit = topic => {
    const newTopic = Object.assign({}, topic, { id: UUID.v4() });
    this.props.submit(newTopic);
    this.setState({ topic: getEmptyTopic() });
  };

  render() {
    return (
      <div>
        <ModifyTopicDialog
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

export default CreateTopicDialog;
