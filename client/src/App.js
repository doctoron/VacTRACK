import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from './components/MenuBar';
import FluidJumbo from './components/FluidJumbo'
import RoundAbout from './components/RoundAbout'
import { Jumbotron, Button, Alert, Fade } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import PrivateRoute from './components/Auth/PrivateRoute';
import PVRec from './Pages/PVRec';
import Login from './components/Login';
import MenuBar from './components/MenuBar';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);

  }

  toggle (e) {
    e.preventDefault();
    console.log('this was clicked');
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return (
      <div className="App">
        <Router>
          <div>
            <MenuBar toggle={this.toggle} />
            <Switch>
              {/* <Route exact path="/public" component={App} /> */}
              <Route exact path="/login" component={() => <Login showModal={this.state.isOpen} toggle={this.toggle} />} />
              <PrivateRoute path="/pvr" component={PVRec} />
            </Switch>
            {/* <AuthButton /> */}
            {/* <ul>
          <li>
            <Link to="/public">Public Page With All Links to Newsfeeds, CDC and WHO will be active</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page Contains Personal Vaccination Information</Link>
          </li>
        </ul> */}

          </div>
        </Router>
        {/* <header className="App-header">
          <NavBar name={this.state.name} />
        </header>
        <Jumbotron>
        <RoundAbout />
          <h3>#vaccineswork</h3>
        </Jumbotron>
        <br />
        <h2>Health Science News Below:</h2>
        <FluidJumbo /> */}

      </div>
    );
  }
}

export default App;
