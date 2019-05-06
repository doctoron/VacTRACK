import React from 'react';
import Axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem } from 'reactstrap';

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
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="username" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="username">e-mail</Label>
          <Input type="text" name="email" id="email" placeholder="e-mail address" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="password" onChange={this.handleChange} />
        </FormGroup>

        <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-2"><h5>Instructions</h5></legend>
          <FormText color="muted">
            <ListGroup>
              <ListGroupItem>A. Answer the questions below</ListGroupItem>
              <ListGroupItem>B. Get a list of vaccines you may need based on your answers.  (This list may include vaccines you've already had).</ListGroupItem>
              <ListGroupItem>C. Discuss the list with your doctor or health care professional.</ListGroupItem>
            </ListGroup>
          </FormText>
        </FormGroup>
        <FormText>
          <h5>1. Are you?...</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" onChange={this.handleChange} />{' '}
            Male
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" onChange={this.handleChange} />{' '}
            Female
          </Label>
        </FormGroup>
        <br />
        <FormText>
          <h5>2. What year were you born? (some vaccines are age-related)</h5>
        </FormText>
        <FormGroup>
          <h5><i>[Add a year select dropdown]</i></h5>
        </FormGroup>
        <FormText>
          <h5>3. Will you be traveling outside the U.S. in the near future?</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio3" />{' '}
            Yes
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio3" />{' '}
            No
          </Label>
        </FormGroup>
        <br />
        <FormText>
          <h5>4. Do you have a weakened immune system due to illness or medications?</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio4" />{' '}
            Yes
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio4" />{' '}
            No
          </Label>
        </FormGroup>
        <br />

        <FormText>
          <h5>5. Do you have HIV infection?</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio5" />{' '}
            Yes
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio5" />{' '}
            No
            </Label>
        </FormGroup>
        <br />

        <FormText>
          <h5>6. Are you a first-year college student who lives in a college dormitory or a new military recruit?</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio6" />{' '}
            Yes
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio6" />{' '}
            No
            </Label>
        </FormGroup>
        <br />

        <FormText>
          <h5>7. Do you work with patients in a doctor’s office, hospital, nursing home, or other health care setting?</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio7" />{' '}
            Yes
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio7" />{' '}
            No
            </Label>
        </FormGroup>
        <br />
        <FormText>
          <h5>8. Do you have any of these medical conditions?  Check all that apply to you.</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Heart disease (for example, congestive heart failure)?
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Diabetes mellitus type 1 or 2 (also called "sugar diabetes")?
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Chronic lung disease (for example, Asthma and Chronic Obstructive Pulmonary Disease [COPD])?
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Kidney failure, end-stage renal disease, or are on dialysis?
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Chronic liver disease (for example, cirrhosis or alcoholic liver disease) or hepatitis C infection?
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Spleen has been damaged or removed (for example, due to surgery or sickle cell disease)?
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Cancer or cancer treatment?
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Bone marrow transplant?
          </Label>
        </FormGroup>
        <br />
        <FormText>
          <h5>9. Review the items listed below and check those that apply to you:</h5>
        </FormText>
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
        <FormText>
          <h5>10. Have you had the chickenpox disease or received the chickenpox vaccine?</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio10" />{' '}
            Yes
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio10" />{' '}
            No
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio10" />{' '}
            Not Sure
            </Label>
        </FormGroup>
        <br />
        <FormGroup>
          <h5>That's it! Just click "My Results" to find out which vaccines you may need.</h5>
          <Button>My Results</Button>
          {/* <Button>Submit</Button> */}
        </FormGroup>
      </Form >
    )
  }
}








