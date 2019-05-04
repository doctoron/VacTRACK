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
      </Form>
    );
  }
}
