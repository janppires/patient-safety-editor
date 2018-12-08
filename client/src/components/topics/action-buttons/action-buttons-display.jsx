import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Icon from "components/common/icon";

class ActionButtons extends PureComponent {
  handleClick = (ev, icon) => {
    console.log(ev);
    ev.stopPropagation();
    const { goTo, dispatchAction } = this.props;
    if (icon.url) {
      goTo(icon.url);
    } else if (icon.action) {
      dispatchAction(icon.action);
    }
  };

  render() {
    const { icons } = this.props;
    return (
      <div>
        {icons.map(icon =>
          <Icon
            key={icon.name}
            onClick={ev => this.handleClick(ev, icon)}
            style={styles.icon}
            name={icon.name}
            height={18}
            width={18}
          />
        )}
      </div>
    );
  }
}

export default ActionButtons;

const styles = {
  icon: {
    cursor: "pointer",
    marginLeft: 10
  }
};
