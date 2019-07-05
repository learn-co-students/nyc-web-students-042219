import React from "react";
import UserDetails from "../components/UserDetails";
import ReviewContainer from "./ReviewContainer";
import ReviewForm from "../components/ReviewForm";

class CustomerPage extends React.Component {
  state = {
    customer: null,
    loading: true
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/customers/${this.props.customerId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          customer: data,
          loading: false
        });
      });
  }

  addReview = review => {
    this.setState({
      customer: {
        ...this.state.customer,
        reviews: [...this.state.customer.reviews, review]
      }
    });
  };

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
      <div className="customer-page">
        <UserDetails {...this.state.customer} />
        <ReviewContainer
          reviews={this.state.customer.reviews}
          customerName={this.state.customer.name}
        />
        <ReviewForm
          addReview={this.addReview}
          customerID={this.state.customer.id}
        />
      </div>
    );
  }
}

export default CustomerPage;
