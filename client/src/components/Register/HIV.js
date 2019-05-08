import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem, Card } from 'reactstrap';

const HIV = (props) => {
    return (
      <div> 
        <br />
      <h5>What is your CD4 count?</h5>
        <FormGroup check id="HIV1">
          <Label check>
            <Input type="checkbox" />{' '}
            Under 200
          </Label>
        </FormGroup>
        <FormGroup check id="HIV2">
          <Label check>
            <Input type="checkbox" />{' '}
            200 or higher
          </Label>
        </FormGroup>
      </div>
    );
  };
  
  export default HIV;