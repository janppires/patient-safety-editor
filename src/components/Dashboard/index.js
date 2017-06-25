import React, { PropTypes } from 'react';
import { Col, Row, Card, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

const navigationItems = [
    {
        title: 'Edit Topics',
        subtitle: 'blablba',
        description: 'Edit all the topics',
        icon: {name: 'MdBorderColor'},
        path: '/edit'
    }, {
        title: 'Show Topics',
        subtitle: 'blebleble',
        description: 'Show all the topics',
        icon: {name: 'MdFormatListBulleted'},
        path: '/show'
    }
]

const DashboardCard = ({title, description, icon, path}) => {
  return (
    <Card block>
      <Icon width='100%' {...icon}/>
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
      <Button tag={Link} to={path}>Open</Button>
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
