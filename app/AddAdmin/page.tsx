import React from 'react';
import AccountForm from './AccountForm';
import NavBar from '../components/navbar';
import Footer from '../components/footer';


const AddAdminPAge: React.FC = () => {
  return (
    <main>
    <div className="TopBarAdmin">
    <NavBar/>
  </div>
    <div className='pt-20'>
      < AccountForm/>
    </div>
    <div className="Footer">
        <Footer />
      </div>
    </main>
  );
};

export default AddAdminPAge;