import React from "react";
import { Link } from 'react-router-dom'

const NavOptions = ({ setCurrentPage, isSignedIn, setSignIn }) => {
  return (
    <div className="options">
      <Link to="/customers">All Customers</Link>
      <Link to="/profile">Profile</Link>
      {isSignedIn ? (
        <button onClick={() => setSignIn(false)}>Sign out</button>
      ) : (
          <button onClick={() => setSignIn(true)}>Sign In</button>
        )}
    </div>
  );
};

export default NavOptions;
