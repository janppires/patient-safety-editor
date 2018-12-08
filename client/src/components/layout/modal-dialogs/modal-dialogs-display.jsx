import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import DeleteDialog from "components/common/delete-dialog";

export default class ModalDialogs extends PureComponent {
  static propTypes = {
  };

  render() {
    return (
      <div>
        <DeleteDialog />
      </div>
    );
  }
}
