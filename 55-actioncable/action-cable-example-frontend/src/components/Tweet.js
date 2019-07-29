import React from 'react';
import adapter from '../services/adapter'

const Tweet = ({ tweet }) => {
  return (
    <div className="event">
      <div className="ui card">
        <div className="content">
          <div className="summary">{tweet.content}</div>
          <div className="meta">
            <button
              className="like"
              onClick={(e) => {
                e.preventDefault()
                adapter.createLike(tweet.id)
              }}
            >
              <i className="like icon" /> {tweet.likes} Likes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
