import React from "react";
import StarRating from "./StarRating";
import withLogging from "../withLogging"


function Review(props) {
  return (
    <div className="review-tile">
      <p>{props.content}</p>
      <strong>Rating: </strong>
      <StarRating rating={props.rating} />
      <br />
      <strong>Tip Rating: </strong>
      <StarRating rating={props.tip_rating} symbol="$" color="green" />
      <br />
      <h4>- {props.restaurant_name}</h4>
    </div>
  );
}

export default withLogging(Review);
