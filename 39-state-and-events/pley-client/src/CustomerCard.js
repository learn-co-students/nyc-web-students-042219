import React from 'react'

class CustomerCard extends React.Component {
  render(){
    return (
      <div className="customer-card">
        <img src={this.props.avatar_url} /> 
        <h3>{this.props.name}</h3>
        <p>Rating: {this.props.average_rating}</p>
        <p>Tip Rating: {this.props.average_tip_rating}</p>
      </div>
    )
  }
}

export default CustomerCard