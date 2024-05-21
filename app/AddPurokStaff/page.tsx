import React from 'react';
import PurokForm from './PurokForm';
import NavBar from '../components/navbar';



const AddPurokPage: React.FC = () => {
  return (
    <main>
    <div className="TopBarStaff">
    <NavBar></NavBar>
  </div>
    <div>
      <PurokForm />
    </div>
    </main>
  );
};

export default AddPurokPage;