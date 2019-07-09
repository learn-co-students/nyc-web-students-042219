import React from "react";
import { Link } from 'react-router-dom'

import NavOptions from "../components/NavOptions";

import withLogging from '../withLogging'
import withAds from '../withAds'

class Navbar extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="navbar">
        <Link to="/">
          <img
            className="logo"
            src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1438879385/lyaw1ovbiivsax419fbw.png"
            alt="logo"
          />
        </Link>
        <NavOptions
          setCurrentPage={this.props.setCurrentPage}
          isSignedIn={this.props.isSignedIn}
          setSignIn={this.props.setSignIn}
        />
      </div>
    );
  }
}

export default withAds(withLogging(Navbar));
