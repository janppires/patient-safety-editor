import React from 'react';
import { Col, Row } from 'reactstrap';
import CentralNavigationBarItem from '../CentralNavigationBarItem';
import BorderColorIcon from 'mdi-react/BorderColorIcon';
import FormatListBulletedIcon from 'mdi-react/FormatListBulletedIcon';

const navigationItems = [
    {
        title: 'Edit Topics',
        subtitle: 'blablba',
        description: 'Edit all the topics',
        Icon: BorderColorIcon,
        path: '/edit'
    }, {
        title: 'Show Topics',
        subtitle: 'blebleble',
        description: 'Show all the topics',
        Icon: FormatListBulletedIcon,
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
