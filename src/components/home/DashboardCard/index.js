import React from 'react';
import { Card } from 'reactstrap';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';
import Icon from '../../common/Icon';
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

export default DashboardCard;
