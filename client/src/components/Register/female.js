import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Female = (props) => {
  return (
    <div>
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
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          I could not become pregnant
          </Label>
      </FormGroup>
    </div>
  );
};

export default Female;