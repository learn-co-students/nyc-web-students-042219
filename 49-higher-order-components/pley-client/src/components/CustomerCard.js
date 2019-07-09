import React from "react";
import { Link } from 'react-router-dom'

import StarRating from "./StarRating";

function CustomerCard({
  setCurrentCustomer,
  id,
  avatar_url,
  name,
  average_rating,
  average_tip_rating
}) {
  return (
    <Link to={`/customers/${id}`}>
      <div className="customer-card">
        <div className="card-image">
          <img src={avatar_url} alt={name} />
        </div>
        <div className="card-details">
          <h3>{name}</h3>
          <strong>Rating: </strong>
          <StarRating rating={average_rating} />
          <br />
          <strong>Tip Rating: </strong>
          <StarRating rating={average_tip_rating} symbol="$" color="green" />
        </div>
      </div>
    </Link>
  );
}

export default CustomerCard;
