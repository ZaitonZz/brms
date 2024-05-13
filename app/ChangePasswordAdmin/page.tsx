import React from 'react';
import ChangePasswordForm from './ChangePasswordForm';
import TopBarStaff from '../StaffPage/topbarstaff';



const ChangePasswordPage: React.FC = () => {
  return (
    <main>
    <div className="TopBarStaff">
    <TopBarStaff/>
  </div>
    <div className='pt-20'>
      < ChangePasswordForm/>
    </div>
    </main>
  );
};

export default ChangePasswordPage;