import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Cards from '../Cards';

const FluidJumbo = (props) => {
  return (
    // <div>
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            <Col xs="6" sm="4"><Cards /></Col>
            <Col xs="6" sm="4"><Cards /></Col>
            <Col sm="4"><Cards /></Col>
          </Row>
        </Container>
      </Jumbotron>
    // </div>
  );
};

export default FluidJumbo;