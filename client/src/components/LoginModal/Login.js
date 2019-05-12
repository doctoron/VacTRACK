import React, { Component } from 'react';
import Axios from 'axios';
import RoundAbout from '../RoundAbout';
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
      closeAll: false,
      email: "",
      password: "",
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
      closeAll: false
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
    Axios.get('/api/users/', registerData)
      .then(results => {
        console.log('Attempted Login:', results);
        sessionStorage.setItem('authenticated', true);
      })
      .catch(error => {
        console.log(error.response);
        alert('Email and password combination not found.');
        this.toggleAll();
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
                  <Label for="Email">e-mail</Label>
                  <Input type="email" name="email" id="eEmail" placeholder="e-mail address" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="password" onChange={this.handleChange} />
                </FormGroup>
              </Form>
              <br />
              <Button color="primary" onClick={this.handleSubmit} type="submit"> Submit</Button>
            </ModalBody>
            <ModalFooter>
              <p><b>Not Yet Registered?</b></p>
              <Button color="success" onClick={this.toggleNested}> Get Started </Button> {' '}
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