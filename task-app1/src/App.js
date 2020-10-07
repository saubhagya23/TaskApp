import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App" data-testId="app-main-div">
        <Routes />
      </div>
    );
  }
}

export default App;
