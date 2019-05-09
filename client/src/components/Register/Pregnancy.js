import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const Pregnancy = (props) => {
  return (
    <div>
      <br />
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="potential" value = "potential"/>{' '}
          I could become pregnant
          </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="pregnant" value = "pregnant"/>{' '}
          I am pregnant now
          </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="noplan" value = "noplan"/>{' '}
          I am not planning to become pregnant
          </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="cannot" value="cannot" />{' '}
          I could not become pregnant
          </Label>
      </FormGroup>
    </div>
  );
};

export default Pregnancy;