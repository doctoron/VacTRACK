/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Redirect } from 'react-router-dom';
import Register from '../Register/Register';
import {
  Button,
  Card,
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

class LoginModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      username: "",
      password: ""    };

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
        <Modal className={this.props.className}>
          <ModalHeader toggle={this.toggle}>MyVacTRACK Login</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="Email">e-mail</Label>
                <Input type="email" name="email" id="eEmail" placeholder="e-mail address" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="password" />
              </FormGroup>
            </Form>
            <br />
          </ModalBody>
        </Modal>
      </div>

    );
  }
}

export default LoginModal;

{ /* <Modal toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
<Card body inverse color="success">
  <ModalHeader>Registration Form
</ModalHeader>
</Card>
<ModalBody>
  <Register />
</ModalBody>

<ModalFooter>
  <Button color="primary" onClick={this.toggleNested}>My Results</Button>{' '}
</ModalFooter>
</Modal>
</ModalBody>
<ModalFooter>
Not Yet Registered?
<Button color="success" onClick={this.toggleNested}> Get Started </Button> {' '}
{console.log('Getting Started Button', this.toggleNested)}
<Button color="secondary" onClick={this.toggle}>Cancel</Button>
</ModalFooter> */}
