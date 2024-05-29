import React from 'react';

const NavLinks = () => {
  return (
    <nav className="flex justify-start ml-24 mt-10">
      <ul className="list-none mb-10">
        <li className="float-left border border-[#3A8D31DE] p-4 mr-4 hover:bg-green-600 hover:text-white">
          <a href="/" className="no-underline text-current">Citizens</a>
        </li>
        <li className="float-left border border-[#3A8D31DE] p-4 mr-4 hover:bg-green-600 hover:text-white">
          <a href="/" className="no-underline text-current">Businesses</a>
        </li>

      </ul>
    </nav>
  );
};

export default NavLinks;
