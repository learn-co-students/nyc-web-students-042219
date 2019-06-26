import React from 'react'
import SearchBar from './SearchBar'
import CustomerContainer from './CustomerContainer'

class HomePage extends React.Component {
  render(){
    return (
      <div className="home-page">
        <SearchBar/>
        <CustomerContainer selectCustomer={this.props.selectCustomer} category="Worst Customers" customers={this.props.customers}/>
      </div>
    )
  }
}

export default HomePage