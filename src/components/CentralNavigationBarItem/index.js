import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

const iconSize = 50;

const CentralNavigationBarItem = ({details}) => {
  const {title, description, icon, path} = details;
  return (
      <div>
        <Card block>
          <Icon name={icon} width='100%' height={iconSize}/>
          
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <Button tag={Link} to={`${path}`}>Open</Button>
        </Card>
      </div>
  )
}

export default CentralNavigationBarItem;