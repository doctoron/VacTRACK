import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import image1 from '../../img/jump.jpg'
import image2 from '../../img/jump.jpg'
import image3 from '../../img/jump.jpg'

const Cards = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;