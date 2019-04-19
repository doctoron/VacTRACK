import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
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
      </div>
    );
  }
}

export default App;
