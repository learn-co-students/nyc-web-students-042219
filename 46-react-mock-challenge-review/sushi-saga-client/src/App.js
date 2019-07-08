import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  // for state, we're only going to include sushis, the current index of the sushi conveyor, and the wallet
  state = {
    sushis: [],
    sushiIndex: 0,
    wallet: 100,
  }

  // getFourSushis is going to grab 4 sushis at a time from the total sushis
  // it takes two arguments: the sushi we want to start at (the index)
  // and the element we want to stop at (also an index) NOT inclusively 
  // the slice method returns a copy of the new array with the identified sushis
  // getFourSushis will return this new array of sushis
  getFourSushis = () => {
    let four = this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
    return four
  }

  // getMoreSushi is the click handler for the "More Sushi!" button
  // it will just increment the sushiIndex in state
  // by doing so, it will trigger a rerender of the sushis that are being
  // displayed since we have INVOKED the getFourSushis fn below in the render
  getMoreSushi = () => {
    // console.log('more sushi plz');
    this.setState({
      sushiIndex: this.state.sushiIndex + 4
    })
  }

  // eatASushi is the click handler for every individual sushi
  // if the wallet less the price of the sushi that you have clicked on
  // is greater or equal to 0
  // then map over all the sushis, find the sushi in your sushi object that
  // matches the sushi that you clicked on and change it's status to eaten
  // otherwise return the unchanged sushi
  // then reset your sushis in state to sushis with the eaten state
  // and also decrement your wallet according to the price of the sushi
  // if your wallet is NOT greater than or 0, send the user an alert
  // this might be a good place to refactor the code later....
  eatASushi = (sushiObj) => {
    // console.log('eating a sushi', sushiObj);
    if(this.state.wallet - sushiObj.price >= 0){
      let newSush = this.state.sushis.map(sushi => {
        if(sushi.id === sushiObj.id){
          return {...sushi, eaten: true}
        } else {
          return sushi
        }
      })
      this.setState({
        sushis: newSush,
        wallet: this.state.wallet - sushiObj.price
      })
    }
    else {
      alert("You don't have enough money for this sushi")
    }
  }

  // the Table component needs an array in order to render the empty plates
  // so here filter all of your sushis by their eaten status
  // filter will return an array of all of the sushi that sushi.eaten = true
  emptyPlates = () => {
    return this.state.sushis.filter(sushi => sushi.eaten)
  }

  // after all of the components have been rendered to the DOM
  // send our fetch to the API endpoint
  // then we are going to map over the sushi data that we get back from the API
  // and spread each sushi so that we can add the key of eaten with a
  // value of false
  // and then set these sushis with the eaten key to state
  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(rawsushi => {
      // you need to spread sushi FIRST {...sushi}
      // and THEN when you add eaten: false >> {...sushi, eaten: false} <<
      // it will ADD the current key of eaten IN THIS SUSHI
      // if you have the new key BEFORE the spread sushi
      // the spread sushi will OVERWRITE the new key because it is in the
      // { } brackets LAST
      let newRawSushi = rawsushi.map(sushi => {return {...sushi, eaten: false }})
      this.setState({
        sushis: newRawSushi
      })
    })
  }

  // we're passing the INVOKED getFourSushis fn to the Sushi Container
  // it NEEDS TO BE INVOKED so that the return value of the fn
  // is passed down as the sushis to the Sushi Container
  // we're passing getMoreSushi fn that HAS NOT BEEN INVOKED to the Sushi
  // Container so that we can use this as a callback on the More Btn
  // we're passing down eatASushi fn that HAS NOT BEEN INVOLKED to the Sushi
  // Container so that we can use this as a callback when we click a sushi
  // we're passing down emptyPlates as an INVOKED FUNCTION to the Table Comp
  // because we constantly want the RETURN VALUE from the fn (an array)
  // we're passing down the current state of wallet to the Table Component
  // so that we constantly have the updated value
  render() {
    // console.log('sushis', this.state.sushis);
    return (
      <div className="app">
        <SushiContainer sushis={this.getFourSushis()} getMoreSushi={this.getMoreSushi} eatASushi={this.eatASushi}/>
        <Table emptyPlates={this.emptyPlates()} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;
