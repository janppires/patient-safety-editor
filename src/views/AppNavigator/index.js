import React from 'react';
import { Container } from 'reactstrap';
import {
  Route
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import HomeView from '../HomeView';
import TopicsView from '../TopicsView';
import { AppNavBar, Footer } from '../../components';
import styles from './styles';

const AppNavigator = ({history}) => (
  
  <ConnectedRouter history={history}>
    <div style={styles.container}>
        <AppNavBar/>
        <Container style={styles.content}>
          <Route exact path="/" component={HomeView}/>
          <Route path="/topics" component={TopicsView}/>
        </Container>
        <Footer/>
      </div>
  </ConnectedRouter>
)

export default AppNavigator;