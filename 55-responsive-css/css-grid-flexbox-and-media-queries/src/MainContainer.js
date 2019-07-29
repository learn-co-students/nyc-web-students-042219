import React from 'react';
import TrendingContainer from './TrendingContainer'
import PostContainer from './PostContainer'
import CommunityContainer from './CommunityContainer'


function MainContainer() {
  return (
    <div className="main-container">
      <TrendingContainer />
      <PostContainer />
      <CommunityContainer />
    </div>
  );
}

export default MainContainer;