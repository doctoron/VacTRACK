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
