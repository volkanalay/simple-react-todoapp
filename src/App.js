import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import ToDoApp from './components/todoapp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <ToDoApp></ToDoApp>
      </div>

    );
  }
}

export default App;
