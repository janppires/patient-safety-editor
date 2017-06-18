import React from 'react';
import { Col, Row } from 'reactstrap';
import logo from '../../assets/images/nhs_logo_10mm_blue.jpg';
import styles from './styles';

const NHSLogo = ({className}) => {
  return (
    <div className={className} style={styles.container}>
      <div style={styles.text}>
        <div><strong>Bedford Hospital</strong></div>
        <div style={styles.subText}>NHS Trust</div>
      </div>
      <img style={styles.image} height={30} src={logo} alt='NHS'/>
    </div>
  )
}

export default NHSLogo;