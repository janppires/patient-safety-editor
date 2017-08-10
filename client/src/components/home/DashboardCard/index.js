import React, { PureComponent } from "react";
import { Card } from "reactstrap";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import Icon from "../../common/Icon";
import styles from "./styles";

class DashboardCard extends PureComponent {
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

export default DashboardCard;
