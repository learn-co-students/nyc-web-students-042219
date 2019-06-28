import React from 'react'
import StarRating from './StarRating'

class CustomerCard extends React.Component {
  render(){
    return (
      <div onClick={(e) => this.props.selectCustomer(this.props.id)} className="customer-card">
        <div className="card-image">
          <img src={this.props.avatar_url} alt={this.props.name}/> 
        </div>
        <div className="card-details">
          <h3>{this.props.name}</h3>
          <strong>Rating: </strong><StarRating rating={this.props.average_rating}/>
          <br/>
          <strong>Tip Rating: </strong><StarRating rating={this.props.average_tip_rating}/>
        </div>
      </div>
    )
  }
}

export default CustomerCard