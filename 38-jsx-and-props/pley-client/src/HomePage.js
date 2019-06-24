import React from 'react'
import SearchBar from './SearchBar'
import CustomerContainer from './CustomerContainer'

class HomePage extends React.Component {
  render(){
    console.log(this.props)
    return (
      <div>
        I'm HomePage
        <SearchBar/>
        <CustomerContainer category="Worst Customers"/>
        <CustomerContainer category="Best Customers"/>
        {this.props.children}
      </div>
    )
  }
}

export default HomePage