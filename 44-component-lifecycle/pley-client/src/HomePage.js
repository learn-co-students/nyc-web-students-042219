import React from 'react'
import SearchBar from './SearchBar'
import CustomerContainer from './CustomerContainer'

class HomePage extends React.Component {

  state = {
    filterValue: "",
  }

  setFilter = (newFilterValue) => {

    this.setState({
      filterValue: newFilterValue
    })

  }

  applyFilter = () => {
    return this.props.customers.filter(customer => {
      return customer.name.toLowerCase().includes(this.state.filterValue.toLowerCase())
    })
  }

  render(){
    return (
      <div className="home-page">
        <SearchBar setFilter={this.setFilter} filterValue={this.state.filterValue}/>
        <CustomerContainer selectCustomer={this.props.selectCustomer} category="Worst Customers" customers={this.applyFilter()}/>
      </div>
    )
  }
}

export default HomePage