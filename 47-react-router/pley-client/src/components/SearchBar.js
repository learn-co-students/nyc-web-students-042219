import React from "react";

class SearchBar extends React.Component {
  state = {
    filterValue: ""
  };

  handleChange = event => {
    this.setState({
      filterValue: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setSearchTerm(this.state.filterValue);
  };

  render() {
    return (
      <div className="search-container">
        <div className="overlay" />
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            name="filterValue"
            value={this.state.filterValue}
            onChange={this.handleChange}
            className="input"
          />
          <button className="submit" type="submit">
            <i className="fas fa-search icon" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
