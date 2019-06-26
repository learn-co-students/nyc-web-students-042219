import React from 'react'

class StarRating extends React.Component {

  render(){
    return (
      <div className="ratings">
        <div className="empty-stars"></div>
        <div className="full-stars" style={{width: `${this.props.rating/5*100}%`}}></div>
      </div>
    )
  }
}

export default StarRating