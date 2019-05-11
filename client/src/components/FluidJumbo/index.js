import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Cards from '../Cards/cards.js';

const FluidJumbo = (props) => {
  return (
    // <div>
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            <Col sm="4"><Cards /></Col>
            <Col sm="4"><Cards /></Col>
            <Col sm="4"><Cards /></Col>
          </Row>
        </Container>
      </Jumbotron>
    // </div>
  );
};

export default FluidJumbo;