import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";

export default class StatusPanel extends Component {
  static propTypes = {
    clearStatus: PropTypes.func.isRequired
  };

  render() {
    let { status, clearStatus, show, style } = this.props;
    status = status || {};
    return (
      <div style={style}>
        <Alert color="danger" isOpen={show} toggle={clearStatus}>
          [{status.status}] {status.details}
        </Alert>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: "0.25rem"
  },
  row: {
    height: 600
  },
  list: {
    display: "flex",
    flex: 1
  }
};
