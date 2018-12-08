import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import ActionButtons from "components/topics/action-buttons";

export default class TopicItem extends PureComponent {
  static propTypes = {
    topic: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired
  };

  state = {
    isMouseOver: false
  };

  toggleMouseOver = () => {
    this.setState({ isMouseOver: !this.state.isMouseOver });
  };

  render() {
    const { topic, category, active, ...attributes } = this.props;
    const isActive = active || this.state.isMouseOver;
    return (
      <ListGroupItem
        className="d-flex flex-column align-items-start"
        tag="button"
        active={isActive}
        onMouseEnter={() => this.toggleMouseOver()}
        onMouseLeave={() => this.toggleMouseOver()}
        {...attributes}
      >
        <div className="d-flex w-100 justify-content-between align-items-center">
          <h5>
            {topic.name}
          </h5>
          {this.state.isMouseOver &&
            <ActionButtons topic={topic} category={category} />}
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </ListGroupItem>
    );
  }
}
