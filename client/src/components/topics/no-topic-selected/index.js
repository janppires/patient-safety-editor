import React from "react";
import { Alert } from "reactstrap";

const NoTopicSelected = () => {
  return (
    <div style={styles.container}>
      <Alert className="text-center" color="warning">
        Please select one topic from the list
      </Alert>
    </div>
  );
};

export default NoTopicSelected;

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
};
