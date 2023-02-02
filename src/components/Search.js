import React from 'react';

function Search({ setSearchResult, searchResult }) {
  return (
    <div className='searchbar'>
      <label htmlFor='search'>Search Plants:</label>
      <input
        type='text'
        id='search'
        placeholder='Type a name to search...'
        value={searchResult}
        onChange={(e) => setSearchResult(e.target.value)}
      />
    </div>
  );
}

export default Search;
