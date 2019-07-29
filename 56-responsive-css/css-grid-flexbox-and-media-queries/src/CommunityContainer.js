import React from 'react';
import CommunityCard from './CommunityCard'

function CommunityContainer() {
  return (
    <div className="community-container">
      {
        communities.map(comm => {
          return <CommunityCard key={comm.id} {...comm}/>
        })
      }
    </div>
  );
}

const communities = [
  {
    id: 1,
    name: "WeirdHumanThings",
    description: "Understanding all the weird stuff humans do."
  },
  {
    id: 2,
    name: "EarthEats",
    description: "Where on Earth is all the good stuff?"
  },
  {
    id: 3,
    name: "GalacticNews",
    description: "Hot news topics trending all across the galaxy."
  },
  {
    id: 4,
    name: "GlimpsesOfHumanHistory",
    description: "Where in the galaxy to go to see all the greatest moments in human history."
  },
]

export default CommunityContainer;