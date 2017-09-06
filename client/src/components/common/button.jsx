import React, { PureComponent } from "react";
import { Button as StrapButton, Tooltip } from "reactstrap";

export default class Button extends PureComponent {
  state = {
    tooltipOpen: false
  };

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  render() {
    const { tooltip, id, children, ...button } = this.props;
    return (
      <div style={styles.container}>
        <StrapButton id={id} {...button}>
          {children}
        </StrapButton>
        <Tooltip
          placement="bottom"
          isOpen={this.state.tooltipOpen}
          target={id}
          toggle={this.toggle}
          delay={{ show: 0, hide: 100 }}
        >
          {tooltip.text}
        </Tooltip>
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
