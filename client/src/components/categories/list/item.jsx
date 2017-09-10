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

  renderTopicsText = category => {
    return category.topics
      ? `Has ${category.topics.length} topics`
      : "No topics added!";
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
          {this.renderTopicsText(category)}
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
}
