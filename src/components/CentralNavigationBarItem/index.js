import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const iconSize = 100;

const CentralNavigationBarItem = ({details}) => {
  const {title, description, Icon, path} = details;
  return (
      <div>
        <Card block>
          <Icon width='100%' height={iconSize} />
          
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <Button tag={Link} to={`${path}`}>Open</Button>
        </Card>
      </div>
  )
}

export default CentralNavigationBarItem;