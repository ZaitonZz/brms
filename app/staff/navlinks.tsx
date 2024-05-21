import React from 'react';

const NavLinks = () => {
  return (
    <nav className="navbar relative left-[131px] flex justify-start">
      <ul className="list-none m-0 p-5">
        <li className="float-left border border-[#3A8D31DE] p-4 m-2 hover:bg-green-600 hover:text-white">
          <a href="/" className="no-underline text-current">Citizens</a>
        </li>
        <li className="float-left border border-[#3A8D31DE] p-4 m-2 hover:bg-green-600 hover:text-white">
          <a href="/" className="no-underline text-current">Business</a>
        </li>

      </ul>
    </nav>
  );
};

export default NavLinks;