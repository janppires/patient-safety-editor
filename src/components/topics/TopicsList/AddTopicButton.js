import React, { PureComponent } from "react";
import Button from "../../common/Button";

class AddTopicButton extends PureComponent {
  constructor(props) {
    super(props);
    this.tooltip = { text: "Add Topic" };
  }
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <Button
          id={"add-topic-button"}
          color="danger"
          tooltip={this.tooltip}
          onClick={onClick}
        >
          +
        </Button>
      </div>
    );
  }
}

export default AddTopicButton;
