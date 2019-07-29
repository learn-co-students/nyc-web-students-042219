import React from 'react';

function CommunityCard({ name, description}) {
  return (
    <div className="community-card">
      <h4>r/{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default CommunityCard;