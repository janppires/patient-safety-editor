import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

export default class TopicItem extends PureComponent {
  static propTypes = {
    topic: PropTypes.object.isRequired
  };
  render() {
    const { topic, ...attributes } = this.props;
    return (
      <ListGroupItem
        className="d-flex flex-column align-items-start"
        tag="button"
        {...attributes}
      >
        <ListGroupItemHeading>
          {topic.name}
        </ListGroupItemHeading>
        <ListGroupItemText>
          <p>Fantastic</p>
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
}
