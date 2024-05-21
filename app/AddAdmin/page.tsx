import React from 'react';
import AccountForm from './AccountForm';
import NavBar from '../components/navbar';


const AddAdminPAge: React.FC = () => {
  return (
    <main>
    <div className="TopBarAdmin">
    <NavBar/>
  </div>
    <div className='pt-20'>
      < AccountForm/>
    </div>
    </main>
  );
};

export default AddAdminPAge;