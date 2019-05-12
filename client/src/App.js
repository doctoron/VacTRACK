import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import NavBar from './components/MenuBar';
import FluidJumbo from './components/FluidJumbo'
import RoundAbout from './components/RoundAbout'
import { Jumbotron, Button, Alert, Fade } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

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
      username: "",
      password: ""
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar name={this.state.name} />
        </header>
        <Jumbotron>
        <RoundAbout />
          <h3>#vaccineswork</h3>
        </Jumbotron>
        <br />
        <h2>Health Science News Below:</h2>
        <FluidJumbo />
    
=======
import NavBar from './components/NavBar/NavBar';
import Question from './components/Question';
const MultiStep = import from ('react-multistep')
// import Header from './components/Header/Header';
// import Disclaimer from './components/Disclaimer/Disclaimer';
// import Register from './components/Register/Register';
// import MultiStepForm from './components/Forms/MultiStepForm';
// import Container from './components/Container';
// import Row from './components/Row';
// import Column from './components/Column';


import './App.css';
class App extends Component {
  render () {

    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
>>>>>>> e5f26c927ea47a4b5f021550f77373297cd859f6
      </div>
    );
  }
}

export default App;
