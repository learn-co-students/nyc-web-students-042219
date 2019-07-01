import React, { Component } from 'react';
import '../App.css';
import HomePage from "./HomePage"
import CustomerPage from "./CustomerPage"
import Navbar from "./Navbar"

class App extends Component {
  state = {
    customers: [],
    currentCustomer: null,
    loading: true
  }

  addReview = (review) => {
    const foundCustomer = this.state.customers.find(customer => {
      return customer.id == review.customer_id
    })

    foundCustomer.reviews.push(review)

    const updatedCustomers = this.state.customers.map(customer => {
      if (customer.id === foundCustomer.id){
        return foundCustomer
      } else {
        return customer
      }
    })

    this.setState({customers: updatedCustomers})
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
      this.setState({
        customers: data,
        loading: false
      })
    })
  }

  componentDidMount(){
    this.fetchCustomers()
  }

  render(){
    if (this.state.loading){
      return (
        <img className="loader" src="https://www.macupdate.com/images/icons256/54019.png"/>
      )
    } else {
      return (
        <div className="app">
          <Navbar clearCustomer={this.clearCustomer}/>
          { this.state.currentCustomer ? 
              <CustomerPage addReview={this.addReview} customer={this.state.currentCustomer}/> 
              :
              <HomePage selectCustomer={this.selectCustomer} customers={this.state.customers} />
          }
        </div>
      );
    }
    
  }
}

export default App;
