import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar-container w-full flex justify-left mb-5">
      <div className="search-bar w-full max-w-[1334px] border border-solid border-[#558750] rounded-md flex items-center">
        <input type="text" placeholder="Search..." className="flex-1 border-none p-2" />
        <button className="bg-[#558750] text-white border-none p-2 rounded-r-md">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;