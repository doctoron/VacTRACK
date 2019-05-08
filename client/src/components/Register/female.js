import React from 'react';
import Axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem, Card } from 'reactstrap';

const Female = (props) => {
    return (
      <Form>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            I could become pregnant
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            I am pregnant now
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            I am not planning to become pregnant
          </Label>
        </FormGroup>
        . <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            I could not become pregnant
          </Label>
        </FormGroup>
      </Form>
    );
  };
  
  export default Female;