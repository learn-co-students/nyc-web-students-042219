import React, { Component } from 'react';


class ClassComponent extends Component {

  state = {
    beef: true
  }

  changeBeef = () => {
    this.setState({
      beef: false
    })
  }

  constructor(props){
    super()
    console.log("CONSTRUCTOR", props.name)
  }

  componentDidMount(){
    console.log("DID MOUNT", this.props.name)

    // uses:
    // fetching
    // starting intervals and timeouts
    // add customer event listeners
  }

  // componentDidUpdate(prevProps, prevState){
  //   console.log("DID UPDATE prev", prevState.beef, )
  //   console.log("DID UPDATE curr", this.state.beef, )
  //   // BEWARE THE INFINITE LOOP
  // }




  render() {
    console.log("RENDER", this.props.name)
    return (
      <div className="box">
        <p onClick={this.changeBeef}>{this.props.name}</p>
        {this.props.children}
      </div>
    );
  }
}


export default ClassComponent;