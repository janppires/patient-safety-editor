import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import TopicsList from "../TopicsList";
import PointsList from "../../points/PointsList";
import { fetchTopics } from "../../../redux/modules/topics/actions";
import styles from "./styles";

class TopicsPage extends Component {
  componentWillMount() {
    this.props.fetchTopics();
  }

  render() {
    return (
      <Container className="bg-faded" style={styles.container}>
        <Row style={styles.row}>
          <Col xs="6">
            <TopicsList />
          </Col>
          <Col xs="6">
            <p>Please select one Topic</p>
            <Route path={this.props.match.url + "/5"} component={PointsList} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    fetchTopics: () => dispatch(fetchTopics())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsPage);
