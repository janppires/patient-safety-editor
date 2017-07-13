import React from 'react';
import { Container } from 'reactstrap';
import AppNavBar from '../AppNavBar';
import Footer from '../Footer';
import styles from './styles';

const Layout = ({children}) => {
  return (
    <div style={styles.container}>
      <AppNavBar/>
      <Container style={styles.content}>
        {children}
      </Container>
      <Footer/>
    </div>
  );
};

export default Layout;