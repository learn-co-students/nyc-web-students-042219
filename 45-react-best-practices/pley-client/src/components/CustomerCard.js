import React from 'react'
import StarRating from './StarRating'

function CustomerCard({ selectCustomer, id, avatar_url, name, average_rating, average_tip_rating }){

  return (
    <div onClick={(e) => selectCustomer(id)} className="customer-card">
      <div className="card-image">
        <img src={avatar_url} alt={name}/> 
      </div>
      <div className="card-details">
        <h3>{name}</h3>
        <strong>Rating: </strong><StarRating rating={average_rating}/>
        <br/>
        <strong>Tip Rating: </strong><StarRating rating={average_tip_rating}/>
      </div>
    </div>
  )
}

export default CustomerCard