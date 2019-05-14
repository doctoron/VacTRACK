import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import PrivateRoute from './components/Auth/PrivateRoute';
import PVRec from './Pages/PVRec';
import Login from './components/LoginModal/Login';
import MenuBar from './components/MenuBar';
import Home from './Pages/Home';
import Register from './components/Register'
// import FluidJumbo from './components/FluidJumbo';
// import RoundAbout from './components/RoundAbout';
// import { Jumbotron, Button, Alert, Fade } from 'reactstrap';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false,
      authenticated: false,
      username: ''
    }
    this.connectToServer = this.connectToServer.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  connectToServer () {
    fetch('/login');
  }

  componentDidMount () {
    this.connectToServer();
  }

  toggle (e) {
    e.preventDefault();
    console.log('this was clicked');
    this.setState({
      isOpen: !this.state.isOpen,
      authenticated: !this.state.authenticated
    }, ()=> {
      if(!this.state.authenticated){
        sessionStorage.removeItem('authenticated');
      }
    });
  }

  render () {
    return (
      <div className="App">
        <Router>
          <div>
            <MenuBar auth={this.state.authenticated} toggle={this.toggle} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={() => <Login history={this.props.history} showModal={this.state.isOpen} toggle={this.toggle} />} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/private" component={PVRec} />
            </Switch>
            {/* <AuthButton /> */}

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

      </div>
    );
  }
}

export default App;
