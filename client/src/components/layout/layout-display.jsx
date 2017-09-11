import React, { Component } from "react";
import { Container } from "reactstrap";
import AppNavBar from "components/layout/navbar";
import Footer from "components/layout/footer";
import StatusPanel from "components/layout/status-panel";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div style={styles.container}>
        <AppNavBar />
        <Container style={styles.content}>
          <StatusPanel style={styles.status} />
          {children}
        </Container>
        <Footer />
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  status: {
    height: 60
  }
};
