import React from 'react';
import CentralNavigationBar from '../../components/CentralNavigationBar';
import { Container, Jumbotron } from 'reactstrap';
import styles from './styles';

const Home = () => (
    <div style={styles.container}>
        <Jumbotron>
            <h1>Welcome to Patient Safety content management app.</h1>
            <div style={styles.content}>
                <CentralNavigationBar/>
            </div>
        </Jumbotron>
        
        
    </div>
)

export default Home;