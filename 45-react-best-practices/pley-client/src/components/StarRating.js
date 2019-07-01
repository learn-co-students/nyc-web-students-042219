import React from 'react'

function StarRating(props) {
  return (
    <div className="ratings">
      <div className="empty-stars"></div>
      <div className="full-stars" style={{width: `${props.rating/5*100}%`}}></div>
    </div>
  )
}

export default StarRating