import React, { Component } from 'react';
import logo from './carleatass.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="War-text">
            <p>
              Eat-aly my ass
            </p>
            <p>Ireland RULES!!!</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
