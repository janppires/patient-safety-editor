import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Jumbotron } from 'reactstrap';
import DashboardCard from '../DashboardCard';
import { getDashboardItems } from '../../../redux/modules/dashboard';
import styles from './styles';

class Dashboard extends PureComponent {
  render() {
    const {dashboardItems} = this.props;
    return (
      <div style={styles.container}>
        <Jumbotron>
            <h1 className="display-4">Patient Safety Manual Editor</h1>
            <p className="lead">This App is a support tool, provided for reference only.</p>
            <hr className="my-2" />
            <p>It is your responsability to ensure you are using the most up to date version of this application.</p>
            <div style={styles.content}>
                <Row>
                  {dashboardItems.map((item, index) => 
                    <Col key={index}>
                      <DashboardCard {...item}/>
                    </Col>
                  )}
                </Row>
            </div>
        </Jumbotron>
      </div>
    )
  }
}

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
)(Dashboard);