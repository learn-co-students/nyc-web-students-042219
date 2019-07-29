import React from 'react';

function UserControls() {
  return (
    <div className="user-controls">
      <button className="login">LOG IN</button>
      <button className="signup">SIGN UP</button>
      <button><span role="img" aria-label="user-controls">👤 ⬇</span></button>
    </div>
  );
}

export default UserControls;