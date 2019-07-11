import React from "react";
import SearchBar from "../components/SearchBar";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <SearchBar setSearchTerm={this.props.setSearchTerm} />
      </div>
    );
  }
}

export default HomePage;
