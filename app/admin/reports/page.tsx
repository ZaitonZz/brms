// pages/report.tsx
"use client"
import NavBar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import React, { useState } from 'react';
import NavLinksReport from '@/app/components/navlinks-reports';
import AllContent from './all';
import BloodTypeReport from './bloodtype';
import Establishment from './establishment';
import Employed from './employed';
import Enrolled from './enrolled';
import Gender from './gender';
import Minor from './minor';
import Pwd from './pwd';
import Voter from './voter';
import ResidenceType from './residencetype';
import Seniorcitizen from './seniorcitizen';
import Religion from './religion';

function Report() {
  const [selectedTab, setSelectedTab] = useState('All');
  const [bloodTypeData, setBloodTypeData] = useState([]);

  const renderContent = () => {
    switch (selectedTab) {
      case 'All':
        return <AllContent></AllContent>;
      case 'BloodType':
        return <BloodTypeReport/>;
      case 'Establishment':
        return <Establishment/>;
      case 'Employed':
        return <Employed/>;

      case 'Enrolled':
        return <Enrolled/>;

      case 'Gender':
        return <Gender/>;

      case 'Minor':
        return <Minor/>;

      case 'PWD':
        return <Pwd/>;

      case 'Voter':
        return <Voter/>;

      case 'Religion':
        return <Religion/>;
      case 'Residence Type':
        return <ResidenceType/>;
      case 'Senior Citizen':
        return <Seniorcitizen/>;
      default:
        return <div>All Content</div>;
    }
  };

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
        <div className="gap-1 mt-28 pb-10 mr-12">
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
