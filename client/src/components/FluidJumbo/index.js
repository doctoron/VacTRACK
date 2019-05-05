import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const FluidJumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
            <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
            <Col sm="4">.col-sm-4</Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default FluidJumbo;