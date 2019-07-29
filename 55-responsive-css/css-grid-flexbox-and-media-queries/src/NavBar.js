import React from 'react';
import HomeButton from './HomeButton'
import SearchBar from './SearchBar'
import UserControls from './UserControls'
import FilterBar from './FilterBar'

function NavBar() {
  return (
    <div className="nav-bar">
      <HomeButton />
      <SearchBar />
      <UserControls />
      <FilterBar />
    </div>
  );
}

export default NavBar;