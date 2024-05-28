import React from 'react';
import NavBar from '../components/navbar';
import BarangayForm from './barangayOfficialForm';
import Footer from '../components/footer';
import BarangayOfficialsPage from './displaybrgyoff/display';


const BarangayOfficial: React.FC = () => {
  return (
    <main>
    <div className="TopBarAdmin">
    <NavBar/>
  </div>
  <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-6 ml-80">Barangay Officials (Signatory)</h1>
      <BarangayForm />
    </div>
    <BarangayOfficialsPage/>
    <div className="Footer">
        <Footer />
      </div>
    </main>
  );
};

export default BarangayOfficial;