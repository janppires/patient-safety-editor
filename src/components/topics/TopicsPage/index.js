import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import TopicsList from "../TopicsList";
import TopicsListHeaderContainer from "../TopicsListHeaderContainer";
import PointsList from "../../points/PointsList";
import {
  fetchTopics,
  setSelectedTopic
} from "../../../redux/modules/topics/actions";
import {
  getTopics,
  getSelectedTopic
} from "../../../redux/modules/topics/reducers";
import styles from "./styles";

class TopicsPage extends Component {
  componentWillMount() {
    this.props.fetchTopics();
  }

  render() {
    const { topics, selectedTopic, setSelectedTopic } = this.props;
    return (
      <Container className="bg-faded" style={styles.container}>
        <Row style={styles.row}>
          <Col xs="6">
            <TopicsListHeaderContainer />
            <TopicsList
              topics={topics}
              selectedTopic={selectedTopic}
              onSelectTopic={topic => setSelectedTopic(topic.id)}
            />
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

const mapStateToProps = state => {
  return {
    topics: getTopics(state),
    selectedTopic: getSelectedTopic(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTopics: () => dispatch(fetchTopics()),
    setSelectedTopic: id => dispatch(setSelectedTopic(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsPage);
