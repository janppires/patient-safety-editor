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
            <h1 className="display-4">Patient Safety Manual Editor</h1>
            <p className="lead">This App is a support tool, provided for reference only.</p>
            <hr className="my-2" />
            <p>It is your responsability to ensure you are using the most up to date version of this application.</p>
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