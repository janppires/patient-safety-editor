import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import Dashboard from '../../components/Dashboard';
import { getDashboardItems } from '../../redux/modules/dashboard';
import styles from './styles';

const DashboardView = ({dashboardItems}) => {
    return (
    <div style={styles.container}>
        <Jumbotron>
            <h1>Welcome to Patient Safety content management app.</h1>
            <div style={styles.content}>
                <Dashboard items={dashboardItems}/>
            </div>
        </Jumbotron>
        
        
    </div>
)}

const mapStateToProps = state => {
  return {
    dashboardItems: getDashboardItems(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardView);