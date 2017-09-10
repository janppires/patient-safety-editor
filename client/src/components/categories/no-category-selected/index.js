import React from "react";
import { Alert } from "reactstrap";

const NoCategorySelected = () => {
  return (
    <div style={styles.container}>
      <Alert className="text-center" color="warning">
        Please select one category from the list
      </Alert>
    </div>
  );
};

export default NoCategorySelected;

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
};
