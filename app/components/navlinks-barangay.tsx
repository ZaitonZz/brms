// components/NavLinks.tsx
import React from "react";

interface NavLinksProps {
  onSelect: (selectedTab: string) => void;
}

const NavLinksBarangay: React.FC<NavLinksProps> = ({ onSelect }) => {
  const links = [
    "Barangay",
    "Socio Economic info",
    "Physical Info",
    "Fiscal Info",
    "Political Info",
  ];

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

export default NavLinksBarangay;
