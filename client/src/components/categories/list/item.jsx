import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

export default class CategoryItem extends PureComponent {
  static propTypes = {
    category: PropTypes.object.isRequired
  };

  renderPointsText = category => {
    return category.points
      ? `Has ${category.points.length} points`
      : "No points added!";
  };

  render() {
    const { category, ...attributes } = this.props;
    return (
      <ListGroupItem
        className="d-flex flex-column align-items-start"
        tag="button"
        {...attributes}
      >
        <ListGroupItemHeading>
          {category.name}
        </ListGroupItemHeading>
        <ListGroupItemText>
          {this.renderPointsText(category)}
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
}
