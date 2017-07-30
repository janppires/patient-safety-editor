import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import styles from "./styles";

const propTypes = {
  topic: PropTypes.object.isRequired
};

class TopicItem extends PureComponent {
  render() {
    const { topic, ...attributes } = this.props;
    return (
      <ListGroupItem style={styles.container} tag="button" {...attributes}>
        <ListGroupItemHeading>
          {topic.name}
        </ListGroupItemHeading>
        <ListGroupItemText>
          Has {topic.points.length} points
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
}

TopicItem.propTypes = propTypes;

export default TopicItem;
