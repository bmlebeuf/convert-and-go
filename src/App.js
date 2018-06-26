import React, { Component } from 'react';
import './App.css';
import ConvertApp from './ConvertApp/ConvertApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Convert & Go</h1>
        </header>
        <ConvertApp />
      </div>
    );
  }
}

export default App;
