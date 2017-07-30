import React, { PureComponent } from "react";
import { Container, Row, Col } from "reactstrap";

class Footer extends PureComponent {
  render() {
    return (
      <div className="sticky-footer bg-faded">
        <Container>
          <Row>
            <Col>
              <p>
                {"Some footer text goes here!"}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
