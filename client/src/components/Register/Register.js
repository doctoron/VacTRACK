import React from 'react';
import Axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//     This is the register component

export default class Register extends React.Component {
  state = {
    email: "",
    username: "",
    password: ""
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const registerData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }
    Axios.post('/api/members', registerData)
      .then(results => {
        console.log('Result:', results);
      })
  }

  render () {
    return (
      <Form>
        <FormGroup>
          <Label for="username">username</Label>
          <Input type="text" name="username" id="username" placeholder="username" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>

          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        {/* <FormGroup>
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
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="email" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="Password" placeholder="password" onChange={this.handleChange} />
        </FormGroup>
        <Button onClick={this.handleSubmit}>Submit</Button>
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
        </FormGroup> */}

        <FormGroup tag="fieldset">
          <legend>Questionnaire</legend>

          <h5>1. Are you?...</h5>
          <FormGroup check>
            <Label check>
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

          <br />


          <h5>2. What year were you born? (some vaccines are age-related)</h5>
          <br />
          <h5><i>Add a year select dropdown</i></h5>
          {/* <FormGroup check>
            <Label check>
              Add a year select dropdown
              <Input type="radio" name="radio1" />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Female
            </Label>
          </FormGroup> */}

          <br />

          <h5>3. Will you be traveling outside the U.S. in the near future?</h5>
          <FormGroup check>
            <Label check>
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

          <br />

          <h5>4. Do you have a weakened immune system due to illness or medications?</h5>
          <FormGroup check>
            <Label check>
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

          <br />

          <h5>5. Do you have HIV infection?</h5>
          <FormGroup check>
            <Label check>
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

          <br />

          <h5>6. Are you a first-year college student who lives in a college dormitory or a new military recruit?</h5>
          <FormGroup check>
            <Label check>
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

          <br />

          <h5>7. Do you work with patients in a doctor’s office, hospital, nursing home, or other health care setting?</h5>
          <FormGroup check>
            <Label check>
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

          <br />

          <h5>8. Do you have any of these medical conditions?  Check all that apply to you.</h5>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Heart disease (for example, congestive heart failure)
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Diabetes mellitus type 1 or 2 (also called "sugar diabetes")
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Chronic lung disease (for example, asthma and chronic obstructive pulmonary disease [COPD])
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Kidney failure, end-stage renal disease, or on dialysis
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Chronic liver disease (for example, cirrhosis or alcoholic liver disease) or hepatitis C infection
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Spleen has been damaged or removed (for example, due to surgery or sickle cell disease)
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Cancer or cancer treatment
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Bone marrow transplant
          </Label>
          </FormGroup>

          <br />

          <h5>9. Review the items listed below and check those that apply to you:</h5>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Alcoholism
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Smoke cigarettes
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Man who has sex with men
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Homeless
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Factors that can increase your risk for hepatitis A or hepatitis B (such as travel to some countries, exposure to blood or bodily fluids, or exposure to contaminated food or drink)
          </Label>
          </FormGroup>

          <br />

          <h5>10. Have you had the chickenpox disease or received the chickenpox vaccine?</h5>
          <FormGroup check>
            <Label check>
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
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Not Sure
            </Label>
          </FormGroup>

          <br />

          {/* <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup> */}
        </FormGroup>

        {/* <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>

        </FormGroup> */}
        <FormGroup>
          <h5>That's it! Just click "My Results" to find out which vaccines you may need.</h5>
          <Button>My Results</Button>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
