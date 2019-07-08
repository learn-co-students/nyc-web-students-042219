import React from "react";
import { Route, Switch } from 'react-router-dom'
import queryString from 'query-string'

import CustomerContainer from "./CustomerContainer";
import CustomerPage from "./CustomerPage";

class AllCustomersPage extends React.Component {
  state = {
    customers: [],
    currentCustomerId: null,
    loading: true
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/customers")
      .then(res => res.json())
      .then(data => {
        this.setState({
          customers: data,
          loading: false
        });
      });
  }

  getSearchedCustomers() {
    const query = queryString.parse(this.props.location.search)
    console.log(query)
    if (query.searchTerm) {
      return this.state.customers.filter(customer => {
        return customer.name
          .toLowerCase()
          .includes(query.searchTerm.toLowerCase());
      });
    } else {
      return this.state.customers;
    }
  }

  getSelectedCustomer() {
    return this.state.customers.find(
      customer => customer.id === this.state.currentCustomerId
    );
  }

  handleSelectCustomer = id => {
    this.setState(
      {
        currentCustomerId: id
      },
      () => this.props.setCurrentPage("customers/show")
    );
  };

  render() {
    console.log(this.props);
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
          console.log("Customer Show Route:", routeProps)
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
            setCurrentCustomer={this.handleSelectCustomer}
            customerId={this.props.customerId}
            category="All Customers"
          />
        }} />
      </Switch>
    )

    // switch (this.props.page) {
    //   case "customers/show":
    //     return (
    // <CustomerPage
    //   customerId={this.state.currentCustomerId}
    //   addReview={this.addReview}
    // />
    //     );
    //   case "customers":
    //     return (
    //       <div className="home-page">
    // <CustomerContainer
    //   customers={this.getSearchedCustomers()}
    //   setCurrentCustomer={this.handleSelectCustomer}
    //   customerId={this.props.customerId}
    //   category="All Customers"
    // />
    //       </div>
    //     );
    //   default:
    //     return null;
    // }
  }
}

export default AllCustomersPage;
