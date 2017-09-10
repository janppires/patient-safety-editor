import React from "react";
import { Alert } from "reactstrap";
import PropTypes from "prop-types";

const propTypes = {
  category: PropTypes.object.isRequired
};

const PointsListEmpty = props => {
  const { category } = props;
  return (
    <div style={styles.container}>
      <Alert className="text-center" color="warning">
        {category.name} <strong> is empty.</strong> Please add a new Point.
      </Alert>
    </div>
  );
};

PointsListEmpty.propTypes = propTypes;

export default PointsListEmpty;

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
};
