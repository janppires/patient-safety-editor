import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Col, Row, Container } from 'reactstrap';
import TopicsList from '../../components/TopicsList';
import PointsList from '../../components/PointsList';
import styles from './styles';

const topics = [
  {id: 1, name: 'funny topic', points: [{}]},
  {id: 2, name: 'other', points: [{}]}
];

class TopicsView extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTopic: null
    }
  }
  render() {
    return (
      <Container>
        <Row style={styles.row}>
          <Col xs="6">
            <TopicsList topics={topics} selectedTopic={this.state.selectedTopic} onSelectTopic={(topic) => this.setState({selectedTopic: topic})}/>
          </Col>
          <Col xs="6">
            <Route path={this.props.match.url + "/5"} component={PointsList}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TopicsView;