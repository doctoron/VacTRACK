import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const AdultVacInfo = (props) => {
  return (
    <div>
    <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
    </Card>
      </div>
  )
}

export default AdultVacInfo;