// components/NavLinks.tsx
import React from 'react';

interface NavLinksProps {
  onSelect: (selectedTab: string) => void;
  selectedTab: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ onSelect, selectedTab }) => {
  return (
    <nav className="flex justify-start">
      <ul className="list-none mb-10 flex">
        {['Staffs', 'Transactions', 'Fees', 'Complaints', 'Notes', 'Logs'].map((link) => (
          <li
            key={link}
            className={`border border-[#3A8D31DE] py-4 mr-4 ${
              selectedTab === link ? 'bg-green-600 text-white' : 'hover:bg-green-600 hover:text-white'
            }`}
          >
            <a href="#" className="no-underline text-current p-4" onClick={() => onSelect(link)}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;

