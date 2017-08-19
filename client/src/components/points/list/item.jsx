import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

export default class PointItem extends PureComponent {
  static propTypes = {
    point: PropTypes.object.isRequired
  };
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
