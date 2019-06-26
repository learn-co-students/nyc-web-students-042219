import React from 'react'

class SearchBar extends React.Component {
  handleChange = (event) => {
    this.props.setFilter(event.target.value)

  }

  render(){
    return (
      <div className="search-container">
        <div className="overlay"></div>
        <form onSubmit={this.handleSubmit} className="search-form">
          <input 
            name="filterValue" 
            value={this.props.filterValue}
            onChange={this.handleChange} 
            className="input"/>
          <button className="submit" type="submit"><i className="fas fa-search icon"></i></button>
        </form>
      </div>
    )
  }
}

export default SearchBar