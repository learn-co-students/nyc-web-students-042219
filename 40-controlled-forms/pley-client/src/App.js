import React, { Component } from 'react';
import './App.css';
import HomePage from "./HomePage"
import CustomerPage from "./CustomerPage"
import Navbar from "./Navbar"

class App extends Component {
  state = {
    customers: [],
    currentCustomer: null
  }

  addReview = (review) => {
    // 1. find object to update in array
    const foundCustomer = this.state.customers.find(customer => {
      return customer.id == review.customer_id
    })

    // 2. update the object
    foundCustomer.reviews.push(review)

    // 3. update original array
    const updatedCustomers = this.state.customers.map(customer => {
      if (customer.id === foundCustomer.id){
        return foundCustomer
      } else {
        return customer
      }
    })

    // 4. setState
    this.setState({
      customers: updatedCustomers
    })
  }

  selectCustomer = (customerID) => {
    const foundCustomer = this.state.customers.find(customer => customer.id === customerID)

    this.setState({
      currentCustomer: foundCustomer
    })

  }

  clearCustomer = () => {
    this.setState({
      currentCustomer: null
    })
  }

  fetchCustomers = () => {
    fetch("http://localhost:3000/api/v1/customers")
    .then(res => res.json())
    .then(data => {
      this.setState({customers: data})
    })


  }
  render(){
    console.log(this.state.customers)
    return (
      <div className="app">
        <Navbar clearCustomer={this.clearCustomer} fetchCustomers={this.fetchCustomers}/>
        { this.state.currentCustomer ? 
            <CustomerPage addReview={this.addReview} customer={this.state.currentCustomer}/> 
            :
            <HomePage selectCustomer={this.selectCustomer} customers={this.state.customers} />
        }
      </div>
    );
  }
}

export default App;
