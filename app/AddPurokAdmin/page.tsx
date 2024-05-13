import React from 'react';
import PurokForm from './PurokForm';
import TopBarAdmin from '../adminpage/topbaradmin';


const AddPurokPage: React.FC = () => {
  return (
    <main>
    <div className="TopBarAdmin">
    <TopBarAdmin/>
  </div>
    <div>
      <PurokForm />
    </div>
    </main>
  );
};

export default AddPurokPage;