import React from 'react';
import Axios from 'axios';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ListGroup,
  ListGroupItem,
  Card
}
  from 'reactstrap';
import Pregnancy from './Pregnancy';
import CD4 from './CD4';
// import App from '../../App';
import moment from 'moment';
// import PVRec from '../../Pages/PVRec'

//     This is the register component
export default class Register extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    pregnancy: "",
    dob: moment().subtract(19, "years").format('YYYY-MM-DD'),
    travelling: false,
    immunity: false,
    hiv: false,
    CD4: "",
    dormitory: false,
    healthCareWorker: false,
    conditions: false,
    otherFactors: false,
    zoster: false
  }
  handleChange = (event) => {
    // const { name, value } = event.target;
    // console.log('Gender onChange', value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    const registerData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      username: this.state.username,
      dob: this.state.dob,
      gender: this.state.gender,
      pregnancy: this.state.pregnancy,
      travelling: this.state.travelling,
      immunity: this.state.immunity,
      hiv: this.state.hiv,
      cd4: this.state.cd4,
      dormitory: this.state.dormitory,
      healthCareWorker: this.state.healthCareWorker,
      conditions: this.state.conditions,
      otherFactors: this.state.otherFactors,
      zoster: this.state.zoster
    }
    Axios.post('/api/members', registerData)
      .then(results => {
        console.log('Result:', results);
      })
  }

  render () {
    console.log(this.state)
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
          <Input type="password" name="password" id="password" placeholder="Make a Strong Password" onChange={this.handleChange} />
        </FormGroup>


        <FormGroup tag="fieldset" row>
          {/* <Card body inverese color="success">Adult Vaccine Assessment Tool</Card> */}
          {/* <legend className="col-form-label col-sm-2"><h5>Adult Vaccine Assessment Tool</h5></legend> */}
          <Card body inverse color="primary">
            {/* <FormText color="has-success"> */}
            <FormText>
              <ListGroup>
                <ListGroupItem><strong>A. Answer the questions below</strong></ListGroupItem>
                <ListGroupItem><strong>B. Get a list of vaccines you may need based on your answers.<br /> (This list may include vaccines you've already had).</strong></ListGroupItem>
                <ListGroupItem><strong>C. Discuss the list with your doctor or health care professional.</strong></ListGroupItem>
              </ListGroup>
            </FormText>
          </Card>
        </FormGroup>
        <FormText>
          <h4>Questions:</h4>
          <h5>1. Are you?...</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="gender" value="male" onChange={this.handleChange} />{' '}
            Male
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="gender" value="female" onChange={this.handleChange} />{' '}
            Female
          </Label>
        </FormGroup>
        {this.state.gender === "female" ? <Pregnancy /> : null}
        <br />
        <FormText>
          <h5>2. Date of Birth (Some vaccines are age-related)</h5>
        </FormText>
        <FormGroup>
          <Input
            type="date"
            name="dob"
            value={this.state.dob}
            id="dob"
            placeholder="date placeholder"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormText>
          <h5>3. Will you be traveling outside the U.S. in the near future?</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="travelling" value="true" onChange={this.handleChange} />{' '}
            Yes
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="travelling" value="false" onChange={this.handleChange} />{' '}
            No
          </Label>
        </FormGroup>
        <br />
        <FormText>
          <h5>4. Do you have a weakened immune system due to illness or medications?</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="immunity" value="true" onChange={this.handleChange} />{' '}
            Yes
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="immunity" value="false" onChange={this.handleChange} />{' '}
            No
          </Label>
        </FormGroup>
        <br />

        <FormText>
          <h5>5. Do you have HIV infection?</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="hiv" value="true" onChange={this.handleChange} />{' '}
            Yes
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="hiv" value="false" onChange={this.handleChange} />{' '}
            No
            </Label>
        </FormGroup>
        {this.state.hiv === "true" ? <CD4 handleChange={this.handleChange} /> : null}
        <FormText>
          <br />
          <h5>6. Are you a first-year college student who lives in a college dormitory or a new military recruit?</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="dormitory" value="true" onChange={this.handleChange} />{' '}
            Yes
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="dormitory" value="false" onChange={this.handleChange} />{' '}
            No
            </Label>
        </FormGroup>
        <br />

        <FormText>
          <h5>7. Do you work with patients in a doctor’s office, hospital, nursing home, or other health care setting?</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="healthCareWorker" value="true" onChange={this.handleChange} />{' '}
            Yes
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="healthCareWorker" value="false" onChange={this.handleChange} />{' '}
            No
            </Label>
        </FormGroup>
        <br />
        <FormText>
          <h5>8. Do you have any of the following medical conditions:</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="conditions" value="true" onChange={this.handleChange} />{' '}
            Yes
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="conditions" value="false" onChange={this.handleChange} />{' '}
            No
            </Label>
        </FormGroup>
        <FormText>
          <ul className="condition-list">
            <li>Heart disease (for example, congestive heart failure)</li>
            <li>Diabetes mellitus type 1 or 2 (also called "sugar diabetes")</li>
            <li>Chronic lung disease (for example, Asthma and Chronic Obstructive Pulmonary Disease [COPD])?</li>
            <li>Kidney failure, end-stage renal disease, or are on dialysis</li>
            <li>Chronic liver disease (for example, cirrhosis or alcoholic liver disease) or hepatitis C infection</li>
            <li>Spleen has been damaged or removed (for example, due to surgery or sickle cell disease)</li>
            <li>Cancer or cancer treatment</li>
            <li>Bone marrow transplant</li>
          </ul>
        </FormText>

        <h5>9. Review the items listed below and indicate if ANY apply:</h5>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="otherFactors" value="true" onChange={this.handleChange} />{' '}
            Yes
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="otherFactors" value="false" onChange={this.handleChange} />{' '}
            No
            </Label>
        </FormGroup>
        <FormText>
          <ul className="condition-list">
            <li>Alcoholism</li>
            <li>Smoke cigarettes</li>
            <li>Man who has sex with men</li>
            <li>Homeless</li>
            <li>Factors that can increase your risk for hepatitis A or hepatitis B (such as travel to some countries, exposure to blood or bodily fluids, or exposure to contaminated food or drink)</li>
          </ul>
        </FormText>

        <FormText>
          <h5>10. Have you had the chickenpox disease or received the chickenpox vaccine?</h5>
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="zoster" value="true" onChange={this.handleChange} />{' '}
            Yes
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="zoster" value="false" onChange={this.handleChange} />{' '}
            No
            </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="zoster" value="false" onChange={this.handleChange} />{' '}
            Not Sure
            </Label>
        </FormGroup>
        <br />
        <FormGroup>
          {/* <h5>That's it! Just click "My Results" to find out which vaccines you may need.</h5> */}
          <Button color="success" href="/private" onClick={this.handleSubmit}>My Results</Button>
        </FormGroup>
      </Form >
    )
  }
}
