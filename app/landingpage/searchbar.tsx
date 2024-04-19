import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar-container" style={{ width: '100%', display: 'flex', justifyContent: 'left', marginBottom:'5px'}}>
      <div className="search-bar" style={{ width: '100%', maxWidth: '1334px', border: '1px solid #558750', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
        <input type="text" placeholder="Search..." style={{ flex: '1', border: 'none', padding: '8px' }} />
        <button style={{ background: '#558750', color: 'white', border: 'none', padding: '8px', borderRadius: '0 4px 4px 0' }}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;