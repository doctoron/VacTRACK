import React, { Component } from 'react';
import './App.css';
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
      name: "",
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
          <h3>#vaccinationswork</h3>
        </Jumbotron>
        <br />
        <h2>Health Science News Below:</h2>
        <FluidJumbo />
    
      </div>
    );
  }
}

export default App;
