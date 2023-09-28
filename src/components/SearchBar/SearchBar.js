import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
        <div className='search-container'>
                <input
            className='form-control'
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img className='search-icon' src='/Assets/images/search.png' alt='' />
        </div>
    </>
  );
};

export default SearchBar;
