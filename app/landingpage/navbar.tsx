import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="list-none m-0">
        <li className="float-left border border-solid border-[#3A8D31DE] p-4">
          <a href="/">Citizen</a>
        </li>
        <li className="float-left border border-solid border-[#3A8D31DE] p-4 mb-5">
          <a href="/">Business</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;