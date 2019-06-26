import React from 'react'
import UserDetails from './UserDetails'
import ReviewContainer from './ReviewContainer'
import ReviewForm from './ReviewForm'

class CustomerPage extends React.Component {
  render(){
    return (
      <div className="customer-page">
        <UserDetails {...this.props.customer} />
        <ReviewContainer reviews={this.props.customer.reviews} customerName={this.props.customer.name} />
        <ReviewForm addReview={this.props.addReview} customerID={this.props.customer.id}/>
      </div>
    )
  }
}

export default CustomerPage