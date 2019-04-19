import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

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
