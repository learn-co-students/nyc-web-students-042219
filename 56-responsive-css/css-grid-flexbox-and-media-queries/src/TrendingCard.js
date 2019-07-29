import React from 'react';

function TrendingCard({ image_url, topic, description }) {
  return (
    <div className="trending-card" style={{backgroundImage: `url(${image_url})`}}>
      <div className="trending-description">
        <h4>{topic}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TrendingCard;