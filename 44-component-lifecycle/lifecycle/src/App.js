import React from 'react';
import './App.css';
import TickerContainer from "./ticker/TickerContainer"
// import LifeCycleApp from "./lifecycle/LifeCycleApp"

class App extends React.Component {

  state = {
    display: true
  }

  toggleDisplay = () => {
    this.setState({
      display: !this.state.display
    })
  }

  render(){
    return (
      <div className="App">  
        <button onClick={this.toggleDisplay} >Show Timer!</button>
        {this.state.display ? <TickerContainer/> : null}
      </div>
    );
  }
  
}

export default App;
