import React from 'react'
import SearchBar from './SearchBar'
import CustomerContainer from './CustomerContainer'

class HomePage extends React.Component {
  render(){
    return (
      <div className="home-page">
        <SearchBar/>
        <CustomerContainer category="Worst Customers"/>
        <CustomerContainer category="Best Customers"/>
      </div>
    )
  }
}

export default HomePage