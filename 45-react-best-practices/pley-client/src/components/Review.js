import React from 'react'
import StarRating from './StarRating'

function Review(props) {
  return (
    <div className="review-tile">
      <p>{props.content}</p>
      <strong>Rating: </strong><StarRating rating={props.rating}/><br/>
      <strong>Tip Rating: </strong><StarRating rating={props.tip_rating}/><br/>
      <h4>- {props.restaurant_name}</h4>
    </div>
  )
}

export default Review