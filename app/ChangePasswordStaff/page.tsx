import React from 'react';
import TopBarAdmin from '../adminpage/topbaradmin';
import ChangePasswordForm from './ChangePasswordForm';



const ChangePasswordPage: React.FC = () => {
  return (
    <main>
    <div className="TopBarAdmin">
    <TopBarAdmin/>
  </div>
    <div className='pt-20'>
      < ChangePasswordForm/>
    </div>
    </main>
  );
};

export default ChangePasswordPage;