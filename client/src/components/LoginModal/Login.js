import React, { Component } from 'react';
import Axios from 'axios';
import RoundAbout from '../RoundAbout/RoundAbout';
import Register from  '../Register'
import {
  Button,
  Form,
  Label,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      email: "",
      password: "",
      username: "",
      closeAll: false,
      authenticated: false
    };

    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log("Login State:", this.setState);
  }

  toggle () {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested () {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: !this.state.closeAll
    });
  }

  toggleAll () {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  handleSubmit = (event) => {
    console.log('this was clicked');
    event.preventDefault();
    const registerData = {
      email: this.state.email,
      password: this.state.password
      // username: this.state.username
    }
    console.log('Captured login data', registerData);

    Axios.put('/api/Users/', registerData)
      .then(results => {
        console.log('Attempted Login:', results);
        sessionStorage.setItem('authenticated', true);
      })
      .catch(error => {
        console.log(error.response);
        alert('Email and password combination not found.');

      })
  }
  render () {
    console.log('Login Modal as props', this.props.showModal);
    return (
      <div>
        {this.props.showModal &&
          <Modal isOpen={this.props.showModal} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>MyVacTRACK-2 Login</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="Email">email</Label>
                  <Input type="email" name="email" id="eEmail" placeholder="email address" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="password" onChange={this.handleChange} />
                </FormGroup>
              </Form>
              <br />
              <Button color="primary" onClick={this.handleSubmit} type="submit"> Login</Button>
            </ModalBody>
            <ModalFooter>
              <p><b>Not Yet Registered?</b></p>
              <Button color="success" onClick={this.toggleNested}> Get Started </Button> {' '}
        {/* How do I get my registration form to link here? */}
              {console.log('Getting Started Button', this.toggleNested)}
              <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        }
        <RoundAbout />
      </div>
    )
  }
}