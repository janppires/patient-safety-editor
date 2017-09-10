import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button as StrapButton, UncontrolledTooltip } from "reactstrap";

export default class Button extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  render() {
    const { tooltip, id, children, ...button } = this.props;
    return (
      <div style={styles.container}>
        <StrapButton id={id} {...button}>
          {children}
        </StrapButton>
        <UncontrolledTooltip
          placement="bottom"
          target={id}
          delay={{ show: 0, hide: 100 }}
        >
          {tooltip.text}
        </UncontrolledTooltip>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  }
};
