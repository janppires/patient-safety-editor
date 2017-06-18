import React from 'react';
import { Card, CardBlock, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const iconSize = 100;
const viewBox = '0 0 100 100'

const CentralNavigationBarItem = (props) => {
  const {title, description, Icon} = props.details;
  return (
      <div>
        <Card block>
          <Icon width='100%' height={iconSize} />
          
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <Button>Button</Button>
        </Card>
      </div>
  )
}

export default CentralNavigationBarItem;