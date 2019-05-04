import React, { Component } from 'react';
import './App.css';
import NavBar from './components/MenuBar';
import FluidJumbo from './components/FluidJumbo'
import RoundAbout from './components/RoundAbout'
import { Jumbotron, Button, Alert, Fade } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

// import { Button } from 'reactstrap';
// import Modal from "./components/Modal/loginModal";
// import Header from './components/Header/Header';
// import Disclaimer from './components/Disclaimer/Disclaimer';
// import Register from './components/Register/Register';
// import MultiStepForm from './components/Forms/MultiStepForm';
// import Container from './components/Container';
// import Row from './components/Row';
// import Column from './components/Column';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: "Denise"
    };
  }


  getUserInfo () {
    this.setState({
      name: "",
      password: ""
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar name={this.state.name} />
          {/* <Button>Test</Button> */}
        </header>
        <Jumbotron>
        <RoundAbout />
          <h1>Hello World!</h1>
        </Jumbotron>
        <br />
        <FluidJumbo />
    
      </div>
    );
  }
}

export default App;
