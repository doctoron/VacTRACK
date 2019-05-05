import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// const Register = props =>
//   <div className={`Register${props.fluid ? "-fluid" : ""}`}>
//   {/* Need {props.children} in order to display all of the photos */}
//     {props.children}

//     This is the register component

export default class Register extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Questionnaire</legend>
          <FormGroup check>
            <Label check>
              <h5>1. Are you?...</h5>
              <Input type="radio" name="radio1" />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Female
            </Label>
          </FormGroup>

          <br/>

          <FormGroup check>
            <Label check>
              <h5>2. What year were you born? (some vaccines are age-related)</h5>
              {/* Add a year select dropdown */}
              <Input type="radio" name="radio1" />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Female
            </Label>
          </FormGroup>
          
          <br/>
          
          <FormGroup check>
            <Label check>
              <h5>3. Do you have a weakened immune system due to illness or medications?</h5>
              <Input type="radio" name="radio1" />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              No
            </Label>
          </FormGroup>
          
          <br/>
          
          <FormGroup check>
            <Label check>
              <h5>4. Do you have HIV infection?</h5>
              <Input type="radio" name="radio1" />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              No
            </Label>
          </FormGroup>
          
          <br/>
          
          <FormGroup check>
            <Label check>
              <h5>Are you a first-year college student who lives in a college dormitory or a new military recruit?</h5>
              <Input type="radio" name="radio1" />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              No
            </Label>
          </FormGroup>
          
          <br/>
          
          <FormGroup check>
            <Label check>
              <h5>Do you work with patients in a doctor’s office, hospital, nursing home, or other health care setting?</h5>
              <Input type="radio" name="radio1" />{' '}
              Yes
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              No
            </Label>
          </FormGroup>
          
          <br/>
          
          <FormGroup check>
            <Label check>
              <h5>Are you?...</h5>
              <Input type="radio" name="radio1" />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Female
            </Label>
          </FormGroup>
          
          <br/>
          
          <FormGroup check>
            <Label check>
              <h5>Are you?...</h5>
              <Input type="radio" name="radio1" />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Female
            </Label>
          </FormGroup>
          
          <br/>
          
          <FormGroup check>
            <Label check>
              <h5>Are you?...</h5>
              <Input type="radio" name="radio1" />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Female
            </Label>
          </FormGroup>
          
          <br/>
          
          <FormGroup check>
            <Label check>
              <h5>Are you?...</h5>
              <Input type="radio" name="radio1" />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Female
            </Label>
          </FormGroup>
          
          <br/>
          
          <FormGroup check>
            <Label check>
              <h5>Are you?...</h5>
              <Input type="radio" name="radio1" />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Female
            </Label>
          </FormGroup>

          {/* <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup> */}
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

// export default Register;