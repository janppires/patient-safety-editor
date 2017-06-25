import React from 'react';
import { Col, Row } from 'reactstrap';
import CentralNavigationBarItem from '../CentralNavigationBarItem';

const navigationItems = [
    {
        title: 'Edit Topics',
        subtitle: 'blablba',
        description: 'Edit all the topics',
        icon: 'MdBorderColor',
        path: '/edit'
    }, {
        title: 'Show Topics',
        subtitle: 'blebleble',
        description: 'Show all the topics',
        icon: 'MdFormatListBulleted',
        path: '/show'
    }
]

const renderItem = (details, index) => {
  return (
    <Col key={index}>
      <CentralNavigationBarItem details={details}/>
    </Col>
  )
}

const CentralNavigationBar = () => (
  <Row>
      {navigationItems.map(renderItem)}
  </Row>
)

export default CentralNavigationBar;
