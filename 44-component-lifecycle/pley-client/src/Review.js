import React from 'react'
import StarRating from './StarRating'

class Review extends React.Component {

  render(){
    return (
      <div className="review-tile">
        <p>{this.props.content}</p>
        <strong>Rating: </strong><StarRating rating={this.props.rating}/><br/>
        <strong>Tip Rating: </strong><StarRating rating={this.props.tip_rating}/><br/>
        <h4>- {this.props.restaurant_name}</h4>
      </div>
    )
  }
}

export default Review