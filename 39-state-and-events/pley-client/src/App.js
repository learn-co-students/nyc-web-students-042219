import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./HomePage"
import CustomerPage from "./CustomerPage"
import Navbar from "./Navbar"

class App extends Component {
  state = {
    customers: [],
    currentCustomer: null
  }

  selectCustomer = (customerID) => {
    // what is the objective of this function?
    // "select" (put it in state) which customer has been clicked

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
    console.log(this.state)

    return (
      <div className="app">
        <Navbar clearCustomer={this.clearCustomer} fetchCustomers={this.fetchCustomers}/>
        { this.state.currentCustomer ? 
            <CustomerPage name={this.state.currentCustomer.name}/> 
            :
            <HomePage selectCustomer={this.selectCustomer} customers={this.state.customers} />
        }
      </div>
    );
  }
}

export default App;
