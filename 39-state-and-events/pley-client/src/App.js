import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./HomePage"
import Navbar from "./Navbar"

class App extends Component {
  render(){
    return (
      <div className="app">
        <Navbar />
        <HomePage />
      </div>
    );
  }
}

export default App;
