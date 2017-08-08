import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

const propTypes = {
  point: PropTypes.object.isRequired
};

class PointItem extends PureComponent {
  render() {
    const { point, ...attributes } = this.props;
    return (
      <ListGroupItem
        className="d-flex flex-column align-items-start"
        tag="button"
        {...attributes}
      >
        <ListGroupItemHeading>
          {point.name}
        </ListGroupItemHeading>
        <ListGroupItemText>
          <p>Fantastic</p>
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
}

PointItem.propTypes = propTypes;

export default PointItem;
