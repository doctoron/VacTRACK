import {Component} from 'react';
import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Cards from '../Cards/cards.js';
import image1 from '../../img/jump.jpg'
import image2 from '../../img/ouch.jpg'
import image3 from '../../img/hand.jpg'

const FluidJumbo = (props) => {
  return (
    // <div>
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            <Col sm="4"><Cards name='image1' image={image1}/></Col>
            <Col sm="4"><Cards name='image2' image={image2}/></Col>
            <Col sm="4"><Cards name='image3' image={image3}/></Col>
          </Row>
        </Container>
      </Jumbotron>
    // </div>
  );
};

export default FluidJumbo;