import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Disclaimer from './components/Disclaimer/Disclaimer';
import Register from './components/Register/Register';
import MultiStepForm from './components/Forms/MultiStepForm';
import Container from './components/Container';

import './App.css';
class App extends Component {
  render(props) {

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}
          </p>
            <NavBar />
        </header>
      </div>
    );
  }
}

export default App;
