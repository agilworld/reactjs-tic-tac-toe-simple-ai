import React, { Component } from 'react';
import './App.css';
import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ textAlign: "center" }}>
          <h2>Tic Tac Toe</h2>
          <Board></Board>
        </header>
      </div>
    );
  }
}

export default App;