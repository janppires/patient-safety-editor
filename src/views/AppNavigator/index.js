import React from 'react';
import { Container } from 'reactstrap';
import AppRouter from '../AppRouter';
import AppNavBar from '../../components/AppNavBar';

const AppNavigator = () => (
  <Container>
    <AppNavBar/>
    <AppRouter/>
  </Container>
)

export default AppNavigator;