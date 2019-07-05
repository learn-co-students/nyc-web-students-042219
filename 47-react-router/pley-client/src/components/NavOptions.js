import React from "react";

const NavOptions = ({ setCurrentPage, isSignedIn, setSignIn }) => {
  return (
    <div className="options">
      <button onClick={() => setCurrentPage("customers")}>All Customers</button>
      <button onClick={() => setCurrentPage("profile")}>Profile</button>
      {isSignedIn ? (
        <button onClick={() => setSignIn(false)}>Sign out</button>
      ) : (
        <button onClick={() => setSignIn(true)}>Sign In</button>
      )}
    </div>
  );
};

export default NavOptions;
