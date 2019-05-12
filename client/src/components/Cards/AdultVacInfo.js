import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const AdultVacInfo = (props) => {
  return (
    <div>
    <Card body inverse color="primary">
        <CardTitle>CDC News on Vaccinations </CardTitle>
        <CardText>Current Information on Vaccinations from the CDC</CardText>
        <Button color="secondary">Button</Button>
    </Card>
      </div>
  )
}

export default AdultVacInfo;