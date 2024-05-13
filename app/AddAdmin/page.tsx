import React from 'react';
import TopBarAdmin from '../adminpage/topbaradmin';
import AccountForm from './AccountForm';


const AddAdminPAge: React.FC = () => {
  return (
    <main>
    <div className="TopBarAdmin">
    <TopBarAdmin/>
  </div>
    <div className='pt-20'>
      < AccountForm/>
    </div>
    </main>
  );
};

export default AddAdminPAge;