// components/NavLinksFees.tsx
import React from 'react';

interface NavLinksFeesProps {
  onSelect: (selectedTab: string) => void;
  selectedTab: string;
}

const NavLinksFees: React.FC<NavLinksFeesProps> = ({ onSelect, selectedTab }) => {
  return (
    <nav className="flex justify-start">
      <ul className="list-none mb-10 flex">
        {['Citizen', 'Business'].map((link) => (
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

export default NavLinksFees;

