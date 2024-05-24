import React from 'react';

const NavLinks = () => {
  return (
    <nav className="flex justify-start">
      <ul className="list-none mb-10 ">
        <li className="float-left border border-[#3A8D31DE] p-4 mr-4 hover:bg-green-600 hover:text-white">
          <a href="/" className="no-underline text-current">Admins</a>
        </li>
        <li className="float-left border border-[#3A8D31DE] p-4 mr-4 hover:bg-green-600 hover:text-white">
          <a href="/" className="no-underline text-current">Transactions</a>
        </li>
        <li className="float-left border border-[#3A8D31DE] p-4 mr-4 hover:bg-green-600 hover:text-white">
          <a href="/" className="no-underline text-current">Fees</a>
        </li>
        <li className="float-left border border-[#3A8D31DE] p-4 mr-4 hover:bg-green-600 hover:text-white">
          <a href="/" className="no-underline text-current">Complaints</a>
        </li>
        <li className="float-left border border-[#3A8D31DE] p-4 mr-4 hover:bg-green-600 hover:text-white">
          <a href="/" className="no-underline text-current">Notes</a>
        </li>
        <li className="float-left border border-[#3A8D31DE] p-4 mr-4 hover:bg-green-600 hover:text-white">
          <a href="/" className="no-underline text-current">Logs</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
