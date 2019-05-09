import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const CD4 = (props) => {
  return (
    <div>
      <br />
      <b>What is your CD4 count?</b>
      <FormGroup check >
        <Label check>
          <Input type="radio" name="cd4count" value="<200" onChange={props.handleChange} />{' '}
          Under 200
          </Label>
      </FormGroup>
      <FormGroup check >
        <Label check>
          <Input type="radio" name="cd4count" value=">200" onChange={props.handleChange} />{' '}
          200 or higher
          </Label>
      </FormGroup>
    </div>
  );
};

export default CD4;