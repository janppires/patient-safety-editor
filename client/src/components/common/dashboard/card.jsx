import React, { PureComponent } from "react";
import { Card } from "reactstrap";
import Button from "components/common/button";
import { Link } from "react-router-dom";
import Icon from "components/common/icon";

export default class DashboardCard extends PureComponent {
  constructor(props) {
    super(props);
    this.tooltip = { text: props.description };
  }

  render() {
    const { title, icon, path } = this.props;
    return (
      <Card block>
        <div style={styles.icon}>
          <Icon width="100%" {...icon} />
        </div>
        <Button id={title} tag={Link} to={path} tooltip={this.tooltip}>
          {title}
        </Button>
      </Card>
    );
  }
}

const styles = {
  icon: {
    height: 100,
    display: "flex",
    alignItems: "center"
  }
};
