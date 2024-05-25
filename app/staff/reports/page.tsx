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
        return <div>Blood Type Content</div>;
      case 'Establishment':
        return <div>Establishment Content</div>;
      case 'Employed':
        return <div>Employed Content</div>;
      case 'Enrolled':
        return <div>Enrolled Content</div>;
      case 'Gender':
        return <div>Gender Content</div>;
      case 'Minor':
        return <div>Minor Content</div>;
      case 'PWD':
        return <div>PWD Content</div>;
      case 'Voter':
        return <div>Voter Content</div>;
      case 'Religion':
        return <div>Religion Content</div>;
      case 'Residence Type':
        return <div>Residence Type Content</div>;
      case 'Senior Citizen':
        return <div>Senior Citizen Content</div>;
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
