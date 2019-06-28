import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  state = {
    value: 0
  }

  start = () => {
    this.beef = setInterval(() => {
      console.log("HELLO")
      this.setState({
        value: Math.round(Math.random()*(100))
      })
    }, 1000)
  }

  componentDidMount(){
    this.start()
  }

  stop = () => {
    clearInterval(this.beef)
  }

  componentWillUnmount(){
    this.stop()
  }


  
  render(){
    console.log(this.state.value)
    return (
      <div className="box">
        <button>Stop Ticker</button>
        <Ticker value={this.state.value}/>
      </div>
    );
  }
}



export default TickerContainer