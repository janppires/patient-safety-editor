import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ListHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="d-flex justify-content-between align-items-center my-2">
        <h2>
          {this.props.title}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default ListHeader;
