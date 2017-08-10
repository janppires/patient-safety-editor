import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Container } from "reactstrap";
import TopicsList from "../TopicsList";
import PointsList from "../PointsList";
import { fetchTopics } from "../../../redux/modules/topics/actions";
import styles from "./styles";

class TopicsPage extends Component {
  componentWillMount() {
    this.props.fetchTopics();
  }

  isTopicSelected = () => {
    return this.props.match.params.topicId !== undefined;
  };

  render() {
    const showPointsList = this.isTopicSelected();
    return (
      <Container className="bg-faded" style={styles.container}>
        <Row style={styles.row}>
          <Col xs="6">
            <TopicsList />
          </Col>
          <Col xs="6" className="d-flex flex-column justify-content-center">
            {showPointsList ? <PointsList /> : <p>Please select one topic</p>}
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
