import React from 'react';


function Navbar() {
  return (
    <div className='pl-20 flex items-center bg-[#558750] h-20'>
      <img src='/brms_logo.png' className='w-1/6 ml-12' alt='Logo' />

      <div className='left-[375px] top-[20px] absolute text-stone-100 text-2xl font-normal inter '>(Mintal)</div>

      <div className='right-[550px] absolute text-stone-100 text-sm font-normal inter '>viewing as Barangay(STAFF)</div>

      <ul className=' flex'>
        <li className='ml-98'>
          <a href='#home' className='text-white'>Home</a>
        </li>
        <li className='ml-6'>
          <a href='#about' className='text-white'>About</a>
        </li>
        <li className='ml-6'>
          <a href='#services' className='text-white'>Services</a>
        </li>
        <li className='ml-6'>
          <a href='#contact' className='text-white'>Contact</a>
        </li>
      </ul>

    </div>


  );
};


export default Navbar;
