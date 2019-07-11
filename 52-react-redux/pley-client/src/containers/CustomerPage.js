import React from "react";
import UserDetails from "../components/UserDetails";
import ReviewContainer from "./ReviewContainer";
import ReviewForm from "../components/ReviewForm";
import { connect } from 'react-redux'

class CustomerPage extends React.Component {
  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/customers/${this.props.customerId}`)
      .then(res => res.json())
      .then(data => {
        this.props.fetchCustomer(data)
        this.props.stopLoading()
      });
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
  return {
    selectedCustomer: state.selectedCustomer,
    loading: state.loading
  }
}

function mdp(dispatch){
  return {
    fetchCustomer: (customer) => {
      dispatch({type: "FETCH_CUSTOMER", payload: customer})
    },
    stopLoading: () => {
      dispatch({type: "STOP_LOADING", payload: false})
    }
  }
}

export default connect(msp, mdp)(CustomerPage);
