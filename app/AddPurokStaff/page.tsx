import React from 'react';
import PurokForm from './PurokForm';
import NavBar from '../components/navbar';
import Footer from '../components/footer';



const AddPurokPage: React.FC = () => {
  return (
    <main>
    <div className="TopBarStaff">
    <NavBar></NavBar>
  </div>
    <div>
      <PurokForm />
    </div>
    <div className="Footer">
        <Footer />
      </div>
    </main>
  );
};

export default AddPurokPage;