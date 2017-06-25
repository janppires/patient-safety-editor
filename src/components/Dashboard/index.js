import React, { Component, PropTypes } from 'react';
import { Col, Row, Card, CardTitle, CardText, Tooltip, Button as Button2 } from 'reactstrap';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import styles from './styles';

const DashboardCard = ({title, description, icon, path}) => {
  const tooltip = {
    text: description
  }
  return (
    <Card block>
      <div style={styles.icon}>
        <Icon width='100%' {...icon}/>
      </div>
      <Button id={title} tag={Link} to={path} tooltip={tooltip}>{title}</Button>
    </Card>
  )
}

const renderCard = (data, index) => {
  return (
    <Col key={index}>
      <DashboardCard {...data}/>
    </Col>
  )
}

const Dashboard = ({items}) => (
  <Row>
      {items.map(renderCard)}
  </Row>
)

Dashboard.propTypes = {
  items: PropTypes.array
}

Dashboard.defaultProps = {
  items: []
}

export default Dashboard;
