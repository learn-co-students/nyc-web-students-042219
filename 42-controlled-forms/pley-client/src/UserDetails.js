import React from 'react'
import StarRating from './StarRating'


class UserDetails extends React.Component {

  render(){
    return (
      <div className="user-details">

        <h3>{this.props.name}</h3>
        <img src={this.props.avatar_url} alt={this.props.name} /> 
        <div className="sidebar-details">
          <strong>Bio: </strong>
          <p>{this.props.bio}</p>
          <strong>Dietary Info: </strong>
          <p>{this.props.dietary_info}</p>
          <p><strong>Dogs: </strong>{this.props.dogs ? "✅" : "❌" }</p>
          <p><strong>Children: </strong>{this.props.children ? "✅" : "❌" }</p>
          <strong>Rating: </strong><StarRating rating={this.props.average_rating}/>
          <br/>
          <strong>Tip Rating: </strong><StarRating rating={this.props.average_tip_rating}/>
        </div>
      </div>
    )
  }
}

export default UserDetails