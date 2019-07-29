import React from 'react';
import PostCard from './PostCard'

function PostContainer() {
  return (
    <div className="post-container">
      { 
        posts.map(post => {
          return <PostCard key={post.id} {...post}/>
        })
      }
    </div>
  );
}


const posts = [
  {
    id: 1,
    community: "WeirdHumanThings",
    username: "Beefy McSteaker",
    timestamp: 9,
    title: "Who is the 'Florida Man'?",
    content: "Lately a lot of human folk have been talking about someone they called 'Florida Man'. Just wodnering if anyone knows who this is or what his significance is.",
    upvotes: 34000,
    created_at: 10,
    comments: 2542
  },
  {
    id: 2,
    community: "GalacticNews",
    username: "Will Smith",
    timestamp: 15,
    title: "New Teslax",
    content: "Teslax announces new line of Teslax cross-over ships running entirely on renewable dark matter, boasting 100,000 light-year per charge.",
    upvotes: 83000,
    created_at: 8,
    comments: 242
  },
  {
    id: 3,
    community: "EarthEats",
    username: "Jeff Goldblum",
    timestamp: 23,
    title: "Hot take: Grand Slam is NOT Earth's best food. Debate me.",
    content: "Recently everyone's been talking about Denny's Grand Slam, and while I do enjoy it myself, IHOP's unlimited pancake breakfast can't be beat. Thoughts?",
    upvotes: 4000,
    created_at: 13,
    comments: 542
  },
]

export default PostContainer;