import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';

const Cards = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;