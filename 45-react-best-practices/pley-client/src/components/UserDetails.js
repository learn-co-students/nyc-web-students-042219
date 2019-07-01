import React from 'react'
import StarRating from './StarRating'


function UserDetails(props) {
  return (
    <div className="user-details">

      <h3>{props.name}</h3>
      <img src={props.avatar_url} alt={props.name} /> 
      <div className="sidebar-details">
        <strong>Bio: </strong>
        <p>{props.bio}</p>
        <strong>Dietary Info: </strong>
        <p>{props.dietary_info}</p>
        <p><strong>Dogs: </strong>{props.dogs ? "✅" : "❌" }</p>
        <p><strong>Children: </strong>{props.children ? "✅" : "❌" }</p>
        <strong>Rating: </strong><StarRating rating={props.average_rating}/>
        <br/>
        <strong>Tip Rating: </strong><StarRating rating={props.average_tip_rating}/>
      </div>
    </div>
  )
}

export default UserDetails