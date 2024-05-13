import React from 'react';
import NavbarAdmin from './NavbarAdmin'; // Make sure to import the Navbar component

function TopBarAdmin() {
  return (
    <div className='flex justify-between items-center bg-[#558750] h-20 pl-20 pr-20'>
        <img src='/brms_logo.png' className='w-1/6' alt="BRMS Logo"></img>
        <NavbarAdmin/> 
    </div>
  );
}

export default TopBarAdmin;