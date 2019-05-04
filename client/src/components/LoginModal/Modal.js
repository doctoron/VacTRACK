/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Register from '../Register/Register';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
}
  from 'reactstrap';
// import Forms from '../Forms';
import Login from '../LoginModal/Login';

class LoginModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      username: "",
      password: "",
      authenticated: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
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

  render () {
    const { username, password, authenticated } = this.state;
    if (authenticated) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.name} MyVacTrack</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>MyVacTRACK Login</ModalHeader>
          <ModalBody>
            <div>
              <FormGroup>
                <Label for="Email">e-mail</Label>
                <Input type="email" name="email" id="eEmail" placeholder="e-mail address" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="Password" placeholder="password" />
              </FormGroup>
            </div>
            <br />
            <Button color="success" onClick={this.toggleNested}> Register </Button> First Visit?

            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>Registration Form</ModalHeader>
              <ModalBody>

                <Register />

              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Login</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;