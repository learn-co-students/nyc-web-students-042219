import React from "react";
import StarRatingInput from "./StarRatingInput";

class ReviewForm extends React.Component {
  state = {
    content: "",
    rating: 1,
    tip_rating: 1
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch("http://localhost:3000/api/v1/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        ...this.state,
        customer_id: this.props.customerID
      })
    })
      .then(res => res.json())
      .then(data => {
        this.props.addReview(data);
      });
  };

  render() {
    return (
      <div className="new-review-sidebar">
        <form onSubmit={this.handleSubmit} className="review-form">
          <textarea
            onChange={this.handleChange}
            name="content"
            value={this.state.content}
            placeholder="Review this customer..."
          />
          <StarRatingInput
            value={this.state.rating}
            name="rating"
            onClick={this.handleChange}
          />
          <br />
          <StarRatingInput
            value={this.state.tip_rating}
            name="tip_rating"
            onClick={this.handleChange}
            symbol="$"
            color="green"
          />
          <input type="submit" value="Submit Review" />
        </form>
      </div>
    );
  }
}

export default ReviewForm;
