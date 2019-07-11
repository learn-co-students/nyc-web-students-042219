import React from "react";
import { Route, Switch } from 'react-router-dom'
import queryString from 'query-string'

import CustomerContainer from "./CustomerContainer";
import CustomerPage from "./CustomerPage";

import { connect } from 'react-redux'

class AllCustomersPage extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/customers")
      .then(res => res.json())
      .then(data => {
        this.props.fetchCustomers(data)


        this.setState({
          loading: false
        });
      });
  }

  getSearchedCustomers() {
    const query = queryString.parse(this.props.location.search)
    if (query.searchTerm) {
      return this.props.customers.filter(customer => {
        return customer.name
          .toLowerCase()
          .includes(query.searchTerm.toLowerCase());
      });
    } else {
      return this.props.customers;
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <img
          alt="loading..."
          className="loader"
          src="https://www.macupdate.com/images/icons256/54019.png"
        />
      );
    }
    return (
      <Switch>
        <Route path="/customers/:id" render={routeProps => {
          const customerId = routeProps.match.params.id
          return (
            <CustomerPage
              customerId={customerId}
              addReview={this.addReview}
            />
          )
        }} />
        <Route path="/customers" render={() => {

          return <CustomerContainer
            customers={this.getSearchedCustomers()}
            customerId={this.props.customerId}
            category="All Customers"
          />
        }} />
      </Switch>
    )

  }
}

function msp(state){
  return {
    customers: state.customers
  }
}

function mdp(dispatch){
  return {
    fetchCustomers: (customers) => {
      dispatch({type: "FETCH_ALL_CUSTOMERS", payload: customers})
    }
  }
}

export default connect(msp, mdp)(AllCustomersPage);
