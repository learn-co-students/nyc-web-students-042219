import React from "react";
import NavOptions from "../components/NavOptions";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img
          onClick={() => this.props.setCurrentPage("home")}
          className="logo"
          src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1438879385/lyaw1ovbiivsax419fbw.png"
          alt="logo"
        />
        <NavOptions
          setCurrentPage={this.props.setCurrentPage}
          isSignedIn={this.props.isSignedIn}
          setSignIn={this.props.setSignIn}
        />
      </div>
    );
  }
}

export default Navbar;
