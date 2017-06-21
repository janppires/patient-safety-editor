import React from 'react';
import { Container } from 'reactstrap';
import {
  Route
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Home from '../Home';
import TopicsView from '../TopicsView';
import AppNavBar from '../../components/AppNavBar';

const AppNavigator = ({history}) => (
  <ConnectedRouter history={history}>
    <Container>
      <AppNavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/topics" component={TopicsView}/>
    </Container>
  </ConnectedRouter>
)

export default AppNavigator;