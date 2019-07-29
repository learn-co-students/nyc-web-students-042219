import React from 'react';

function PostCard({ upvotes, created_at, community, username, comments, content, title }) {

  function convertThousand(num){
    if(num >= 1000){
      return (Math.round(num / 100)/10) + "k"
    } else {
      return num
    }
  }

  return (
    <div className="post-card">
      <div className="upvote-panel">
        <button >⬆</button>
        <strong>{convertThousand(upvotes)}</strong>
        <button>⬇</button>
      </div>
      <div className="body">
        <strong>r/{community} </strong><span>· Posted by u/{username} {created_at} hours ago</span>
        <h4>{title}</h4>
        <p>{content}</p>
        <div>
          <span>💬{convertThousand(comments)} comments</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;