import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "components/common/button";

class AddItemButton extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { onClick, tooltip, id } = this.props;
    return (
      <div>
        <Button
          id={id}
          color="danger"
          tooltip={{ text: tooltip }}
          onClick={onClick}
        >
          +
        </Button>
      </div>
    );
  }
}

export default AddItemButton;
