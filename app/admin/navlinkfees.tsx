// components/NavLinks.tsx
import React from 'react';

interface NavLinksProps {
  onSelect: (selectedTab: string) => void;
}

const NavLinksFees: React.FC<NavLinksProps> = ({ onSelect }) => {
  return (
    <nav className="flex justify-start">
      <ul className="list-none mb-10 flex">
        {['Citizen', 'Business'].map((link) => (
          <li key={link} className="border border-[#3A8D31DE] py-4 mr-4 hover:bg-green-600 hover:text-white">
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
