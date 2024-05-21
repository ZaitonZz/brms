'use client'
import React, { useEffect, useState } from 'react';
import { fetchAccessLevel } from '../util/fetch-access-level';
import { isLocalStorageKeyEmptyOrExpired, getWithExpiry } from '../util/session';
import NavbarAdmin from './navbaradmin';
import NavbarStaff from './navbarstaff';

function NavBar() {
  const [accessLevel, setAccessLevel] = useState<number | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      if (!isLocalStorageKeyEmptyOrExpired('username')) {
        const username = getWithExpiry('username');
        const accessLevel = await fetchAccessLevel(username);
        setAccessLevel(accessLevel);
      } else {
        setAccessLevel(0); // Indicates no user
      }
    };

    checkUser();
  }, []);

  const renderComponent = () => {
    switch (accessLevel) {
      case 1:
        return <ComponentForAccessLevel1 />;
      case 2:
        return <NavbarStaff></NavbarStaff>;
      case 3:
        return <NavbarAdmin></NavbarAdmin>;
      case 4:
        return <ComponentForAccessLevel4 />;
      case 0:
      default:
        return <EmptyComponent />;
    }
  };

  return (
    <div className='flex justify-between items-center bg-[#558750] h-20 pl-20 pr-20'>
      <img src='/brms_logo.png' className='w-1/6' alt='Logo' />
      {renderComponent()}
    </div>
  );
}

const ComponentForAccessLevel1 = () => <div>Access Level 1 Component</div>;
const ComponentForAccessLevel2 = () => <div>Access Level 2 Component</div>;
const ComponentForAccessLevel3 = () => <div>Access Level 3 Component</div>;
const ComponentForAccessLevel4 = () => <div>Access Level 4 Component</div>;
const EmptyComponent = () => <div></div>;

export default NavBar;
