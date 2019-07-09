import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'

import "../App.css";
import HomePage from "./HomePage";
import AllCustomersPage from "./AllCustomersPage";
import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";
import ProtectedRoute from '../components/ProtectedRoute'

class App extends Component {
  state = {
    page: "home",
    search: "",
    isSignedIn: true
  };

  setCurrentPage = page => {
    this.setState({
      page,
      search: ""
    });
  };

  setSearchTerm = search => {
    this.setState({
      search,
      page: "customers"
    });
  };

  setSignIn = isSignedIn => this.setState({ isSignedIn });

  render() {
    return (
      <div className="app">
        <Navbar
          setCurrentPage={this.setCurrentPage}
          isSignedIn={this.state.isSignedIn}
          setSignIn={this.setSignIn}
        />
        <Switch>
          <ProtectedRoute isSignedIn={this.state.isSignedIn} path="/profile" component={ProfilePage} />
          <ProtectedRoute isSignedIn={this.state.isSignedIn} path="/customers" component={AllCustomersPage} />
          <Route exact path="/" component={HomePage} />
          <Route component={() => <h1>You dun goofed.</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
