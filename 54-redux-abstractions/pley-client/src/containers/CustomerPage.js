import React from "react";
import UserDetails from "../components/UserDetails";
import ReviewContainer from "./ReviewContainer";
import ReviewForm from "../components/ReviewForm";
import { connect } from 'react-redux'

import { fetchCustomer } from '../actions'

class CustomerPage extends React.Component {
  componentDidMount() {
    this.props.fetchCustomer(this.props.customerId)
  }

  addReview = review => {
    this.setState({
      customer: {
        ...this.props.selectedCustomer,
        reviews: [...this.props.selectedCustomer.reviews, review]
      }
    });
  };

  render() {
    if (this.props.loading) {
      return (
        <img
          alt="loading..."
          className="loader"
          src="https://www.macupdate.com/images/icons256/54019.png"
        />
      );
    }

    return (
      <div className="customer-page">
        <UserDetails {...this.props.selectedCustomer} />
        <ReviewContainer
          reviews={this.props.selectedCustomer.reviews}
          customerName={this.props.selectedCustomer.name}
        />
        <ReviewForm
          addReview={this.addReview}
          customerID={this.props.selectedCustomer.id}
        />
      </div>
    );
  }
}

function msp(state){
  console.log(state)
  return {
    selectedCustomer: state.selectedCustomer,
    loading: state.loading
  }
}

export default connect(msp, { fetchCustomer })(CustomerPage);
