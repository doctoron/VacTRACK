import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem, Card } from 'reactstrap';

const Female = (props) => {
    return (
      <Form>
        <FormGroup check id="Female1">
          <Label check>
            <Input type="checkbox" />{' '}
            I could become pregnant
          </Label>
        </FormGroup>
        <FormGroup check id="Female2">
          <Label check>
            <Input type="checkbox" />{' '}
            I am pregnant now
          </Label>
        </FormGroup>
        <FormGroup check id="Female3">
          <Label check>
            <Input type="checkbox" />{' '}
            I am not planning to become pregnant
          </Label>
        </FormGroup>
        . <FormGroup check id="Female4">
          <Label check>
            <Input type="checkbox" />{' '}
            I could not become pregnant
          </Label>
        </FormGroup>
      </Form>
    );
  };
  
  export default Female;