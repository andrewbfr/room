import React, { Component } from 'react';
import Clock from './components/Clock';
import Hello from './components/Hello';
import User from './components/User';
import './App.css';







class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Hello/>
        <User/>
        <Clock/>
         
      </div>
    );
  }
};

export default App;
