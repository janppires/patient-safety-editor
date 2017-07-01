import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from './styles';

export default () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col>
            <p>{'Some footer text goes here!'}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};