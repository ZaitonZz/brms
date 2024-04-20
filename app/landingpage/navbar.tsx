import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ justifyContent: 'left', left: '124px', position: 'relative' }}>
      <ul className="list-none m-0 p-5">
        <li className="float-left border border-solid border-[#3A8D31DE] p-4 m-2">
          <a href="/">Citizen</a>
        </li>
        <li className="float-left border border-solid border-[#3A8D31DE] p-4 m-2">
          <a href="/">Business</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;