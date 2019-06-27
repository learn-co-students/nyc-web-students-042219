import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    hogs: hogs,
    greaseFilter: false,
    sortType: "none"
  }

  toggleFilter = () => {
    this.setState({
      greaseFilter: !this.state.greaseFilter
    })
  }

  changeSortType = (event) => {
    this.setState({
      sortType: event.target.value
    })
  }

  applyFilter = () => {
    if (this.state.greaseFilter){
      return this.state.hogs.filter(hog => {
        return hog.greased
      })
    } else {
      return this.state.hogs
    }
  }

  applySort = () => {

    const filteredHogs = this.applyFilter()

    switch(this.state.sortType){
      case "none":
        // leave them piggies alone
        return filteredHogs
      case "weight":
        // sort by weight
        return [...filteredHogs].sort((hogA, hogB) => {
          return hogB.weight - hogA.weight
        })
      case "name":
        // sort  by name
        return [...filteredHogs].sort((hogA, hogB) => {
          // return hogA.name.localeCompare(hogB.name)

          if (hogA.name > hogB.name){
            return 1
          } else if (hogA.name < hogB.name){
            return -1
          } else {
            return 0
          }


        })
    }
  }

  render() {
    return (
      <div className="App">
          <Nav changeSortType={this.changeSortType} toggleFilter={this.toggleFilter}/>
          <HogContainer hogs={this.applySort()}/>
      </div>
    )
  }
}

export default App;
