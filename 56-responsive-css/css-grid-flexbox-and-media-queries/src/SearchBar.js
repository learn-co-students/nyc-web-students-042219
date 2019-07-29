import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <select>
        <option>Community</option>
        <option>Content</option>
        <option>Author</option>
      </select>
      <input placeholder="🔍 Search Redd E.T."/>
    </div>
  );
}

export default SearchBar;