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
          {/* <Button>Test</Button> */}
        </header>
        <Jumbotron>
        <RoundAbout />
          <h1>#vaccinationswork</h1>
        </Jumbotron>
        <br />
        <h3>Health Science News Below:</h3>
        <FluidJumbo />
    
      </div>
    );
  }
}

export default App;
