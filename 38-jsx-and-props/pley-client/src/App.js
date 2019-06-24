import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./HomePage"

// functional component
// function App(props) {
//   return (
//     <div>
//       I'm an APP
//     </div>
//   );
// }

// class component
// 2 things that can only be done in a class component:
// 1. Use state
// 2. Use component lifecycle
class App extends Component {

  render(){
    // this.props
    return (
      <div>
        I'm an APP
        <HomePage>
          <div>WAT IS THIS</div>
          I'M A CHILD
        </HomePage>
      </div>
    );
  }
}

export default App;
