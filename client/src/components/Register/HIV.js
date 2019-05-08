import React from 'react';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

const HIV = (props) => {
    return (
      <div> 
        <br />
      <FormText><b>What is your CD4 count?</b></FormText>
        <FormGroup check id="HIV1">
          <Label check>
            <Input type="checkbox" name="hiv" value="<200" onChange={props.handleChange}/>{' '}
            Under 200
          </Label>
        </FormGroup>
        <FormGroup check id="HIV2">
          <Label check>
          <Input type="checkbox" name="hiv" value=">200" onChange={props.handleChange}/>{' '}
            200 or higher
          </Label>
        </FormGroup>
      </div>
    );
  };
  
  export default HIV;