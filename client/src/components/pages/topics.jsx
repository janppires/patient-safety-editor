import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Row, Container } from "reactstrap";
import TopicsList from "components/topics/list";
import PointsList from "components/points/list";
import NoTopicSelected from "components/topics/no-topic-selected";
import { fetchTopics } from "redux/modules/topics";

export class TopicsPage extends Component {
  static propTypes = {
    fetchTopics: PropTypes.func.isRequired
  };

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
          <Col xs="6" style={styles.list}>
            <TopicsList />
          </Col>
          <Col xs="6" style={styles.list}>
            {showPointsList ? <PointsList /> : <NoTopicSelected />}
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
