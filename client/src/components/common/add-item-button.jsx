import React, { PureComponent } from "react";
import Button from "components/common/button";

class AddItemButton extends PureComponent {
  constructor(props) {
    super(props);
    this.tooltip = { text: props.tooltip };
  }
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <Button
          id={"add-item-button"}
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

export default AddItemButton;
