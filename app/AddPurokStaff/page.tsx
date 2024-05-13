import React from 'react';
import PurokForm from './PurokForm';
import TopBarStaff from '../StaffPage/topbarstaff';



const AddPurokPage: React.FC = () => {
  return (
    <main>
    <div className="TopBarStaff">
    <TopBarStaff/>
  </div>
    <div>
      <PurokForm />
    </div>
    </main>
  );
};

export default AddPurokPage;