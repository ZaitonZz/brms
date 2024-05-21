import React from 'react';
import ChangePasswordForm from './ChangePasswordForm';
import NavBar from '../../components/navbar';



const ChangePasswordPage: React.FC = () => {
  return (
    <main>
    <div className="TopBarStaff">
    <NavBar/>
  </div>
    <div className='pt-20'>
      < ChangePasswordForm/>
    </div>
    </main>
  );
};

export default ChangePasswordPage;