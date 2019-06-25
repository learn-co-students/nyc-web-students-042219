import React from 'react'

class SearchBar extends React.Component {
  render(){
    return (
      <div className="search-container">
        <div className="overlay"></div>
        <form className="search-form">
          <input className="input"/>
          <button className="submit" type="submit"><i className="fas fa-search icon"></i></button>
        </form>
      </div>
    )
  }
}

export default SearchBar