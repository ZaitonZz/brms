// pages/report.tsx
"use client"
import NavBar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import React, { useState } from 'react';
import NavLinksReport from '@/app/components/navlinks-reports';
import AllContent from './all';

function Report() {
  const [selectedTab, setSelectedTab] = useState('All');

  const renderContent = () => {
    switch (selectedTab) {
      case 'All':
        return <AllContent></AllContent>;
      case 'BloodType':
        return <div className=' mt-32 mr-32'>           
           <input placeholder="Enter Purok" type="text" id="search" name="search" className="w-[700px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762] mr-1" />

           <a href='#' className=' text-base font-bold mb-10 bg-[#68a762] text-center inline-block py-1 px-2 rounded'>Print</a>

        </div>;
      case 'Establishment':
        return <div className=' mt-32 mr-32'>           
        <input placeholder="Enter Purok" type="text" id="search" name="search" className="w-[700px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762] mr-1" />

        <a href='#' className=' text-base font-bold mb-10 bg-[#68a762] text-center inline-block py-1 px-2 rounded'>Print</a>

     </div>;
      case 'Employed':
        return <div className=' mt-32 mr-32'>           
        <input placeholder="Enter Purok" type="text" id="search" name="search" className="w-[700px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762] mr-1" />

        <a href='#' className=' text-base font-bold mb-10 bg-[#68a762] text-center inline-block py-1 px-2 rounded'>Print</a>

     </div>;

      case 'Enrolled':
        return <div className=' mt-32 mr-32'>           
        <input placeholder="Enter Purok" type="text" id="search" name="search" className="w-[700px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762] mr-1" />
        <a href='#' className=' text-base font-bold mb-10 bg-[#68a762] text-center inline-block py-1 px-2 rounded'>Print</a>
     </div>;

      case 'Gender':
        return <div className=' mt-32 mr-32'>           
        <input placeholder="Enter Purok" type="text" id="search" name="search" className="w-[700px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762] mr-1" />
        <a href='#' className=' text-base font-bold mb-10 bg-[#68a762] text-center inline-block py-1 px-2 rounded'>Print</a>
     </div>;

      case 'Minor':
        return <div className=' mt-32 mr-32'>           
        <input placeholder="Enter Purok" type="text" id="search" name="search" className="w-[700px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762] mr-1" />
        <a href='#' className=' text-base font-bold mb-10 bg-[#68a762] text-center inline-block py-1 px-2 rounded'>Print</a>
     </div>;

      case 'PWD':
        return <div className=' mt-32 mr-32'>           
        <input placeholder="Enter Purok" type="text" id="search" name="search" className="w-[700px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762] mr-1" />
        <a href='#' className=' text-base font-bold mb-10 bg-[#68a762] text-center inline-block py-1 px-2 rounded'>Print</a>
     </div>;

      case 'Voter':
        return <div className=' mt-32 mr-32'>           
        <input placeholder="Enter Purok" type="text" id="search" name="search" className="w-[700px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762] mr-1" />
        <a href='#' className=' text-base font-bold mb-10 bg-[#68a762] text-center inline-block py-1 px-2 rounded'>Print</a>
     </div>;

      case 'Religion':
        return <div className=' mt-32 mr-32'>           
        <input placeholder="Enter Purok" type="text" id="search" name="search" className="w-[700px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762] mr-1" />
        <a href='#' className=' text-base font-bold mb-10 bg-[#68a762] text-center inline-block py-1 px-2 rounded'>Print</a>
     </div>;
      case 'Residence Type':
        return <div className=' mt-32 mr-32'>           
        <input placeholder="Enter Purok" type="text" id="search" name="search" className="w-[700px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762] mr-1" />
        <a href='#' className=' text-base font-bold mb-10 bg-[#68a762] text-center inline-block py-1 px-2 rounded'>Print</a>
     </div>;
      case 'Senior Citizen':
        return <div className=' mt-32 mr-32'>           
        <input placeholder="Enter Purok" type="text" id="search" name="search" className="w-[700px] px-2 py-1 border-2 rounded-md mt-1 focus:outline-none focus:border-[#68a762] mr-1" />
        <a href='#' className=' text-base font-bold mb-10 bg-[#68a762] text-center inline-block py-1 px-2 rounded'>Print</a>
     </div>;
      default:
        return <div>All Content</div>;
    }
  };

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
        <div className="mx-auto gap-1 mt-28 ml-[380px] pb-10">
          <NavLinksReport onSelect={setSelectedTab} />
        </div>

        <div className='mr-16'>
          {renderContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Report;
