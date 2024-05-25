// components/NavLinks.tsx
import React from 'react';

interface NavLinksProps {
  onSelect: (selectedTab: string) => void;
}

const NavLinksReport: React.FC<NavLinksProps> = ({ onSelect }) => {
  const links = ['All', 'BloodType', 'Establishment', 'Employed', 'Enrolled', 'Gender', 'Minor', 'PWD', 'Voter', 'Religion', 'Residence Type', 'Senior Citizen'];

  return (
    <nav className="grid gap-4 text-sm text-muted-foreground">
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="font-semibold text-primary"
          onClick={() => onSelect(link)}
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default NavLinksReport;
