import React from "react";
import Review from "../components/Review";
import withLogging from '../withLogging'

class ReviewContainer extends React.Component {
  render() {
    return (
      <div className="review-container">
        <h2>Reviews for {this.props.customerName}: </h2>
        {this.props.reviews.map(review => {
          return <Review key={review.id} {...review} />;
        })}
      </div>
    );
  }
}

export default ReviewContainer;
