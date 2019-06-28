import React from 'react'

class Ticker extends React.Component {

  state = {
    symbol: "👂",
    color: "black"
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.value > this.props.value){
      this.setState({
        symbol: "🙈",
        color: "red"
      })
    } else if (prevProps.value < this.props.value){
      this.setState({
        symbol: "💯",
        color: "green"
      })
    }
  }

  render(){
    return (
      <div style={{color: this.state.color}} className="box">
        <h1>{this.props.value} {this.state.symbol}</h1>
      </div>
    );
  }
}

export default Ticker